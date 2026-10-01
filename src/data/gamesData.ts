import { Game } from '../types';
import cacaPalavrasIcon from '../assets/images/caca_palavras_icon_1790822376258.jpg';
import cacaPalavrasKeyart from '../assets/images/caca_palavras_keyart_1790822366240.jpg';
import cacaPalavrasScreenshot from '../assets/images/caca_palavras_screenshot_1790822386482.jpg';

export const gamesData: Game[] = [
  {
    id: 'caca-palavras-universo-das-palavras',
    slug: 'caca-palavras-universo-das-palavras',
    title: 'Caça-Palavras: Universo das Palavras',
    subtitle: 'Descubra um universo de palavras, desafios e diversão.',
    genre: 'Caça-Palavras / Quebra-Cabeça / Casual',
    shortDescription: 'Um jogo de caça-palavras criado para quem gosta de desafios, palavras e diversão. Encontre palavras, supere desafios e explore diferentes experiências dentro do universo das palavras.',
    fullDescription: 'Caça-Palavras: Universo das Palavras é um jogo pensado para relaxar a mente e ao mesmo tempo exercitar o raciocínio. Com mecânicas fluidas, design agradável e progressão equilibrada, cada partida convida você a explorar constelações de letras e descobrir palavras escondidas com conforto visual e jogabilidade intuitiva em dispositivos móveis.',
    platform: 'Android',
    status: 'Disponível',
    iconUrl: cacaPalavrasIcon,
    keyArtUrl: cacaPalavrasKeyart,
    screenshots: [
      cacaPalavrasScreenshot,
      cacaPalavrasKeyart,
    ],
    features: [
      'Dezenas de temas e categorias ricas em vocabulário em português',
      'Interface limpa, moderna e com excelente contraste para leitura agradável',
      'Desafios graduais projetados para partidas rápidas ou sessões imersivas',
      'Otimizado para alto desempenho e baixo consumo de bateria no Android',
      'Suporte a controles por toque responsivos e precisos',
      'Funciona offline para você jogar a qualquer hora e em qualquer lugar',
    ],
    googlePlayUrl: '[ADICIONE AQUI O LINK DO GOOGLE PLAY]',
    privacyPolicyUrl: '/politica-de-privacidade',
  },
  {
    id: 'novo-jogo-decix-2',
    slug: 'novo-projeto-em-breve',
    title: '[NOVO JOGO DECIX GAMERS]',
    subtitle: 'Nova experiência digital em desenvolvimento',
    genre: '[GÊNERO A DEFINIR]',
    shortDescription: 'Um novo projeto do estúdio DECIX GAMERS em fase de concepção e testes. Fique atento às nossas novidades para o próximo anúncio oficial.',
    fullDescription: 'A DECIX GAMERS está constantemente prototipando novas mecânicas de gameplay e conceitos interativos. Este espaço está reservado para o próximo título a integrar nosso catálogo oficial.',
    platform: 'Android / [PLATAFORMA]',
    status: 'Em Desenvolvimento',
    iconUrl: '',
    keyArtUrl: '',
    screenshots: [],
    features: [
      'Conceito focado em jogabilidade acessível',
      'Desenvolvido para plataformas móveis',
      'Mecânicas dinâmicas e envolventes',
    ],
    googlePlayUrl: '[LINK EM BREVE]',
  },
  {
    id: 'novo-jogo-decix-3',
    slug: 'novo-projeto-futuro',
    title: '[NOVO JOGO DECIX GAMERS]',
    subtitle: 'Próxima jornada interativa',
    genre: '[GÊNERO A DEFINIR]',
    shortDescription: 'Projeto futuro em fase de planejamento conceitual. Em breve compartilharemos detalhes sobre tema, mecânicas e plataformas.',
    fullDescription: 'Mais uma experiência digital pensada para transformar alguns minutos do seu dia em momentos divertidos e memoráveis.',
    platform: '[PLATAFORMA]',
    status: 'Em Breve',
    iconUrl: '',
    keyArtUrl: '',
    screenshots: [],
    features: [
      'Prototipação em andamento',
      'Direção de arte em desenvolvimento',
    ],
    googlePlayUrl: '[LINK EM BREVE]',
  },
];
