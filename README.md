# MigueMoreiraIT — Portafolio

Sitio one-page del curso de **Concientización en Ciberseguridad**.

## Estructura

```
portfolio/
├── index.html              ← punto de entrada
├── styles.css              ← estilos completos
├── script.js               ← interactividad (carrousel, módulos, menú)
├── logos/
│   ├── monogram.svg        ← favicon + nav/footer
│   ├── monogram-dark.svg   ← versión oscura
│   ├── photo-hero.jpg      ← foto del hero (900×900)
│   ├── photo-about.jpg     ← foto del Acerca de mí (1200×1500)
│   └── photo-placeholder.svg
└── .gitignore
```

## 🚀 Deploy

### 1 — GitHub

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/miguemoreirait/concientizacion.git
git push -u origin main
```

### 2 — Vercel

1. Entrar a [vercel.com](https://vercel.com) y conectarse con GitHub
2. **Add New → Project → Import** el repo
3. Click **Deploy** (Vercel detecta sitio estático automáticamente)

Cada `git push` redeploya solo.

### Dominio propio (opcional)

Vercel → **Settings → Domains** → agregar dominio + configurar DNS.

## ✏️ Edición rápida

- **Bio en "Acerca de mí"**: editá los párrafos dentro de `#acerca` en `index.html`
- **Credenciales**: los `<div class="about-cred-item">` (Formación / Diplomatura / Experiencia)
- **Tags**: bajo la bio, en `.about-tags`
- **WhatsApp**: link `https://wa.me/5491130578169` en la sección CTA

---

**Contacto:** miguemoreirait@gmail.com
