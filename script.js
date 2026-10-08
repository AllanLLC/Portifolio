/**
 * CARTA CELESTE TÉCNICA & ATLAS PROFISSIONAL
 * Desenvolvido para renderização de alto desempenho em CPU (sem aceleração de GPU).
 * - Zero gradientes, zero filtros de blur, zero dependência de azul.
 * - Renderização sob demanda (0% de CPU em repouso).
 * - Arquitetura cartográfica astronômica de alta precisão.
 */

// --- BASE DE DADOS DO CURRÍCULO E PROJETOS ---
const CONSTELLATIONS = [
  {
    id: 'aurica',
    code: 'SEC-01 // ALPHA',
    name: 'Projetos',
    shortName: 'Projetos',
    subtitle: 'Sistemas autônomos, inteligência artificial e serviços locais',
    category: 'Sistemas & IA',
    ra: '04h 35m',
    dec: '+16° 30\'',
    x: 0,
    y: 0,
    accentColor: '#f59e0b', // Âmbar técnico
    stars: [
      { id: 'a0', label: 'Núcleo', rx: 0, ry: 0, size: 4 },
      { id: 'a1', label: 'Modelos Locais', rx: -90, ry: -60, size: 3.5 },
      { id: 'a2', label: 'Recuperação de Contexto', rx: 90, ry: -50, size: 3.5 },
      { id: 'a3', label: 'Concorrência & Fila', rx: -80, ry: 70, size: 3 },
      { id: 'a4', label: 'Comportamento & Respostas', rx: 80, ry: 70, size: 3 },
      { id: 'a5', label: 'Gestão & Parâmetros', rx: 0, ry: 100, size: 3 },
      { id: 'a6', label: 'Áudio & Síntese', rx: 0, ry: -95, size: 3 }
    ],
    lines: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
      [1, 6], [2, 6], [1, 3], [2, 4], [3, 5], [4, 5]
    ],
    contentHtml: `
      <p>Desenvolvimento de um bot para Discord autônomo e altamente customizável, projetado para operar com <strong>Modelos de Linguagem de Grande Escala (LLMs) executados estritamente em ambiente local</strong>, garantindo soberania total de dados e custo operacional zero de inferência.</p>

      <div class="entry-card">
        <h4><i class="fas fa-microchip"></i> Integração de IA Local (Ollama)</h4>
        <p>Arquitetou o fluxo de integração do bot com o runtime do <strong>Ollama</strong>. Eliminou completamente a dependência e despesas recorrentes de provedores externos (como OpenAI), processando linguagem natural localmente com baixa latência.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-database"></i> Implementação de RAG (Retrieval-Augmented Generation)</h4>
        <p>Desenvolveu um mecanismo de base de conhecimento dinâmico em tempo real. A arquitetura recupera contextos e memórias pertinentes antes da geração da resposta pela LLM, reduzindo alucinações e garantindo precisão fática.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-network-wired"></i> Sistemas Assíncronos e Concorrência</h4>
        <p>Empregou a biblioteca <code>asyncio</code> com controle rigoroso de locks em operações simultâneas, mantendo a estabilidade do bot e ordenação eficiente da fila de requisições de múltiplos usuários.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-sliders-h"></i> Engenharia de Prompt e Personalidades Dinâmicas</h4>
        <p>Criou módulo de personalidades com pesos probabilísticos para variações de tom de voz e espontaneidade contextual, permitindo ajuste imediato sem necessidade de reinicialização do serviço.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-shield-alt"></i> Ferramentas Administrativas & Áudio Realtime</h4>
        <p>Conjunto estruturado de comandos protegidos por hierarquia de permissões para CRUD de configurações, troca a quente de modelos de linguagem e integração de Text-to-Speech (TTS) com streaming de áudio.</p>
      </div>
    `,
    techs: ['Python', 'Discord.py', 'Ollama (LLMs Locais)', 'RAG', 'Asyncio', 'TTS', 'JSON', 'APIs REST'],
    links: [
      { label: 'Repositório GitHub (AllanLLC)', url: 'https://github.com/AllanLLC', icon: 'fab fa-github' }
    ]
  },

  {
    id: 'revelo',
    code: 'SEC-02 // BETA',
    name: 'Experiência',
    shortName: 'Experiência',
    subtitle: 'Engenharia de dados, curadoria e garantia de qualidade para modelos',
    category: 'Trajetória',
    ra: '06h 12m',
    dec: '-08° 40\'',
    x: -360,
    y: 190,
    accentColor: '#f59e0b',
    stars: [
      { id: 'r0', label: 'Atuação Principal', rx: 0, ry: 0, size: 4 },
      { id: 'r1', label: 'Curadoria de Dados', rx: -60, ry: -40, size: 3 },
      { id: 'r2', label: 'Auditoria & Repositórios', rx: 60, ry: -40, size: 3 },
      { id: 'r3', label: 'Resolução de Falhas', rx: 50, ry: 45, size: 3 },
      { id: 'r4', label: 'Otimização Contínua', rx: -50, ry: 45, size: 3 }
    ],
    lines: [
      [0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [2, 3], [3, 4], [4, 1]
    ],
    contentHtml: `
      <div class="entry-card">
        <h4>Desenvolvedor Python — Revelo</h4>
        <span class="period">Período: 09/2025 – 02/2026</span>
        <ul>
          <li><strong>Pipelines de Dados para IA:</strong> Desenvolveu soluções automatizadas em Python para geração, filtragem e curadoria de grandes volumes de dados voltados ao treinamento e alinhamento de modelos de Inteligência Artificial.</li>
          <li><strong>Garantia de Qualidade de Código:</strong> Analisou e solucionou problemas e pull requests em repositórios, elevando a consistência, sintaxe e conformidade estrutural dos datasets.</li>
          <li><strong>Depuração em Ambientes Produtivos:</strong> Atuou ativamente na identificação e correção de exceções em tempo de execução e processamento massivo.</li>
          <li><strong>Ganho de Performance:</strong> Entregou melhorias mensuráveis na integridade das massas de dados utilizadas nos ciclos de treino.</li>
        </ul>
      </div>
    `,
    techs: ['Python', 'Curadoria de Datasets', 'Treinamento de IA', 'Git & GitHub', 'Otimização de Performance'],
    links: []
  },

  {
    id: 'competencias',
    code: 'SEC-03 // GAMMA',
    name: 'Competências',
    shortName: 'Competências',
    subtitle: 'Linguagens, protocolos, infraestrutura e ferramentas',
    category: 'Stack',
    ra: '02h 18m',
    dec: '+42° 15\'',
    x: 360,
    y: -180,
    accentColor: '#f59e0b',
    stars: [
      { id: 'c0', label: 'Núcleo', rx: 0, ry: 0, size: 4 },
      { id: 'c1', label: 'Linguagens', rx: -70, ry: -45, size: 3.5 },
      { id: 'c2', label: 'Backend & APIs', rx: 70, ry: -40, size: 3 },
      { id: 'c3', label: 'Automação & Web', rx: 75, ry: 45, size: 3 },
      { id: 'c4', label: 'DevOps & Git', rx: -65, ry: 50, size: 3 },
      { id: 'c5', label: 'Desktop & Multithread', rx: 0, ry: 75, size: 3 }
    ],
    lines: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [2, 3], [3, 5], [5, 4], [4, 1]
    ],
    contentHtml: `
      <div class="entry-card">
        <h4><i class="fas fa-code"></i> Linguagens de Programação</h4>
        <p><strong>Python</strong> (foco técnico primário), <strong>JavaScript</strong>, <strong>Lua</strong> e <strong>Java</strong>.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-server"></i> Backend, APIs e Infraestrutura</h4>
        <p>Desenvolvimento em Flask, arquitetura RESTful, tratamento assíncrono, conteinerização com <strong>Docker</strong>, versionamento com Git/GitHub e automações em terminal (CLI).</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-brain"></i> Inteligência Artificial & Manipulação de Dados</h4>
        <p>LLMs locais, RAG, Text-to-Speech (TTS), técnicas de Machine Learning, geração/análise de datasets em JSON, planilhas e relatórios automatizados.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-desktop"></i> Automação, Desktop & Jogos</h4>
        <p>Selenium para scraping e validação, interfaces Tkinter com multithreading concorrente, além de desenvolvimento e engenharia reversa de jogos em LOVE2D, PICO-8 e Unity.</p>
      </div>
    `,
    techs: ['Python', 'Flask', 'Docker', 'Selenium', 'Asyncio', 'LLMs Locais', 'Tkinter', 'React Native'],
    links: []
  },

  {
    id: 'projetos',
    code: 'SEC-04 // DELTA',
    name: 'Automação',
    shortName: 'Automação',
    subtitle: 'Pipelines de extração de dados, interfaces e engenharia reversa',
    category: 'Aplicações',
    ra: '08h 50m',
    dec: '+28° 05\'',
    x: 350,
    y: 200,
    accentColor: '#f59e0b',
    stars: [
      { id: 'p0', label: 'Extração de Dados', rx: -50, ry: -40, size: 3.5 },
      { id: 'p1', label: 'Resiliência & Fallback', rx: 50, ry: -40, size: 3 },
      { id: 'p2', label: 'Aplicações Desktop', rx: 55, ry: 45, size: 3 },
      { id: 'p3', label: 'Engenharia Reversa', rx: -45, ry: 45, size: 3 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0], [0, 2]
    ],
    contentHtml: `
      <div class="entry-card">
        <h4><i class="fas fa-search-location"></i> Web Scraper de Leads Automotivos</h4>
        <p>Pipeline completo de coleta e estruturação de leads conectado à <strong>Google Places API</strong>.</p>
        <ul>
          <li>Mecanismo estruturado de fallback para resiliência operacional durante oscilações de rede.</li>
          <li>Tratamento sistemático de restrições de requisições, bloqueios de IP e CAPTCHAs.</li>
          <li>Exportação automática para JSON e consolidação em planilhas Excel formatadas.</li>
        </ul>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-window-maximize"></i> Utilitário Desktop Concorrente (Tkinter)</h4>
        <p>Aplicação desktop construída em Python com separação de rotinas em threads, permitindo download e comutação periódica de planos de fundo sem travamento da interface do usuário.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-gamepad"></i> Desenvolvimento de Jogos & Modding</h4>
        <p>Criação de jogos com LOVE2D e PICO-8. Aplicação de técnicas de engenharia reversa para inspeção e customização de regras em jogos existentes.</p>
      </div>
    `,
    techs: ['Web Scraping', 'Google Places API', 'Python Tkinter', 'Threading', 'JSON & Excel', 'Lua'],
    links: [
      { label: 'Perfil no GitHub', url: 'https://github.com/AllanLLC', icon: 'fab fa-github' }
    ]
  },

  {
    id: 'formacao',
    code: 'SEC-05 // EPSILON',
    name: 'Formação',
    shortName: 'Formação',
    subtitle: 'Formação técnica regular e extensões curriculares',
    category: 'Educação',
    ra: '01h 05m',
    dec: '+60° 20\'',
    x: 0,
    y: -300,
    accentColor: '#f59e0b',
    stars: [
      { id: 'f0', label: 'Ensino Técnico', rx: -55, ry: 0, size: 4 },
      { id: 'f1', label: 'Cursos & Extensões', rx: 55, ry: 0, size: 4 },
      { id: 'f2', label: 'Engenharia de Software', rx: 75, ry: -40, size: 2.8 },
      { id: 'f3', label: 'Design & Usabilidade', rx: -75, ry: -40, size: 2.8 },
      { id: 'f4', label: 'Processos & Negócios', rx: 0, ry: 50, size: 2.8 }
    ],
    lines: [
      [0, 1], [1, 2], [0, 3], [0, 4], [1, 4]
    ],
    contentHtml: `
      <div class="entry-card">
        <h4>Ensino Médio Técnico em Desenvolvimento de Sistemas</h4>
        <span class="period">Colégio Estadual Sagrada Família (2022 – 2024)</span>
        <p>Formação em lógica computacional, estruturação de dados, arquitetura de sistemas e metodologias de desenvolvimento de software.</p>
      </div>

      <div class="entry-card">
        <h4>Alura — Formação Complementar Especializada (+200 Horas)</h4>
        <ul>
          <li><strong>Tecnologia & Back-end:</strong> Back-end (36h), Front-end (29h), Mobile (20h), DevOps (16h), Dados (14h), Redes (16h), Modelagem de Banco de Dados (8h).</li>
          <li><strong>UX & Design:</strong> Fundamentos do Design Visual (50h), UX Strategy (12h), UX Usability (10h).</li>
          <li><strong>Gestão & Negócios:</strong> Gestão & Negócios (75h), Empreendedorismo (8h), Gerenciamento de Projetos (8h), Marketing Digital (8h).</li>
        </ul>
      </div>
    `,
    techs: ['Desenvolvimento de Sistemas', 'Engenharia de Software', 'Back-end', 'DevOps', 'UX Strategy'],
    links: [
      { label: 'Certificado Consolidado Alura', url: 'https://relatorios.alura.com.br/user/allan-de-castro/fullCertificate/6dc4867a9cf97d0234b15dbceb2563dd', icon: 'fas fa-external-link-alt' }
    ]
  },

  {
    id: 'perfil',
    code: 'SEC-06 // ZETA',
    name: 'Sobre',
    shortName: 'Sobre',
    subtitle: 'Perfil profissional, competências comunicativas e canais',
    category: 'Visão Geral',
    ra: '05h 45m',
    dec: '-24° 10\'',
    x: -360,
    y: -170,
    accentColor: '#f59e0b',
    stars: [
      { id: 'b0', label: 'Allan de Castro', rx: 0, ry: 0, size: 4.5 },
      { id: 'b1', label: 'Comunicação Global', rx: -50, ry: -35, size: 3 },
      { id: 'b2', label: 'Resolução Técnica', rx: 50, ry: -35, size: 3 },
      { id: 'b3', label: 'Colaboração & QA', rx: 0, ry: 45, size: 3 }
    ],
    lines: [
      [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]
    ],
    contentHtml: `
      <p>Desenvolvedor com formação técnica e experiência profissional sólida em <strong>Python</strong>. Especialista em automações, integrações com APIs REST, web scraping, ferramentas CLI e arquitetura de sistemas com inteligência artificial.</p>

      <div class="entry-card">
        <h4><i class="fas fa-globe"></i> Atuação Global e Comunicação</h4>
        <p><strong>Inglês Fluente:</strong> Capacidade comprovada para comunicação com times internacionais, redação técnica e colaboração técnica em repositórios globais.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-check-circle"></i> Foco em Resolução de Problemas</h4>
        <p>Histórico comprovado em identificação de gargalos, otimização de latência, mitigação de falhas e manutenção contínua de software.</p>
      </div>

      <div class="entry-card">
        <h4><i class="fas fa-address-card"></i> Dados de Contato Direto</h4>
        <p>
          <strong>Localização:</strong> Campo Largo, Paraná<br>
          <strong>Telefone:</strong> (41) 98493-6480<br>
          <strong>Email:</strong> allandecastro2007@gmail.com
        </p>
      </div>
    `,
    techs: ['Python', 'Inglês Fluente', 'Resolução de Problemas', 'Documentação Técnica'],
    links: [
      { label: 'LinkedIn: /in/allan-castro-074701239', url: 'https://linkedin.com/in/allan-castro-074701239', icon: 'fab fa-linkedin' },
      { label: 'GitHub: github.com/AllanLLC', url: 'https://github.com/AllanLLC', icon: 'fab fa-github' }
    ]
  }
];

