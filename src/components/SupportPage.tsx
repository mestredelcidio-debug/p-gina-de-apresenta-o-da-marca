import React, { useState } from 'react';
import { BrandInfo, Game } from '../types';
import {
  LifeBuoy,
  AlertTriangle,
  Bug,
  CreditCard,
  Tv,
  HelpCircle,
  Lightbulb,
  Send,
  CheckCircle2,
  Paperclip,
  ArrowLeft,
} from 'lucide-react';
import { BrandName } from './BrandName';
import decixEmblemSvg from '../assets/images/decix_gamers_emblem.svg';
import { trackLead } from '../utils/analytics';

interface SupportPageProps {
  brand: BrandInfo;
  games: Game[];
  onBack: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({
  brand,
  games,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    game: games[0]?.title || 'Caça-Palavras: Universo das Palavras',
    issueType: 'Problema Técnico',
    deviceModel: '',
    description: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const issueCategories = [
    {
      title: 'Problemas Técnicos',
      icon: AlertTriangle,
      description: 'Falhas de abertura, travamentos ou lentidão no carregamento.',
    },
    {
      title: 'Erros e Bugs',
      icon: Bug,
      description: 'Comportamentos visuais anômalos ou erros nas fases/palavras.',
    },
    {
      title: 'Problemas com Anúncios',
      icon: Tv,
      description: 'Anúncios que não fecham, travam a tela ou não concedem recompensas.',
    },
    {
      title: 'Compras e Pagamentos',
      icon: CreditCard,
      description: 'Dificuldades com itens adquiridos ou restauração de compras na loja.',
    },
    {
      title: 'Dúvidas de Funcionamento',
      icon: HelpCircle,
      description: 'Esclarecimentos sobre regras, pontuações e mecânicas dos jogos.',
    },
    {
      title: 'Sugestões de Melhorias',
      icon: Lightbulb,
      description: 'Ideias de novos temas, modos de jogo e melhorias na experiência.',
    },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Informe seu nome completo.';
    if (!formData.email.trim()) {
      errs.email = 'Informe seu e-mail para receber retorno.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Informe um e-mail válido.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Descreva o problema ou sugestão com detalhes.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Por favor, detalhe um pouco mais o ocorrido (mínimo 15 caracteres).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    // Track Lead / Support ticket conversion across GA, Pixel & CAPI
    trackLead('Chamado de Suporte ao Jogador', formData.email, formData.name, `${formData.game} - ${formData.issueType}`);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, fileName: file.name });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#07090E] min-h-screen text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mx-auto mb-4 h-14 w-14 rounded-xl overflow-hidden border border-cyan-400/50 bg-black shadow-lg shadow-cyan-950/50 p-1">
            <img
              src={decixEmblemSvg}
              alt="Logotipo DECIX GAMERS Suporte"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            <LifeBuoy className="h-4 w-4" />
            <span>Central de Atendimento</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            SUPORTE AO JOGADOR <BrandName className="text-3xl sm:text-4xl md:text-5xl">DECIX GAMERS</BrandName>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Estamos empenhados em oferecer a melhor experiência possível em nossos jogos. Utilize
            este canal para relatar problemas técnicos, bugs, dificuldades com anúncios ou nos enviar
            suas sugestões para a equipe da <BrandName>DECIX GAMERS</BrandName>.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {issueCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-5 rounded-xl border border-white/10 bg-[#0E131F] hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Support Form Box */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#0E131F] p-8 sm:p-12 shadow-2xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-white">
                Chamado de Suporte Registrado!
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Recebemos suas informações sobre o jogo "{formData.game}". Nossa equipe técnica
                analisará a ocorrência e enviará um retorno para o e-mail informado.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  Abrir Novo Chamado
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Voltar ao Início
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="border-b border-white/5 pb-4">
                <h2 className="font-display text-xl font-bold text-white">
                  Formulário de Atendimento Técnico
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Preencha o formulário para que possamos investigar e solucionar a situação com
                  agilidade.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="sup-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Seu Nome <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="sup-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Nome completo"
                    className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="sup-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    E-mail para Retorno <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="sup-email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="seu.email@exemplo.com"
                    className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Jogo */}
                <div className="space-y-2">
                  <label htmlFor="sup-game" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Jogo Relacionado
                  </label>
                  <select
                    id="sup-game"
                    value={formData.game}
                    onChange={(e) => setFormData({ ...formData, game: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {games.map((g) => (
                      <option key={g.id} value={g.title} className="bg-[#080B12] text-white">
                        {g.title}
                      </option>
                    ))}
                    <option value="Outro assunto da DECIX GAMERS" className="bg-[#080B12] text-white">
                      Outro assunto do estúdio
                    </option>
                  </select>
                </div>

                {/* Tipo de problema */}
                <div className="space-y-2">
                  <label htmlFor="sup-type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Tipo de Ocorrência
                  </label>
                  <select
                    id="sup-type"
                    value={formData.issueType}
                    onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="Problema Técnico">Problema Técnico / Travamento</option>
                    <option value="Erro / Bug">Erro / Bug de Jogabilidade</option>
                    <option value="Problemas com Anúncios">Problemas com Anúncios</option>
                    <option value="Compras e Pagamentos">Compras e Pagamentos</option>
                    <option value="Dúvida Geral">Dúvida sobre o Jogo</option>
                    <option value="Sugestão de Melhoria">Sugestão de Melhoria</option>
                  </select>
                </div>
              </div>

              {/* Modelo do Aparelho (opcional) */}
              <div className="space-y-2">
                <label htmlFor="sup-device" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Modelo do Dispositivo / Versão do Android (Opcional)
                </label>
                <input
                  type="text"
                  id="sup-device"
                  value={formData.deviceModel}
                  onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                  placeholder="Ex: Samsung Galaxy A54, Android 14"
                  className="w-full rounded-lg border border-white/10 bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <label htmlFor="sup-desc" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Descrição Detalhada <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="sup-desc"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: '' });
                  }}
                  placeholder="Explique o que aconteceu, os passos para reproduzir o problema ou a sugestão que deseja enviar..."
                  className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
                    errors.description
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                  }`}
                />
                {errors.description && (
                  <p className="text-xs text-rose-400">{errors.description}</p>
                )}
              </div>

              {/* Anexo Opcional */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Anexo Opcional (Captura de tela do erro)
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-colors">
                    <Paperclip className="h-4 w-4 text-cyan-400" />
                    <span>{formData.fileName ? 'Alterar Arquivo' : 'Selecionar Arquivo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {formData.fileName ? (
                    <span className="text-xs text-cyan-300 font-mono truncate max-w-xs">
                      {formData.fileName}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">
                      PNG, JPG ou GIF até 10MB
                    </span>
                  )}
                </div>
              </div>

              {/* Direct email reminder */}
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-400 font-mono">
                Você também pode enviar um e-mail direto para: {brand.officialEmail}
              </div>

              {/* Botão Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:from-cyan-400 hover:to-emerald-400 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Registrando Chamado...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Enviar Chamado de Suporte</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
