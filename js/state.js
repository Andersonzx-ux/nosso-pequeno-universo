/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — GERENCIADOR DE ESTADO & PERSISTÊNCIA LOCAL
 * ============================================================================
 * 
 * Gerencia de forma transparente e segura:
 * - Quais das 18 experiências já foram exploradas (progresso afetivo sem cobrança)
 * - Conquistas desbloqueadas (com disparador de celebração)
 * - Missões marcadas como concluídas
 * - Mensagens criadas para a cápsula do tempo
 * - Estado, carinho e comidinhas do mascote virtual
 * - Assinatura do contrato de aventuras
 */

class UniverseState {
  constructor() {
    this.STORAGE_PREFIX = "universo_presente_";

    // Limpeza de segurança dos dados de testes anteriores do navegador
    try {
      localStorage.removeItem("universo_afetivo_visited_experiences");
      localStorage.removeItem("universo_afetivo_opened_letters");
      localStorage.removeItem("universo_afetivo_contract_signature");
      localStorage.removeItem("universo_presente_visited_experiences");
      localStorage.removeItem("universo_presente_opened_letters");
      localStorage.removeItem("universo_presente_contract_signature");
    } catch (e) {}

    this.visitedExperiences = new Set(this.load("visited_experiences", []));
    this.unlockedAchievements = new Set(this.load("unlocked_achievements", ["ach-1", "ach-2", "ach-3", "ach-4", "ach-5"]));
    this.completedMissions = new Set(this.load("completed_missions", ["mis-1"]));
    this.missionNotes = this.load("mission_notes", {});
    this.customCapsules = this.load("custom_capsules", []);
    this.customRecipes = this.load("custom_recipes", []);
    this.contractSignature = this.load("contract_signature", null);
    this.mascotState = this.load("mascot_state", {
      lovePoints: 10,
      fedCount: 0,
      petCount: 0,
      accessory: "none",
      name: (window.UNIVERSE_CONFIG && window.UNIVERSE_CONFIG.mascot) ? window.UNIVERSE_CONFIG.mascot.defaultName : "Pipoca"
    });
    this.openedLetters = new Set(this.load("opened_letters", []));
    this.soundMuted = this.load("sound_muted", false);

    this.subscribers = [];
  }

