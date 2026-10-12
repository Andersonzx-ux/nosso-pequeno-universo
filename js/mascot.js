/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — MASCOTE FLUTUANTE COMPANHEIRO
 * ============================================================================
 * 
 * Um bichinho virtual adorável que fica no cantinho da tela,
 * comemora quando a namorada explora novas áreas e dá dicas carinhosas.
 */

class FloatingMascotWidget {
  constructor() {
    this.bubbleEl = null;
    this.fabEl = null;
    this.bubbleTimeout = null;
  }

  init() {
    this.bubbleEl = document.getElementById("mascotSpeechBubble");
    this.fabEl = document.getElementById("mascotFabBtn");

    if (!this.fabEl || !this.bubbleEl) return;

    this.fabEl.addEventListener("click", () => {
      this.sayRandomMessage();
      // Também dá 1 ponto de carinho no estado
      if (window.universeState) {
        window.universeState.interactMascot("pet");
      }
      if (window.universeAudio) {
        window.universeAudio.playChimeNote(880, 0, 0.4, 0.1);
      }
    });

    // Mostra uma saudação 3 segundos após a entrada
    setTimeout(() => {
      this.say("Oii meu amor! Estou aqui te acompanhando por todo o universo! ✨", 5000);
    }, 3500);

    // Ouve eventos do estado
    if (window.universeState) {
      window.universeState.subscribe((event, data) => {
        if (event === "experience_visited") {
          this.say(`Que lindo! Você já explorou ${data.total} partes do nosso universo! 💖`, 4000);
        } else if (event === "achievement_unlocked") {
          this.say(`Parabéns! Você desbloqueou: "${data.title}" 🏆`, 5000);
        }
      });
    }
  }

  say(text, duration = 4000) {
    if (!this.bubbleEl) return;
    this.bubbleEl.textContent = text;
    this.bubbleEl.classList.add("active");

    if (this.bubbleTimeout) clearTimeout(this.bubbleTimeout);
    this.bubbleTimeout = setTimeout(() => {
      this.bubbleEl.classList.remove("active");
    }, duration);
  }

  sayRandomMessage() {
    const config = window.UNIVERSE_CONFIG;
    if (!config || !config.mascot) return;
    const all = [
      ...config.mascot.dialogues.greetings,
      ...config.mascot.dialogues.petReactions,
      ...config.mascot.dialogues.secretHints
    ];
    const pick = all[Math.floor(Math.random() * all.length)];
    this.say(pick, 4500);
  }
}

window.floatingMascot = new FloatingMascotWidget();
