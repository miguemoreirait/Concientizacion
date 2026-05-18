# MigueMoreiraIT — Portafolio

Sitio one-page del curso de **Concientización en Ciberseguridad**.

## Estructura

```
portfolio/
├── index.html      ← punto de entrada
├── styles.css      ← estilos completos
├── script.js       ← interactividad (carrousel, módulos, menú)
├── logos/          ← favicon + nav/footer mark
└── .gitignore
```

## Deploy

### 1 — GitHub

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/TU-USUARIO/concientizacion-ciberseguridad.git
git push -u origin main
```

### 2 — Vercel

1. Entrar a [vercel.com](https://vercel.com) y conectarse con GitHub
2. **Add New → Project → Import** el repo
3. Click **Deploy** (sin configuración, Vercel detecta sitio estático)

Cada `git push` redeploya automáticamente.

### Dominio propio (opcional)

Vercel → **Settings → Domains** → agregar dominio + configurar DNS.

---

**Contacto:** miguemoreirait@gmail.com
