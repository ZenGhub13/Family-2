:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --panel-soft: #eef3ff;
  --text: #172033;
  --muted: #667085;
  --border: #d9e1f2;
  --accent: #3157d5;
  --accent-dark: #233f9e;
  --sidebar: #101828;
  --sidebar-muted: #cbd5e1;
  --shadow: 0 16px 40px rgba(16, 24, 40, 0.08);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 270px;
  background: var(--sidebar);
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 20;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #5b7cfa, #78dcca);
  font-weight: 800;
}

.brand h1 {
  margin: 0;
  font-size: 18px;
  line-height: 1.1;
}

.brand p {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--sidebar-muted);
}

.nav-links {
  display: grid;
  gap: 8px;
}

.nav-link {
  color: var(--sidebar-muted);
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 12px;
  font-weight: 650;
  transition: background 0.2s ease, color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: white;
  background: rgba(255, 255, 255, 0.12);
}

.main-content {
  margin-left: 270px;
  padding: 32px;
  min-height: 100vh;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.topbar h2 {
  margin: 0;
  font-size: 32px;
  letter-spacing: -0.04em;
}

.topbar p {
  margin: 6px 0 0;
  color: var(--muted);
}

.menu-button {
  display: none;
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 20px;
  cursor: pointer;
}

.hero-card,
.content-panel,
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.hero-card {
  padding: 32px;
  margin-bottom: 24px;
  background:
    radial-gradient(circle at top right, rgba(49, 87, 213, 0.18), transparent 35%),
    var(--panel);
}

.eyebrow,
.card-label {
  margin: 0 0 8px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-card h3,
.content-panel h3 {
  margin: 0 0 10px;
  font-size: 24px;
  letter-spacing: -0.03em;
}

.hero-card p,
.content-panel p,
.card p {
  color: var(--muted);
  line-height: 1.6;
}

.grid {
  display: grid;
  gap: 18px;
}

.cards-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 24px;
}

.card {
  padding: 24px;
}

.card h4 {
  margin: 0;
  font-size: 30px;
  letter-spacing: -0.04em;
}

.content-panel {
  padding: 28px;
}

.placeholder-panel {
  min-height: 320px;
  display: grid;
  align-content: start;
}

code {
  background: var(--panel-soft);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 8px;
}

body.nav-open .sidebar {
  transform: translateX(0);
}

@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }

  .main-content {
    margin-left: 0;
    padding: 20px;
  }

  .menu-button {
    display: inline-flex;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }
}
