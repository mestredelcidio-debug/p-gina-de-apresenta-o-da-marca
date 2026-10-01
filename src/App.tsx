/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialBrandConfig } from './data/brandConfig';
import { gamesData } from './data/gamesData';
import { newsData } from './data/newsData';
import { faqData } from './data/faqData';
import { BrandInfo, Game } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedGame } from './components/FeaturedGame';
import { GamesCatalog } from './components/GamesCatalog';
import { GameDetailPage } from './components/GameDetailPage';
import { NewsSection } from './components/NewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { SupportPage } from './components/SupportPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { NotFoundPage } from './components/NotFoundPage';
import { Footer } from './components/Footer';
import { AmbientParticles } from './components/AmbientParticles';
import { BrandConfigDrawer } from './components/BrandConfigDrawer';

export default function App() {
  const [brand, setBrand] = useState<BrandInfo>(() => {
    const saved = localStorage.getItem('delxus_brand_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialBrandConfig;
      }
    }
    return initialBrandConfig;
  });

  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path || '/';
  });

  // Keep state synced with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateBrand = (updated: BrandInfo) => {
    setBrand(updated);
    localStorage.setItem('delxus_brand_config', JSON.stringify(updated));
  };

  const resetBrand = () => {
    setBrand(initialBrandConfig);
    localStorage.removeItem('delxus_brand_config');
  };

  // Find featured game: "Caça-Palavras: Universo das Palavras"
  const featuredGame =
    gamesData.find((g) => g.slug === 'caca-palavras-universo-das-palavras') ||
    gamesData[0];

  // Check if viewing a specific game's detail page
  const isGameDetailRoute = currentPath.startsWith('/jogos/');
  const gameSlug = isGameDetailRoute ? currentPath.replace('/jogos/', '') : null;
  const selectedGame = gameSlug ? gamesData.find((g) => g.slug === gameSlug) : null;

  // Determine what view to render
  const renderContent = () => {
    // 1. Game Detail View
    if (isGameDetailRoute) {
      if (selectedGame) {
        return (
          <GameDetailPage
            game={selectedGame}
            brand={brand}
            onBack={() => navigateTo('/jogos')}
            onNavigateSupport={() => navigateTo('/suporte')}
            onNavigatePrivacy={() => navigateTo('/politica-de-privacidade')}
          />
        );
      }
      return <NotFoundPage onGoHome={() => navigateTo('/')} />;
    }

    // 2. Standalone Pages
    if (currentPath === '/suporte') {
      return (
        <SupportPage
          brand={brand}
          games={gamesData}
          onBack={() => navigateTo('/')}
        />
      );
    }

    if (currentPath === '/politica-de-privacidade') {
      return (
        <PrivacyPolicyPage
          brand={brand}
          onBack={() => navigateTo('/')}
        />
      );
    }

    if (currentPath === '/termos-de-uso') {
      return (
        <TermsOfUsePage
          brand={brand}
          onBack={() => navigateTo('/')}
        />
      );
    }

    // 3. Section views or Full Home
    if (currentPath === '/sobre') {
      return (
        <div className="pt-20">
          <AboutSection brand={brand} />
        </div>
      );
    }

    if (currentPath === '/jogos') {
      return (
        <div className="pt-20">
          <GamesCatalog
            games={gamesData}
            brand={brand}
            onSelectGame={(slug) => navigateTo(`/jogos/${slug}`)}
          />
        </div>
      );
    }

    if (currentPath === '/novidades') {
      return (
        <div className="pt-20">
          <NewsSection news={newsData} />
        </div>
      );
    }

    if (currentPath === '/faq') {
      return (
        <div className="pt-20">
          <FaqSection
            faqList={faqData}
            onNavigateContact={() => navigateTo('/contato')}
          />
        </div>
      );
    }

    if (currentPath === '/contato') {
      return (
        <div className="pt-20">
          <ContactSection brand={brand} />
        </div>
      );
    }

    // 4. Default Home (cinematic institutional flow)
    if (currentPath === '/' || currentPath === '/inicio') {
      return (
        <main>
          <Hero
            brand={brand}
            onExploreGames={() => {
              const el = document.getElementById('jogos-destaque');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigateTo('/jogos');
              }
            }}
            onExploreAbout={() => {
              const el = document.getElementById('sobre');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigateTo('/sobre');
              }
            }}
          />

          <AboutSection brand={brand} />

          <div id="jogos-destaque">
            <FeaturedGame
              game={featuredGame}
              onOpenDetails={(slug) => navigateTo(`/jogos/${slug}`)}
            />
          </div>

          <GamesCatalog
            games={gamesData}
            brand={brand}
            onSelectGame={(slug) => navigateTo(`/jogos/${slug}`)}
          />

          <NewsSection news={newsData} />

          <FaqSection
            faqList={faqData}
            onNavigateContact={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          <ContactSection brand={brand} />
        </main>
      );
    }

    // 5. 404 Fallback
    return <NotFoundPage onGoHome={() => navigateTo('/')} />;
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Star Canvas Particles */}
      <AmbientParticles />

      {/* Main Header / Navigation */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Dynamic Route Content */}
      <div className="flex-1 relative z-10">{renderContent()}</div>

      {/* Footer */}
      <Footer brand={brand} onNavigate={navigateTo} />

      {/* Safe Brand Configuration Helper Drawer */}
      <BrandConfigDrawer
        brand={brand}
        onUpdateBrand={updateBrand}
        onResetBrand={resetBrand}
      />
    </div>
  );
}