// --- SETUP DO CANVAS & ESTADO (RENDERIZAÇÃO EM CPU OTIMIZADA) ---
const canvas = document.getElementById('starChartCanvas');
const ctx = canvas.getContext('2d', { alpha: false }); // Desativa canal alfa no buffer de tela para ganho de CPU

let width = window.innerWidth;
let height = window.innerHeight;

// Coordenadas da Câmera
const camera = {
  x: 0,
  y: 0,
  zoom: 1.0,
  targetX: 0,
  targetY: 0,
  targetZoom: 1.0
};

// Flags de controle de ciclo de CPU (Zero CPU em repouso)
let isAnimating = false;
let needsRedraw = true;

// Background Stars estáticas (computadas 1 única vez, números redondos e sem cálculos trigonométricos por frame)
const BG_STARS_COUNT = 220;
const bgStars = [];

function generateStaticBackgroundStars() {
  bgStars.length = 0;
  for (let i = 0; i < BG_STARS_COUNT; i++) {
    bgStars.push({
      x: Math.floor((Math.random() - 0.5) * 3600),
      y: Math.floor((Math.random() - 0.5) * 3600),
      size: (i % 5 === 0) ? 2 : 1, // Padrão uniforme sem floats pesados
      isMajor: (i % 20 === 0)
    });
  }
}

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  requestRedraw();
}
window.addEventListener('resize', resizeCanvas);

