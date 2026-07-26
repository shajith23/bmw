# 🏎️ BMW M4 GT3 EVO — Digital Showcase Experience

An immersive, interactive web showcase built for the **BMW M4 GT3 EVO** customer racing car. Featuring scroll-driven 360° image sequence canvas animations, live telemetry HUDs, dynamic motorsport drive modes, Web Audio API sound synthesis, and Lenis smooth scrolling.

---

## 🌟 Key Features

- 🔄 **600vh Interactive Scroll Canvas**: Smooth frame-by-frame 360° presentation driven by a 192-frame image sequence linked to high-precision scroll progress.
- ⚡ **Dynamic Drive Modes**: Toggle between **QUALIFYING**, **ENDURANCE**, and **WET** modes to dynamically adjust aerodynamics, turbo boost levels, telemetry stats, visual themes, and sound profiles.
- 🔊 **Web Audio API Sound Engine**: Custom sound synthesizer delivering realistic engine revs, turbo spooling, gear shifts, and UI audio responses.
- 📊 **Live Telemetry Navigation HUD**: Real-time cockpit instrumentation tracking Speed (km/h), Engine RPM, Active Gear, Downforce (kg), and lateral G-forces as you scroll through race phases.
- ⏱️ **Motorsport Preloader**: Interactive RPM tachometer startup screen with animated needle sweeps and manual engine ignition button.
- 📑 **Interactive Technical Data & Inquiry Modals**: Deep-dive into homologated FIA GT3 EVO engine specifications, chassis telemetry, or request customer racing quotes.
- 🌊 **Lenis Inertia Smooth Scroll & Micro-Animations**: Ultra-fluid scrolling experience enhanced with Framer Motion UI reveals.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 14](https://nextjs.org/)** | App Router framework with React 18 & SSR optimization |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and structured data interfaces |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first styling & custom motorsport color palette |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth UI transitions, phase reveals, and modal animations |
| **[Lenis](https://lenis.darkroom.engineering/)** | Inertial smooth scrolling system (`@studio-freight/lenis`) |
| **[Three.js / React Three Fiber](https://threejs.org/)** | 3D graphics & spatial canvas canvas rendering pipeline |
| **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** | Custom browser-based motorsport sound engine |
| **[Lucide React](https://lucide.dev/)** | Clean, modern vector UI iconography |

---

## 📁 Project Structure

```text
bmw-m4-gt3-evo-showcase/
├── public/
│   └── images/
│       └── bmw-m4-gt3-evo-sequence/   # 192-frame 360° image sequence
├── src/
│   ├── app/
│   │   ├── globals.css                # Global CSS styles & scrollbar customization
│   │   ├── layout.tsx                 # Root layout & Lenis provider wrapper
│   │   └── page.tsx                   # Master 600vh scroll container & state manager
│   ├── components/
│   │   ├── BMWExperience.tsx          # Dynamic telemetry overlays & phase text cards
│   │   ├── BMWScrollCanvas.tsx        # High-performance 2D Canvas sequence renderer
│   │   ├── FeaturesSection.tsx        # Key GT3 EVO evolutionary upgrades
│   │   ├── Footer.tsx                 # Footer with quick links & inquiry triggers
│   │   ├── InquireModal.tsx           # Customer racing order & contact form modal
│   │   ├── LenisProvider.tsx          # Smooth scroll context wrapper
│   │   ├── Navbar.tsx                 # Telemetry header, audio toggle & mode switcher
│   │   ├── Preloader.tsx              # Interactive tachometer startup preloader
│   │   ├── SpecsGrid.tsx              # Interactive performance specification grid
│   │   └── TechDataModal.tsx          # Comprehensive technical data sheet modal
│   ├── data/
│   │   └── bmwData.ts                 # Phase data, engine specs & feature content
│   └── utils/
│       ├── audio.ts                   # Web Audio API sound synthesizer engine
│       └── utils.ts                   # Classname utility helpers (clsx + tailwind-merge)
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🏎️ Experience Phases & Drive Modes

### 1. Master Scroll Phases
The showcase unfolds across 4 distinct phases synced to scroll progress:
1. **01 / LEGACY** — Introduction to the BMW M4 GT3 EVO platform & championship heritage.
2. **02 / AERODYNAMICS** — Redesigned front splitter, dive planes, rear wing, and thermal airflow management.
3. **03 / COCKPIT** — 70° lightweight carbon GT3 doors, FIA safety cell, and sequential shift controls.
4. **04 / POWERTRAIN** — Unveiling the 3.0L BMW P58 EVO Twin-Turbo Inline-6 delivering up to 590 PS.

### 2. Motorsport Drive Modes
- 🔴 **QUALIFYING**: Maximum attack mode (540 HP, full boost, aggressive telemetry styling).
- 🔵 **ENDURANCE**: Stint optimization mode for balanced tire wear, fuel map & downforce.
- 🟡 **WET**: Maximum traction control, softened throttle mapping, and rain telemetry overlay.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.x` or higher
- **npm** or **yarn** / **pnpm** / **bun**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bmw-m4-gt3-evo-showcase.git
   cd bmw-m4-gt3-evo-showcase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the interactive showcase.

---

## 📜 Build & Production

To create an optimized production build:

```bash
# Generate production bundle
npm run build

# Start production server
npm start
```

To run linting checks:
```bash
npm run lint
```

---

## 🤝 Acknowledgments & Credits

- **BMW M Motorsport** for inspiring the design aesthetic and performance specifications.
- Asset sequences and motorsport imagery engineered for interactive high-FPS web canvas rendering.

---

## 📄 License

This project is created for demonstration and portfolio showcase purposes. All BMW trademarks, logos, and M Motorsport designations belong to BMW AG.
