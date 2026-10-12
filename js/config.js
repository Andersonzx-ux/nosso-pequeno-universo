/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — CONFIGURAÇÃO CENTRAL DE DADOS
 * ============================================================================
 * 
 * Olá! Este é o coração de personalização do seu presente digital.
 * Aqui você pode alterar nomes, datas, fotos, textos, cartas, receitas,
 * áudios e surpresas de forma simples e segura, sem precisar mexer no código visual.
 * 
 * DICA: As fotos podem ser caminhos locais (ex: 'assets/images/minha-foto.jpg')
 * ou links diretos de imagens na web (URL).
 * Se um áudio não tiver arquivo real ainda, o site toca automaticamente
 * uma melodia suave de caixinha de música criada em tempo real pelo navegador!
 */

const UNIVERSE_CONFIG = {
  // --------------------------------------------------------------------------
  // INFORMAÇÕES BÁSICAS DO CASAL E DO SITE
  // --------------------------------------------------------------------------
  meta: {
    siteTitle: "Nosso Pequeno Universo",
    coupleName: "Anderson & Larissa",
    girlfriendName: "Lari", // Nome ou apelido carinhoso dela
    boyfriendName: "Anderson",
    relationshipStartDate: "2026-06-12", // Formato AAAA-MM-DD para contagem de dias juntos
    welcomeQuote: "Eu poderia te dar muitas coisas, mas quis criar um lugar onde um pouquinho da nossa história pudesse morar.",
    welcomeSubtext: "Cada estrela, carta e memória aqui foi pensada com carinho. Explore sem pressa no seu ritmo.",
    footerDedication: "Feito com todo o meu amor, para a pessoa mais especial da minha vida."
  },

  // --------------------------------------------------------------------------
  // CATEGORIAS DO UNIVERSO
  // --------------------------------------------------------------------------
  categories: [
    {
      id: "memorias",
      title: "Nossas Memórias",
      subtitle: "Lembranças, lugares, momentos e capítulos da nossa história",
      icon: "bookmark",
      color: "#6B2D38"
    },
    {
      id: "sentimentos",
      title: "O Que Sinto Por Você",
      subtitle: "Declarações, cartas secretas, áudios e detalhes do coração",
      icon: "heart",
      color: "#B33951"
    },
    {
      id: "diversao",
      title: "Nosso Lado Divertido",
      subtitle: "Brincadeiras, receitas do amor, previsões astrais e desafios",
      icon: "sparkles",
      color: "#D49A9E"
    },
    {
      id: "futuro",
      title: "Nosso Futuro",
      subtitle: "Sonhos a dois, cápsula do tempo, missões e nosso contrato",
      icon: "compass",
      color: "#3F4E4F"
    },
    {
      id: "universo",
      title: "Nosso Universo & Cia",
      subtitle: "Constelação dos momentos, o jornal do casal e nosso mascote",
      icon: "star",
      color: "#2C3E50"
    }
  ],

  // --------------------------------------------------------------------------
  // AS 18 EXPERIÊNCIAS DO UNIVERSO
  // --------------------------------------------------------------------------
  experiences: [
    {
      id: "exp01",
      number: "01",
      title: "Mapa de Memórias",
      category: "memorias",
      shortDesc: "Os lugares onde nosso amor aconteceu e deixou marcas.",
      icon: "map-pin",
      accent: "#6B2D38"
    },
    {
      id: "exp02",
      number: "02",
      title: "Livro de Receitas Afetivas",
      category: "diversao",
      shortDesc: "Ingredientes simbólicos e modos de preparo dos nossos melhores momentos.",
      icon: "book-open",
      accent: "#8E5572"
    },
    {
      id: "exp04",
      number: "03",
      title: "Cartas de 'Abra Quando...'",
      category: "sentimentos",
      shortDesc: "Envelopes fechados com mensagens para cada momento do seu dia.",
      icon: "mail",
      accent: "#A24857"
    },
    {
      id: "exp05",
      number: "04",
      title: "Caça ao Tesouro Digital",
      category: "diversao",
      shortDesc: "Pistas interativas que testam nossa história até um presente final.",
      icon: "key",
      accent: "#C5A059"
    },
    {
      id: "exp06",
      number: "05",
      title: "Jukebox de Voz & Músicas",
      category: "sentimentos",
      shortDesc: "Um tocador vintage com mensagens gravadas e melodias especiais.",
      icon: "disc",
      accent: "#5C3D5E"
    },
    {
      id: "exp07",
      number: "06",
      title: "Mapa Astral Inventado",
      category: "diversao",
      shortDesc: "Nossa compatibilidade cósmica segundo os astros do bom humor.",
      icon: "moon",
      accent: "#324376"
    },
    {
      id: "exp08",
      number: "07",
      title: "Cápsula do Tempo",
      category: "futuro",
      shortDesc: "Mensagens lacradas que só poderão ser lidas nas datas escolhidas.",
      icon: "clock",
      accent: "#4A6B82"
    },
    {
      id: "exp09",
      number: "08",
      title: "Conquistas Desbloqueadas",
      category: "diversao",
      shortDesc: "Troféus e marcos da nossa história que fomos alcançando juntos.",
      icon: "award",
      accent: "#C59B27"
    },
    {
      id: "exp11",
      number: "09",
      title: "Roleta dos Encontros",
      category: "diversao",
      shortDesc: "Gire para sortear nosso próximo programa, do caseiro ao surpresa.",
      icon: "help-circle",
      accent: "#A73A4F"
    },
    {
      id: "exp12",
      number: "10",
      title: "Arquivo de Coisas que Amo",
      category: "sentimentos",
      shortDesc: "Um fichário sincero com detalhes, manias e razões pelas quais te amo.",
      icon: "folder-heart",
      accent: "#843B47"
    },
    {
      id: "exp13",
      number: "11",
      title: "Constelação dos Momentos",
      category: "universo",
      shortDesc: "Um céu noturno interativo onde cada estrela guarda uma lembrança.",
      icon: "star",
      accent: "#1B2038"
    },
    {
      id: "exp14",
      number: "12",
      title: "Jornal Oficial do Casal",
      category: "universo",
      shortDesc: "As notícias mais doces, previsão do tempo afetiva e classificados.",
      icon: "newspaper",
      accent: "#4F4A45"
    },
    {
      id: "exp15",
      number: "13",
      title: "Missões Para Nosso Futuro",
      category: "futuro",
      shortDesc: "Planos, viagens e metas a dois prontas para serem marcadas como feitas.",
      icon: "check-circle",
      accent: "#3A6351"
    },
    {
      id: "exp16",
      number: "14",
      title: "O Canto Que Só Existe Para Você",
      category: "sentimentos",
      shortDesc: "Uma carta íntima e segredos escondidos que só você vai entender.",
      icon: "lock",
      accent: "#782846"
    },
    {
      id: "exp17",
      number: "15",
      title: "Contrato de Aventuras a Dois",
      category: "futuro",
      shortDesc: "Cláusulas oficiais de carinho e risadas com assinatura digital interativa.",
      icon: "file-text",
      accent: "#8A5A36"
    },
    {
      id: "exp18",
      number: "16",
      title: "Nosso Mascote Virtual",
      category: "universo",
      shortDesc: "O companheiro do casal que reage a carinho, comidinha e mimos.",
      icon: "smile",
      accent: "#E29578"
    }
  ],

  // --------------------------------------------------------------------------
  // DADOS ESPECÍFICOS DE CADA UMA DAS EXPERIÊNCIAS
  // --------------------------------------------------------------------------

  // EXPERIÊNCIA 01: MAPA DE MEMÓRIAS
  mapMemories: [
    {
      id: "mem-1",
      title: "Nosso primeiro encontro",
      location: "Shopping",
      date: "06/05/2026",
      tag: "O Começo",
      coords: { x: 22, y: 35 }, // Coordenadas percentuais no mapa ilustrado
      description: "Primeira vez que saimos juntos, rimos, nos divertimos e ali demos mais um passo juntos a nossa conexão, para estarmos juntos e confortaveis um com o outro, pude segurar sua mão, ver seu sorriso, seu lindo e perfeito olhar, conhecer você melhor e ja querendo te chamar de amor (eu estava ansioso e nervoso vida, mas que bom que tudo deu certo meu amor)",
      photos: [],
      highlight: true
    },
    {
      id: "mem-2",
      title: "Experiencia Pixar",
      location: "Barra da Tijuca",
      date: "08/08/2026",
      tag: "Passeio",
      coords: { x: 45, y: 55 },
      description: "Demos muitas risadas nesse diaa, guardamos e tiramos muitas fotos desse dia meu amorrrksksks.Foi magico te olhar nos olhos vida e reunir varias lembranças do nosso dia minha gatinha. Ainda guardo na esse dia perfeito amorr. Vamos ter mais experiencias assim em vidaaa, em breve meu amor",
      photos: [],
      highlight: false
    },
    {
      id: "mem-3",
      title: "Jogo do Flamengoo",
      location: "Maracanã",
      date: "13/09/2026",
      tag: "Passeio",
      coords: { x: 68, y: 30 },
      description: "Foi incrivel estar ao seu lado nesse momento amor, te beijar a cada gol foi magico e você me trouxe paz e alegria nesse dia meu amor e me proporcionou muitas emoções amor",
      photos: [],
      highlight: false
    },
    {
      id: "mem-4",
      title: "Nossa Aventura de Hoje vidaaa",
      location: "Em breve mais informações",
      date: "12/10/2026",
      tag: "Passeio",
      coords: { x: 80, y: 70 },
      description: "Reservado para nossa aventura de hojeee, onde vamos estar juntos, dividir lindos e perfeitos momentos. Eu te amooo vidaa!",
      photos: [],
      highlight: true
    }
  ],

  // EXPERIÊNCIA 02: LIVRO DE RECEITAS AFETIVAS
  recipeBook: {
    dedication: "Dedicado a você, que transformou a rotina na minha receita favorita de viver.",
    recipes: [
      {
        id: "rec-1",
        title: "Receita Para Um Dia Perfeito",
        category: "Doces Lembranças",
        time: "Sem pressa (o dia todo)",
        yield: "Para nós dois",
        ingredients: [
          "2 colheres bem cheias de risos perfeitos e sorrisos magnificos",
          "1 xícara grande de abraços ou de carinho e cuidado",
          "1 pitada de emoção que vem durante o presente amor",
          "Muitos e muitos beijos para finalizar os ingredientes da receita, esses são infinitos e podemos adicionar o quanto quisermoss",
          "Podemos adicionar muito mais e o que quisermos nessa receita amor, somos perfeitos um pro outrooo amorr",
          "Tempo livre o suficiente para esquecer o relógio"
        ],
        steps: [
          "Começar com beijos, abraços e um sorriso perfeito, que é totalmente seu vida eu amo seu sorriso vida.",
          "Se aconchegar nos braços um do outro e ficarmos juntinhos um dia inteirooo.",
          "Escolha um filme ou série sabendo muito bem que vamos passar metade do tempo conversando e comentando as cenas.",
          "Misture os ingredientes em fogo brando de carinho. Sirva com cafuné à vontade."
        ],
        photo: "assets/images/placeholder-recipe-1.svg",
        chefNote: "Rende suspiros e a certeza de que a paz tem o seu abraço."
      },
      {
        id: "rec-2",
        title: "Poção Para Espantar Qualquer Dia Difícil",
        category: "Conforto da Alma",
        time: "15 minutos de cafuné",
        yield: "Alívio imediato",
        ingredients: [
          "1 abraço longo e apertado que dure mais de 30 segundos",
          "Ouvidos 100% atentos para desabafos sem julgamentos",
          "Lanche favorito e muito chocolate de surpresa pra te fazer felizz",
          "Realizar qualquer desejo que você quiser amor, é só me pedir",
          "Mimar o amor da minha vida",
          "Doses infititas e generosas de 'vai ficar tudo bem, eu estou aqui pra você meu amor, eu te amoooo'"
        ],
        steps: [
          "Assim que chegar, retire as preocupações do dia e coloque-as do lado de fora da porta.",
          "Envolva-a nos braços com firmeza, daquele jeito que faz o coração descansar.",
          "Escute cada detalhe do dia, segurando a mão dela.",
          "Finalize com um beijo na testa e a comida que ela mais ama."
        ],
        photo: "assets/images/placeholder-recipe-2.svg",
        chefNote: "Remédio infalível testado e aprovado pela nossa história."
      },

    ]
  },

  // EXPERIÊNCIA 04: CARTAS DE "ABRA QUANDO..."
  letters: [
    {
      id: "letter-1",
      occasion: "Abra quando estiver com saudade",
      shortSummary: "Para quando a distância ou a rotina pesarem.",
      icon: "heart",
      sealColor: "#B33951",
      body: `Meu amor,

Se você está lendo isso agora, fecha os olhos por um segundo e lembra da sensação do meu abraço. Aquele abraço longo em que seu rosto encaixa certinho no meu ombro.

Se eu estiver demorando a responder amor, saiba que eu te amo muito e sempre estou com saudades de você meu amor, não suporto ficar longe de você e sempre estarei ansioso pra te ver amor Não importa onde e quando: você mora em todos os meus pensamentos bons e você está em todos os meus planos vida.

Logo logo estarei junto de você de novo meu amor. Enquanto isso, guarda essa certeza: eu te amo daqui até o infinito.`,
      photo: "assets/images/placeholder-letter-1.svg",
      audioNote: "Mensagem carinhosa de 30 segundos disponível"
    },
    {
      id: "letter-2",
      occasion: "Abra quando tiver tido um dia difícil",
      shortSummary: "Para quando o mundo lá fora parecer pesado demais.",
      icon: "cloud-rain",
      sealColor: "#4A6B82",
      body: `Respira fundo, amor. Solta os ombros.

Dias ruins acontecem com todo mundo, mas nada do que aconteceu hoje diminui a mulher incrível, forte, doce e admirável que você é.

Você não precisa dar conta de tudo o tempo todo. Hoje você só precisa descansar. Eu tô aqui para segurar a sua mão, te ouvir se você quiser falar, ou só ficar em silêncio abraçado com você se preferir te dando muito carinho, beijos e tudo mais que você precisar meu amor.

Amanhã o sol nasce de novo, e eu vou estar do seu lado torcendo por você como sempre.`,
      photo: "assets/images/placeholder-letter-2.svg",
      audioNote: "Cafuné sonoro"
    },
    {
      id: "letter-3",
      occasion: "Abra quando precisar rir",
      shortSummary: "Para arrancar aquele sorriso lindo que ilumina tudo.",
      icon: "smile",
      sealColor: "#D49A9E",
      body: `Oi, gatinha!

Se você precisa de um motivo para rir, deixa eu te lembrar:
1. Como meu cabelo fica depois de um zezin mamãe;
2. Das bobeiras que eu digo volta e meia e você ri delas meu amorkkkkk;
3. De mim cantanto musicas duvidosas que o yt me recomenda ou alguns memes que eu te mandoo;
4. De mim te perguntando se eu tinha cara de palhaço e pedindo pra você apertar meu nariz;
5. Do fato de que você tem um namorado que é completamente bobo e apaixonado por você.

Sorriu agora? Missão cumprida. Te amo!`,
      photo: "assets/images/placeholder-letter-3.svg",
      audioNote: null
    },
    {
      id: "letter-4",
      occasion: "Abra quando quiser lembrar o quanto é amada",
      shortSummary: "Uma declaração sem filtros e sem medidas.",
      icon: "sun",
      sealColor: "#C5A059",
      body: `Eu te amo não só pelas coisas grandes, mas pelos detalhes invisíveis.

Amo o jeito como você ajeita o cabelo, quando tira foto puxando elekkkkkk, o tom da sua voz quando acorda quando diz que dormiu (tenho um audio favoritado por sinallkkkk), a sua inteligência quando explica algo que gosta, a sua risada quando acha algo engraçado de verdade. Seu olhar perfeito e seu sorriso magnifico meu amor, Eu te amo vida.

Você fez a minha vida ser muito mais bonita, com mais sentido, com mais calma e com mais brilho. Ter você é o maior presente que a vida já me deu. Nunca esquece disso.`,
      photo: "assets/images/placeholder-letter-4.svg",
      audioNote: null
    }
  ],

  // EXPERIÊNCIA 05: CAÇA AO TESOURO DIGITAL
  treasureHunt: {
    intro: "Bem-vinda à nossa expedição secreta! Cada etapa guarda uma pista sobre a nossa história. Acerte as respostas para desbloquear a surpresa final.",
    clues: [
      {
        step: 1,
        title: "Pista 01 — O Primeiro Sabor",
        riddle: "Naquele primeiro dia que onde tudo começou, qual foi a primeira coiss pedimos juntos?",
        hint: "Pense no sorvete e como preparamos naquele dia...",
        acceptedAnswers: ["Açai", "Acai", "açai", "acai", "Açaí", "Acaí"],
        successMessage: "Exatamente! Acertou meu amor."
      },
      {
        step: 2,
        title: "Pista 02 — Nossa Palavra Secreta",
        riddle: "Qual é aquele apelido carinhoso ou mania boba que só eu chamo você quando estamos só nós dois?",
        hint: "Começa com carinho e termina com meu coração...",
        acceptedAnswers: ["amor", "meu amor", "vida", "gatinha", "princesa", "neném", "nenem", "bebê"],
        successMessage: "Acertou! Só você tem esse efeito em mim."
      },
      {
        step: 3,
        title: "Pista 03 — A Música Invisível",
        riddle: "Se nossa história tivesse uma trilha sonora oficial tocando sempre que nos abraçamos, o que você acha que ela transmite?",
        hint: "Tem a ver com a sensação de estar em...",
        acceptedAnswers: ["paz", "amor", "aconchego", "felicidade", "segurança", "casa", "hormonia", "sintonia",],
        successMessage: "Perfeito! Você é exatamente o meu lar."
      }
    ],
    finale: {
      title: "Parabéns, Minha Exploradora! 🏆",
      message: "Você desvendou todos os enigmas da nossa história! Como recompensa, você tem direito a um vale-beijos e vale-tudo especial e a um abraço infinito do seu namorado assim que nos vermos.",
      secretGiftNote: "Dica do mundo real: Hoje você pode me pedir qualquer coisa que eu farei meu amor, eu te amo meu amor!"
    }
  },

  // EXPERIÊNCIA 06: JUKEBOX DE VOZ
  jukebox: {
    intro: "Gravei algumas mensagens para que você possa ouvir a minha voz sempre que quiser sentir que estou pertinho.",
    tracks: [
      {
        id: "track-1",
        title: "Só Queria Te Lembrar De Uma Coisa",
        description: "Um lembrete rápido sobre como você é incrível e especial.",
        duration: "1:31",
        category: "Carinho do Dia",
        audioSrc: "assets/audio/mensagem-1.mp3"
      },
      {
        id: "track-2",
        title: "Quando a Saudade Apertar",
        description: "Para ouvir no fone antes de dormir ou no caminho do trabalho.",
        duration: "1:05",
        category: "Aconchego",
        audioSrc: "assets/audio/mensagem-2.mp3"
      },
      {
        id: "track-3",
        title: "Uma Coisa Que Eu Amo Muito Em Você",
        description: "Um detalhe do seu jeito que me conquistou para sempre.",
        duration: "0:54",
        category: "Declaração",
        audioSrc: "assets/audio/mensagem-3.mp3"
      },
      {
        id: "track-4",
        title: "Nossa Melodia dos Sonhos",
        description: "Música de caixinha mágica suave tocada em tempo real.",
        duration: "1:30",
        category: "Instrumental Suave",
        audioSrc: "synth:celestial" // Sinal para tocar melodia suave pelo Web Audio
      }
    ]
  },

  // EXPERIÊNCIA 07: MAPA ASTRAL INVENTADO
  astralChart: {
    title: "Oráculo Cósmico do Nosso Amor",
    subtitle: "Uma leitura cósmica 100% não científica, 200% verdadeira e comprovada pela física dos nossos abraços.",
    partners: {
      her: {
        name: "Ela",
        sign: "Sol em Dengo",
        ascendant: "Ascendente em Teimosia Adorável",
        moon: "Lua em 'Preciso de Comida Senão Fico Brava'"
      },
      him: {
        name: "Ele",
        sign: "Sol em Apaixonado",
        ascendant: "Ascendente em Distração Crônica",
        moon: "Lua em 'Faço Tudo Que Ela Pede'"
      }
    },
    compatibilityMeters: [
      { label: "Chance de roubar a batata frita do outro", value: 99.8, note: "Probabilidade máxima incontestável" },
      { label: "Química cósmica dos beijos", value: 100, note: "Alinhamento planetário perfeito" },
      { label: "Velocidade para decidir filme na TV", value: 34.2, note: "Mercúrio em retrogradação contínua" },
      { label: "Nosso momento imperativo um com o outro", value: 98.4, note: "Marte em retrogradação contínua" },
      { label: "Um beijo quente e muito apaixonado", value: 100, note: "Terra em movimento de translação" },
      { label: "Paz quando estamos abraçados", value: 100, note: "Gravidade zero e descanso total" }
    ],
    absurdPredictions: [
      "🪐 Saturno prevê que hoje à noite você receberá um carinho demorado nas costas.",
      "✨ A constelação do amor indica alinhamento favorável para pedir um doce sem culpa.",
      "🌙 A Lua sussurra que eu estou com saudades neste exato milissegundo."
    ],
    conclusion: "Conclusão astrológica: Não importa o que os astrônomos digam, o universo conspirou perfeitamente para nos colocar no mesmo caminho."
  },

  // EXPERIÊNCIA 08: CÁPSULA DO TEMPO
  timeCapsules: [
    {
      id: "cap-1",
      title: "Carta Para o Nosso Próximo Aniversário",
      createdDate: "2026-10-12",
      unlockDate: "2027-06-12", // Data futura demonstrativa
      sealedMessage: "Esta cápsula contém uma previsão de nós dois, nossos sonhos e uma promessa solene para a data comemorativa.",
      fullMessage: "Se você está lendo isso, a data chegou! Olha só o quanto a gente já construiu juntos desde o dia em que escrevi essa cápsula. Te amo mais hoje do que ontem!",
      photo: "assets/images/placeholder-capsule-1.svg"
    },
    {
      id: "cap-2",
      title: "Para Abrir Quando Chegarmos a 1 ano vida",
      createdDate: "2026-10-12",
      unlockDate: "2027-06-12",
      sealedMessage: "Uma celebração guardada para o dia em que comemorarmos.",
      fullMessage: "A gente conseguiu! Eu nunca duvidei da nossa força juntos. Um brinde a nós dois!",
      photo: "assets/images/placeholder-capsule-2.svg"
    }
  ],

  // EXPERIÊNCIA 09: CONQUISTAS DESBLOQUEADAS
  achievements: [
    {
      id: "ach-1",
      title: "O Primeiro Olhar",
      desc: "O instante em que o universo conspirou para nos encontrar.",
      date: "Desbloqueado no primeiro dia",
      icon: "eye",
      unlocked: true
    },
    {
      id: "ach-2",
      title: "Jogatina Sem sono",
      desc: "Jogar juntos até altas horas da noite sem perceber as horas passarem.",
      date: "Conquistado com sucesso",
      icon: "moon",
      unlocked: true
    },
    {
      id: "ach-3",
      title: "Telepatia de Casal",
      desc: "Dizer a mesmíssima coisa ao mesmo tempo ou rir só com um olhar.",
      date: "Habilidade adquirida",
      icon: "zap",
      unlocked: true
    },
    {
      id: "ach-4",
      title: "Chefes da Improvisação",
      desc: "Transformar uma receita maluca ou um lanche simples no melhor jantar.",
      date: "Conquistado",
      icon: "utensils",
      unlocked: true
    },
    {
      id: "ach-5",
      title: "Superação de Conflitos",
      desc: "Fazer as pazes rapidinho com abraço, beijo, chamego e muito amor vida",
      date: "Mestrado em harmonia",
      icon: "shield",
      unlocked: true
    },
    {
      id: "ach-6",
      title: "Exploradora do Universo",
      desc: "Visitar todas as experiências deste presente especial.",
      date: "Em progresso...",
      icon: "compass",
      unlocked: false,
      isSecret: true
    }
  ],

  // EXPERIÊNCIA 11: ROLETA DOS ENCONTROS
  dateRoulette: {
    intro: "Sem ideias para o próximo final de semana? Gire a roleta e deixe o destino (e o meu planejamento!) decidir.",
    dates: [
      {
        id: "date-1",
        category: "Em Casa",
        title: "Noite da Massa & Cinema no Tapete",
        bringList: ["Pijama confortável", "Vinho ou refrigerante gelado", "Vontade de comer muito"],
        description: "Eu cozinho uma massa deliciosa, montamos uma cabana de almofadas no chão da sala e assistimos ao filme que você escolher.",
        boyfriendPromise: "Eu lavo a louça depois, promessa de dedinho."
      },
      {
        id: "date-2",
        category: "Passeio Romântico",
        title: "Piquenique no Pôr do Sol",
        bringList: ["Toalha xadrez", "Cesta de frutas e pães", "Playlist boa no celular"],
        description: "Vamos a um parque bem arborizado ou mirante no fim de tarde só para ver a cor do céu mudar e conversar sem pressa.",
        boyfriendPromise: "Garantia de fotos lindas suas."
      },
      {
        id: "date-3",
        category: "Aventura Urbana",
        title: "Descobrir Um Restaurante Novo",
        bringList: ["Curiosidade", "Fome", "Roupa de sair favorita"],
        description: "Vamos em um lugar da cidade que nenhum dos dois conhece ainda, experimentar algo diferente e avaliar como se fôssemos críticos de comida chiques.",
        boyfriendPromise: "A sobremesa é por minha conta."
      },
      {
        id: "date-4",
        category: "Relax Total",
        title: "Spa Particular em Casa",
        bringList: ["Máscara facial", "Música ambiente tranquila", "Vela aromática"],
        description: "Massagem caprichada nas costas e nos pés, skincare juntos e descanso merecido para recarregar as energias.",
        boyfriendPromise: "Cafuné até você pegar no sono."
      },
      {
        id: "date-5",
        category: "Surpresa Secreta",
        title: "Encontro Misterioso VIP",
        bringList: ["Olhos vendados no caminho", "Espírito aventureiro"],
        description: "Um programa totalmente planejado por mim em segredo. Você só descobre quando chegarmos lá!",
        boyfriendPromise: "Foi pensado nos mínimos detalhes para te fazer sorrir."
      }
    ]
  },

  // EXPERIÊNCIA 12: ARQUIVO DE COISAS QUE AMO EM VOCÊ
  loveArchive: [
    {
      id: "love-1",
      category: "Manias Adoráveis",
      title: "O prometa",
      detail: "Todas as vezes que eu dizia algo, você ria, me olhava serio depois e dizia prometa. Eu adoro isso amor, e eu prometo tudo e vou cumprir amor",
      date: "Notado desde sempre"
    },
    {
      id: "love-2",
      category: "Quando Me Sinto Amado",
      title: "Quando você me manda mensagens dizendo que me ama",
      detail: "Quando eu estou ocupado ou demoro a responder vida, você pergunta como eu estou, o que estou fazendo, como as coisas estão e você diz eu te amo",
      date: "Todos os dias"
    },
    {
      id: "love-3",
      category: "Manias Adoráveis",
      title: "O jeito que você arruma o cabelo quando tá mandando foto pra mim",
      detail: "Quando você me manda foto você puxa a mecha do cabelo pra baixo e sorri na foto vida, uma fofura amor",
      date: "Todo dia"
    },
    {
      id: "love-4",
      category: "Quando Me Sinto Amado",
      title: "A sua preocupação se eu estou bem",
      detail: "Essa doçura em cuidar de mim e querer saber se meu dia foi bom me dá uma paz que eu nunca tinha sentido antes.",
      date: "Amor puro"
    }
  ],

  // EXPERIÊNCIA 13: CONSTELAÇÃO DOS NOSSOS MOMENTOS
  constellation: {
    constellationName: "Ursa do Nosso Amor",
    stars: [
      { id: "star-1", x: 18, y: 32, size: 8, name: "Primeiro Olhar", desc: "A centelha inicial de tudo que somos hoje.", date: "O início", photo: "assets/images/placeholder-star-1.svg" },
      { id: "star-2", x: 38, y: 22, size: 9, name: "Primeiro 'Eu Te Amo'", desc: "As palavras mais certas que já saíram da minha boca.", date: "Inesquecível", photo: "assets/images/placeholder-star-2.svg" },
      { id: "star-3", x: 52, y: 48, size: 10, name: "Nossos 3 Meses", desc: "A certeza consolidada de que a vida é melhor a dois.", date: "Comemoração", photo: "assets/images/placeholder-star-3.svg" },
      { id: "star-4", x: 70, y: 35, size: 8, name: "Nossos planos juntos", desc: "O mundo ficou pequeno perto da nossa cumplicidade.", date: "Na estrada", photo: "assets/images/placeholder-star-4.svg" },
      { id: "star-5", x: 84, y: 60, size: 9, name: "O nosso dia de Hoje", desc: "Este universo digital criado especialmente para você.", date: "Hoje", photo: "assets/images/placeholder-star-5.svg" }
    ],
    connections: [
      ["star-1", "star-2"],
      ["star-2", "star-3"],
      ["star-3", "star-4"],
      ["star-4", "star-5"]
    ]
  },

  // EXPERIÊNCIA 14: JORNAL OFICIAL DO CASAL
  newspaper: {
    title: "A GAZETA DO AMOR",
    edition: "Edição Especial Histórica • Circulação Exclusiva Para o Casal",
    headline: "RAPAZ DISTRAÍDO ENCONTRA A MULHER DA SUA VIDA E NÃO LARGA NUNCA MAIS",
    subheadline: "Fontes confiáveis confirmam: o coração dele bate no ritmo da risada dela.",
    mainArticle: `Um jovem anteriormente acostumado com a sua rotina simples teve o destino completamente transformado após cruzar o caminho de uma garota de sorriso encantador.

Segundo relatos de testemunhas próximas, o rapaz não cansa de demonstrar o quanto é apaixonado por ela. "Ele parece outra pessoa, vive sorrindo para o celular e contando os minutos para vê-la", afirmou um amigo.

Especialistas em física e romance atestam que a compatibilidade dos dois desafia as leis convencionais, gerando ondas de amor, momentos de paz incomparáveis e um futuro brilhante pela frente.`,
    weatherForecast: {
      headline: "Previsão do Tempo Afetiva",
      temp: "28°C de beijos",
      condition: "Céu limpo com pancadas de beijinhos à tarde e ventos fortes de carinho."
    },
    classifieds: [
      { title: "PROCURA-SE:", desc: "Mais saidas de fim de semana ou noites com pizza para dividir com ela." },
      { title: "OFERECE-SE:", desc: "Abraço quentinho sob demanda, paciência infinita, massagem nas costas, beijos e carinhos." }
    ],
    interview: {
      question: "Qual o segredo para esse casal dar tão certo?",
      answer: "\"Muito diálogo, respeito, eu fazer ela rir demais e a certeza de que somos o porto seguro um do outro.\" — Anderson"
    }
  },

  // EXPERIÊNCIA 15: MISSÕES PARA O NOSSO FUTURO
  futureMissions: [
    {
      id: "mis-1",
      title: "Ver o nascer do sol juntos na praia",
      category: "Natureza",
      difficulty: "Fácil",
      desc: "Acordar ainda de madrugada, levar um cobertor e ver o dia nascer de mãos dadas.",
      completed: true,
      proofNote: "Feito e guardado para sempre na memória!",
      proofDate: "2024"
    },
    {
      id: "mis-2",
      title: "Fazer uma receita difícil do zero",
      category: "Culinária",
      difficulty: "Médio",
      desc: "Escolher um prato super elaborado de chef, comprar os ingredientes e cozinhar juntos ouvindo jazz.",
      completed: false,
      proofNote: "",
      proofDate: ""
    },
    {
      id: "mis-3",
      title: "Fazer uma viagem internacional juntos",
      category: "Viagem",
      difficulty: "Aventura",
      desc: "Carimbar o passaporte juntos e explorar ruelas antigas de outro país.",
      completed: false,
      proofNote: "",
      proofDate: ""
    },
    {
      id: "mis-4",
      title: "Montar nosso próprio cantinho dos sonhos",
      category: "Lar",
      difficulty: "Grande Sonho",
      desc: "Decorar uma casa com as nossas coisas, livros e uma planta que a gente prometa não deixar morrer.",
      completed: false,
      proofNote: "",
      proofDate: ""
    },
    {
      id: "mis-5",
      title: "Adotar um bichinho ou cuidar de um mascote",
      category: "Família",
      difficulty: "Fofo",
      desc: "Dar amor a um companheiro de quatro patas para alegrar nossa casa.",
      completed: false,
      proofNote: "",
      proofDate: ""
    }
  ],

  // EXPERIÊNCIA 16: O CANTO QUE SÓ EXISTE PARA ELA
  secretSanctuary: {
    passcodeHint: "A senha é o nosso amor (digite 'amor' ou toque em 'Revelar')",
    secretCode: "amor",
    title: "O Canto Mais Secreto do Nosso Universo",
    intimateLetter: `Meu amor,

Se todas as outras partes deste site são para mostrar o quanto nossa história é bonita, este pedaço aqui é só para eu te dizer, no silêncio da nossa intimidade, o quanto você é o meu refúgio.

Eu amo a nossa cumplicidade. Amo o fato de que posso ser 100% eu mesmo quando estou com você, sou 100% seu totalmente seu e sempre serei meu amor. Você me acolhe de um jeito que ninguém nunca acolheu.

Obrigado por ser essa mulher incrivel, doce, linda e cheia de luz. Eu escolho você hoje, amanhã e em todos os dias que vierem.

Quero viver minha vida toda ao seu lado, quero ficar desde o dia que eu te conheci até o meu ultimo dia de vida ao seu lado amor, quero casar com você e ter todos os nossos planos e tudo que ainda vamos planejar juntos para nós meu amor. Você é o amor da minha vida, meu tudo.

Com todo o meu coração e toda a minha vida,
Seu amor todinho.`,
    easterEggs: [
      { trigger: "cafuné", response: "💆 Direito a 30 minutos de cafuné resgatável agora mesmo!" },
      { trigger: "sorriso", response: "✨ O seu sorriso é a coisa mais radiante deste planeta." },
      { trigger: "abraço", response: "🫂 Encaixe perfeito: meu peito foi moldado para te abraçar." }
    ]
  },

  // EXPERIÊNCIA 17: CONTRATO DE AVENTURAS A DOIS
  contract: {
    title: "CONTRATO SOLENE DE AFETO, AVENTURAS & BONS MOMENTOS",
    preamble: "Pelo presente instrumento particular, as partes declaram solenemente o compromisso mútuo de preservar a ternura, o companheirismo e as gargalhadas diárias.",
    clauses: [
      {
        num: "Cláusula Primeira",
        title: "Do Direito Inalienável ao Cafuné",
        text: "Fica assegurado a qualquer uma das partes o direito de solicitar e receber cafuné em dias cansativos, sem necessidade de aviso prévio."
      },
      {
        num: "Cláusula Segunda",
        title: "Da Disputa Pela Coberta nas Noites Frias",
        text: "As partes comprometem-se a negociar pacificamente a divisão do edredom, sendo terminantemente proibido enrolar-se como um casulo e deixar o outro descoberto."
      },
      {
        num: "Cláusula Terceira",
        title: "Da Escolha Democrática das Refeições",
        text: "A resposta 'Você que sabe' só poderá ser utilizada até duas vezes por semana. Após isso, cabe ao proponente escolher sem direito a reclamações."
      },
      {
        num: "Cláusula Quarta",
        title: "Do Perdão Rápido e dos Abraços de Reconciliação",
        text: "Qualquer desentendimento deverá ser encerrado com um abraço, beijos e toques sincero antes do final do dia, priorizando sempre o amor entre nós meu amor"
      },
      {
        num: "Cláusula Quinta",
        title: "Da Validade Deste Sentimento",
        text: "O presente contrato tem prazo de vigência indeterminado, renovável automaticamente a cada batida do coração, por tempo infinito."
      }
    ],
    signDate: "Assinado no coração do Nosso Pequeno Universo"
  },

  // EXPERIÊNCIA 18: MASCOTE VIRTUAL DO CASAL
  mascot: {
    defaultName: "Pipoca",
    petType: "Estrelinha Fofa",
    initialMood: "Super Feliz",
    dialogues: {
      greetings: [
        "Oii! Que bom te ver aqui no nosso universo!",
        "Estava com saudades! Dá um carinho em mim?",
        "Hoje é um dia lindo para lembrar o quanto o Anderson te ama!"
      ],
      petReactions: [
        "Aaaah, esse carinho é tão bom! Purrrrr ✨",
        "Cócegas! Hehehehe 💖",
        "Você é a pessoa mais doce do mundo!"
      ],
      treatReactions: [
        "Hummm, moranguinho delicioso! Muito obrigada! 🍓",
        "Comidinha do amor me deixa cheia de energia! 🍰",
        "Adoro quando você me mima! 🍫"
      ],
      secretHints: [
        "Psiu! Você já visitou o cantinho secreto? Tem uma declaração linda escondida lá!",
        "Dizem que quem gira a Roleta dos Encontros ganha um abraço quentinho...",
        "O Anderson passou horas e horas preparando cada cantinho desse site só para te ver sorrir!"
      ]
    }
  }
};

// Exporta globalmente para uso direto via browser e scripts
if (typeof window !== "undefined") {
  window.UNIVERSE_CONFIG = UNIVERSE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = UNIVERSE_CONFIG;
}
