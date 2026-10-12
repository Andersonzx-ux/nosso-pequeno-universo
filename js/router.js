/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — ROTEADOR DE NAVEGAÇÃO SUAVE
 * ============================================================================
 * 
 * Gerencia a troca fluida entre o Hub Principal e as 18 Experiências.
 * Mantém compatibilidade com o botão "Voltar" nativo de celulares (Safari/Android).
 */

class UniverseRouter {
  constructor() {
    this.currentRoute = "hub";
    this.hubContainer = null;
    this.experienceView = null;
    this.backButton = null;
    this.headerTitle = null;
    this.headerSubtitle = null;
  }

  init() {
    this.hubContainer = document.getElementById("hubContainer");
    this.experienceView = document.getElementById("activeExperienceView");
    this.backButton = document.getElementById("btnNavBack");
    this.headerTitle = document.getElementById("headerSiteTitle");
    this.headerSubtitle = document.getElementById("headerCoupleSub");

    if (this.backButton) {
      this.backButton.addEventListener("click", () => {
        this.navigateTo("hub");
      });
    }

    // Ouve mudanças de hash para suporte ao botão voltar do celular
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace("#", "") || "hub";
      this.handleRoute(hash, false);
    });

    // Rota inicial
    const initialHash = window.location.hash.replace("#", "") || "hub";
    this.handleRoute(initialHash, false);
  }

  navigateTo(routeId) {
    window.location.hash = routeId === "hub" ? "" : routeId;
    this.handleRoute(routeId, true);
  }

  handleRoute(routeId, pushHistory = true) {
    this.currentRoute = routeId;

    if (routeId === "hub" || !routeId) {
      // Exibe Hub Principal
      if (this.hubContainer) this.hubContainer.style.display = "block";
      if (this.experienceView) {
        this.experienceView.classList.remove("active");
        this.experienceView.innerHTML = "";
      }
      if (this.backButton) this.backButton.style.visibility = "hidden";
      if (this.headerTitle && window.UNIVERSE_CONFIG) {
        this.headerTitle.textContent = window.UNIVERSE_CONFIG.meta.siteTitle;
      }
      if (this.headerSubtitle && window.UNIVERSE_CONFIG) {
        this.headerSubtitle.textContent = window.UNIVERSE_CONFIG.meta.coupleName;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Busca detalhes da experiência solicitada
    const config = window.UNIVERSE_CONFIG;
    if (!config) return;

    const exp = config.experiences.find(e => e.id === routeId);
    if (!exp) {
      console.warn("Experiência não encontrada:", routeId);
      this.navigateTo("hub");
      return;
    }

    // Oculta Hub e abre visualizador
    if (this.hubContainer) this.hubContainer.style.display = "none";
    if (this.backButton) this.backButton.style.visibility = "visible";

    if (this.headerTitle) this.headerTitle.textContent = exp.title;
    if (this.headerSubtitle) {
      const totalExp = (config.experiences && config.experiences.length) ? config.experiences.length : 17;
      this.headerSubtitle.textContent = `Experiência ${exp.number} de ${totalExp}`;
    }

    // Marca como visitada no estado do usuário
    if (window.universeState) {
      window.universeState.markExperienceVisited(exp.id);
    }

    // Renderiza a experiência correspondente
    this.renderExperience(exp);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderExperience(exp) {
    if (!this.experienceView) return;

    // Header da experiência
    let html = `
      <div class="experience-banner">
        <div class="container">
          <span class="exp-badge-category">Experiência ${exp.number}</span>
          <h1>${exp.title}</h1>
          <p>${exp.shortDesc}</p>
        </div>
      </div>
      <div class="container exp-content-area" id="expContentArea">
        <!-- Conteúdo específico injetado pelo módulo -->
      </div>
    `;

    this.experienceView.innerHTML = html;
    this.experienceView.classList.add("active");

    // Aciona o carregador da experiência específica
    const contentArea = document.getElementById("expContentArea");
    if (window.universeExperiences && typeof window.universeExperiences[exp.id] === "function") {
      window.universeExperiences[exp.id](contentArea, exp);
    } else {
      contentArea.innerHTML = `<p style="text-align: center; padding: 2rem;">Carregando universo ${exp.title}...</p>`;
    }
  }
}

window.universeRouter = new UniverseRouter();
