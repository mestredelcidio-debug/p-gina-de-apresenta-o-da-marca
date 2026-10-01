/**
 * Decix Gamers Unified Analytics & Conversions Tracking
 * Integrates Google Analytics (gtag.js), Meta Pixel (fbq) and Meta Conversions API (CAPI).
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = '1445098570828605';
export const GA_MEASUREMENT_ID = 'G-N6YL1CTR96';

/**
 * Generate a unique event ID for deduplicating events between Meta Pixel and Meta Conversions API
 */
export function generateEventId(eventName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${eventName.toLowerCase()}_${timestamp}_${random}`;
}

/**
 * Helper to get cookie value by name
 */
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}

/**
 * Send server-side conversion event to Meta Conversions API (CAPI) via our backend proxy route
 */
async function sendToConversionsApi(payload: {
  eventName: string;
  eventId: string;
  eventSourceUrl?: string;
  userData?: {
    email?: string;
    name?: string;
    fbp?: string;
    fbc?: string;
  };
  customData?: Record<string, any>;
}) {
  try {
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    const body = {
      eventName: payload.eventName,
      eventId: payload.eventId,
      eventTime: Math.floor(Date.now() / 1000),
      eventSourceUrl: payload.eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : ''),
      userData: {
        ...payload.userData,
        fbp: payload.userData?.fbp || fbp,
        fbc: payload.userData?.fbc || fbc,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      },
      customData: payload.customData || {},
    };

    // Dispatch to local backend endpoint asynchronously
    fetch('/api/conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      // Graceful background silent catch
    });
  } catch {
    // Non-blocking
  }
}

/**
 * Track PageView across Google Analytics, Meta Pixel, and Meta Conversions API
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  const eventId = generateEventId('PageView');
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 1. Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      page_location: currentUrl,
    });
  }

  // 2. Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {}, { eventID: eventId });
  }

  // 3. Meta Conversions API
  sendToConversionsApi({
    eventName: 'PageView',
    eventId,
    eventSourceUrl: currentUrl,
    customData: {
      page_path: pagePath,
      page_title: pageTitle || (typeof document !== 'undefined' ? document.title : ''),
    },
  });
}

/**
 * Track ViewContent (e.g. Viewing a game or section)
 */
export function trackViewContent(contentName: string, contentCategory: string = 'Game', contentId?: string) {
  const eventId = generateEventId('ViewContent');

  // 1. Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      items: [{ item_name: contentName, item_category: contentCategory, item_id: contentId }],
    });
  }

  // 2. Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(
      'track',
      'ViewContent',
      {
        content_name: contentName,
        content_category: contentCategory,
        content_ids: contentId ? [contentId] : undefined,
      },
      { eventID: eventId }
    );
  }

  // 3. Meta Conversions API
  sendToConversionsApi({
    eventName: 'ViewContent',
    eventId,
    customData: {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentId ? [contentId] : undefined,
    },
  });
}

/**
 * Track Lead / Contact submission
 */
export function trackLead(formType: string, email?: string, name?: string, subject?: string) {
  const eventId = generateEventId('Lead');

  // 1. Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      form_type: formType,
      subject: subject,
    });
  }

  // 2. Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(
      'track',
      'Lead',
      {
        content_name: formType,
        content_category: 'Form Submission',
      },
      { eventID: eventId }
    );
  }

  // 3. Meta Conversions API (Sends hashed / prepared data on server)
  sendToConversionsApi({
    eventName: 'Lead',
    eventId,
    userData: {
      email,
      name,
    },
    customData: {
      form_type: formType,
      subject: subject,
    },
  });
}

/**
 * Track Outbound click (e.g. Google Play button click, Social Media)
 */
export function trackOutboundClick(target: string, destinationUrl?: string, type: 'google_play' | 'social' | 'external' = 'google_play') {
  const eventId = generateEventId('OutboundClick');
  const dest = destinationUrl || '';

  // 1. Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: target,
      destination_url: dest,
      outbound_type: type,
    });
  }

  // 2. Meta Pixel (Custom Event or Contact/FindLocation)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(
      'trackCustom',
      'OutboundNavigation',
      {
        target_name: target,
        destination_url: dest,
        type,
      },
      { eventID: eventId }
    );
  }

  // 3. Meta Conversions API
  sendToConversionsApi({
    eventName: type === 'google_play' ? 'InitiateCheckout' : 'Contact',
    eventId,
    customData: {
      target_name: target,
      destination_url: dest,
      type,
    },
  });
}
