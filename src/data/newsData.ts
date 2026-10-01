import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Apresentação do jogo "Caça-Palavras: Universo das Palavras"',
    category: 'Lançamento',
    date: '[DATA DO LANÇAMENTO]',
    summary: 'Apresentamos oficialmente nosso jogo de caça-palavras para Android, projetado com desafios instigantes e estética espacial envolvente.',
    content: 'O jogo "Caça-Palavras: Universo das Palavras" foi concebido para entregar uma experiência relaxante e ao mesmo tempo estimulante. Acompanhe as novidades e atualizações diretamente aqui em nossa página oficial.',
    isUpcoming: false,
  },
  {
    id: 'news-2',
    title: 'Lançamento do site oficial da DECIX GAMERS',
    category: 'Estúdio',
    date: '[DATA RECENTE]',
    summary: 'Inauguração do portal institucional da DECIX GAMERS com catálogo de jogos, canais de suporte técnico e informações de transparência.',
    content: 'Com o novo portal oficial, jogadores e parceiros contam com um ponto central de contato, novidades e acesso direto às nossas produções digitais.',
    isUpcoming: false,
  },
  {
    id: 'news-3',
    title: 'Novos projetos e protótipos em experimentação',
    category: 'Atualização',
    date: '[EM BREVE]',
    summary: 'Nosso time está explorando novas ideias e formatos de jogabilidade casual para expandir o universo de títulos DECIX GAMERS.',
    content: 'Novos conceitos estão sendo avaliados com foco em acessibilidade e alta diversão. Em breve compartilharemos os primeiros vislumbres dos próximos lançamentos.',
    isUpcoming: true,
  },
];
