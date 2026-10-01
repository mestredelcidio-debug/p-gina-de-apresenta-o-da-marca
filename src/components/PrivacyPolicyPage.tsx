import React from 'react';
import { BrandInfo } from '../types';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle, Mail } from 'lucide-react';
import { BrandName } from './BrandName';
import delxusEmblemSvg from '../assets/images/delxus_emblem_original.svg';

interface PrivacyPolicyPageProps {
  brand: BrandInfo;
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ brand, onBack }) => {
  return (
    <div className="pt-24 pb-20 bg-[#07090E] min-h-screen text-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl overflow-hidden border border-red-500/50 bg-black shadow-lg shadow-red-950/40 shrink-0">
              <img
                src={delxusEmblemSvg}
                alt="Logotipo oficial DELXUS"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
                <Shield className="h-3.5 w-3.5" />
                <span>Documento Oficial</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Política de Privacidade
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
            <span aria-hidden="true">·</span>
            <span>Conformidade Google Play Store & LGPD</span>
          </div>
        </div>

        {/* Informative Banner */}
        <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/10 mb-10 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
          <Lock className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
          <p>
            Esta política foi redigida para atender às diretrizes do Google Play e aos princípios de
            transparência digital. Campos entre colchetes como <code className="text-red-300 font-mono">[EXEMPLO]</code> indicam parâmetros específicos que o estúdio <BrandName className="text-xs">DELXUS</BrandName> pode ajustar de acordo com os SDKs e parceiros integrados aos seus jogos.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* 1. Introdução */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">01.</span>
              <span>Introdução</span>
            </h2>
            <p>
              A <BrandName>DELXUS</BrandName> tem o compromisso de proteger a privacidade e os dados
              pessoais de todos os usuários que interagem com nossos jogos digitais, aplicativos móveis
              e páginas institucionais. Esta Política de Privacidade descreve de maneira transparente
              como tratamos as informações no âmbito de nossas atividades.
            </p>
          </section>

          {/* 2. Quem somos */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">02.</span>
              <span>Quem Somos</span>
            </h2>
            <p>
              A <BrandName>DELXUS</BrandName> é uma marca independente de desenvolvimento de jogos
              digitais focada na criação de experiências de entretenimento móvel para a plataforma
              Android e outros meios digitais. Para quaisquer questões relativas a esta política,
              disponibilizamos o canal de contato dedicado em:{' '}
              <span className="font-mono text-red-400 font-semibold">{brand.privacyEmail}</span>.
            </p>
          </section>

          {/* 3. Informações que podem ser coletadas */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-red-400 font-mono text-base">03.</span>
              <span>Informações que Podem Ser Coletadas</span>
            </h2>
            <p>
              A <BrandName>DELXUS</BrandName> prioriza jogos que funcionem sem a necessidade de cadastros invasivos. As
              informações potencialmente processadas dividem-se em:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li>
                <strong>Informações Fornecidas Voluntariamente:</strong> Dados informados pelo usuário
                ao entrar em contato conosco para suporte técnico ou feedback (como nome, endereço de
                e-mail e descrição da mensagem).
              </li>
              <li>
                <strong>Dados Técnicos do Dispositivo:</strong> Identificadores anônimos de publicidade
                (como o Google Advertising ID), modelo do aparelho, versão do sistema operacional
                Android, idioma configurado e dados genéricos de conexão.
              </li>
              <li>
                <strong>Dados de Progresso e Gameplay:</strong> Fases concluídas, pontuações e
                preferências salvas localmente no dispositivo ou via serviços da plataforma (Google
                Play Games).
              </li>
              <li>
                <strong>Configurações Específicas do Jogo:</strong>{' '}
                <span className="font-mono text-xs text-cyan-400">[INSERIR OUTROS DADOS ESPECÍFICOS COLETADOS, SE HOUVER]</span>.
              </li>
            </ul>
          </section>

          {/* 4. Como as informações são utilizadas */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">04.</span>
              <span>Como as Informações são Utilizadas</span>
            </h2>
            <p>Os dados processados possuem as seguintes finalidades legítimas:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-300">
              <li>Garantir a execução correta, estabilidade e jogabilidade fluida dos aplicativos.</li>
              <li>Salvar o progresso das fases e conquistas do jogador.</li>
              <li>Prestar atendimento ao jogador e solucionar problemas técnicos ou falhas de software.</li>
              <li>Exibir anúncios publicitários contextuais ou não personalizados adequados à faixa etária.</li>
              <li>Compreender o desempenho geral dos jogos para guiar melhorias e novos recursos.</li>
            </ul>
          </section>

          {/* 5. Compartilhamento de informações */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">05.</span>
              <span>Compartilhamento de Informações</span>
            </h2>
            <p>
              A DELXUS não comercializa, vende ou aluga dados pessoais de usuários. As informações
              podem ser compartilhadas estritamente com provedores de infraestrutura essenciais (Google
              Play Services, redes de publicidade autorizadas e serviços de análise de dados), ou quando
              exigido por lei ou determinação judicial aplicável.
            </p>
          </section>

          {/* 6. Serviços de terceiros */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">06.</span>
              <span>Serviços de Terceiros</span>
            </h2>
            <p>
              Nossos jogos e aplicativo móvel utilizam serviços fornecidos por parceiros renomados, cujas
              políticas de privacidade regulam o tratamento por eles realizado:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-300">
              <li>
                <strong>Google Play Services:</strong> Infraestrutura, autenticação e distribuição de
                apps Android.
              </li>
              <li>
                <strong>Google AdMob / Redes de Anúncios:</strong> Veiculação de publicidade dentro dos
                jogos <span className="font-mono text-xs text-cyan-400">[INSERIR OUTRAS REDES SE APLICÁVEL]</span>.
              </li>
              <li>
                <strong>Google Analytics para Firebase:</strong> Métricas anônimas de uso e diagnóstico de
                falhas <span className="font-mono text-xs text-cyan-400">[CONFIGURAR SE UTILIZADO]</span>.
              </li>
            </ul>
          </section>

          {/* 7. Publicidade */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">07.</span>
              <span>Publicidade nos Jogos</span>
            </h2>
            <p>
              Para viabilizar que nossos jogos sejam disponibilizados gratuitamente na Google Play Store,
              podemos exibir anúncios de parceiros. Os usuários podem redefinir ou limitar o
              rastreamento de anúncios diretamente nas configurações do sistema Android (em
              Configurações &gt; Google &gt; Anúncios).
            </p>
          </section>

          {/* 8. Analytics */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">08.</span>
              <span>Analytics e Métricas de Uso</span>
            </h2>
            <p>
              Utilizamos dados agregados e anônimos para entender métricas como retenção de fases, tempo
              médio de sessão e taxa de travamentos. Esses dados não identificam diretamente o jogador e
              servem unicamente para aperfeiçoar o equilíbrio e qualidade das partidas.
            </p>
          </section>

          {/* 9. Segurança */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">09.</span>
              <span>Segurança da Informação</span>
            </h2>
            <p>
              Adotamos medidas técnicas, administrativas e de engenharia para proteger as informações
              contra acessos não autorizados, perdas, destruição ou alterações indevidas. Todas as
              comunicações entre aplicativos e serviços externos são criptografadas por meio de protocolos
              seguros (HTTPS / TLS).
            </p>
          </section>

          {/* 10. Retenção de dados */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">10.</span>
              <span>Retenção de Dados</span>
            </h2>
            <p>
              As informações técnicas são retidas pelo período estritamente necessário para atender às
              finalidades descritas nesta política ou conforme os prazos legais exigidos. Dados salvos
              localmente permanecem no aparelho até que o jogador desinstale o jogo ou limpe os dados do
              aplicativo.
            </p>
          </section>

          {/* 11. Exclusão de dados */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">11.</span>
              <span>Exclusão de Dados</span>
            </h2>
            <p>
              O usuário tem o direito de solicitar a exclusão de quaisquer dados eventualmente
              associados a si. Como a maioria dos nossos jogos opera com dados locais, a simples
              desinstalação do aplicativo apaga os dados armazenados em seu dispositivo. Caso tenha
              enviado mensagens ao suporte, é possível solicitar a remoção pelo e-mail de privacidade.
            </p>
          </section>

          {/* 12. Privacidade de crianças */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">12.</span>
              <span>Privacidade de Crianças</span>
            </h2>
            <p>
              A DELXUS preza pela segurança dos jovens jogadores e cumpre as normas da política familiar
              da Google Play Store e legislações aplicáveis. Nossos jogos casuais não solicitam
              proativamente dados de identificação de menores. Se tomarmos conhecimento de coleta
              involuntária de dados de menores sem consentimento cabível, adotaremos medidas imediatas
              para a sua exclusão.
            </p>
          </section>

          {/* 13. Direitos dos usuários */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">13.</span>
              <span>Direitos dos Usuários (LGPD e Legislações Aplicáveis)</span>
            </h2>
            <p>
              Os titulares de dados possuem direitos expressos sobre suas informações, incluindo:
              confirmação de tratamento, acesso, correção de dados incompletos ou inexatos, anonimização,
              bloqueio ou eliminação de dados desnecessários, e revogação de consentimentos concedidos.
            </p>
          </section>

          {/* 14. Alterações nesta política */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">14.</span>
              <span>Alterações nesta Política de Privacidade</span>
            </h2>
            <p>
              A DELXUS poderá atualizar esta Política periodicamente para refletir mudanças em nossos
              jogos, novos lançamentos ou exigências legais. A data da versão mais recente estará sempre
              destacada no início deste documento.
            </p>
          </section>

          {/* 15. Contato */}
          <section className="space-y-3 p-6 rounded-2xl border border-white/10 bg-[#0E131F]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-base">15.</span>
              <span>Canal de Contato de Privacidade</span>
            </h2>
            <p className="text-sm text-slate-300">
              Para esclarecer dúvidas, exercer seus direitos ou tratar de qualquer assunto relacionado à
              privacidade de dados na DELXUS, entre em contato através do nosso endereço eletrônico:
            </p>
            <div className="pt-2 flex items-center gap-3 text-cyan-400">
              <Mail className="h-5 w-5" />
              <span className="font-mono text-base font-bold text-white select-all">
                {brand.privacyEmail}
              </span>
            </div>
            <p className="text-xs text-slate-400 pt-1 font-mono">
              Responsável pelo tratamento de dados: Equipe de Privacidade DELXUS
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
