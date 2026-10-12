/**
 * ============================================================================
 * EXPERIÊNCIAS — MEMÓRIAS, RECEITAS, CARTAS, TESOURO, JUKEBOX
 * ============================================================================
 */

window.universeExperiences = window.universeExperiences || {};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 01: MAPA DE MEMÓRIAS
// ----------------------------------------------------------------------------
window.universeExperiences["exp01"] = function(container, meta) {
  const data = window.UNIVERSE_CONFIG.mapMemories || [];
  let activeIndex = 0;

  function renderModal(index) {
    activeIndex = (index + data.length) % data.length;
    const item = data[activeIndex];

    // Verifica com segurança se há foto válida configurada
    const firstPhoto = Array.isArray(item.photos) && item.photos.length > 0 ? item.photos[0] : null;
    const hasPhotoUrl = Boolean(
      firstPhoto && 
      typeof firstPhoto.url === "string" && 
      firstPhoto.url.trim() !== "" && 
      !firstPhoto.url.endsWith("assets/images") && 
      !firstPhoto.url.endsWith("assets/images/")
    );

    const photoHtml = hasPhotoUrl ? `
        <div style="width: 100%; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem;">
          <img src="${firstPhoto.url}" alt="${firstPhoto.caption || item.title}" style="width: 100%; display: block; max-height: 240px; object-fit: cover;" onerror="this.parentElement.style.display='none'">
          ${firstPhoto.caption ? `<p style="font-size: 0.8rem; font-style: italic; color: var(--text-muted); margin-top: 0.4rem; text-align: center;">${firstPhoto.caption}</p>` : ''}
        </div>
    ` : '';

    const modalBackdrop = document.createElement("div");
    modalBackdrop.className = "modal-backdrop modal-open";
    modalBackdrop.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn" aria-label="Fechar">&times;</button>
        <span class="exp-badge-category">${item.tag} • ${item.date}</span>
        <h2 style="margin: 0.5rem 0 1rem; color: var(--wine-deep);">${item.title}</h2>
        <p style="font-weight: 500; color: var(--rose-medium); margin-bottom: 1rem;">📍 ${item.location}</p>
        
        ${photoHtml}

        <p style="line-height: 1.7; margin-bottom: 1.5rem; font-family: var(--font-serif);">${item.description}</p>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1rem;">
          <button class="btn-prev-mem" style="padding: 0.6rem 1rem; border-radius: var(--radius-full); background: var(--bg-surface-soft); font-size: 0.85rem;">← Anterior</button>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${activeIndex + 1} de ${data.length}</span>
          <button class="btn-next-mem" style="padding: 0.6rem 1rem; border-radius: var(--radius-full); background: var(--bg-surface-soft); font-size: 0.85rem;">Próxima →</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);

    modalBackdrop.querySelector(".modal-close-btn").onclick = () => modalBackdrop.remove();
    modalBackdrop.onclick = (e) => { if (e.target === modalBackdrop) modalBackdrop.remove(); };
    modalBackdrop.querySelector(".btn-prev-mem").onclick = () => { modalBackdrop.remove(); renderModal(activeIndex - 1); };
    modalBackdrop.querySelector(".btn-next-mem").onclick = () => { modalBackdrop.remove(); renderModal(activeIndex + 1); };
  }

  // Gera linha SVG conectando os pontos
  let pathD = "";
  data.forEach((p, i) => {
    pathD += (i === 0 ? "M" : " L") + `${p.coords.x}% ${p.coords.y}%`;
  });

  let pinsHtml = "";
  data.forEach((item, idx) => {
    pinsHtml += `
      <div class="map-pin ${item.highlight ? 'highlight' : ''}" 
           style="left: ${item.coords.x}%; top: ${item.coords.y}%;" 
           data-idx="${idx}" 
           title="${item.title}">
        📍
      </div>
    `;
  });

  let listHtml = "";
  data.forEach((item, idx) => {
    listHtml += `
      <div class="map-timeline-item" data-idx="${idx}">
        <div>
          <span style="font-size: 0.75rem; color: var(--rose-medium); font-weight: 600;">${item.date}</span>
          <h4 style="margin: 0.2rem 0; font-size: 1.05rem;">${item.title}</h4>
          <p style="font-size: 0.85rem; margin: 0;">${item.location}</p>
        </div>
        <span style="font-size: 1.2rem; color: var(--wine-deep);">→</span>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="map-canvas-container">
      <div class="map-illustrated-board">
        <svg class="map-route-svg">
          <path d="${pathD}" fill="none" stroke="#D49A9E" stroke-width="3" stroke-dasharray="6,4" opacity="0.8"/>
        </svg>
        ${pinsHtml}
      </div>
      <p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; margin-top: 0.75rem;">
        Toque nos marcadores no mapa ou na lista abaixo para reviver os detalhes
      </p>
    </div>

    <h3 style="margin-bottom: 1rem; color: var(--wine-deep);">Linha do Tempo das Memórias</h3>
    <div class="map-timeline-list">${listHtml}</div>
  `;

  container.querySelectorAll(".map-pin, .map-timeline-item").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-idx"), 10);
      renderModal(idx);
    });
  });
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 02: LIVRO DE RECEITAS AFETIVAS
// ----------------------------------------------------------------------------
window.universeExperiences["exp02"] = function(container, meta) {
  const config = window.UNIVERSE_CONFIG.recipeBook;
  const customRecipes = (window.universeState) ? window.universeState.getCustomRecipes() : [];
  const allRecipes = [...config.recipes, ...customRecipes];
  let currentIdx = 0;

  function renderRecipe(idx) {
    currentIdx = idx;
    const r = allRecipes[currentIdx];

    const tabsHtml = allRecipes.map((item, i) => `
      <button class="recipe-tab-btn ${i === currentIdx ? 'active' : ''}" data-idx="${i}">
        ${item.title}
      </button>
    `).join("");

    const ingrHtml = r.ingredients.map(ing => `
      <label class="ingredient-item">
        <input type="checkbox" style="accent-color: var(--wine-deep); width: 18px; height: 18px;">
        <span>${ing}</span>
      </label>
    `).join("");

    const stepsHtml = r.steps.map((st, i) => `
      <div class="step-card">
        <div class="step-num">${i + 1}</div>
        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6;">${st}</p>
      </div>
    `).join("");

    container.innerHTML = `
      <div class="recipe-tabs">${tabsHtml}</div>

      <div class="recipe-book-jacket">
        <div class="recipe-book-header">
          <span class="exp-badge-category">${r.category} • Rendimento: ${r.yield}</span>
          <h2 style="font-size: 1.8rem; margin: 0.5rem 0;">${r.title}</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Tempo de preparo: ${r.time}</p>
        </div>

        <div class="recipe-content-grid">
          <div>
            <div class="recipe-ingredients-box">
              <h4>Ingredientes Afetivos</h4>
              ${ingrHtml}
            </div>
            <div style="margin-top: 1.25rem; padding: 1rem; background: #FAF0EE; border-radius: var(--radius-sm); border-left: 3px solid var(--rose-medium);">
              <p style="font-size: 0.85rem; font-style: italic; color: var(--wine-deep); margin: 0;">
                <strong>Nota do Chef:</strong> ${r.chefNote}
              </p>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 1rem; color: var(--wine-deep);">Modo de Preparo</h4>
            <div class="recipe-steps-list">${stepsHtml}</div>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-light); text-align: center;">
          <p class="handwritten">${config.dedication}</p>
        </div>
      </div>
    `;

    container.querySelectorAll(".recipe-tab-btn").forEach(btn => {
      btn.onclick = () => {
        if (window.universeAudio) window.universeAudio.playPageRustle();
        renderRecipe(parseInt(btn.getAttribute("data-idx"), 10));
      };
    });
  }

  renderRecipe(0);
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 04: CARTAS DE "ABRA QUANDO..."
// ----------------------------------------------------------------------------
window.universeExperiences["exp04"] = function(container, meta) {
  const letters = window.UNIVERSE_CONFIG.letters;

  function openLetter(letter) {
    if (window.universeAudio) window.universeAudio.playPageRustle();
    if (window.universeState) window.universeState.markLetterOpened(letter.id);

    const modal = document.createElement("div");
    modal.className = "modal-backdrop modal-open";
    modal.innerHTML = `
      <div class="modal-dialog">
        <button class="modal-close-btn">&times;</button>
        <span class="exp-badge-category">Carta Especial</span>
        <h2 style="margin: 0.5rem 0 1.5rem; color: var(--wine-deep);">${letter.occasion}</h2>

        <div class="letter-unfolded-view">${letter.body}</div>

        ${letter.photo ? `
          <div style="margin-top: 1.5rem; text-align: center;">
            <img src="${letter.photo}" alt="Foto da carta" style="max-height: 200px; border-radius: var(--radius-md); box-shadow: var(--shadow-card);">
          </div>
        ` : ''}

        <div style="margin-top: 1.5rem; text-align: center;">
          <button class="btn-close-letter" style="padding: 0.75rem 2rem; border-radius: var(--radius-full); background: var(--wine-deep); color: #FFF; font-weight: 600;">
            Guardar no Coração 💌
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector(".modal-close-btn").onclick = () => { modal.remove(); renderLetters(); };
    modal.querySelector(".btn-close-letter").onclick = () => { modal.remove(); renderLetters(); };
    modal.onclick = (e) => { if (e.target === modal) { modal.remove(); renderLetters(); } };
  }

  function renderLetters() {
    const cardsHtml = letters.map((l) => {
      const isOpened = window.universeState && window.universeState.isLetterOpened(l.id);
      return `
        <div class="envelope-card ${isOpened ? 'opened-stamp' : ''}" data-id="${l.id}">
          <div class="wax-seal" style="background: ${l.sealColor};"></div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--wine-deep);">${l.occasion}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${l.shortSummary}</p>
          <div style="margin-top: 1rem; font-size: 0.8rem; font-weight: 600; color: var(--rose-medium);">
            ${isOpened ? 'Toque para reler 📖' : 'Toque para abrir envelope ✉️'}
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <p style="text-align: center; max-width: 550px; margin: 0 auto 2rem; color: var(--text-secondary);">
        Envelopes selados preparados para diferentes momentos do seu dia. Abra sempre que sentir vontade.
      </p>
      <div class="letters-grid">${cardsHtml}</div>
    `;

    container.querySelectorAll(".envelope-card").forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute("data-id");
        const found = letters.find(item => item.id === id);
        if (found) openLetter(found);
      };
    });
  }

  renderLetters();
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 05: CAÇA AO TESOURO DIGITAL
// ----------------------------------------------------------------------------
window.universeExperiences["exp05"] = function(container, meta) {
  const hunt = window.UNIVERSE_CONFIG.treasureHunt;
  let currentStep = 0;
  let showHint = false;

  function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function renderStage() {
    if (currentStep >= hunt.clues.length) {
      // Final
      if (window.universeAudio) window.universeAudio.playAchievementSparkle();
      container.innerHTML = `
        <div class="treasure-hunt-card" style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
          <h2 style="color: var(--wine-deep); margin-bottom: 1rem;">${hunt.finale.title}</h2>
          <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">${hunt.finale.message}</p>
          <div style="background: #FAF0EE; border: 1px dashed var(--rose-vintage); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
            <p style="font-weight: 600; color: var(--wine-deep); margin: 0;">${hunt.finale.secretGiftNote}</p>
          </div>
          <button id="btnRestartHunt" style="padding: 0.6rem 1.2rem; border-radius: var(--radius-full); background: var(--bg-surface-soft); font-size: 0.85rem;">
            Jogar Novamente 🔄
          </button>
        </div>
      `;
      document.getElementById("btnRestartHunt").onclick = () => {
        currentStep = 0;
        renderStage();
      };
      return;
    }

    const clue = hunt.clues[currentStep];
    const progressPercent = Math.round((currentStep / hunt.clues.length) * 100);

    container.innerHTML = `
      <div class="treasure-hunt-card">
        <div class="hunt-progress-bar">
          <div class="hunt-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <span class="exp-badge-category">Etapa ${currentStep + 1} de ${hunt.clues.length}</span>
        <h3 style="margin: 0.5rem 0 1rem; color: var(--wine-deep);">${clue.title}</h3>
        
        <div class="clue-riddle-box">${clue.riddle}</div>

        <form id="huntForm" class="hunt-input-group">
          <input type="text" id="huntInput" class="hunt-input" placeholder="Digite sua resposta..." required autocomplete="off">
          <button type="submit" style="padding: 0 1.5rem; background: var(--wine-deep); color: #FFF; border-radius: var(--radius-full); font-weight: 600;">
            Responder
          </button>
        </form>

        <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
          <button id="btnToggleHint" style="font-size: 0.85rem; color: var(--rose-medium); text-decoration: underline;">
            ${showHint ? 'Ocultar Dica' : 'Pedir uma Dica 💡'}
          </button>
          <span id="huntFeedback" style="font-size: 0.85rem; font-weight: 600;"></span>
        </div>

        ${showHint ? `
          <div style="margin-top: 0.75rem; padding: 0.75rem; background: #FFF9EE; border-radius: var(--radius-sm); font-size: 0.85rem; color: #8A6D3B;">
            ${clue.hint}
          </div>
        ` : ''}
      </div>
    `;

    document.getElementById("btnToggleHint").onclick = () => {
      showHint = !showHint;
      renderStage();
    };

    document.getElementById("huntForm").onsubmit = (e) => {
      e.preventDefault();
      const val = normalize(document.getElementById("huntInput").value);
      const isCorrect = clue.acceptedAnswers.some(ans => normalize(ans) === val || val.includes(normalize(ans)));

      const feedback = document.getElementById("huntFeedback");
      if (isCorrect) {
        feedback.style.color = "#2E7D32";
        feedback.textContent = clue.successMessage;
        if (window.universeAudio) window.universeAudio.playAchievementSparkle();
        setTimeout(() => {
          currentStep++;
          showHint = false;
          renderStage();
        }, 1500);
      } else {
        feedback.style.color = "#C62828";
        feedback.textContent = "Não foi bem isso... Tenta de novo ou veja a dica!";
      }
    };
  }

  renderStage();
};

// ----------------------------------------------------------------------------
// EXPERIÊNCIA 06: JUKEBOX DE VOZ
// ----------------------------------------------------------------------------
window.universeExperiences["exp06"] = function(container, meta) {
  const tracks = window.UNIVERSE_CONFIG.jukebox.tracks;
  let activeIdx = 0;
  let isPlaying = false;

  function renderJukebox() {
    const cur = tracks[activeIdx];

    const tracksHtml = tracks.map((t, idx) => `
      <div class="map-timeline-item" style="border-color: ${idx === activeIdx ? 'var(--gold-border)' : 'var(--border-light)'};" data-idx="${idx}">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 1.2rem;">${idx === activeIdx && isPlaying ? '🎵' : '🎙️'}</span>
          <div>
            <h4 style="margin: 0; font-size: 0.95rem;">${t.title}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">${t.category} • ${t.duration}</p>
          </div>
        </div>
        <button style="padding: 0.4rem 0.8rem; border-radius: var(--radius-full); background: var(--bg-surface-soft); font-size: 0.8rem;">
          ${idx === activeIdx && isPlaying ? 'Pausar' : 'Ouvir'}
        </button>
      </div>
    `).join("");

    container.innerHTML = `
      <div class="jukebox-deck">
        <div class="jukebox-visualizer">
          <div class="vinyl-disc ${isPlaying ? 'spinning' : ''}">
            <div class="vinyl-center"></div>
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--gold-starlight); text-transform: uppercase;">Tocando Agora</span>
            <h3 style="color: #FFFDF9; margin: 0.2rem 0;">${cur.title}</h3>
            <p style="font-size: 0.85rem; color: #BBB; margin: 0;">${cur.description}</p>
          </div>
        </div>

        <div class="track-progress-container" id="trackProgressBox">
          <div class="track-progress-fill" id="trackProgressFill"></div>
        </div>

        <div class="jukebox-controls">
          <button id="btnPrevTrack" style="color: #FFF; font-size: 1.2rem;">⏮️</button>
          <button class="btn-play-circle" id="btnPlayPause">${isPlaying ? '⏸' : '▶'}</button>
          <button id="btnNextTrack" style="color: #FFF; font-size: 1.2rem;">⏭️</button>
        </div>
      </div>

      <h3 style="margin-bottom: 1rem; color: var(--wine-deep);">Mensagens Gravadas</h3>
      <div class="map-timeline-list">${tracksHtml}</div>
    `;

    const playPauseBtn = document.getElementById("btnPlayPause");
    playPauseBtn.onclick = () => {
      togglePlay(activeIdx);
    };

    document.getElementById("btnPrevTrack").onclick = () => {
      activeIdx = (activeIdx - 1 + tracks.length) % tracks.length;
      playTrack(activeIdx);
    };

    document.getElementById("btnNextTrack").onclick = () => {
      activeIdx = (activeIdx + 1) % tracks.length;
      playTrack(activeIdx);
    };

    container.querySelectorAll(".map-timeline-item").forEach(item => {
      item.onclick = () => {
        const idx = parseInt(item.getAttribute("data-idx"), 10);
        if (idx === activeIdx && isPlaying) {
          togglePlay(idx);
        } else {
          activeIdx = idx;
          playTrack(activeIdx);
        }
      };
    });
  }

  function playTrack(idx) {
    activeIdx = idx;
    isPlaying = true;
    renderJukebox();

    if (window.universeAudio) {
      window.universeAudio.playTrack(
        tracks[activeIdx],
        (current, total) => {
          const fill = document.getElementById("trackProgressFill");
          if (fill && total) {
            fill.style.width = `${Math.min(100, (current / total) * 100)}%`;
          }
        },
        () => {
          isPlaying = false;
          renderJukebox();
        }
      );
    }
  }

  function togglePlay(idx) {
    if (isPlaying) {
      isPlaying = false;
      if (window.universeAudio) window.universeAudio.pause();
      renderJukebox();
    } else {
      playTrack(idx);
    }
  }

  renderJukebox();
};
