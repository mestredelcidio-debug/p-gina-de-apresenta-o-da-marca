import React, { useState } from 'react';
import { FAQItem } from '../types';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { BrandName } from './BrandName';

interface FaqSectionProps {
  faqList: FAQItem[];
  onNavigateContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  faqList,
  onNavigateContact,
}) => {
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderWithBrandHighlight = (text: string) => {
    if (!text.includes('DELXUS')) return text;
    const parts = text.split('DELXUS');
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <BrandName>DELXUS</BrandName>}
      </React.Fragment>
    ));
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0A0D15] border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400 mb-2">
            <HelpCircle className="h-4 w-4" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="mt-3 text-base text-slate-300 max-w-xl mx-auto">
            Respostas diretas sobre a <BrandName>DELXUS</BrandName>, nossos jogos, plataformas e canais de contato.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-red-500/40 bg-[#0E1422] shadow-lg shadow-black/40'
                    : 'border-white/10 bg-[#0A0D16] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white pr-4">
                    {renderWithBrandHighlight(item.question)}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-red-500/20 text-red-400 border-red-500/30' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    <p>{renderWithBrandHighlight(item.answer)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support hint */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-bold text-white">Não encontrou sua dúvida?</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Nossa equipe está pronta para responder suas perguntas sobre a <BrandName className="text-xs">DELXUS</BrandName> e nossos jogos.
            </p>
          </div>
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors shrink-0"
          >
            <MessageSquare className="h-3.5 w-3.5 text-red-400" />
            <span>Fale com a <BrandName className="ml-1 text-xs">DELXUS</BrandName></span>
          </button>
        </div>
      </div>
    </section>
  );
};
