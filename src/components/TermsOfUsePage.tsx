import React from 'react';
import { BrandInfo } from '../types';
import { FileText, ArrowLeft, ShieldCheck, Mail } from 'lucide-react';
import { BrandName } from './BrandName';

interface TermsOfUsePageProps {
  brand: BrandInfo;
  onBack: () => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ brand, onBack }) => {
  return (
    <div className="pt-24 pb-20 bg-[#07090E] min-h-screen text-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
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
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-lg shadow-red-950/40 shrink-0">
              <img
                src="/src/assets/images/delxus_logo_official_1790824285866.jpg"
                alt="Logotipo oficial DELXUS"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
                <FileText className="h-3.5 w-3.5" />
                <span>Condições de Uso</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Termos de Uso
              </h1>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>
              Última atualização: <strong className="text-white font-mono">{brand.lastUpdateDate}</strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Marca: <BrandName className="text-xs">{brand.name}</BrandName>
            </span>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* 1. Aceitação */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">01.</span>
              <span>Aceitação dos Termos</span>
            </h2>
            <p>
              Ao baixar, instalar, acessar ou utilizar quaisquer jogos, aplicativos ou serviços
              disponibilizados sob a marca <BrandName>DELXUS</BrandName>, você concorda expressamente em
              cumprir estes Termos de Uso. Caso não concorde com qualquer disposição aqui estabelecida,
              recomendamos que interrompa a utilização de nossos aplicativos e serviços.
            </p>
          </section>

          {/* 2. Uso dos Jogos */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">02.</span>
              <span>Uso dos Jogos e Licença de Uso</span>
            </h2>
            <p>
              A <BrandName>DELXUS</BrandName> concede a você uma licença pessoal, não exclusiva, intransferível, revogável e
              limitada para baixar e utilizar nossos jogos em dispositivos compatíveis, unicamente
              para fins pessoais, de entretenimento e sem propósitos comerciais.
            </p>
          </section>

          {/* 3. Propriedade Intelectual */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">03.</span>
              <span>Propriedade Intelectual</span>
            </h2>
            <p>
              Todos os direitos sobre a marca <BrandName>DELXUS</BrandName>, logotipos, arte visual,
              músicas, efeitos sonoros, código-fonte, mecânicas originais, design de fases, nomes de
              jogos (incluindo "Caça-Palavras: Universo das Palavras") e demais materiais correlatos são
              de propriedade exclusiva da <BrandName>DELXUS</BrandName> ou de seus licenciadores, protegidos pelas leis de
              direitos autorais e propriedade industrial.
            </p>
          </section>

          {/* 4. Comportamento do Usuário */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">04.</span>
              <span>Conduta e Comportamento do Usuário</span>
            </h2>
            <p>Ao utilizar os jogos da <BrandName>DELXUS</BrandName>, você se compromete a:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-300">
              <li>Não descompilar, aplicar engenharia reversa ou tentar extrair o código-fonte dos aplicativos.</li>
              <li>Não utilizar emuladores, cheats, automações não autorizadas ou mecanismos para fraudar o sistema.</li>
              <li>Não tentar burlar sistemas de anúncios ou mecanismos de compras integradas.</li>
              <li>Não praticar atos que possam comprometer a segurança, integridade ou estabilidade dos serviços.</li>
            </ul>
          </section>

          {/* 5. Compras e Pagamentos */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">05.</span>
              <span>Compras no Aplicativo (In-App Purchases)</span>
            </h2>
            <p>
              Determinados jogos podem oferecer itens virtuais opcionais, remoção de anúncios ou
              recursos extras adquiríveis por meio do sistema oficial de pagamentos da Google Play
              Store. Todas as transações financeiras são processadas com segurança pela própria Google
              Play, aplicando-se as diretrizes e políticas de reembolso da loja de aplicativos.
            </p>
          </section>

          {/* 6. Anúncios */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">06.</span>
              <span>Exibição de Anúncios</span>
            </h2>
            <p>
              Nossos jogos podem conter publicidade fornecida por redes de parceiros para manter as
              experiências gratuitas. A <BrandName>DELXUS</BrandName> busca assegurar que os anúncios exibidos sejam
              adequados, mas não se responsabiliza diretamente pelo conteúdo de páginas ou produtos de
              terceiros anunciados.
            </p>
          </section>

          {/* 7. Atualizações e Disponibilidade */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">07.</span>
              <span>Atualizações e Disponibilidade dos Serviços</span>
            </h2>
            <p>
              A <BrandName>DELXUS</BrandName> trabalha constantemente para aprimorar seus jogos. Podemos disponibilizar
              atualizações periódicas contendo melhorias de desempenho, correções de bugs ou novos
              conteúdos. Reservamo-nos o direito de alterar, suspender ou descontinuar qualquer recurso ou
              jogo, no todo ou em parte, a qualquer momento.
            </p>
          </section>

          {/* 8. Limitação de Responsabilidade */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">08.</span>
              <span>Limitação de Responsabilidade</span>
            </h2>
            <p>
              Os jogos são fornecidos "no estado em que se encontram" (as-is), sem garantias de que
              funcionarão de modo ininterrupto ou livre de falhas em todos os modelos de dispositivos. Na
              máxima extensão permitida pela legislação aplicável, a <BrandName>DELXUS</BrandName> não responderá por danos
              indiretos, perda de dados locais ou indisponibilidade temporária de serviços de terceiros.
            </p>
          </section>

          {/* 9. Alterações dos Termos */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">09.</span>
              <span>Alterações destes Termos</span>
            </h2>
            <p>
              Estes Termos podem ser revisados periodicamente. Notificaremos os usuários sobre
              modificações relevantes por meio da atualização da data nesta página ou mediante avisos
              dentro dos próprios jogos.
            </p>
          </section>

          {/* 10. Contato */}
          <section className="space-y-3 p-6 rounded-2xl border border-white/10 bg-[#0E131F]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">10.</span>
              <span>Contato e Informações</span>
            </h2>
            <p className="text-sm text-slate-300">
              Caso tenha dúvidas ou esclarecimentos a respeito destes Termos de Uso, entre em contato
              conosco pelo e-mail:
            </p>
            <div className="pt-2 flex items-center gap-3 text-cyan-400">
              <Mail className="h-5 w-5" />
              <span className="font-mono text-base font-bold text-white select-all">
                {brand.officialEmail}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
