import React, { useState } from 'react';
import { BrandInfo } from '../types';
import { Mail, Send, CheckCircle2, MessageSquare, Share2 } from 'lucide-react';
import { BrandName } from './BrandName';

interface ContactSectionProps {
  brand: BrandInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ brand }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Por favor, informe um endereço de e-mail válido.';
    }
    if (!formData.subject.trim()) errs.subject = 'Por favor, informe o assunto da mensagem.';
    if (!formData.message.trim()) {
      errs.message = 'Por favor, escreva sua mensagem.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'A mensagem deve conter pelo menos 10 caracteres.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    // Simulate professional form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="relative py-24 bg-[#07090E] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
              <MessageSquare className="h-4 w-4" />
              <span>Canais Institucionais</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              FALE COM A <BrandName>DELXUS</BrandName>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Tem uma dúvida, encontrou um problema ou gostaria de falar conosco? Entre em contato
              com a <BrandName>DELXUS</BrandName>.
            </p>

            {/* Official Email Block */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0E131F] space-y-3">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    E-mail Oficial
                  </h3>
                  <p className="font-mono text-sm sm:text-base text-white font-medium select-all">
                    {brand.officialEmail}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-white/5">
                Canal para dúvidas gerais, comunicação institucional e mensagens direcionadas ao
                estúdio <BrandName className="text-xs">DELXUS</BrandName>.
              </p>
            </div>

            {/* Social channels (safe placeholders, no fake URLs) */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0D15] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Share2 className="h-4 w-4 text-emerald-400" />
                <span>Presença & Redes Sociais</span>
              </div>
              <p className="text-xs text-slate-400">
                Os links oficiais de nossas redes serão adicionados conforme os canais forem
                disponibilizados ao público.
              </p>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400">Instagram:</span>
                  <span className="text-cyan-400/90">{brand.socials.instagram}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400">YouTube:</span>
                  <span className="text-cyan-400/90">{brand.socials.youtube}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400">TikTok:</span>
                  <span className="text-cyan-400/90">{brand.socials.tiktok}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-slate-400">Outras Redes:</span>
                  <span className="text-cyan-400/90">[ADICIONE OUTRA REDE SOCIAL]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0E131F] p-8 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Agradecemos seu contato. Sua mensagem foi registrada para o time DELXUS e
                    responderemos pelo e-mail informado o mais breve possível.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      Envie sua Mensagem
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Preencha os campos abaixo para falar diretamente com a equipe da <BrandName className="text-xs">DELXUS</BrandName>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Nome Completo <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Seu nome"
                        className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        E-mail de Contato <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
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
                      {errors.email && (
                        <p className="text-xs text-rose-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Assunto <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Ex: Dúvida sobre jogo, proposta de parceria, feedback"
                      className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Mensagem <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Escreva sua mensagem com detalhes..."
                      className={`w-full rounded-lg border bg-[#080B12] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:from-cyan-400 hover:to-emerald-400 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Enviando Mensagem...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