  // Auxiliares de LocalStorage seguros (com fallback se estiver desativado)
  save(key, value) {
    try {
      localStorage.setItem(this.STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.warn("Não foi possível salvar no localStorage:", e);
    }
  }

  load(key, defaultValue) {
    try {
      const data = localStorage.getItem(this.STORAGE_PREFIX + key);
      return data !== null ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn("Não foi possível carregar do localStorage:", e);
      return defaultValue;
    }
  }

  // Notifica componentes interessados
  subscribe(fn) {
    this.subscribers.push(fn);
  }

  notify(event, payload) {
    this.subscribers.forEach(fn => fn(event, payload));
  }

  // Marcar uma experiência como visitada
  markExperienceVisited(expId) {
    if (!this.visitedExperiences.has(expId)) {
      this.visitedExperiences.add(expId);
      this.save("visited_experiences", Array.from(this.visitedExperiences));
      this.notify("experience_visited", { expId, total: this.visitedExperiences.size });

      // Se visitou todas as experiências, desbloqueia conquista secreta!
      const totalExp = (window.UNIVERSE_CONFIG && window.UNIVERSE_CONFIG.experiences) ? window.UNIVERSE_CONFIG.experiences.length : 17;
      if (this.visitedExperiences.size >= totalExp) {
        this.unlockAchievement("ach-6");
      }
    }
  }

  isExperienceVisited(expId) {
    return this.visitedExperiences.has(expId);
  }

  getExplorationProgress() {
    const total = (window.UNIVERSE_CONFIG && window.UNIVERSE_CONFIG.experiences) ? window.UNIVERSE_CONFIG.experiences.length : 17;
    return {
      visited: this.visitedExperiences.size,
      total: total,
      percent: Math.round((this.visitedExperiences.size / total) * 100)
    };
  }

  // Conquistas
  unlockAchievement(achId) {
    if (!this.unlockedAchievements.has(achId)) {
      this.unlockedAchievements.add(achId);
      this.save("unlocked_achievements", Array.from(this.unlockedAchievements));

      // Busca dados da conquista
      let achTitle = "Nova Conquista!";
      if (window.UNIVERSE_CONFIG && window.UNIVERSE_CONFIG.achievements) {
        const found = window.UNIVERSE_CONFIG.achievements.find(a => a.id === achId);
        if (found) achTitle = found.title;
      }

      // Toca sonzinho suave e notifica
      if (window.universeAudio) {
        window.universeAudio.playAchievementSparkle();
      }

      this.notify("achievement_unlocked", { achId, title: achTitle });
    }
  }

  isAchievementUnlocked(achId) {
    return this.unlockedAchievements.has(achId);
  }

  // Cartas abertas
  markLetterOpened(letterId) {
    this.openedLetters.add(letterId);
    this.save("opened_letters", Array.from(this.openedLetters));
    this.notify("letter_opened", { letterId });
  }

  isLetterOpened(letterId) {
    return this.openedLetters.has(letterId);
  }

  // Missões
  toggleMission(missionId, completed, note = "") {
    if (completed) {
      this.completedMissions.add(missionId);
      if (note) this.missionNotes[missionId] = note;
    } else {
      this.completedMissions.delete(missionId);
      delete this.missionNotes[missionId];
    }
    this.save("completed_missions", Array.from(this.completedMissions));
    this.save("mission_notes", this.missionNotes);
    this.notify("mission_updated", { missionId, completed });
  }

  isMissionCompleted(missionId) {
    return this.completedMissions.has(missionId);
  }

  getMissionNote(missionId) {
    return this.missionNotes[missionId] || "";
  }

  // Cápsula do Tempo personalizada
  addCustomCapsule(capsule) {
    this.customCapsules.push(capsule);
    this.save("custom_capsules", this.customCapsules);
    this.notify("capsule_added", capsule);
  }

  getCustomCapsules() {
    return this.customCapsules;
  }

  // Receitas personalizadas
  addCustomRecipe(recipe) {
    this.customRecipes.push(recipe);
    this.save("custom_recipes", this.customRecipes);
    this.notify("recipe_added", recipe);
  }

  getCustomRecipes() {
    return this.customRecipes;
  }

  // Contrato
  saveContractSignature(dataUrl) {
    this.contractSignature = dataUrl;
    this.save("contract_signature", dataUrl);
    this.notify("contract_signed", dataUrl);
  }

  getContractSignature() {
    return this.contractSignature;
  }

  // Mascote
  interactMascot(type) {
    if (type === "pet") {
      this.mascotState.petCount++;
      this.mascotState.lovePoints += 2;
    } else if (type === "feed") {
      this.mascotState.fedCount++;
      this.mascotState.lovePoints += 3;
    }
    this.save("mascot_state", this.mascotState);
    this.notify("mascot_updated", this.mascotState);
  }

  setMascotAccessory(acc) {
    this.mascotState.accessory = acc;
    this.save("mascot_state", this.mascotState);
    this.notify("mascot_updated", this.mascotState);
  }

  setMascotName(name) {
    this.mascotState.name = name.trim();
    this.save("mascot_state", this.mascotState);
    this.notify("mascot_updated", this.mascotState);
  }

  // Zera todo o progresso de exploração e descobertas para entrega limpa do projeto
  resetAllProgress() {
    this.visitedExperiences.clear();
    this.save("visited_experiences", []);
    this.openedLetters.clear();
    this.save("opened_letters", []);
    this.contractSignature = null;
    this.save("contract_signature", null);

    try {
      localStorage.removeItem(this.STORAGE_PREFIX + "visited_experiences");
      localStorage.removeItem(this.STORAGE_PREFIX + "opened_letters");
      localStorage.removeItem(this.STORAGE_PREFIX + "contract_signature");
      localStorage.removeItem("universo_afetivo_visited_experiences");
      localStorage.removeItem("universo_afetivo_opened_letters");
    } catch (e) {}

    this.notify("experience_visited", { expId: null, total: 0 });
    console.log("✨ Todas as descobertas foram zeradas com sucesso!");
  }
}

window.universeState = new UniverseState();
window.universeReset = () => window.universeState.resetAllProgress();
