// Nav scroll state
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Mobile menu
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = () => {
    nav.classList.remove('menu-open');
    mobileMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    mobileMenu.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  document.querySelectorAll('[data-mobile-link]').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Render modules
  const modules = JSON.parse(document.getElementById('modules-data').textContent);
  const grid = document.getElementById('modules-grid');

  modules.forEach((m, i) => {
    const el = document.createElement('article');
    el.className = 'module';
    el.dataset.idx = i;
    el.innerHTML = `
      <div class="module-row">
        <div class="module-num">${m.num}</div>
        <div class="module-title">${m.title}</div>
        <div class="module-tag">${m.tag}</div>
        <button class="module-toggle" aria-label="Expandir módulo">
          <svg viewBox="0 0 14 14" fill="none" stroke-width="1.5"><path d="M7 2V12M2 7H12" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="module-detail">
        <div class="module-detail-inner">
          <div class="spacer"></div>
          <div class="module-objetivo">
            <span class="module-objetivo-label">Objetivo</span>
            ${m.objetivo}
          </div>
          <div class="module-content">
            <p>${m.body}</p>
            <ul class="topics">
              ${m.topics.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
    el.addEventListener('click', () => {
      el.classList.toggle('open');
    });
    grid.appendChild(el);
  });

  // Open first module by default
  document.querySelector('.module').classList.add('open');

  // ============ Amenazas carousel ============
  (function initCarousel() {
    const threatsData = document.getElementById('threats-data');
    if (!threatsData) return;
    const threats = JSON.parse(threatsData.textContent);
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const currentEl = document.getElementById('carousel-current');
    const totalEl = document.getElementById('carousel-total');
    if (!track || !dotsContainer) return;

    let idx = 0;
    let timer = null;
    const total = threats.length;
    totalEl.textContent = String(total).padStart(2, '0');

    // Render cards
    threats.forEach((t, i) => {
      const card = document.createElement('article');
      card.className = 'threat-card' + (i === 0 ? ' active' : '');
      card.innerHTML = `
        <span class="card-num">${t.num} / ${String(total).padStart(2, '0')}</span>
        <span class="card-tag">${t.tag}</span>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      `;
      track.appendChild(card);
    });

    const cards = track.querySelectorAll('.threat-card');
    const computeVisible = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 1024) return 2;
      return 3;
    };

    const renderDots = () => {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === idx ? ' active' : '');
        dot.setAttribute('aria-label', 'Ir a amenaza ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    };

    const update = () => {
      const visible = computeVisible();
      const maxScroll = Math.max(0, total - visible);
      // idx is the ACTIVE card (0 to total-1)
      // scroll is clamped so we don't show empty space past the last card
      const scrollPos = Math.min(idx, maxScroll);

      const sample = track.querySelector('.threat-card');
      const cardW = sample ? sample.offsetWidth : 340;
      const gap = 24;
      const translateX = -scrollPos * (cardW + gap);
      track.style.transform = `translateX(${translateX}px)`;

      cards.forEach((c, i) => c.classList.toggle('active', i === idx));
      currentEl.textContent = String(idx + 1).padStart(2, '0');

      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
    };

    const goTo = (i) => {
      idx = i;
      update();
      restartTimer();
    };

    const advance = (dir) => {
      idx = idx + dir;
      // wrap around: cycle through all cards (1 → 2 → ... → 5 → 1)
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      update();
    };

    const restartTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => advance(1), 5500);
    };

    prevBtn.addEventListener('click', () => { advance(-1); restartTimer(); });
    nextBtn.addEventListener('click', () => { advance(1); restartTimer(); });

    renderDots();
    update();
    restartTimer();

    // Pause on hover
    const section = document.querySelector('.amenazas-section');
    if (section) {
      section.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
      section.addEventListener('mouseleave', restartTimer);
    }

    // Re-render on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderDots();
        update();
      }, 150);
    });
  })();