# Nodo

> Laptops, redes y servidores para tu empresa — a precio de mayoreo.

Landing page de **Nodo**, consultoría y equipamiento tecnológico para empresas en México.

## Stack

| Tech | Uso |
|------|-----|
| Next.js 16 | App Router, SSG, TypeScript |
| Tailwind CSS v4 | Estilos, tema oscuro, CSS variables |
| Framer Motion | Animaciones on-scroll |
| Lucide React | Iconografía |
| Geist | Tipografía (Vercel) |

## Estructura

```
src/
├── app/
│   ├── globals.css          # Theme, custom styles
│   ├── layout.tsx           # Metadata, fonts
│   └── page.tsx             # Composición de secciones
└── components/
    ├── Navbar.tsx            # Nav fija con blur
    ├── Hero.tsx              # Headline + CTAs
    ├── Stats.tsx             # 4 métricas clave
    ├── Services.tsx          # 6 servicios
    ├── Products.tsx          # Catálogo por categoría
    ├── WhyUs.tsx             # Diferenciadores + comparación
    ├── Process.tsx           # 6 pasos (timeline)
    ├── Founders.tsx          # José María + César Alan
    ├── Testimonials.tsx      # Placeholders
    ├── FAQ.tsx               # 8 preguntas, accordion
    ├── CTA.tsx               # Llamado a acción final
    ├── Contact.tsx           # Form → WhatsApp
    └── Footer.tsx            # Links + redes + contacto
```

## Desarrollo

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Verificar producción
```

## Deploy

El proyecto usa Vercel. Cada push a `main` dispara un deploy automático.

```bash
# Deploy manual (si es necesario)
npx vercel --prod
```

## TODOs

- [ ] LinkedIn URLs de cada fundador
- [ ] Redes sociales de Nodo (Instagram, Facebook, LinkedIn)
- [ ] Correo real (buscar `contacto@nodo.tech`)
- [ ] Testimonios reales cuando haya clientes
- [ ] Fotos de fundadores (opcional)
- [ ] Dominio personalizado → conectar a Vercel
- [ ] Google Analytics / Vercel Analytics
