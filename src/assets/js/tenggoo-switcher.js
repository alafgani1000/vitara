/**
 * Tenggoo Template Switcher & Showcase
 * https://tenggoo.my.id/
 * 
 * Komponen Floating Drawer untuk memamerkan template dan tools lain dari ekosistem Tenggoo.
 * Cukup panggil script ini di halaman HTML mana pun:
 * <script src="assets/js/tenggoo-switcher.js"></script>
 */

(function () {
  'use strict';

  // Cegah inisialisasi ganda jika script dipanggil lebih dari sekali
  if (window.__TENGGOO_SWITCHER_INITIALIZED__) return;
  window.__TENGGOO_SWITCHER_INITIALIZED__ = true;

  // Data template ekosistem Tenggoo
  const TEMPLATES = [
    {
      id: 'vitara',
      name: 'VITARA Health',
      category: 'Medical & Digital Health',
      badge: 'Sedang Dilihat',
      isCurrent: true,
      desc: '45+ halaman klinis, telemedicine, portal pasien & dashboard dokter.',
      demoUrl: 'index.html',
      tags: ['Medical', 'Hospital', 'Tailwind CSS']
    },
    {
      id: 'symfoni',
      name: 'Symfoni Food',
      category: 'Culinary & Restaurant',
      badge: 'Populer',
      isCurrent: false,
      desc: 'Template restoran modern, kafe, reservasi meja, dan pemesanan online.',
      demoUrl: 'https://tenggoo.my.id/',
      tags: ['Food', 'Cafe', 'E-Commerce']
    },
    {
      id: 'resumekit',
      name: 'ResumeKit Builder',
      category: 'Career & Resume Tool',
      badge: 'Free Tool',
      isCurrent: false,
      desc: 'Pembuat CV profesional ATS-friendly instan langsung dari browser.',
      demoUrl: 'https://resumekit.tenggoo.my.id/',
      tags: ['CV Maker', 'ATS-Friendly', 'PDF']
    },
    {
      id: 'pdftools',
      name: 'Tenggoo PDF Tools',
      category: 'Productivity & Documents',
      badge: 'Privat',
      isCurrent: false,
      desc: 'Kelola & scan dokumen PDF secara privat tanpa upload server.',
      demoUrl: 'https://pdftools.tenggoo.my.id/',
      tags: ['PDF Tools', 'Scanner', 'Client-side']
    }
  ];

  function createComponentMarkup() {
    const templateCardsHtml = TEMPLATES.map((item) => {
      if (item.isCurrent) {
        return `
          <div class="tg-card tg-card-current">
            <div class="tg-card-header">
              <span class="tg-title">${item.name}</span>
              <span class="tg-badge-current">${item.badge}</span>
            </div>
            <p class="tg-desc">${item.desc}</p>
            <div class="tg-tags">
              ${item.tags.map(t => `<span class="tg-tag">${t}</span>`).join('')}
            </div>
          </div>
        `;
      }
      return `
        <a href="${item.demoUrl}" target="_blank" rel="noopener noreferrer" class="tg-card tg-card-link group">
          <div class="tg-card-header">
            <span class="tg-title">${item.name}</span>
            <div class="tg-header-meta">
              ${item.badge ? `<span class="tg-badge-pill">${item.badge}</span>` : ''}
              <svg class="tg-arrow-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <p class="tg-desc">${item.desc}</p>
          <div class="tg-tags">
            ${item.tags.map(t => `<span class="tg-tag">${t}</span>`).join('')}
          </div>
        </a>
      `;
    }).join('');

    return `
      <!-- Tenggoo Switcher Container -->
      <div id="tg-switcher-root">
        <!-- Floating Action Button -->
        <button id="tg-toggle-btn" class="tg-fab" aria-label="Buka Koleksi Template Tenggoo" title="Jelajahi template lain di tenggoo.my.id">
          <span class="tg-fab-icon-box">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
              <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
          </span>
          <span class="tg-fab-label">Template Lainnya</span>
          <span class="tg-fab-badge">${TEMPLATES.length}</span>
        </button>

        <!-- Drawer Overlay -->
        <div id="tg-drawer" class="tg-drawer-wrap" aria-hidden="true">
          <!-- Backdrop -->
          <div id="tg-backdrop" class="tg-backdrop"></div>

          <!-- Drawer Panel -->
          <aside class="tg-panel" role="dialog" aria-modal="true" aria-labelledby="tg-drawer-heading">
            <!-- Header -->
            <div class="tg-panel-header">
              <div class="tg-brand-meta">
                <div class="tg-avatar">T</div>
                <div>
                  <h3 id="tg-drawer-heading" class="tg-panel-title">Tenggoo Showcase</h3>
                  <a href="https://tenggoo.my.id/" target="_blank" rel="noopener noreferrer" class="tg-panel-subtitle">
                    tenggoo.my.id
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              <button id="tg-close-btn" class="tg-close-btn" aria-label="Tutup Panel">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Intro Info -->
            <div class="tg-info-box">
              <p>Jelajahi template HTML berkualitas tinggi dan tools online gratis yang siap digunakan untuk berbagai kebutuhan.</p>
            </div>

            <!-- Template List -->
            <div class="tg-list-wrapper">
              <div class="tg-list-title">DAFTAR TEMPLATE & TOOLS</div>
              <div class="tg-items-list">
                ${templateCardsHtml}
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="tg-panel-footer">
              <a href="https://tenggoo.my.id/" target="_blank" rel="noopener noreferrer" class="tg-cta-btn">
                <span>Lihat Semua di tenggoo.my.id</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <p class="tg-copy">Dibuat dengan ❤️ oleh Ghani (alafgani1000)</p>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function injectStyles() {
    if (document.getElementById('tg-switcher-styles')) return;

    const style = document.createElement('style');
    style.id = 'tg-switcher-styles';
    style.textContent = `
      /* Tenggoo Floating Drawer Styles */
      #tg-switcher-root {
        font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #1a1a18;
      }

      /* Floating Button */
      .tg-fab {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9998;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px 10px 12px;
        background: #1b3a2f;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        cursor: pointer;
        box-shadow: 0 10px 25px -5px rgba(27, 58, 47, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        user-select: none;
      }
      .tg-fab:hover {
        background: #2c5545;
        transform: translateY(-2px);
        box-shadow: 0 16px 30px -5px rgba(27, 58, 47, 0.5);
      }
      .tg-fab:active {
        transform: translateY(0);
      }
      .tg-fab-icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d4af37;
      }
      .tg-fab-label {
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .tg-fab-badge {
        font-size: 11px;
        font-weight: 700;
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        padding: 2px 7px;
        border-radius: 9999px;
        margin-left: 2px;
      }

      /* Drawer Modal & Backdrop */
      .tg-drawer-wrap {
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .tg-drawer-wrap.tg-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      .tg-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.45);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        cursor: pointer;
      }

      /* Panel Aside */
      .tg-panel {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        max-width: 380px;
        background: #ffffff;
        box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
      }
      .tg-drawer-wrap.tg-open .tg-panel {
        transform: translateX(0);
      }

      /* Panel Header */
      .tg-panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 24px;
        border-bottom: 1px solid #f0eee9;
        background: #fafaf8;
      }
      .tg-brand-meta {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .tg-avatar {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: #1b3a2f;
        color: #d4af37;
        font-weight: 700;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(27, 58, 47, 0.2);
      }
      .tg-panel-title {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: #1a1a18;
        line-height: 1.2;
      }
      .tg-panel-subtitle {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: #52796f;
        text-decoration: none;
        font-weight: 500;
        margin-top: 2px;
      }
      .tg-panel-subtitle:hover {
        color: #1b3a2f;
        text-decoration: underline;
      }
      .tg-close-btn {
        background: transparent;
        border: none;
        padding: 8px;
        color: #8a8a82;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
      }
      .tg-close-btn:hover {
        background: #ede9e3;
        color: #1a1a18;
      }

      /* Info Box */
      .tg-info-box {
        padding: 14px 24px;
        background: #f7f9f7;
        border-bottom: 1px solid #eef2ee;
      }
      .tg-info-box p {
        margin: 0;
        font-size: 12px;
        color: #4a4a45;
        line-height: 1.5;
      }

      /* List Area */
      .tg-list-wrapper {
        flex: 1;
        overflow-y: auto;
        padding: 20px 24px;
      }
      .tg-list-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: #8a8a82;
        margin-bottom: 12px;
      }
      .tg-items-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      /* Cards */
      .tg-card {
        padding: 14px 16px;
        border-radius: 12px;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
      }
      .tg-card-current {
        background: #f4f8f5;
        border: 1.5px solid #2d6a4f;
      }
      .tg-card-link {
        background: #ffffff;
        border: 1px solid #e8e4dd;
        cursor: pointer;
      }
      .tg-card-link:hover {
        border-color: #2d6a4f;
        background: #fafaf8;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
      }
      .tg-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 4px;
      }
      .tg-title {
        font-weight: 600;
        font-size: 14px;
        color: #1a1a18;
      }
      .tg-card-link:hover .tg-title {
        color: #2d6a4f;
      }
      .tg-header-meta {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .tg-arrow-icon {
        color: #8a8a82;
        transition: transform 0.2s ease, color 0.2s ease;
      }
      .tg-card-link:hover .tg-arrow-icon {
        color: #2d6a4f;
        transform: translate(2px, -2px);
      }
      .tg-badge-current {
        font-size: 10px;
        font-weight: 700;
        background: #2d6a4f;
        color: #ffffff;
        padding: 2px 8px;
        border-radius: 9999px;
        white-space: nowrap;
      }
      .tg-badge-pill {
        font-size: 10px;
        font-weight: 600;
        background: #ede9e3;
        color: #4a4a45;
        padding: 2px 8px;
        border-radius: 9999px;
        white-space: nowrap;
      }
      .tg-desc {
        margin: 0 0 10px 0;
        font-size: 12px;
        color: #6b6b65;
        line-height: 1.45;
      }
      .tg-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .tg-tag {
        font-size: 10px;
        font-weight: 500;
        color: #52796f;
        background: #edf4f0;
        padding: 1px 6px;
        border-radius: 4px;
      }

      /* Panel Footer */
      .tg-panel-footer {
        padding: 16px 24px;
        border-top: 1px solid #f0eee9;
        background: #ffffff;
      }
      .tg-cta-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 18px;
        background: #1b3a2f;
        color: #ffffff;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 600;
        font-size: 13px;
        transition: all 0.2s;
        box-shadow: 0 4px 12px rgba(27, 58, 47, 0.2);
        box-sizing: border-box;
      }
      .tg-cta-btn:hover {
        background: #2c5545;
        box-shadow: 0 6px 16px rgba(27, 58, 47, 0.3);
      }
      .tg-copy {
        margin: 10px 0 0 0;
        font-size: 11px;
        color: #8a8a82;
        text-align: center;
      }

      /* Mobile responsiveness */
      @media (max-width: 480px) {
        .tg-fab {
          bottom: 16px;
          right: 16px;
          padding: 8px 14px 8px 10px;
        }
        .tg-panel {
          max-width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function initSwitcher() {
    injectStyles();

    // Sisipkan markup ke DOM
    const container = document.createElement('div');
    container.innerHTML = createComponentMarkup().trim();
    document.body.appendChild(container.firstElementChild);

    // Bind event listener
    const drawer = document.getElementById('tg-drawer');
    const toggleBtn = document.getElementById('tg-toggle-btn');
    const closeBtn = document.getElementById('tg-close-btn');
    const backdrop = document.getElementById('tg-backdrop');

    function openDrawer() {
      drawer.classList.add('tg-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('tg-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    toggleBtn?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);

    // Tutup saat menekan tombol Escape di keyboard
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('tg-open')) {
        closeDrawer();
      }
    });
  }

  // Jalankan saat DOM sudah siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwitcher);
  } else {
    initSwitcher();
  }
})();
