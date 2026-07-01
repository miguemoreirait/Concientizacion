# Concientización en Ciberseguridad

Sitio web one-page que acompaña un curso de concientización en ciberseguridad orientado a personas no técnicas y pymes. Diseñado, desarrollado y desplegado de forma íntegra como parte de la marca **MigueMoreiraIT**.

🔗 **Live:** [concientizacion.vercel.app](https://concientizacion.vercel.app)

---

## Sobre el proyecto

La mayoría de los incidentes de seguridad en organizaciones chicas no empiezan con un ataque sofisticado, sino con una persona que hace clic donde no debía. Este sitio traduce conceptos de ciberseguridad a un lenguaje claro y accionable, sin tecnicismos, para que cualquiera pueda entender los riesgos cotidianos y cómo reducirlos.

Es la cara pública de una capacitación de 7 módulos dictada a pymes, e integra material teórico, casos cotidianos y un ejercicio interactivo de concientización.

## Características

- **Diseño one-page responsive**, construido con HTML, CSS y JavaScript vanilla — sin frameworks ni dependencias.
- **Sistema de diseño propio**: paleta, tipografías (Instrument Serif · Geist · JetBrains Mono) y componentes consistentes con la identidad de marca.
- **Carrusel de amenazas** y **módulos expandibles** resueltos con JavaScript puro.
- **Ejercicio interactivo `/alerta`**: una landing a la que apunta un código QR usado en la capacitación presencial. Simula una falsa alerta de seguridad y luego revela la lección, para que el asistente *experimente* en primera persona el riesgo de escanear sin verificar.
- **Despliegue continuo**: cada push a `main` redespliega automáticamente en Vercel.

## Stack

| | |
|---|---|
| **Frontend** | HTML5 · CSS3 · JavaScript (vanilla) |
| **Hosting** | Vercel (sitio estático, deploy continuo) |
| **Control de versiones** | Git · GitHub |
| **Tipografías** | Instrument Serif · Geist · JetBrains Mono |

## Estructura

```
portfolio/
├── index.html          # Sitio principal (one-page)
├── styles.css          # Sistema de estilos
├── script.js           # Carrusel, módulos, navegación
├── alerta/
│   └── index.html      # Ejercicio interactivo de QR (landing del QR)
└── logos/              # Identidad visual y fotografías
```

## Secciones del sitio

1. **Hero** — presentación con snippet de código y foto profesional
2. **Enfoque** — el punto de partida del curso
3. **Amenazas** — carrusel de los 5 tipos más comunes (phishing, ransomware, ingeniería social, malware, estafas por mensajería)
4. **Módulos** — los 7 módulos de la capacitación
5. **Método** — los 4 principios pedagógicos
6. **Acerca de mí** — perfil y credenciales
7. **Contacto** — vías de comunicación directa

---

## Autor

**Miguel A. Moreira** — Lic. en Tecnología de la Información · Diplomado en Ciberseguridad

[LinkedIn](https://linkedin.com/in/miguemoreira) · miguemoreirait@gmail.com