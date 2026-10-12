/**
 * ============================================================================
 * EXPERIÊNCIAS 13 A 18 — CONSTELAÇÃO, JORNAL, MISSÕES, SÓ ELA, CONTRATO, MASCOTE
 * ============================================================================
 */

window.universeExperiences = window.universeExperiences || {};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 13: CONSTELAÇÃO DOS NOSSOS MOMENTOS
// ----------------------------------------------------------------------------
window.universeExperiences["exp13"] = function(container, meta) {
  const data = window.UNIVERSE_CONFIG.constellation;

  container.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <h2 style="color: var(--wine-deep); margin-bottom: 0.3rem;">${data.constellationName}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">
        Toque nas estrelas brilhantes no céu para revelar a memória cósmica que ela guarda.
      </p>
    </div>

    <div class="constellation-sky-box" id="constellationSkyBox">
      <canvas id="constellationCanvas" class="constellation-canvas"></canvas>
    </div>

    <div id="starMemoryCard" style="display: none; margin-top: 1.5rem;"></div>
  `;

  const canvas = document.getElementById("constellationCanvas");
  const box = document.getElementById("constellationSkyBox");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = box.clientWidth;
    canvas.height = box.clientHeight;
    drawSky();
  }

  function drawSky() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fundo estelar aleatório sutil
    ctx.fillStyle = "#FFF";
    for (let i = 0; i < 40; i++) {
      const rx = (Math.sin(i * 99) * 0.5 + 0.5) * canvas.width;
      const ry = (Math.cos(i * 33) * 0.5 + 0.5) * canvas.height;
      ctx.globalAlpha = 0.3 + (i % 5) * 0.1;
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    // Linhas da constelação
    ctx.strokeStyle = "rgba(212, 175, 55, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    data.connections.forEach(([idA, idB]) => {
      const starA = data.stars.find(s => s.id === idA);
      const starB = data.stars.find(s => s.id === idB);
      if (starA && starB) {
        const ax = (starA.x / 100) * canvas.width;
        const ay = (starA.y / 100) * canvas.height;
        const bx = (starB.x / 100) * canvas.width;
        const by = (starB.y / 100) * canvas.height;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
    });

    ctx.setLineDash([]);

    // Estrelas principais da história
    data.stars.forEach(s => {
      const sx = (s.x / 100) * canvas.width;
      const sy = (s.y / 100) * canvas.height;

      // Brilho exterior
      const radGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.size * 2.5);
      radGrad.addColorStop(0, "rgba(255, 242, 117, 0.9)");
      radGrad.addColorStop(0.5, "rgba(212, 175, 55, 0.3)");
      radGrad.addColorStop(1, "rgba(212, 175, 55, 0)");
      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(sx, sy, s.size * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Núcleo
      ctx.fillStyle = "#FFFDF9";
      ctx.beginPath();
      ctx.arc(sx, sy, s.size * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Rótulo da estrela
      ctx.fillStyle = "#F3E5AB";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(s.name, sx, sy + s.size * 2.2 + 8);
    });
  }

  window.addEventListener("resize", resizeCanvas);
  setTimeout(resizeCanvas, 50);

  function handleInteraction(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    let clickedStar = null;
    data.stars.forEach(s => {
      const sx = (s.x / 100) * canvas.width;
      const sy = (s.y / 100) * canvas.height;
      const dist = Math.hypot(x - sx, y - sy);
      if (dist <= s.size * 3) {
        clickedStar = s;
      }
    });

    if (clickedStar) {
      if (window.universeAudio) window.universeAudio.playAchievementSparkle();
      const card = document.getElementById("starMemoryCard");
      card.style.display = "block";
      card.innerHTML = `
        <div style="background: var(--bg-surface); border: 2px solid var(--gold-border); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-card); text-align: center;">
          <span class="exp-badge-category">Estrela • ${clickedStar.date}</span>
          <h3 style="color: var(--wine-deep); margin: 0.4rem 0 1rem; font-size: 1.4rem;">${clickedStar.name}</h3>
          
          <div style="max-width: 280px; margin: 0 auto 1.25rem; border-radius: var(--radius-md); overflow: hidden;">
            <img src="${clickedStar.photo}" alt="${clickedStar.name}" style="width: 100%; display: block;">
          </div>

          <p style="font-family: var(--font-serif); font-size: 1.05rem; line-height: 1.7; color: var(--text-primary); margin: 0;">
            ${clickedStar.desc}
          </p>
        </div>
      `;
      card.scrollIntoView({ behavior: "smooth" });
    }
  }

  canvas.addEventListener("click", (e) => handleInteraction(e.clientX, e.clientY));
  canvas.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches[0]) {
      handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 14: JORNAL OFICIAL DO CASAL
// ----------------------------------------------------------------------------
window.universeExperiences["exp14"] = function(container, meta) {
  const news = window.UNIVERSE_CONFIG.newspaper;

  container.innerHTML = `
    <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
      <button id="btnPrintNews" class="btn-print-action" style="padding: 0.6rem 1.2rem; border-radius: var(--radius-full); background: var(--wine-deep); color: #FFF; font-size: 0.85rem; font-weight: 600;">
        🖨️ Imprimir / Salvar PDF
      </button>
    </div>

    <div class="newspaper-page">
      <div class="newspaper-masthead">
        <h1 class="newspaper-title">${news.title}</h1>
        <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0.4rem 0 0; color: #555;">
          ${news.edition}
        </p>
      </div>

      <div style="text-align: center; margin-bottom: 2rem;">
        <h2 style="font-size: 1.8rem; line-height: 1.3; font-weight: 800; text-transform: uppercase; color: #111; margin-bottom: 0.5rem;">
          ${news.headline}
        </h2>
        <p style="font-style: italic; font-size: 1.05rem; color: #444; margin: 0;">
          ${news.subheadline}
        </p>
      </div>

      <div class="newspaper-columns">
        <p style="font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem; text-align: justify;">
          <span style="float: left; font-size: 3.5rem; line-height: 0.8; padding-right: 0.5rem; font-family: var(--font-serif); font-weight: 800; color: var(--wine-deep);">U</span>
          ${news.mainArticle.substring(1)}
        </p>

        <div style="background: #EFE8DA; border: 1px solid #C8BD9F; padding: 1.25rem; border-radius: 4px; margin-bottom: 1.5rem;">
          <h4 style="margin: 0 0 0.4rem; text-transform: uppercase; font-size: 0.95rem;">${news.weatherForecast.headline}</h4>
          <p style="font-size: 1.2rem; font-weight: 700; color: var(--wine-deep); margin: 0.2rem 0;">${news.weatherForecast.temp}</p>
          <p style="font-size: 0.85rem; margin: 0; line-height: 1.5;">${news.weatherForecast.condition}</p>
        </div>

        <div style="background: #FFFDF9; border: 1px dashed #A89F91; padding: 1.25rem; border-radius: 4px; margin-bottom: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem; font-size: 0.95rem; text-transform: uppercase;">Entrevista Exclusiva</h4>
          <p style="font-style: italic; font-size: 0.9rem; margin-bottom: 0.5rem;">${news.interview.question}</p>
          <p style="font-weight: 600; font-size: 0.95rem; margin: 0; color: var(--wine-deep);">${news.interview.answer}</p>
        </div>

        <div>
          <h4 style="text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 0.3rem; margin-bottom: 0.75rem;">Classificados do Coração</h4>
          ${news.classifieds.map(c => `
            <div style="margin-bottom: 0.75rem; font-size: 0.85rem; line-height: 1.4;">
              <strong>${c.title}</strong> ${c.desc}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  document.getElementById("btnPrintNews").onclick = () => window.print();
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 15: MISSÕES PARA O NOSSO FUTURO
// ----------------------------------------------------------------------------
window.universeExperiences["exp15"] = function(container, meta) {
  const missions = window.UNIVERSE_CONFIG.futureMissions;
  const state = window.universeState;

  function renderMissions() {
    const completedCount = missions.filter(m => state ? state.isMissionCompleted(m.id) : m.completed).length;
    const percent = Math.round((completedCount / missions.length) * 100);

    const itemsHtml = missions.map(m => {
      const isDone = state ? state.isMissionCompleted(m.id) : m.completed;
      const note = state ? state.getMissionNote(m.id) : m.proofNote;

      return `
        <div class="mission-item-card" data-id="${m.id}">
          <div class="mission-checkbox ${isDone ? 'checked' : ''}" data-id="${m.id}">
            ${isDone ? '✓' : ''}
          </div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
              <h4 style="margin: 0; font-size: 1.05rem; ${isDone ? 'text-decoration: line-through; opacity: 0.7;' : ''}">
                ${m.title}
              </h4>
              <span style="font-size: 0.75rem; background: var(--bg-surface-soft); padding: 0.2rem 0.5rem; border-radius: var(--radius-full);">
                ${m.category} • ${m.difficulty}
              </span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0.4rem 0 0;">${m.desc}</p>
            ${note ? `
              <p style="font-size: 0.8rem; font-style: italic; color: #2E7D32; margin-top: 0.4rem;">
                💚 Lembrança registrada: ${note}
              </p>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">
          <span>Sonhos & Missões Realizadas</span>
          <span>${completedCount} de ${missions.length} (${percent}%)</span>
        </div>
        <div class="hunt-progress-bar">
          <div class="hunt-progress-fill" style="width: ${percent}%;"></div>
        </div>
      </div>

      <div>${itemsHtml}</div>
    `;

    container.querySelectorAll(".mission-checkbox").forEach(box => {
      box.onclick = () => {
        const id = box.getAttribute("data-id");
        const currentlyDone = state ? state.isMissionCompleted(id) : false;

        if (!currentlyDone) {
          const note = prompt("Deseja registrar uma lembrança ou data para esta missão?", "Concluída com amor!") || "";
          if (state) state.toggleMission(id, true, note);
          if (window.universeAudio) window.universeAudio.playAchievementSparkle();
        } else {
          if (state) state.toggleMission(id, false);
        }
        renderMissions();
      };
    });
  }

  renderMissions();
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 16: O SITE QUE SÓ EXISTE PARA ELA
// ----------------------------------------------------------------------------
window.universeExperiences["exp16"] = function(container, meta) {
  const sec = window.UNIVERSE_CONFIG.secretSanctuary;
  let isUnlocked = false;

  function renderSanctuary() {
    if (!isUnlocked) {
      container.innerHTML = `
        <div class="treasure-hunt-card" style="text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🗝️</div>
          <h2 style="color: var(--wine-deep); margin-bottom: 0.5rem;">Um Canto Só Seu</h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Este espaço é o mais íntimo de todo o presente. Para entrar, digite a palavra secreta ou toque no botão.
          </p>
          <p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-bottom: 1.25rem;">
            Dica: ${sec.passcodeHint}
          </p>

          <form id="sanctuaryForm" class="hunt-input-group" style="max-width: 320px; margin: 0 auto 1rem;">
            <input type="text" id="sanctuaryInput" class="hunt-input" placeholder="Palavra mágica..." autocomplete="off">
            <button type="submit" style="padding: 0 1.5rem; background: var(--wine-deep); color: #FFF; border-radius: var(--radius-full); font-weight: 600;">
              Entrar
            </button>
          </form>

          <button id="btnBypassUnlock" style="font-size: 0.85rem; color: var(--rose-medium); text-decoration: underline;">
            Revelar com Amor ✨
          </button>
        </div>
      `;

      const unlock = () => {
        isUnlocked = true;
        if (window.universeAudio) window.universeAudio.playAchievementSparkle();
        renderSanctuary();
      };

      document.getElementById("sanctuaryForm").onsubmit = (e) => {
        e.preventDefault();
        const val = document.getElementById("sanctuaryInput").value.toLowerCase().trim();
        if (val === sec.secretCode.toLowerCase() || val.length > 0) {
          unlock();
        }
      };

      document.getElementById("btnBypassUnlock").onclick = unlock;
      return;
    }

    // Tela interna revelada
    container.innerHTML = `
      <div class="sanctuary-chamber">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-size: 2rem;">💖</span>
          <h2 style="font-size: 1.9rem; color: var(--wine-deep); margin: 0.5rem 0;">${sec.title}</h2>
          <p style="font-size: 0.9rem; color: var(--text-muted);">
            Toque nas palavras pontilhadas para ler sussurros escondidos
          </p>
        </div>

        <div style="background: #FFFDF9; border: 1px solid var(--rose-vintage); border-radius: var(--radius-md); padding: 2rem 1.5rem; font-family: var(--font-serif); font-size: 1.05rem; line-height: 1.9; white-space: pre-line; box-shadow: var(--shadow-subtle);">
          ${sec.intimateLetter}
        </div>

        <div style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <button class="secret-word-trigger" data-trigger="cafuné">Sussurro: Cafuné 💆</button>
          <button class="secret-word-trigger" data-trigger="sorriso">Sussurro: Sorriso ✨</button>
          <button class="secret-word-trigger" data-trigger="abraço">Sussurro: Abraço 🫂</button>
        </div>

        <div id="whisperBox" style="display: none; margin-top: 1.5rem; padding: 1.25rem; background: #FFF4F5; border-radius: var(--radius-md); text-align: center; font-weight: 600; color: var(--wine-deep); border: 1px dashed var(--rose-medium);"></div>
      </div>
    `;

    container.querySelectorAll(".secret-word-trigger").forEach(btn => {
      btn.onclick = () => {
        const trig = btn.getAttribute("data-trigger");
        const found = sec.easterEggs.find(e => e.trigger === trig);
        if (found) {
          if (window.universeAudio) window.universeAudio.playChimeNote(784, 0, 0.5, 0.1);
          const box = document.getElementById("whisperBox");
          box.style.display = "block";
          box.textContent = found.response;
        }
      };
    });
  }

  renderSanctuary();
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 17: CONTRATO DE AVENTURAS A DOIS
// ----------------------------------------------------------------------------
window.universeExperiences["exp17"] = function(container, meta) {
  const contract = window.UNIVERSE_CONFIG.contract;
  const state = window.universeState;
  const existingSig = state ? state.getContractSignature() : null;

  const clausesHtml = contract.clauses.map(c => `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--wine-deep); font-size: 1.05rem; margin-bottom: 0.3rem;">${c.num} — ${c.title}</h4>
      <p style="font-size: 0.95rem; line-height: 1.7; text-align: justify; margin: 0;">${c.text}</p>
    </div>
  `).join("");

  container.innerHTML = `
    <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
      <button id="btnPrintContract" class="btn-print-action" style="padding: 0.6rem 1.2rem; border-radius: var(--radius-full); background: var(--wine-deep); color: #FFF; font-size: 0.85rem; font-weight: 600;">
        🖨️ Imprimir / Salvar PDF
      </button>
    </div>

    <div class="contract-scroll">
      <div style="text-align: center; border-bottom: 2px solid var(--gold-border); padding-bottom: 1.25rem; margin-bottom: 1.75rem;">
        <span style="font-size: 1.8rem;">📜</span>
        <h2 style="font-size: 1.5rem; color: var(--wine-deep); margin: 0.5rem 0;">${contract.title}</h2>
        <p style="font-style: italic; font-size: 0.9rem; color: var(--text-muted); max-width: 600px; margin: 0 auto;">
          ${contract.preamble}
        </p>
      </div>

      <div>${clausesHtml}</div>

      <div style="margin-top: 2rem; border-top: 1px solid var(--border-gold); padding-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; color: var(--wine-deep);">Assinatura Digital da Namorada:</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          Desenhe sua assinatura abaixo usando o dedo no celular ou o mouse:
        </p>

        <div class="signature-pad-wrapper">
          <canvas id="sigCanvas" class="signature-canvas"></canvas>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <button id="btnClearSig" class="btn-clear-sig" style="padding: 0.5rem 1rem; border-radius: var(--radius-full); background: var(--bg-surface-soft); font-size: 0.8rem;">
            Limpar Assinatura 🔄
          </button>
          <button id="btnSaveSig" style="padding: 0.5rem 1.25rem; border-radius: var(--radius-full); background: #2E7D32; color: #FFF; font-size: 0.8rem; font-weight: 600;">
            Salvar Assinatura ✓
          </button>
        </div>

        <p style="text-align: center; font-size: 0.8rem; font-style: italic; color: var(--text-muted); margin-top: 1.5rem;">
          ${contract.signDate}
        </p>
      </div>
    </div>
  `;

  document.getElementById("btnPrintContract").onclick = () => window.print();

  // Configuração do Canvas de Assinatura
  const sigCanvas = document.getElementById("sigCanvas");
  const sigCtx = sigCanvas.getContext("2d");
  let isDrawing = false;

  function resizeSigCanvas() {
    sigCanvas.width = sigCanvas.clientWidth;
    sigCanvas.height = 140;
    sigCtx.lineWidth = 2.5;
    sigCtx.lineCap = "round";
    sigCtx.strokeStyle = "#4A1521";

    if (existingSig) {
      const img = new Image();
      img.onload = () => sigCtx.drawImage(img, 0, 0);
      img.src = existingSig;
    }
  }

  setTimeout(resizeSigCanvas, 50);

  function getPos(e) {
    const rect = sigCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function startDraw(e) {
    isDrawing = true;
    const p = getPos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(p.x, p.y);
  }

  function moveDraw(e) {
    if (!isDrawing) return;
    const p = getPos(e);
    sigCtx.lineTo(p.x, p.y);
    sigCtx.stroke();
  }

  function stopDraw() {
    isDrawing = false;
  }

  sigCanvas.addEventListener("mousedown", startDraw);
  sigCanvas.addEventListener("mousemove", moveDraw);
  window.addEventListener("mouseup", stopDraw);

  sigCanvas.addEventListener("touchstart", (e) => { e.preventDefault(); startDraw(e); }, { passive: false });
  sigCanvas.addEventListener("touchmove", (e) => { e.preventDefault(); moveDraw(e); }, { passive: false });
  sigCanvas.addEventListener("touchend", stopDraw);

  document.getElementById("btnClearSig").onclick = () => {
    sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
    if (state) state.saveContractSignature(null);
  };

  document.getElementById("btnSaveSig").onclick = () => {
    const dataUrl = sigCanvas.toDataURL();
    if (state) state.saveContractSignature(dataUrl);
    if (window.universeAudio) window.universeAudio.playAchievementSparkle();
    alert("Assinatura guardada no coração deste universo!");
  };
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 18: MASCOTE VIRTUAL DO CASAL
// ----------------------------------------------------------------------------
window.universeExperiences["exp18"] = function(container, meta) {
  const mascotConfig = window.UNIVERSE_CONFIG.mascot;
  const state = window.universeState;
  const mascotState = state ? state.mascotState : { lovePoints: 10, fedCount: 0, accessory: "none", name: "Pipoca" };

  function renderStage() {
    container.innerHTML = `
      <div class="mascot-stage">
        <div style="margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.8rem; color: var(--wine-deep); margin-bottom: 0.3rem;">
            ${mascotState.name}
          </h2>
          <span class="exp-badge-category">Nível de Carinho: ${mascotState.lovePoints} Pontos 💖</span>
        </div>

        <div class="mascot-avatar-box" id="avatarBox">
          <!-- Ilustração SVG Dinâmica do Mascote -->
          <svg viewBox="0 0 140 140" width="100%" height="100%">
            <!-- Corpo fofinho -->
            <circle cx="70" cy="75" r="50" fill="#FFD6A5" stroke="#D4AF37" stroke-width="3"/>
            <!-- Orelhinhas / Pontinhas estelares -->
            <polygon points="35,40 25,18 48,28" fill="#FFD6A5" stroke="#D4AF37" stroke-width="2"/>
            <polygon points="105,40 115,18 92,28" fill="#FFD6A5" stroke="#D4AF37" stroke-width="2"/>
            <!-- Bochechas rosadas -->
            <circle cx="48" cy="85" r="10" fill="#F4D6D8" opacity="0.8"/>
            <circle cx="92" cy="85" r="10" fill="#F4D6D8" opacity="0.8"/>
            <!-- Olhos brilhantes -->
            <circle cx="52" cy="70" r="6" fill="#4A1521"/>
            <circle cx="50" cy="68" r="2" fill="#FFF"/>
            <circle cx="88" cy="70" r="6" fill="#4A1521"/>
            <circle cx="86" cy="68" r="2" fill="#FFF"/>
            <!-- Sorriso doce -->
            <path d="M62,82 Q70,90 78,82" fill="none" stroke="#4A1521" stroke-width="3" stroke-linecap="round"/>
            <!-- Acessório Condicional -->
            ${mascotState.accessory === 'crown' ? `
              <polygon points="56,26 62,38 70,24 78,38 84,26 84,42 56,42" fill="#D4AF37" stroke="#A67C1E" stroke-width="1.5"/>
            ` : ''}
            ${mascotState.accessory === 'bow' ? `
              <path d="M70,36 C60,30 54,42 66,42 Z" fill="#B33951"/>
              <path d="M70,36 C80,30 86,42 74,42 Z" fill="#B33951"/>
              <circle cx="70" cy="38" r="4" fill="#6B2D38"/>
            ` : ''}
            ${mascotState.accessory === 'glasses' ? `
              <circle cx="52" cy="70" r="11" fill="none" stroke="#222" stroke-width="2.5"/>
              <circle cx="88" cy="70" r="11" fill="none" stroke="#222" stroke-width="2.5"/>
              <line x1="63" y1="70" x2="77" y2="70" stroke="#222" stroke-width="2.5"/>
            ` : ''}
          </svg>
        </div>

        <div id="mascotReactionBox" style="min-height: 48px; margin-bottom: 1rem;">
          <p id="mascotReactionText" style="font-size: 1.05rem; font-weight: 600; color: var(--wine-deep); margin: 0;">
            “Toca em mim para me dar um carinho!” ✨
          </p>
        </div>

        <div class="mascot-actions-row">
          <button class="btn-mascot-action" id="btnPetMascot">
            Fazer Carinho 💆
          </button>
          <button class="btn-mascot-action" id="btnFeedMascot">
            Dar Morango 🍓
          </button>
          <button class="btn-mascot-action" id="btnSecretMascot">
            Ouvir Segredo 🤫
          </button>
        </div>

        <div style="margin-top: 2rem; border-top: 1px dashed var(--border-light); padding-top: 1.5rem;">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem; color: var(--text-secondary);">Guarda-Roupa do Mascote:</h4>
          <div style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
            <button class="recipe-tab-btn ${mascotState.accessory === 'none' ? 'active' : ''}" data-acc="none">Sem Acessório</button>
            <button class="recipe-tab-btn ${mascotState.accessory === 'bow' ? 'active' : ''}" data-acc="bow">Lacinho Vermelho</button>
            <button class="recipe-tab-btn ${mascotState.accessory === 'crown' ? 'active' : ''}" data-acc="crown">Coroa Dourada</button>
            <button class="recipe-tab-btn ${mascotState.accessory === 'glasses' ? 'active' : ''}" data-acc="glasses">Óculos Geek</button>
          </div>
        </div>

        <div style="margin-top: 1.5rem;">
          <button id="btnRenameMascot" style="font-size: 0.8rem; color: var(--rose-medium); text-decoration: underline;">
            Mudar o nome do mascote ✏️
          </button>
        </div>
      </div>
    `;

    const reactionText = document.getElementById("mascotReactionText");

    document.getElementById("btnPetMascot").onclick = () => {
      if (state) state.interactMascot("pet");
      if (window.universeAudio) window.universeAudio.playChimeNote(880, 0, 0.4, 0.12);
      const quotes = mascotConfig.dialogues.petReactions;
      reactionText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      renderStage();
    };

    document.getElementById("btnFeedMascot").onclick = () => {
      if (state) state.interactMascot("feed");
      if (window.universeAudio) window.universeAudio.playChimeNote(659, 0, 0.4, 0.12);
      const quotes = mascotConfig.dialogues.treatReactions;
      reactionText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      renderStage();
    };

    document.getElementById("btnSecretMascot").onclick = () => {
      if (window.universeAudio) window.universeAudio.playChimeNote(987, 0, 0.4, 0.1);
      const quotes = mascotConfig.dialogues.secretHints;
      reactionText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    };

    container.querySelectorAll("[data-acc]").forEach(btn => {
      btn.onclick = () => {
        const acc = btn.getAttribute("data-acc");
        if (state) state.setMascotAccessory(acc);
        renderStage();
      };
    });

    document.getElementById("btnRenameMascot").onclick = () => {
      const newName = prompt("Qual apelido fofinho daremos ao nosso mascote?", mascotState.name);
      if (newName && newName.trim()) {
        if (state) state.setMascotName(newName);
        renderStage();
      }
    };
  }

  renderStage();
};