// --- CONVERSÕES DE COORDENADAS ---
function screenToWorld(sx, sy) {
  return {
    x: (sx - width / 2) / camera.zoom - camera.x,
    y: (sy - height / 2) / camera.zoom - camera.y
  };
}

function worldToScreen(wx, wy) {
  return {
    x: (wx + camera.x) * camera.zoom + width / 2,
    y: (wy + camera.y) * camera.zoom + height / 2
  };
}

// --- INTERATIVIDADE DO MOUSE / ARRASTE ---
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let hoveredConstellation = null;
let hoveredStar = null;
let activeIndex = 0;

canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  }
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    camera.targetX += dx / camera.zoom;
    camera.targetY += dy / camera.zoom;
    camera.x = camera.targetX;
    camera.y = camera.targetY;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    requestRedraw();
  } else {
    handleHitTest(e.clientX, e.clientY);
  }
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

canvas.addEventListener('click', (e) => {
  const distDragged = Math.hypot(e.clientX - dragStartX, e.clientY - dragStartY);
  if (distDragged > 5) return; // Foi arraste de câmera, não clique

  const worldPos = screenToWorld(e.clientX, e.clientY);
  let clicked = findConstellationAt(worldPos.x, worldPos.y);

  if (clicked) {
    focusConstellation(clicked);
    openDrawer(clicked);
  }
});

