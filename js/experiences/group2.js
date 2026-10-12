/**
 * ============================================================================
 * EXPERIÊNCIAS — ASTRAL, CÁPSULA, CONQUISTAS, ROLETA, ARQUIVO
 * ============================================================================
 */

window.universeExperiences = window.universeExperiences || {};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 07: MAPA ASTRAL INVENTADO DO CASAL
// ----------------------------------------------------------------------------
window.universeExperiences["exp07"] = function(container, meta) {
  const chart = window.UNIVERSE_CONFIG.astralChart;

  const metersHtml = chart.compatibilityMeters.map(m => `
    <div class="compatibility-bar-group">
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
        <span>${m.label}</span>
        <span style="font-weight: 700; color: var(--gold-starlight);">${m.value}%</span>
      </div>
      <div class="comp-meter">
        <div class="comp-meter-fill" style="width: ${m.value}%;"></div>
      </div>
      <p style="font-size: 0.75rem; color: #BBB; margin: 0; font-style: italic;">${m.note}</p>
    </div>
  `).join("");

  const predictionsHtml = chart.absurdPredictions.map(p => `
    <li style="margin-bottom: 0.75rem; line-height: 1.5; color: #EEE;">${p}</li>
  `).join("");

  container.innerHTML = `
    <div class="astral-card-wrapper">
      <div style="text-align: center; margin-bottom: 2rem;">
        <span style="font-size: 2.2rem;">✨🪐✨</span>
        <h2 style="color: var(--gold-starlight); margin: 0.5rem 0;">${chart.title}</h2>
        <p style="color: #DDD; font-size: 0.9rem; max-width: 500px; margin: 0 auto;">${chart.subtitle}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: rgba(255,255,255,0.06); padding: 1.25rem; border-radius: var(--radius-md); border-top: 3px solid var(--rose-vintage);">
          <h4 style="color: var(--rose-soft); margin-bottom: 0.4rem;">${chart.partners.her.name}</h4>
          <p style="font-size: 0.85rem; color: #FFF; margin: 0.2rem 0;">⭐ ${chart.partners.her.sign}</p>
          <p style="font-size: 0.85rem; color: #FFF; margin: 0.2rem 0;">⬆️ ${chart.partners.her.ascendant}</p>
          <p style="font-size: 0.85rem; color: #CCC; margin: 0.2rem 0;">🌙 ${chart.partners.her.moon}</p>
        </div>

        <div style="background: rgba(255,255,255,0.06); padding: 1.25rem; border-radius: var(--radius-md); border-top: 3px solid var(--gold-border);">
          <h4 style="color: var(--gold-soft); margin-bottom: 0.4rem;">${chart.partners.him.name}</h4>
          <p style="font-size: 0.85rem; color: #FFF; margin: 0.2rem 0;">⭐ ${chart.partners.him.sign}</p>
          <p style="font-size: 0.85rem; color: #FFF; margin: 0.2rem 0;">⬆️ ${chart.partners.him.ascendant}</p>
          <p style="font-size: 0.85rem; color: #CCC; margin: 0.2rem 0;">🌙 ${chart.partners.him.moon}</p>
        </div>
      </div>

      <h3 style="color: var(--gold-starlight); margin-bottom: 1rem;">Nossos Índices Cósmicos</h3>
      ${metersHtml}

      <div style="margin: 2rem 0; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: var(--radius-md); border-left: 3px solid var(--rose-medium);">
        <h4 style="color: var(--rose-soft); margin-bottom: 0.75rem;">Previsões Semanais da Física do Nosso Amor:</h4>
        <ul style="padding-left: 1.2rem; margin: 0;">${predictionsHtml}</ul>
      </div>

      <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
        <p style="font-style: italic; color: #FFF; font-size: 1.05rem; margin: 0;">${chart.conclusion}</p>
      </div>
    </div>
  `;
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 08: CÁPSULA DO TEMPO
// ----------------------------------------------------------------------------
window.universeExperiences["exp08"] = function(container, meta) {
  const defaultCapsules = window.UNIVERSE_CONFIG.timeCapsules;
  const customCapsules = (window.universeState) ? window.universeState.getCustomCapsules() : [];
  const allCapsules = [...defaultCapsules, ...customCapsules];

  function openCapsuleModal(cap, isUnlocked) {
    const modal = document.createElement("div");
    modal.className = "modal-backdrop modal-open";
    modal.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn">&times;</button>
        <span class="exp-badge-category">Cápsula do Tempo</span>
        <h2 style="margin: 0.5rem 0 1rem; color: var(--wine-deep);">${cap.title}</h2>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Data de Abertura: ${cap.unlockDate}</p>

        ${isUnlocked ? `
          <div style="background: #FAF0EE; border: 1px solid var(--border-gold); padding: 1.5rem; border-radius: var(--radius-md); margin: 1.5rem 0;">
            <p style="font-family: var(--font-serif); line-height: 1.8; margin: 0;">${cap.fullMessage}</p>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 0.85rem; color: var(--rose-medium); font-weight: 600;">✨ O futuro chegou e nós continuamos juntos!</p>
          </div>
        ` : `
          <div style="background: #FDF9F3; border: 1px dashed var(--gold-border); padding: 2rem; border-radius: var(--radius-md); text-align: center; margin: 1.5rem 0;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔒</div>
            <h3 style="color: var(--wine-deep); margin-bottom: 0.5rem;">Cápsula Lacrada</h3>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">${cap.sealedMessage}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
              O conteúdo completo só será revelado automaticamente quando o dia chegar!
            </p>
          </div>
        `}
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector(".modal-close-btn").onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }

  function openCreateModal() {
    const modal = document.createElement("div");
    modal.className = "modal-backdrop modal-open";
    modal.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn">&times;</button>
        <span class="exp-badge-category">Criar Nova Cápsula</span>
        <h2 style="margin: 0.5rem 0 1rem; color: var(--wine-deep);">Lacre Uma Mensagem Para o Futuro</h2>

        <form id="newCapsuleForm">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.3rem;">Título da Cápsula:</label>
            <input type="text" id="capTitle" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: var(--radius-sm);" placeholder="Ex: Para abrir na nossa próxima viagem...">
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.3rem;">Data de Abertura:</label>
            <input type="date" id="capDate" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: var(--radius-sm);">
          </div>

          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.3rem;">Mensagem Secreta:</label>
            <textarea id="capMessage" rows="5" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: var(--radius-sm);" placeholder="Escreva o que você sonha ou promete para essa data..."></textarea>
          </div>

          <button type="submit" style="width: 100%; padding: 1rem; background: var(--wine-deep); color: #FFF; border-radius: var(--radius-full); font-weight: 600;">
            Lacrar Cápsula 🔐
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector(".modal-close-btn").onclick = () => modal.remove();

    document.getElementById("newCapsuleForm").onsubmit = (e) => {
      e.preventDefault();
      const newCap = {
        id: "cap-custom-" + Date.now(),
        title: document.getElementById("capTitle").value,
        unlockDate: document.getElementById("capDate").value,
        sealedMessage: "Uma promessa solene guardada com carinho para esta data futura.",
        fullMessage: document.getElementById("capMessage").value
      };
      if (window.universeState) {
        window.universeState.addCustomCapsule(newCap);
      }
      modal.remove();
      window.universeExperiences["exp08"](container, meta);
    };
  }

  const now = new Date();
  const listHtml = allCapsules.map((cap, idx) => {
    const unlock = new Date(cap.unlockDate);
    const isUnlocked = now >= unlock;
    return `
      <div class="map-timeline-item" data-idx="${idx}">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-size: 1.8rem;">${isUnlocked ? '🔓' : '🔒'}</span>
          <div>
            <span style="font-size: 0.75rem; color: var(--rose-medium); font-weight: 600;">
              ${isUnlocked ? 'PRONTA PARA ABRIR' : 'DATA DE ABERTURA: ' + cap.unlockDate}
            </span>
            <h4 style="margin: 0.2rem 0; font-size: 1.05rem;">${cap.title}</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">${cap.sealedMessage}</p>
          </div>
        </div>
        <button style="padding: 0.5rem 1rem; border-radius: var(--radius-full); background: ${isUnlocked ? 'var(--wine-deep)' : 'var(--bg-surface-soft)'}; color: ${isUnlocked ? '#FFF' : 'inherit'}; font-size: 0.85rem;">
          ${isUnlocked ? 'Abrir' : 'Ver'}
        </button>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
      <p style="margin: 0; color: var(--text-secondary); max-width: 500px;">
        Mensagens guardadas para o nosso futuro. As cápsulas respeitam o tempo certo para serem reveladas.
      </p>
      <button id="btnNewCapsule" style="padding: 0.75rem 1.5rem; background: var(--wine-deep); color: #FFF; border-radius: var(--radius-full); font-weight: 600; font-size: 0.85rem;">
        + Nova Cápsula
      </button>
    </div>

    <div class="map-timeline-list">${listHtml}</div>
  `;

  document.getElementById("btnNewCapsule").onclick = openCreateModal;

  container.querySelectorAll(".map-timeline-item").forEach(item => {
    item.onclick = () => {
      const idx = parseInt(item.getAttribute("data-idx"), 10);
      const cap = allCapsules[idx];
      const isUnlocked = new Date() >= new Date(cap.unlockDate);
      openCapsuleModal(cap, isUnlocked);
    };
  });
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 09: CONQUISTAS DESBLOQUEADAS
// ----------------------------------------------------------------------------
window.universeExperiences["exp09"] = function(container, meta) {
  const achievements = window.UNIVERSE_CONFIG.achievements;
  const state = window.universeState;

  const cardsHtml = achievements.map(ach => {
    const isUnlocked = state ? state.isAchievementUnlocked(ach.id) : ach.unlocked;
    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon">
          ${isUnlocked ? '🏆' : '🔒'}
        </div>
        <div>
          <span style="font-size: 0.75rem; color: ${isUnlocked ? '#2E7D32' : 'var(--text-muted)'}; font-weight: 700;">
            ${isUnlocked ? 'DESBLOQUEADA' : 'EM BREVE'}
          </span>
          <h4 style="margin: 0.2rem 0; font-size: 1.05rem; color: var(--wine-deep);">${ach.title}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">${ach.desc}</p>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <p style="text-align: center; max-width: 550px; margin: 0 auto 2rem; color: var(--text-secondary);">
      Marcos, piadas internas e momentos da nossa história que fomos conquistando lado a lado.
    </p>
    <div class="achievements-grid">${cardsHtml}</div>
  `;
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 11: ROLETA DOS ENCONTROS
// ----------------------------------------------------------------------------
window.universeExperiences["exp11"] = function(container, meta) {
  const dates = window.UNIVERSE_CONFIG.dateRoulette.dates;
  let isSpinning = false;
  let currentRotation = 0;

  container.innerHTML = `
    <div class="roulette-container">
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Gire a roleta e deixe o destino escolher o nosso próximo programa planejado com carinho!
      </p>

      <div class="roulette-wheel-wrapper">
        <div class="roulette-pointer"></div>
        <canvas id="rouletteCanvas" class="roulette-canvas" width="300" height="300"></canvas>
      </div>

      <button id="btnSpinRoulette" style="padding: 1rem 2.5rem; background: var(--wine-deep); color: #FFF; border-radius: var(--radius-full); font-weight: 700; font-size: 1.05rem; box-shadow: 0 8px 24px rgba(107, 45, 56, 0.3);">
        Girar a Roleta! 🎲
      </button>

      <div id="rouletteResultCard" style="display: none; margin-top: 2rem; text-align: left;"></div>
    </div>
  `;

  const canvas = document.getElementById("rouletteCanvas");
  const ctx = canvas.getContext("2d");
  const numSlices = dates.length;
  const sliceAngle = (2 * Math.PI) / numSlices;
  const colors = ["#6B2D38", "#D49A9E", "#4A1521", "#C5A059", "#843B47"];

  function drawWheel() {
    ctx.clearRect(0, 0, 300, 300);
    const center = 150;
    const radius = 145;

    for (let i = 0; i < numSlices; i++) {
      const angle = i * sliceAngle;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, angle, angle + sliceAngle);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.strokeStyle = "#FFFDF9";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Rótulo
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#FFF";
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(dates[i].category, radius - 20, 4);
      ctx.restore();
    }
  }

  drawWheel();

  const spinBtn = document.getElementById("btnSpinRoulette");
  spinBtn.onclick = () => {
    if (isSpinning) return;
    isSpinning = true;
    spinBtn.disabled = true;

    if (window.universeAudio) {
      for (let t = 0; t < 15; t++) {
        setTimeout(() => window.universeAudio.playRouletteTick(), t * 200);
      }
    }

    const randomDegrees = 1440 + Math.floor(Math.random() * 360);
    currentRotation += randomDegrees;
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
      isSpinning = false;
      spinBtn.disabled = false;

      // Calcula fatia sorteada no topo (270 graus ou ponteiro em -90)
      const actualDegrees = (currentRotation % 360);
      const normalizedAngle = (360 - actualDegrees + 270) % 360;
      const winningIndex = Math.floor(normalizedAngle / (360 / numSlices)) % numSlices;
      const winner = dates[winningIndex];

      if (window.universeAudio) window.universeAudio.playAchievementSparkle();

      const resultBox = document.getElementById("rouletteResultCard");
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="background: var(--bg-surface); border: 2px solid var(--gold-border); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-card);">
          <span class="exp-badge-category">Encontro Sorteado!</span>
          <h3 style="color: var(--wine-deep); font-size: 1.4rem; margin: 0.5rem 0 1rem;">${winner.title}</h3>
          <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">${winner.description}</p>
          
          <div style="background: #FAF0EE; padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h5 style="color: var(--wine-deep); margin-bottom: 0.4rem;">O que preparar:</h5>
            <ul style="padding-left: 1.2rem; font-size: 0.85rem; margin: 0;">
              ${winner.bringList.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>

          <p style="font-size: 0.85rem; color: var(--rose-medium); font-weight: 600; margin: 0;">
            ❤️ Promessa do namorado: ${winner.boyfriendPromise}
          </p>
        </div>
      `;
      resultBox.scrollIntoView({ behavior: "smooth" });
    }, 3600);
  };
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 12: ARQUIVO DE COISAS QUE AMO EM VOCÊ
// ----------------------------------------------------------------------------
window.universeExperiences["exp12"] = function(container, meta) {
  const allItems = window.UNIVERSE_CONFIG.loveArchive;
  let activeFilter = "Todos";
  let searchQuery = "";

  function renderArchive() {
    const categories = ["Todos", ...new Set(allItems.map(i => i.category))];

    const filtered = allItems.filter(item => {
      const matchCat = activeFilter === "Todos" || item.category === activeFilter;
      const matchSearch = item.title.toLowerCase().includes(searchQuery) || item.detail.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    const pillsHtml = categories.map(cat => `
      <button class="recipe-tab-btn ${cat === activeFilter ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    const cardsHtml = filtered.map(item => `
      <div class="archive-card">
        <span style="font-size: 0.75rem; color: var(--rose-medium); font-weight: 700; text-transform: uppercase;">${item.category}</span>
        <h3 style="color: var(--wine-deep); margin: 0.3rem 0 0.75rem; font-size: 1.2rem;">${item.title}</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 0.75rem;">${item.detail}</p>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">📅 ${item.date}</span>
      </div>
    `).join("");

    container.innerHTML = `
      <div class="archive-search-box">
        <input type="text" id="archiveSearchInput" class="archive-search-input" placeholder="Buscar por palavra no arquivo..." value="${searchQuery}">
      </div>

      <div class="recipe-tabs" style="margin-bottom: 1.5rem;">${pillsHtml}</div>

      <div>${cardsHtml.length > 0 ? cardsHtml : '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Nenhum registro encontrado com essa busca.</p>'}</div>
    `;

    const input = document.getElementById("archiveSearchInput");
    input.oninput = (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderArchive();
      document.getElementById("archiveSearchInput").focus();
    };

    container.querySelectorAll(".recipe-tab-btn").forEach(btn => {
      btn.onclick = () => {
        activeFilter = btn.getAttribute("data-cat");
        renderArchive();
      };
    });
  }

  renderArchive();
};
