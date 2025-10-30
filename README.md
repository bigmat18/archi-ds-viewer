# Architectural 3D Dataset Visualization with ML

A full-stack web platform for analyzing and exploring a dataset of architectural 3D models (e.g., buildings, structures) aimed at training machine learning models. Features interactive visualizations, data querying, and ML preprocessing tools.

## Stack

### Frontend
- **React (TypeScript)**: UI framework for interactive components ([react.dev/learn](https://react.dev/learn)).
- **Vite**: Build tool and dev server for hot-reloading ([vitejs.dev](https://vitejs.dev/)).
- **D3.js**: Data visualization for graphs and dataset overviews ([d3js.org](https://d3js.org/)).
- **Three.js**: 3D rendering for architectural models ([threejs.org](https://threejs.org/)).
- **MUI (Material-UI)**: Design system for UI components ([mui.com/material-ui/getting-started](https://mui.com/material-ui/getting-started/)).

### Backend
- **Bun (TypeScript)**: Runtime and package manager for the server ([bun.sh/docs](https://bun.sh/docs)).
- **sql.js**: In-memory SQLite for dataset management (WebAssembly-based, ideal for 3D metadata) ([sql.js.org](http://sql.js.org/)).

## Quick Start

1. **Clone & Install**:
   ```bash
   git clone https://github.com/bigmat18/archi-ds-viewer  # O cd nel tuo progetto
   bun install  # Installa deps per root, frontend e backend
   ```

2. **Development**:
   ```bash
   bun run dev  # Avvia frontend (localhost:5173) + backend (localhost:3000) in parallelo
   ```

3. **Build**:
   ```bash
   bun run build  # Build frontend (dist/) + backend (backend/dist/)
   ```