// Zoom por Scroll
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.12 : 0.89;
  const newZoom = Math.min(Math.max(camera.targetZoom * factor, 0.45), 2.5);
  camera.targetZoom = newZoom;
  startAnimationLoop();
}, { passive: false });

function findConstellationAt(wx, wy) {
  for (const c of CONSTELLATIONS) {
    // Checagem em cada estrela
    for (const s of c.stars) {
      const sx = c.x + s.rx;
      const sy = c.y + s.ry;
      if (Math.hypot(wx - sx, wy - sy) < (s.size + 14) / camera.zoom) {
        return c;
      }
    }
    // Checagem pelo nó central
    if (Math.hypot(wx - c.x, wy - c.y) < 110) {
      return c;
    }
  }
  return null;
}

function handleHitTest(mouseX, mouseY) {
  const worldPos = screenToWorld(mouseX, mouseY);
  const prevConst = hoveredConstellation;
  const prevStar = hoveredStar;

  hoveredConstellation = null;
  hoveredStar = null;

  for (const c of CONSTELLATIONS) {
    for (const s of c.stars) {
      const sx = c.x + s.rx;
      const sy = c.y + s.ry;
      if (Math.hypot(worldPos.x - sx, worldPos.y - sy) < (s.size + 14) / camera.zoom) {
        hoveredConstellation = c;
        hoveredStar = s;
        break;
      }
    }
    if (hoveredConstellation) break;

    if (Math.hypot(worldPos.x - c.x, worldPos.y - c.y) < 95) {
      hoveredConstellation = c;
      break;
    }
  }

  canvas.style.cursor = hoveredConstellation ? 'pointer' : (isDragging ? 'grabbing' : 'grab');

  if (prevConst !== hoveredConstellation || prevStar !== hoveredStar) {
    requestRedraw();
  }
}

