// Personal-site dictionary for Gabriel Olegário's home. One entry per locale,
// mirroring the site's five languages (en root + pt/es/zh/ru). Structural
// project data (icon, links, order) lives in src/data/projects.js; only the
// human copy that changes per language lives here, keyed by project id.
//
// bio is HTML (carries <mark> and the ForbesBLK link); it is injected with
// set:html, so its inner styles are declared :global.
export const meDict = {
  en: {
    meta: {
      title: 'Gabriel Olegário',
      desc: 'Advertiser and builder in São Paulo. I start companies and operate them, with AI. ForbesBLK member.',
    },
    role: 'Advertiser & builder',
    about: [
      "I got into advertising expecting the work to be about ideas. What I actually learned is that the harder part is making good ideas happen: getting the right people involved, timing it well, and letting the data tell you when you're wrong.",
      'These days my work sits between strategy, consumer behavior, and applied AI. A lot of it comes down to taking something messy and helping people figure out what to actually do about it.',
      'At Smart Social, I lead strategy for campaigns that run on a network of 1,000+ influencers and global partnerships, helping brands turn communication into growth they can measure.',
      "I also lead Laboratório de Epidemiologia (LabEpi), Brazil's first platform focused on applied epidemiology, where I run growth, automation, and digital strategy for researchers. Out of LabEpi we're building Altman by LabEpi, a platform for applied statistics in research that tries to make rigorous analysis easier to understand and use, from framing a clear question to reading the results responsibly.",
      'Applied AI runs through all of it. In my experience it pays off most when it connects the whole chain, from business and growth to creative, and when you judge it by what it actually changes.',
      "What keeps pulling my attention is the distance between what the data says and what people actually do. That's usually where the interesting work is.",
      "If you're working in growth, AI, or creative, I'd be glad to talk.",
    ],
    bio: 'I start companies and operate them, with <mark>AI</mark>. Based in São Paulo. Member of <a href="https://forbes.com.br/forbesblk/" target="_blank" rel="noopener">ForbesBLK</a>.',
    intro: 'The type who learns by building. I write the decisions down before the code, keep the process in the open, and would rather prove than promise, <em>for real</em>.',
    now: '<strong>Now:</strong> running strategy & innovation at Smart Social, keeping Gume open source, and building Altman by LabEpi.',
    sec: { projects: 'Projects', writing: 'Writing', github: 'GitHub activity', contact: 'Elsewhere' },
    folders: {
      sobre: { name: 'About', sub: 'Who I am' },
      escrita: { name: 'Writing', sub: 'Essays' },
      github: { name: 'GitHub', sub: 'What I build' },
      contato: { name: 'Contact', sub: 'Say hi' },
    },
    openHint: 'Open',
    closeLabel: 'Close',
    projects: {
      'smart-social': {
        line: 'Influence and media network. 1,000+ creators across 25+ countries.',
        tag: 'Head of Strategy & Innovation',
        desc: 'Smart Social connects brands to a curated roster of creators at scale. I lead strategy and innovation, deciding where AI goes inside the operation, from creator matching to campaign intelligence.',
        facts: ['1,000+ creators across 25+ countries', 'Also owns portalarenna.com (media)', 'AI woven through matching and campaign analytics', 'Head of Strategy & Innovation'],
        long: [
          'Most of what I do at Smart Social is turning attention into outcomes brands can defend: matching the right creators to the right brief, pricing and pacing campaigns, and reading the results honestly.',
          'AI sits inside that loop (matching, briefing, and measurement), not as a gimmick but as leverage on decisions that used to be guesswork. The network spans 1,000+ creators across 25+ countries, and the company also runs portalarenna.com on the media side.',
        ],
      },
      gume: {
        line: 'An open reading log, in Portuguese. ~300k editions catalogued, AGPL-3.0. Built in public, paired with AI.',
        tag: 'Creator · Open source',
        desc: 'A reading log for Portuguese readers, track what you have read, are reading, and want to read, over a catalogue of nearly 300,000 editions. I built it in public, paired with an AI agent, as an advertiser who is not a programmer.',
        facts: ['~300k Portuguese-language editions', 'AGPL-3.0, fork it and self-host', '700+ tests; the CI is the only reviewer', 'No scores, no streaks, no ads, export your data anytime'],
        long: [
          'Gume started as a way to learn the whole stack by shipping something real, in public: schema, auth, search over 300k rows, migrations, CSP, CI, a design system, community governance, licensing, deploy.',
          'The lesson that stuck: AI made writing code cheap, but it never made being right cheap. So the repo defends itself, with decisions written before code, authorization in one file, 700+ tests that scan the codebase, and a CI that is the only reviewer. It is AGPL-3.0: if the hosted app ever breaks its promises, you take the code and your data and run your own.',
        ],
      },
      labepi: {
        line: 'Teaching epidemiology and the scientific method, in Portuguese. A joint venture with working scientists.',
        tag: 'Co-founder',
        desc: 'Laboratório de Epidemiologia is an independent Brazilian platform for teaching epidemiology and research methodology in Portuguese, bringing concepts, methods and evidence closer to students, clinicians, researchers and managers.',
        facts: ['Co-founded with Lucas HCC Santos', 'Epidemiology + research methods, in Portuguese', 'For students, clinicians, researchers and managers', 'Altman by LabEpi is its statistics arm'],
        long: [
          'LabEpi brings epidemiology and research methodology to a Portuguese-speaking audience that had almost nothing built for it. I run growth, automation and digital strategy, turning dense science into something students, clinicians, researchers and managers can actually use.',
          'It is a joint venture with working scientists, co-founded with Lucas HCC Santos. Its statistics arm, Altman by LabEpi, is where the quantitative work goes deeper.',
        ],
      },
      altman: {
        line: "LabEpi's statistics arm: applied statistics for research, with rigor and responsible interpretation. In founding.",
        tag: 'Statistics vertical · LabEpi',
        desc: 'The statistics arm of LabEpi: applied statistics for research done right, a clear question, analysis that fits the design and the data, explicit uncertainty, and transparent reporting. Deep content, educational products and calculation tools. Currently in founding.',
        facts: ['Applied statistics for studies', 'Deep content, materials and a calculator (planned)', 'A distinct brand, complementary to LabEpi', 'In founding, brand/domain clearance pending'],
        long: [
          'Altman by LabEpi is the statistics arm of LabEpi: applied statistics for research, done right. The premise is that statistics starts before the analysis, in framing a clear question, choosing an analysis that fits the design and the data, being explicit about uncertainty, and reporting transparently.',
          "The plan is deep content, educational products and calculation tools, kept separate from clinical or regulatory decision-making. It is in founding: concept, scope and the calculator core are being defined, and brand/domain clearance comes before any public use. 'Altman' is used strictly as a wordmark, with no connection to or endorsement by any real person or institution.",
        ],
      },
    },
    linkLabels: { site: 'site', code: 'code' },
    githubNote: 'Contributions in the last year',
    footerLoc: 'São Paulo · 23.5505° S / 46.6333° W',
    ui: { theme: 'Theme', lang: 'Language', search: 'Search', searchHint: 'Search projects, writing…', noResults: 'No results', hint: 'Click a folder to open · ⌘K to search', zoom: 'Full page' },
  },

  pt: {
    meta: {
      title: 'Gabriel Olegário',
      desc: 'Publicitário e builder em São Paulo. Crio empresas e as opero, com IA. Membro da ForbesBLK.',
    },
    role: 'Publicitário e builder',
    about: [
      'Entrei na publicidade achando que o trabalho seria sobre ideias. O que aprendi de verdade é que a parte mais difícil é fazer as boas ideias acontecerem: envolver as pessoas certas, acertar o tempo e deixar os dados te dizerem quando você está errado.',
      'Hoje meu trabalho fica entre estratégia, comportamento do consumidor e IA aplicada. Boa parte é pegar algo bagunçado e ajudar as pessoas a decidir o que de fato fazer com aquilo.',
      'Na Smart Social, lidero a estratégia de campanhas que rodam numa rede de mais de 1.000 influenciadores e parcerias globais, ajudando marcas a transformar comunicação em crescimento mensurável.',
      'Também lidero o Laboratório de Epidemiologia (LabEpi), a primeira plataforma do Brasil focada em epidemiologia aplicada, onde toco crescimento, automação e estratégia digital para pesquisadores. A partir do LabEpi estamos construindo a Altman by LabEpi, uma plataforma de estatística aplicada à pesquisa que tenta tornar a análise rigorosa mais fácil de entender e usar, de formular uma pergunta clara a ler os resultados com responsabilidade.',
      'IA aplicada atravessa tudo isso. Na minha experiência, ela rende mais quando conecta a cadeia inteira, do negócio e do crescimento ao criativo, e quando você a julga pelo que ela realmente muda.',
      'O que segue puxando minha atenção é a distância entre o que os dados dizem e o que as pessoas de fato fazem. Costuma ser aí que está o trabalho interessante.',
      'Se você trabalha com crescimento, IA ou criação, vai ser um prazer conversar.',
    ],
    bio: 'Crio empresas e as opero, com <mark>IA</mark>. De São Paulo. Membro da <a href="https://forbes.com.br/forbesblk/" target="_blank" rel="noopener">ForbesBLK</a>.',
    intro: 'Do tipo que aprende construindo. Escrevo as decisões antes do código, deixo o processo à mostra e prefiro provar a prometer, <em>for real</em>.',
    now: '<strong>Agora:</strong> tocando estratégia e inovação na Smart Social, mantendo o Gume em código aberto e construindo a Altman by LabEpi.',
    sec: { projects: 'Projetos', writing: 'Escrita', github: 'Atividade no GitHub', contact: 'Onde me achar' },
    folders: {
      sobre: { name: 'Sobre', sub: 'Quem sou' },
      escrita: { name: 'Escrita', sub: 'Ensaios' },
      github: { name: 'GitHub', sub: 'O que eu construo' },
      contato: { name: 'Contato', sub: 'Fala comigo' },
    },
    openHint: 'Abrir',
    closeLabel: 'Fechar',
    projects: {
      'smart-social': {
        line: 'Rede de influência e mídia. 1.000+ creators em 25+ países.',
        tag: 'Head de Estratégia e Inovação',
        desc: 'A Smart Social conecta marcas a um time curado de creators em escala. Lidero estratégia e inovação, decidindo onde a IA entra na operação, do match de creators à inteligência de campanha.',
        facts: ['1.000+ creators em 25+ países', 'Também é dona do portalarenna.com (mídia)', 'IA no match de creators e na análise de campanhas', 'Head de Estratégia e Inovação'],
        long: [
          'A maior parte do que faço na Smart Social é transformar atenção em resultado que a marca consegue defender: conectar os creators certos ao briefing certo, precificar e ritmar campanhas, e ler os resultados com honestidade.',
          'A IA entra nesse ciclo (match, briefing e medição), não como enfeite, mas como alavanca em decisões que antes eram no chute. A rede tem mais de 1.000 creators em 25+ países, e a empresa também toca o portalarenna.com no lado de mídia.',
        ],
      },
      gume: {
        line: 'Diário de leituras aberto, em português. ~300 mil edições no catálogo, AGPL-3.0. Construí em público, em par com IA.',
        tag: 'Criador · Open source',
        desc: 'Um diário de leituras para quem lê em português, registre o que já leu, está lendo e quer ler, sobre um catálogo de quase 300 mil edições. Construí em público, em par com um agente de IA, sendo publicitário e não programador.',
        facts: ['~300 mil edições em português', 'AGPL-3.0, dá pra forkar e rodar o seu', '700+ testes; a CI é a única revisora', 'Sem nota, sem streak, sem anúncio, seus dados sempre exportáveis'],
        long: [
          'O Gume começou como um jeito de aprender a stack inteira entregando algo real, em público: schema, autenticação, busca sobre 300 mil linhas, migrações, CSP, CI, design system, governança de comunidade, licença, deploy.',
          'A lição que ficou: a IA barateou escrever código, mas nunca barateou estar certo. Então o repositório se defende sozinho, com decisões escritas antes do código, autorização num único arquivo, mais de 700 testes que varrem a base, e uma CI que é a única revisora. É AGPL-3.0: se o app hospedado quebrar as próprias promessas, você pega o código e seus dados e roda o seu.',
        ],
      },
      labepi: {
        line: 'Ensino de epidemiologia e método científico, em português. Joint venture com cientistas em atividade.',
        tag: 'Cofundador',
        desc: 'O Laboratório de Epidemiologia é uma plataforma brasileira independente de ensino de epidemiologia e metodologia de pesquisa em português, aproximando conceitos, métodos e evidências de estudantes, profissionais de saúde, pesquisadores e gestores.',
        facts: ['Cofundado com Lucas HCC Santos', 'Epidemiologia + metodologia de pesquisa, em português', 'Para estudantes, clínicos, pesquisadores e gestores', 'A Altman by LabEpi é o braço estatístico'],
        long: [
          'O LabEpi leva epidemiologia e metodologia de pesquisa para um público de língua portuguesa que quase não tinha nada feito para ele. Eu toco crescimento, automação e estratégia digital, transformando ciência densa em algo que estudantes, clínicos, pesquisadores e gestores conseguem usar de verdade.',
          'É uma joint venture com cientistas em atividade, cofundada com Lucas HCC Santos. O braço estatístico, a Altman by LabEpi, é onde o trabalho quantitativo vai mais fundo.',
        ],
      },
      altman: {
        line: 'Braço estatístico da LabEpi: estatística aplicada a estudos, com rigor e interpretação responsável. Em fundação.',
        tag: 'Vertical de estatística · LabEpi',
        desc: 'O braço estatístico da LabEpi: estatística aplicada a estudos, feita direito, pergunta clara, análise compatível com o desenho e os dados, incerteza explícita e relato transparente. Conteúdo aprofundado, produtos educacionais e ferramentas de cálculo. Em fundação.',
        facts: ['Estatística aplicada a estudos', 'Conteúdo, materiais e uma calculadora (planejada)', 'Marca própria, complementar à LabEpi', 'Em fundação, verificação de marca/domínio pendente'],
        long: [
          'A Altman by LabEpi é o braço estatístico da LabEpi: estatística aplicada a estudos, feita direito. A premissa é que a estatística começa antes da análise, na formulação de uma pergunta clara, na escolha de uma análise compatível com o desenho e os dados, na incerteza explícita e no relato transparente.',
          "O plano é conteúdo aprofundado, produtos educacionais e ferramentas de cálculo, separados de decisões clínicas ou regulatórias. Está em fundação: conceito, escopo e o núcleo da calculadora estão sendo definidos, e a verificação de marca/domínio vem antes de qualquer uso público. 'Altman' é usado apenas como palavra-marca, sem vínculo ou endosso de qualquer pessoa ou instituição real.",
        ],
      },
    },
    linkLabels: { site: 'site', code: 'código' },
    githubNote: 'Contribuições no último ano',
    footerLoc: 'São Paulo · 23.5505° S / 46.6333° W',
    ui: { theme: 'Tema', lang: 'Idioma', search: 'Buscar', searchHint: 'Buscar projetos, escrita…', noResults: 'Nada encontrado', hint: 'Clique numa pasta para abrir · ⌘K para buscar', zoom: 'Página completa' },
  },

  es: {
    meta: {
      title: 'Gabriel Olegário',
      desc: 'Publicista y builder en São Paulo. Creo empresas y las opero, con IA. Miembro de ForbesBLK.',
    },
    role: 'Publicista y builder',
    about: [
      'Entré en la publicidad esperando que el trabajo fuera sobre ideas. Lo que aprendí de verdad es que la parte más difícil es hacer que las buenas ideas ocurran: involucrar a las personas correctas, acertar con el momento y dejar que los datos te digan cuándo te equivocas.',
      'Hoy mi trabajo está entre la estrategia, el comportamiento del consumidor y la IA aplicada. Buena parte consiste en tomar algo caótico y ayudar a la gente a decidir qué hacer realmente con ello.',
      'En Smart Social, lidero la estrategia de campañas que corren sobre una red de más de 1.000 influencers y alianzas globales, ayudando a las marcas a convertir la comunicación en crecimiento medible.',
      'También lidero el Laboratório de Epidemiologia (LabEpi), la primera plataforma de Brasil enfocada en epidemiología aplicada, donde manejo crecimiento, automatización y estrategia digital para investigadores. A partir de LabEpi estamos construyendo Altman by LabEpi, una plataforma de estadística aplicada a la investigación que busca hacer el análisis riguroso más fácil de entender y usar, desde plantear una pregunta clara hasta leer los resultados con responsabilidad.',
      'La IA aplicada atraviesa todo esto. En mi experiencia, rinde más cuando conecta toda la cadena, del negocio y el crecimiento al creativo, y cuando la juzgas por lo que realmente cambia.',
      'Lo que sigue llamando mi atención es la distancia entre lo que dicen los datos y lo que la gente realmente hace. Ahí suele estar el trabajo interesante.',
      'Si trabajas en crecimiento, IA o creatividad, me encantará conversar.',
    ],
    bio: 'Creo empresas y las opero, con <mark>IA</mark>. Desde São Paulo. Miembro de <a href="https://forbes.com.br/forbesblk/" target="_blank" rel="noopener">ForbesBLK</a>.',
    intro: 'De los que aprenden construyendo. Escribo las decisiones antes que el código, dejo el proceso a la vista y prefiero probar que prometer, <em>for real</em>.',
    now: '<strong>Ahora:</strong> a cargo de estrategia e innovación en Smart Social, manteniendo Gume en código abierto y construyendo Altman by LabEpi.',
    sec: { projects: 'Proyectos', writing: 'Escritura', github: 'Actividad en GitHub', contact: 'Dónde encontrarme' },
    folders: {
      sobre: { name: 'Sobre mí', sub: 'Quién soy' },
      escrita: { name: 'Escritura', sub: 'Ensayos' },
      github: { name: 'GitHub', sub: 'Lo que construyo' },
      contato: { name: 'Contacto', sub: 'Escríbeme' },
    },
    openHint: 'Abrir',
    closeLabel: 'Cerrar',
    projects: {
      'smart-social': {
        line: 'Red de influencia y medios. 1.000+ creadores en 25+ países.',
        tag: 'Head de Estrategia e Innovación',
        desc: 'Smart Social conecta marcas con un roster curado de creadores a escala. Lidero estrategia e innovación, decidiendo dónde entra la IA en la operación, del match de creadores a la inteligencia de campañas.',
        facts: ['1.000+ creadores en 25+ países', 'También es dueña de portalarenna.com (medios)', 'IA en el match y en el análisis de campañas', 'Head de Estrategia e Innovación'],
      },
      gume: {
        line: 'Diario de lecturas abierto, en portugués. ~300 mil ediciones catalogadas, AGPL-3.0. Construido en público, junto a la IA.',
        tag: 'Creador · Open source',
        desc: 'Un diario de lecturas para quien lee en portugués, registra lo que leíste, estás leyendo y quieres leer, sobre un catálogo de casi 300 mil ediciones. Lo construí en público, junto a un agente de IA, siendo publicista y no programador.',
        facts: ['~300 mil ediciones en portugués', 'AGPL-3.0, puedes forkearlo y autoalojarlo', '700+ pruebas; la CI es la única revisora', 'Sin puntuación, sin rachas, sin anuncios, exporta tus datos cuando quieras'],
      },
      labepi: {
        line: 'Enseñanza de epidemiología y método científico, en portugués. Joint venture con científicos en activo.',
        tag: 'Cofundador',
        desc: 'Laboratório de Epidemiologia es una plataforma brasileña independiente para enseñar epidemiología y metodología de investigación en portugués, acercando conceptos, métodos y evidencia a estudiantes, clínicos, investigadores y gestores.',
        facts: ['Cofundado con Lucas HCC Santos', 'Epidemiología + metodología de investigación, en portugués', 'Para estudiantes, clínicos, investigadores y gestores', 'Altman by LabEpi es su brazo estadístico'],
      },
      altman: {
        line: 'El brazo estadístico de LabEpi: estadística aplicada a estudios, con rigor e interpretación responsable. En fundación.',
        tag: 'Vertical de estadística · LabEpi',
        desc: 'El brazo estadístico de LabEpi: estadística aplicada a estudios, bien hecha, pregunta clara, análisis compatible con el diseño y los datos, incertidumbre explícita y reporte transparente. Contenido profundo, productos educativos y herramientas de cálculo. En fundación.',
        facts: ['Estadística aplicada a estudios', 'Contenido, materiales y una calculadora (planeada)', 'Marca propia, complementaria a LabEpi', 'En fundación, verificación de marca/dominio pendiente'],
      },
    },
    linkLabels: { site: 'sitio', code: 'código' },
    githubNote: 'Contribuciones del último año',
    footerLoc: 'São Paulo · 23.5505° S / 46.6333° W',
    ui: { theme: 'Tema', lang: 'Idioma', search: 'Buscar', searchHint: 'Buscar proyectos, escritos…', noResults: 'Sin resultados', hint: 'Haz clic en una carpeta · ⌘K para buscar', zoom: 'Página completa' },
  },

  zh: {
    meta: {
      title: 'Gabriel Olegário',
      desc: '圣保罗的广告人与创造者。用 AI 创办并运营公司。ForbesBLK 成员。',
    },
    role: '广告人与创造者',
    about: [
      '我进入广告业时，以为工作是关于创意的。但我真正学到的是，更难的部分是让好创意落地：找对人、把握时机，并让数据在你判断错误时告诉你。',
      '如今我的工作介于战略、消费者行为与应用 AI 之间。很多时候就是把混乱的东西梳理清楚，帮人们弄清到底该怎么做。',
      '在 Smart Social，我主导在超过 1,000 位影响者与全球合作网络上运行的营销战略，帮助品牌把传播转化为可衡量的增长。',
      '我还带领 Laboratório de Epidemiologia（LabEpi），巴西第一个专注于应用流行病学的平台，负责面向研究者的增长、自动化与数字战略。在 LabEpi 之上，我们正在打造 Altman by LabEpi，一个面向研究的应用统计平台，力求让严谨的分析更易理解和使用，从提出清晰的问题到负责任地解读结果。',
      '应用 AI 贯穿其中。以我的经验，当它连通从业务、增长到创意的整条链路，并以它真正带来的改变来衡量时，回报最大。',
      '始终吸引我的，是数据所说与人们实际所为之间的距离。有意思的工作通常就在那里。',
      '如果你在做增长、AI 或创意，很乐意聊聊。',
    ],
    bio: '用 <mark>AI</mark> 创办并运营公司。常驻圣保罗。<a href="https://forbes.com.br/forbesblk/" target="_blank" rel="noopener">ForbesBLK</a> 成员。',
    intro: '在动手中学习的人。我先写下决策再写代码，把过程公开，宁可证明也不空口承诺 ， <em>for real</em>。',
    now: '<strong>正在做：</strong>在 Smart Social 主管战略与创新，维护开源项目 Gume，并打造 Altman by LabEpi。',
    sec: { projects: '项目', writing: '写作', github: 'GitHub 动态', contact: '联系我' },
    folders: {
      sobre: { name: '关于', sub: '我是谁' },
      escrita: { name: '写作', sub: '文章' },
      github: { name: 'GitHub', sub: '我的作品' },
      contato: { name: '联系', sub: '打个招呼' },
    },
    openHint: '打开',
    closeLabel: '关闭',
    projects: {
      'smart-social': {
        line: '影响力与媒体网络。1,000+ 创作者，覆盖 25+ 国家。',
        tag: '战略与创新负责人',
        desc: 'Smart Social 将品牌与精选的创作者网络规模化对接。我负责战略与创新，决定 AI 在运营中的落点，从创作者匹配到营销智能分析。',
        facts: ['1,000+ 创作者，覆盖 25+ 国家', '同时拥有 portalarenna.com（媒体）', 'AI 贯穿匹配与营销分析', '战略与创新负责人'],
      },
      gume: {
        line: '开放的葡语读书记录。收录约 30 万个版本，AGPL-3.0。公开构建，与 AI 结对。',
        tag: '创建者 · 开源',
        desc: '面向葡语读者的读书记录，记录读过、在读、想读的书，基于近 30 万个版本的目录。作为一名并非程序员的广告人，我与 AI 智能体结对、全程公开地把它做了出来。',
        facts: ['约 30 万个葡语版本', 'AGPL-3.0，可 fork 并自托管', '700+ 测试；CI 是唯一的审阅者', '没有评分、连击或广告，随时导出你的数据'],
      },
      labepi: {
        line: '用葡语讲授流行病学与科学方法。与在职科学家的合资项目。',
        tag: '联合创始人',
        desc: 'Laboratório de Epidemiologia 是一个独立的巴西平台，用葡语讲授流行病学与研究方法，把概念、方法与证据带给学生、临床医生、研究者与管理者。',
        facts: ['与 Lucas HCC Santos 联合创办', '流行病学 + 研究方法，葡语授课', '面向学生、临床医生、研究者与管理者', 'Altman by LabEpi 是其统计分支'],
      },
      altman: {
        line: 'LabEpi 的统计分支：面向研究的应用统计，讲求严谨与负责任的解读。筹建中。',
        tag: '统计方向 · LabEpi',
        desc: 'LabEpi 的统计分支：把面向研究的应用统计做对，清晰的问题、与设计和数据相匹配的分析、明确的不确定性、透明的报告。深度内容、教育产品与计算工具。目前正在筹建。',
        facts: ['面向研究的应用统计', '内容、材料与一个计算器（规划中）', '独立品牌，与 LabEpi 互补', '筹建中，名称/域名核查待定'],
      },
    },
    linkLabels: { site: '网站', code: '代码' },
    githubNote: '过去一年的贡献',
    footerLoc: '圣保罗 · 23.5505° S / 46.6333° W',
    ui: { theme: '主题', lang: '语言', search: '搜索', searchHint: '搜索项目、文章…', noResults: '无结果', hint: '点击文件夹打开 · ⌘K 搜索', zoom: '完整页面' },
  },

  ru: {
    meta: {
      title: 'Gabriel Olegário',
      desc: 'Рекламщик и билдер из Сан-Паулу. Создаю компании и управляю ими, с ИИ. Участник ForbesBLK.',
    },
    role: 'Рекламщик и билдер',
    about: [
      'Я пришёл в рекламу, думая, что работа будет про идеи. На деле я понял, что сложнее всего, воплощать хорошие идеи: собирать нужных людей, точно выбирать момент и позволять данным говорить, когда ты неправ.',
      'Сегодня моя работа лежит между стратегией, поведением потребителей и прикладным ИИ. Во многом это значит взять что-то запутанное и помочь людям понять, что с этим реально делать.',
      'В Smart Social я руковожу стратегией кампаний, которые работают на сети из более чем 1000 инфлюенсеров и глобальных партнёрств, помогая брендам превращать коммуникацию в измеримый рост.',
      'Я также возглавляю Laboratório de Epidemiologia (LabEpi), первую в Бразилии платформу, посвящённую прикладной эпидемиологии, где отвечаю за рост, автоматизацию и цифровую стратегию для исследователей. На основе LabEpi мы создаём Altman by LabEpi, платформу прикладной статистики для исследований, которая стремится сделать строгий анализ понятнее и удобнее: от постановки ясного вопроса до ответственного чтения результатов.',
      'Прикладной ИИ проходит через всё это. По моему опыту, он приносит больше всего пользы, когда связывает всю цепочку, от бизнеса и роста до креатива, и когда его оценивают по тому, что он реально меняет.',
      'Что продолжает привлекать моё внимание, расстояние между тем, что говорят данные, и тем, что люди делают на самом деле. Обычно именно там и находится интересная работа.',
      'Если вы работаете в росте, ИИ или креативе, буду рад поговорить.',
    ],
    bio: 'Создаю компании и управляю ими, с <mark>ИИ</mark>. Из Сан-Паулу. Участник <a href="https://forbes.com.br/forbesblk/" target="_blank" rel="noopener">ForbesBLK</a>.',
    intro: 'Из тех, кто учится в деле. Сначала записываю решения, потом пишу код, держу процесс открытым и предпочитаю доказывать, а не обещать, <em>for real</em>.',
    now: '<strong>Сейчас:</strong> отвечаю за стратегию и инновации в Smart Social, развиваю открытый Gume и строю Altman by LabEpi.',
    sec: { projects: 'Проекты', writing: 'Тексты', github: 'Активность на GitHub', contact: 'Где меня найти' },
    folders: {
      sobre: { name: 'Обо мне', sub: 'Кто я' },
      escrita: { name: 'Тексты', sub: 'Эссе' },
      github: { name: 'GitHub', sub: 'Что я делаю' },
      contato: { name: 'Контакты', sub: 'Напишите мне' },
    },
    openHint: 'Открыть',
    closeLabel: 'Закрыть',
    projects: {
      'smart-social': {
        line: 'Сеть влияния и медиа. 1000+ авторов в 25+ странах.',
        tag: 'Глава стратегии и инноваций',
        desc: 'Smart Social связывает бренды с отобранным пулом авторов в масштабе. Я отвечаю за стратегию и инновации, решаю, где в операциях работает ИИ: от подбора авторов до аналитики кампаний.',
        facts: ['1000+ авторов в 25+ странах', 'Также владеет portalarenna.com (медиа)', 'ИИ в подборе авторов и аналитике кампаний', 'Глава стратегии и инноваций'],
      },
      gume: {
        line: 'Открытый дневник чтения на португальском. ~300 тыс. изданий в каталоге, AGPL-3.0. Строю публично, в паре с ИИ.',
        tag: 'Создатель · Open source',
        desc: 'Дневник чтения для читающих на португальском, отмечайте прочитанное, читаемое и желаемое по каталогу почти из 300 000 изданий. Я сделал его публично, в паре с ИИ-агентом, будучи рекламщиком, а не программистом.',
        facts: ['~300 тыс. изданий на португальском', 'AGPL-3.0, форкните и разверните своё', '700+ тестов; единственный ревьюер, CI', 'Без оценок, серий и рекламы, данные всегда можно выгрузить'],
      },
      labepi: {
        line: 'Преподаю эпидемиологию и научный метод на португальском. Совместное предприятие с действующими учёными.',
        tag: 'Сооснователь',
        desc: 'Laboratório de Epidemiologia, независимая бразильская платформа для преподавания эпидемиологии и методологии исследований на португальском, приближающая понятия, методы и доказательства к студентам, врачам, исследователям и управленцам.',
        facts: ['Основан вместе с Lucas HCC Santos', 'Эпидемиология + методология исследований, на португальском', 'Для студентов, врачей, исследователей и управленцев', 'Altman by LabEpi, её статистическое направление'],
      },
      altman: {
        line: 'Статистическое направление LabEpi: прикладная статистика для исследований, со строгостью и ответственной интерпретацией. В стадии основания.',
        tag: 'Статистика · LabEpi',
        desc: 'Статистическое направление LabEpi: прикладная статистика для исследований, сделанная правильно, ясный вопрос, анализ под дизайн и данные, явная неопределённость и прозрачная отчётность. Глубокий контент, образовательные продукты и инструменты расчётов. В стадии основания.',
        facts: ['Прикладная статистика для исследований', 'Контент, материалы и калькулятор (в планах)', 'Отдельный бренд, дополняющий LabEpi', 'В стадии основания, проверка бренда/домена в процессе'],
      },
    },
    linkLabels: { site: 'сайт', code: 'код' },
    githubNote: 'Вклад за последний год',
    footerLoc: 'Сан-Паулу · 23.5505° S / 46.6333° W',
    ui: { theme: 'Тема', lang: 'Язык', search: 'Поиск', searchHint: 'Искать проекты, тексты…', noResults: 'Ничего не найдено', hint: 'Нажмите на папку · ⌘K для поиска', zoom: 'Полная страница' },
  },
};

export const getMeDict = (l) => meDict[l] ?? meDict.en;
