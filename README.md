# Logistica Integral Satelital Redesign

Rediseño multipágina del sitio de Logística Integral Satelital construido con React, Vite y Sass.

## Desarrollo local

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

La salida de producción se genera en `dist/`.

## Despliegue en Vercel

Este proyecto debe desplegarse desde la carpeta `lis-redesign`, no desde la raíz del workspace.

Configuración esperada en Vercel:

- Framework Preset: `Vite`
- Root Directory: `lis-redesign`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: `22.x`

El archivo `vercel.json` ya incluye el rewrite necesario para que las rutas de `react-router-dom` funcionen al recargar páginas internas como `/empresa`, `/servicios` o `/legal/pqrsf`.
