/**
 * ============================================================================
 * NOSSO PEQUENO UNIVERSO — SISTEMA DE ÁUDIO & SÍNTESE SUAVE
 * ============================================================================
 * 
 * - Reproduz arquivos de áudio reais (.mp3, .m4a, .ogg) colocados em assets/audio/
 * - Se não houver arquivo real configurado ainda, o Web Audio API gera uma
 *   melodia suave de caixinha de música/celestial sem depender de nenhum arquivo externo!
 * - Respeita 100% as regras de autoplay dos navegadores (Safari/Chrome):
 *   Áudio SÓ toca quando a usuária tocar/clicar expressamente no botão!
 */

class UniverseAudioManager {
  constructor() {
    this.audioCtx = null;
    this.currentAudioElement = null;
    this.currentTrackId = null;
    this.isPlaying = false;
    this.volume = 0.8;
    this.synthLoopInterval = null;
    this.isSynthPlaying = false;
    this.soundEffectsEnabled = true;

    // Listeners para atualizar a barra de progresso
    this.onTimeUpdateCallback = null;
    this.onEndedCallback = null;
  }

  // Inicializa o contexto do Web Audio apenas sob gesto da usuária
  initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Toca uma nota suave de caixinha de música (senoide pura com envelope suave)
  playChimeNote(freq, delay = 0, duration = 1.2, gainFactor = 0.15) {
    this.initContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime + delay;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Envelope percussivo suave (tipo sino/caixinha de música)
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(this.volume * gainFactor, now + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Efeito sonoro de conquista desbloqueada / brilho estelar (arpeggio ascendente)
  playAchievementSparkle() {
    if (!this.soundEffectsEnabled) return;
    this.initContext();
    // Escala pentatônica brilhante: C5, E5, G5, B5, C6
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];
    notes.forEach((freq, idx) => {
      this.playChimeNote(freq, idx * 0.09, 1.4, 0.12);
    });
  }

  // Efeito suave de virar página / abrir carta
  playPageRustle() {
    if (!this.soundEffectsEnabled) return;
    this.initContext();
    this.playChimeNote(659.25, 0, 0.6, 0.08);
    this.playChimeNote(783.99, 0.05, 0.8, 0.06);
  }

  // Efeito de clique sutil da roleta girando
  playRouletteTick() {
    if (!this.soundEffectsEnabled) return;
    this.initContext();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, now);
    gain.gain.setValueAtTime(0.08 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Toca melodia sintética contínua (para faixa "Nossa Melodia dos Sonhos" ou demonstração)
  startSynthMelody(onProgress) {
    this.stop();
    this.initContext();
    this.isSynthPlaying = true;
    this.isPlaying = true;

    // Melodia romântica e delicada (acordes de Dó maior e Lá menor em caixinha de música)
    const melody = [
      { f: 523.25, d: 0.6 }, // C5
      { f: 659.25, d: 0.6 }, // E5
      { f: 783.99, d: 0.8 }, // G5
      { f: 659.25, d: 0.6 },
      { f: 880.00, d: 0.7 }, // A5
      { f: 783.99, d: 0.6 },
      { f: 659.25, d: 0.8 },
      { f: 587.33, d: 0.9 }  // D5
    ];

    let noteIdx = 0;
    let elapsedSeconds = 0;
    const totalDuration = 60; // 1 minuto de melodia relaxante demonstrativa

    this.synthLoopInterval = setInterval(() => {
      if (!this.isSynthPlaying) return;

      const current = melody[noteIdx % melody.length];
      this.playChimeNote(current.f, 0, 1.2, 0.14);
      noteIdx++;
      elapsedSeconds += 0.8;

      if (onProgress) {
        onProgress(elapsedSeconds, totalDuration);
      }

      if (elapsedSeconds >= totalDuration) {
        this.stop();
        if (this.onEndedCallback) this.onEndedCallback();
      }
    }, 800);
  }

  // Toca ou pausa uma faixa da Jukebox
  playTrack(track, onProgress, onEnded) {
    this.initContext();
    this.onEndedCallback = onEnded;

    // Se é a mesma faixa e já está tocando, pausa
    if (this.currentTrackId === track.id && this.isPlaying) {
      this.pause();
      return false;
    }

    // Se for síntese pura ou arquivo de demonstração especial
    if (track.audioSrc && track.audioSrc.startsWith("synth:")) {
      this.currentTrackId = track.id;
      this.startSynthMelody(onProgress);
      return true;
    }

    // Tentar carregar arquivo de áudio HTML5
    this.stop();
    this.currentTrackId = track.id;

    const audio = new Audio();
    audio.src = track.audioSrc;
    audio.volume = this.volume;
    this.currentAudioElement = audio;

    audio.addEventListener("timeupdate", () => {
      if (onProgress && audio.duration) {
        onProgress(audio.currentTime, audio.duration);
      }
    });

    audio.addEventListener("ended", () => {
      this.isPlaying = false;
      if (onEnded) onEnded();
    });

    // Se o arquivo local ainda não existir, fallback gracioso para a melodia suave
    audio.addEventListener("error", (e) => {
      console.info("Arquivo de áudio não encontrado localmente. Utilizando melodia suave de demonstração em tempo real.", e);
      this.startSynthMelody(onProgress);
    });

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
      }).catch(() => {
        // Fallback para síntese em caso de política de navegador
        this.startSynthMelody(onProgress);
      });
    }

    this.isPlaying = true;
    return true;
  }

  pause() {
    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
    }
    if (this.isSynthPlaying) {
      clearInterval(this.synthLoopInterval);
      this.isSynthPlaying = false;
    }
    this.isPlaying = false;
  }

  stop() {
    this.pause();
    if (this.currentAudioElement) {
      this.currentAudioElement.currentTime = 0;
      this.currentAudioElement = null;
    }
    this.currentTrackId = null;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.currentAudioElement) {
      this.currentAudioElement.volume = this.volume;
    }
  }

  seek(percent) {
    if (this.currentAudioElement && this.currentAudioElement.duration) {
      this.currentAudioElement.currentTime = percent * this.currentAudioElement.duration;
    }
  }
}

// Instância única para toda a aplicação
window.universeAudio = new UniverseAudioManager();
