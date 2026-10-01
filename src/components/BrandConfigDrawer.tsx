import React, { useState } from 'react';
import { BrandInfo } from '../types';
import { Settings2, X, RotateCcw, Check, Copy } from 'lucide-react';
import { BrandName } from './BrandName';

interface BrandConfigDrawerProps {
  brand: BrandInfo;
  onUpdateBrand: (updated: BrandInfo) => void;
  onResetBrand: () => void;
}

export const BrandConfigDrawer: React.FC<BrandConfigDrawerProps> = ({
  brand,
  onUpdateBrand,
  onResetBrand,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(brand, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-[#0E131F]/90 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-red-400 shadow-xl shadow-black/60 hover:bg-[#151C2C] hover:border-red-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
        title="Configurações e campos editáveis da marca DELXUS"
      >
        <div className="h-4 w-4 rounded overflow-hidden border border-red-500/50 bg-black shrink-0">
          <img
            src="/src/assets/images/delxus_logo_official_1790824285866.jpg"
            alt="DELXUS Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="hidden sm:inline">Personalizar Dados da Marca</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md h-full bg-[#0A0D15] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              {/* Header with Official Logo */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-md shadow-red-950/40 shrink-0">
                    <img
                      src="/src/assets/images/delxus_logo_official_1790824285866.jpg"
                      alt="Logotipo oficial DELXUS"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      Dados da Marca <BrandName className="text-base">DELXUS</BrandName>
                    </h3>
                    <span className="text-[11px] text-slate-400">Identidade Oficial</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                  aria-label="Fechar painel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Edite os campos abaixo para testar a exibição com os dados oficiais reais da <BrandName className="text-xs">DELXUS</BrandName> (e-mail, links do Google Play e redes sociais).
              </p>

              {/* Form fields */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    E-mail Oficial de Atendimento:
                  </label>
                  <input
                    type="text"
                    value={brand.officialEmail}
                    onChange={(e) =>
                      onUpdateBrand({ ...brand, officialEmail: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    E-mail de Privacidade (DPO / LGPD):
                  </label>
                  <input
                    type="text"
                    value={brand.privacyEmail}
                    onChange={(e) =>
                      onUpdateBrand({ ...brand, privacyEmail: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Link da Conta de Desenvolvedor no Google Play:
                  </label>
                  <input
                    type="text"
                    value={brand.googlePlayDeveloperUrl}
                    onChange={(e) =>
                      onUpdateBrand({ ...brand, googlePlayDeveloperUrl: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Instagram:
                  </label>
                  <input
                    type="text"
                    value={brand.socials.instagram}
                    onChange={(e) =>
                      onUpdateBrand({
                        ...brand,
                        socials: { ...brand.socials, instagram: e.target.value },
                      })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    YouTube:
                  </label>
                  <input
                    type="text"
                    value={brand.socials.youtube}
                    onChange={(e) =>
                      onUpdateBrand({
                        ...brand,
                        socials: { ...brand.socials, youtube: e.target.value },
                      })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Data da Política de Privacidade / Termos:
                  </label>
                  <input
                    type="text"
                    value={brand.lastUpdateDate}
                    onChange={(e) =>
                      onUpdateBrand({ ...brand, lastUpdateDate: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">
                    Ano de Copyright do Rodapé:
                  </label>
                  <input
                    type="text"
                    value={brand.copyrightYear}
                    onChange={(e) =>
                      onUpdateBrand({ ...brand, copyrightYear: e.target.value })
                    }
                    className="w-full rounded-md border border-white/10 bg-[#07090E] px-3 py-2 text-slate-200 font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={handleCopyJson}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 py-2.5 text-xs font-semibold transition-colors"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Configuração Copiada!' : 'Copiar Configuração JSON'}</span>
              </button>

              <button
                onClick={onResetBrand}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 py-2 text-xs transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Restaurar Padrões Originais</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
