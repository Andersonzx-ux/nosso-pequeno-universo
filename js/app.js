/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — APLICAÇÃO PRINCIPAL & BOOTSTRAP
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.UNIVERSE_CONFIG;
  const state = window.universeState;
  const router = window.universeRouter;

  // 1. INICIALIZAÇÃO DO PORTAL DE ENTRADA
  const portalScreen = document.getElementById("portalScreen");
  const btnPortalEnter = document.getElementById("btnPortalEnter");

  if (btnPortalEnter && portalScreen) {
    btnPortalEnter.addEventListener("click", () => {
      // Inicializa áudio sob interação da usuária (compatível com Safari e Chrome)
      if (window.universeAudio) {
        window.universeAudio.initContext();
        window.universeAudio.playChimeNote(523.25, 0, 1.2, 0.15);
      }

      portalScreen.classList.add("portal-hidden");
      setTimeout(() => {
        portalScreen.style.display = "none";
      }, 850);
    });
  }

  // 2. FUNDO ESTELAR AMBIENTE (Leve e sutil)
  const starCanvas = document.getElementById("ambientStarCanvas");
  if (starCanvas) {
    const starCtx = starCanvas.getContext("2d");
    let stars = [];

    function initStars() {
      starCanvas.width = window.innerWidth;
      starCanvas.height = window.innerHeight;
      stars = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * starCanvas.width,
          y: Math.random() * starCanvas.height,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          speed: Math.random() * 0.02 + 0.005
        });
      }
    }

    function animateStars() {
      starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
      starCtx.fillStyle = "#FAF6F0";

      stars.forEach(s => {
        s.alpha += s.speed;
        const currentAlpha = (Math.sin(s.alpha) + 1) / 2 * 0.7 + 0.1;
        starCtx.globalAlpha = currentAlpha;
        starCtx.beginPath();
        starCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        starCtx.fill();
      });

      requestAnimationFrame(animateStars);
    }

    window.addEventListener("resize", initStars);
    initStars();
    animateStars();
  }

  // 3. DIAS JUNTOS & HEADER
  if (config) {
    const start = new Date(config.meta.relationshipStartDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const daysBox = document.getElementById("relationshipDaysCounter");
    if (daysBox) {
      daysBox.textContent = `${diffDays} dias construindo o nosso amor`;
    }
  }

  // 4. ATUALIZAÇÃO DO PROGRESSO DE EXPLORAÇÃO
  function updateProgressCounter() {
    if (!state) return;
    const progress = state.getExplorationProgress();
    const counterPill = document.getElementById("progressCounterPill");
    if (counterPill) {
      counterPill.textContent = `${progress.visited} / ${progress.total} descobertas ✨`;
    }
  }
  updateProgressCounter();

  // 5. RENDERIZAÇÃO DA GRADE DO HUB PRINCIPAL
  let activeCategoryFilter = "all";

  function renderHubGrid() {
    const grid = document.getElementById("experienceGrid");
    if (!grid || !config) return;

    const filtered = config.experiences.filter(exp => {
      return activeCategoryFilter === "all" || exp.category === activeCategoryFilter;
    });

    grid.innerHTML = filtered.map(exp => {
      const isVisited = state ? state.isExperienceVisited(exp.id) : false;
      return `
        <div class="experience-card" data-id="${exp.id}" style="--card-accent: ${exp.accent};">
          <div class="card-top">
            <div class="card-icon-box">
              <span style="font-size: 1.35rem;">✦</span>
            </div>
            <span class="card-number">EXP ${exp.number}</span>
          </div>
          <div class="card-content">
            <h3>${exp.title}</h3>
            <p>${exp.shortDesc}</p>
          </div>
          <div class="card-footer-meta">
            <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600; color: ${exp.accent};">
              ${exp.category}
            </span>
            <span class="${isVisited ? 'visited-badge' : 'unvisited-badge'}">
              ${isVisited ? '✓ Conhecido' : '• Toque para abrir'}
            </span>
          </div>
        </div>
      `;
    }).join("");

    grid.querySelectorAll(".experience-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (router) router.navigateTo(id);
      });
    });
  }

  // Filtros de Categoria
  const categoryNav = document.getElementById("categoryNav");
  if (categoryNav && config) {
    const pillsHtml = `
      <button class="category-pill active" data-cat="all">🌟 Todas as Experiências</button>
      ${config.categories.map(c => `
        <button class="category-pill" data-cat="${c.id}">${c.title}</button>
      `).join("")}
    `;
    categoryNav.innerHTML = pillsHtml;

    categoryNav.querySelectorAll(".category-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        categoryNav.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        activeCategoryFilter = pill.getAttribute("data-cat");
        renderHubGrid();
      });
    });
  }

  renderHubGrid();

  // 6. CONTROLE DE SOM
  const btnSound = document.getElementById("btnSoundToggle");
  let soundOn = true;
  if (btnSound) {
    btnSound.addEventListener("click", () => {
      soundOn = !soundOn;
      btnSound.innerHTML = soundOn ? "🔔" : "🔕";
      if (window.universeAudio) {
        window.universeAudio.soundEffectsEnabled = soundOn;
      }
    });
  }

  // 7. TOAST NOTIFICATION
  const toast = document.getElementById("achievementToast");
  const toastText = document.getElementById("toastTitle");

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  // 8. ESCUTA ATUALIZAÇÕES DO ESTADO
  if (state) {
    state.subscribe((event, data) => {
      if (event === "experience_visited") {
        updateProgressCounter();
        renderHubGrid();
      } else if (event === "achievement_unlocked") {
        showToast(`🏆 Conquista Desbloqueada: ${data.title}!`);
      }
    });
  }

  // 9. INICIALIZA ROTEADOR & MASCOTE
  if (router) router.init();
  if (window.floatingMascot) window.floatingMascot.init();
});