// --- RENDERIZADOR 2D TÉCNICO (OTIMIZADO PARA CPU) ---
function renderStarChart() {
  // 1. Fundo Sólido Fosco (Sem gradientes)
  ctx.fillStyle = '#101012';
  ctx.fillRect(0, 0, width, height);

  // 2. Grade de Coordenadas Astronômicas (Linhas sólidas discretas)
  drawAstronomicalGrid();

  // 3. Estrelas de Fundo Estáticas (Sem sombras/blurs)
  drawBackgroundField();

  // 4. Desenho das Constelações e Linhas de Conexão
  drawConstellations();

  // Atualiza Telemetria Textual
  updateTelemetry();
}

function drawAstronomicalGrid() {
  ctx.strokeStyle = '#1a1a1e';
  ctx.lineWidth = 1;

  const center = worldToScreen(0, 0);

  // Círculos de Declinação Celestial (Equator & Paralelos celestes)
  const radii = [180, 360, 540, 750];
  for (const r of radii) {
    const screenRadius = r * camera.zoom;
    if (screenRadius > 10 && screenRadius < Math.max(width, height) * 2) {
      ctx.beginPath();
      ctx.arc(center.x, center.y, screenRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // Eixos Principais (Meridianos de Ascensão Reta)
  ctx.beginPath();
  ctx.moveTo(0, center.y);
  ctx.lineTo(width, center.y);
  ctx.moveTo(center.x, 0);
  ctx.lineTo(center.x, height);
  ctx.stroke();

  // Marcas nos Eixos (Reticulado instrumental)
  ctx.fillStyle = '#3f3f46';
  ctx.font = '10px "IBM Plex Mono", monospace';
  ctx.fillText('00h [EQUATOR]', center.x + 10, center.y - 8);
}

function drawBackgroundField() {
  for (const star of bgStars) {
    const sx = (star.x + camera.x) * camera.zoom + width / 2;
    const sy = (star.y + camera.y) * camera.zoom + height / 2;

    if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
      ctx.fillStyle = star.isMajor ? '#71717a' : '#3f3f46';
      // Desenhando retângulos de 1-2px diretamente (muito mais rápido na CPU que arc())
      ctx.fillRect(Math.floor(sx), Math.floor(sy), star.size, star.size);
    }
  }
}

function drawConstellations() {
  for (const c of CONSTELLATIONS) {
    const isHovered = (hoveredConstellation && hoveredConstellation.id === c.id);
    const centerScreen = worldToScreen(c.x, c.y);

    // Linhas de Ligação da Constelação
    ctx.strokeStyle = isHovered ? '#d97706' : '#2d2d32';
    ctx.lineWidth = isHovered ? 1.5 : 1;

    for (const [aIdx, bIdx] of c.lines) {
      const starA = c.stars[aIdx];
      const starB = c.stars[bIdx];
      const posA = worldToScreen(c.x + starA.rx, c.y + starA.ry);
      const posB = worldToScreen(c.x + starB.rx, c.y + starB.ry);

      ctx.beginPath();
      ctx.moveTo(posA.x, posA.y);
      ctx.lineTo(posB.x, posB.y);
      ctx.stroke();
    }

    // Estrelas / Nós
    for (const s of c.stars) {
      const starPos = worldToScreen(c.x + s.rx, c.y + s.ry);
      const isStarHovered = (hoveredStar && hoveredStar.id === s.id);
      const rad = s.size * Math.max(0.7, camera.zoom * 0.85);

      // Ponto Central Sólido
      ctx.fillStyle = isHovered ? '#f59e0b' : '#e4e4e7';
      ctx.beginPath();
      ctx.arc(starPos.x, starPos.y, rad, 0, Math.PI * 2);
      ctx.fill();

      // Mira Técnica (Crosshair) ao passar mouse na estrela
      if (isStarHovered) {
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(starPos.x, starPos.y, rad + 4, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px "IBM Plex Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(s.label, starPos.x, starPos.y - rad - 8);
      }
    }

    // Rótulo da Constelação (Estilo Cartográfico Técnico)
    ctx.textAlign = 'center';
    ctx.font = '600 12px "IBM Plex Mono", monospace';
    ctx.fillStyle = isHovered ? '#f59e0b' : '#a1a1aa';
    ctx.fillText(c.name.toUpperCase(), centerScreen.x, centerScreen.y + 115 * camera.zoom);

    // Coordenadas RA/DEC abaixo do nome
    ctx.font = '10px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#71717a';
    ctx.fillText(`${c.ra} / ${c.dec}`, centerScreen.x, centerScreen.y + 130 * camera.zoom);
  }
}

function updateTelemetry() {
  const coordElem = document.getElementById('telemetryCoords');
  const zoomElem = document.getElementById('telemetryZoom');

  // Cálculo simulado de coordenadas a partir do centro da tela
  const raHours = Math.floor(Math.abs(camera.x / 40) % 24).toString().padStart(2, '0');
  const raMins = Math.floor(Math.abs(camera.y / 10) % 60).toString().padStart(2, '0');
  const decSign = camera.y >= 0 ? '+' : '-';
  const decDeg = Math.floor(Math.abs(camera.y / 20) % 90).toString().padStart(2, '0');

  coordElem.innerText = `RA ${raHours}h ${raMins}m / DEC ${decSign}${decDeg}°`;
  zoomElem.innerText = `${camera.zoom.toFixed(2)}x`;
}

// --- CONTROLE DE ANIMAÇÃO COM CONSUMO MÍNIMO DE CPU ---
function requestRedraw() {
  needsRedraw = true;
  if (!isAnimating) {
    renderStarChart();
  }
}

function startAnimationLoop() {
  if (isAnimating) return;
  isAnimating = true;

  function loop() {
    // Interpolação de movimento suave
    const dx = camera.targetX - camera.x;
    const dy = camera.targetY - camera.y;
    const dz = camera.targetZoom - camera.zoom;

    camera.x += dx * 0.12;
    camera.y += dy * 0.12;
    camera.zoom += dz * 0.12;

    renderStarChart();

    // Se a distância for insignificante, encerra o loop para poupar CPU
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(dz) < 0.002) {
      camera.x = camera.targetX;
      camera.y = camera.targetY;
      camera.zoom = camera.targetZoom;
      renderStarChart();
      isAnimating = false;
      return;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

function focusConstellation(constellation) {
  camera.targetX = -constellation.x;
  camera.targetY = -constellation.y;
  camera.targetZoom = 1.3;
  activeIndex = CONSTELLATIONS.findIndex(c => c.id === constellation.id);
  updateActiveNavButton(constellation.id);
  startAnimationLoop();
}

function resetView() {
  camera.targetX = 0;
  camera.targetY = 0;
  camera.targetZoom = 1.0;
  updateActiveNavButton(null);
  startAnimationLoop();
}

// --- PAINEL LATERAL (INSPECTOR DE DETALHES) ---
const drawer = document.getElementById('detailDrawer');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');
const drawerSectorCode = document.getElementById('drawerSectorCode');
const drawerCategory = document.getElementById('drawerCategory');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSubtitle = document.getElementById('drawerSubtitle');
const drawerBody = document.getElementById('drawerBody');
const drawerTechs = document.getElementById('drawerTechs');
const drawerLinks = document.getElementById('drawerLinks');
const drawerLinksSection = document.getElementById('drawerLinksSection');

function openDrawer(constellation) {
  drawerSectorCode.innerText = constellation.code;
  drawerCategory.innerText = constellation.category;
  drawerTitle.innerText = constellation.name;
  drawerSubtitle.innerText = `${constellation.subtitle} • COORD [${constellation.ra}, ${constellation.dec}]`;
  drawerBody.innerHTML = constellation.contentHtml;

  // Tags
  drawerTechs.innerHTML = constellation.techs
    .map(t => `<span class="tech-pill">${t}</span>`)
    .join('');

  // Links
  if (constellation.links && constellation.links.length > 0) {
    drawerLinksSection.style.display = 'block';
    drawerLinks.innerHTML = constellation.links
      .map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="reference-link"><i class="${l.icon}"></i> ${l.label}</a>`)
      .join('');
  } else {
    drawerLinksSection.style.display = 'none';
    drawerLinks.innerHTML = '';
  }

  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}

drawerCloseBtn.addEventListener('click', closeDrawer);

// Teclado (ESC fecha, Setas navegam)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) {
    closeDrawer();
  } else if (e.key === 'ArrowRight' && drawer.classList.contains('open')) {
    navigateConstellation(1);
  } else if (e.key === 'ArrowLeft' && drawer.classList.contains('open')) {
    navigateConstellation(-1);
  }
});

function navigateConstellation(direction) {
  activeIndex = (activeIndex + direction + CONSTELLATIONS.length) % CONSTELLATIONS.length;
  const target = CONSTELLATIONS[activeIndex];
  focusConstellation(target);
  openDrawer(target);
}

document.getElementById('btnPrevConstellation').addEventListener('click', () => navigateConstellation(-1));
document.getElementById('btnNextConstellation').addEventListener('click', () => navigateConstellation(1));

// --- MENU DE NAVEGAÇÃO SUPERIOR ---
function buildNav() {
  const container = document.getElementById('constellationNav');
  container.innerHTML = '';

  CONSTELLATIONS.forEach((c) => {
    const btn = document.createElement('button');
    btn.className = 'nav-sector-btn';
    btn.dataset.id = c.id;
    btn.innerText = c.shortName;

    btn.addEventListener('click', () => {
      focusConstellation(c);
      openDrawer(c);
    });

    container.appendChild(btn);
  });
}

function updateActiveNavButton(id) {
  document.querySelectorAll('.nav-sector-btn').forEach(btn => {
    if (btn.dataset.id === id) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Controles de Ferramentas
document.getElementById('btnZoomIn').addEventListener('click', () => {
  camera.targetZoom = Math.min(camera.targetZoom * 1.25, 2.5);
  startAnimationLoop();
});

document.getElementById('btnZoomOut').addEventListener('click', () => {
  camera.targetZoom = Math.max(camera.targetZoom * 0.8, 0.45);
  startAnimationLoop();
});

document.getElementById('btnReset').addEventListener('click', resetView);

// --- INICIALIZAÇÃO ---
generateStaticBackgroundStars();
resizeCanvas();
buildNav();
renderStarChart();
