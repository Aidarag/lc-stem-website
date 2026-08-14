# Livingstone College STEM Showcase

A premium, modern, and interactive digital showcase for the Livingstone College STEM Department (L.C. STEM). Designed to highlight academic program tracks, showcase outstanding students, celebrate competitive student achievements (projects, hackathons, honors), and provide an interactive communications channel for prospective applicants.

---

## 🚀 Key Features

*   **Academic Tracks Directory**: Interactive layouts detailing the four specialized STEM concentrations: Biology, Computer Information Systems (CIS), Business, and Mathematics.
*   **Featured Students Directory**: Highlighting outstanding STEM students, their bios, internships (at firms like Microsoft, Google, Novartis), certifications, and academic accomplishments, with quick major-based filtering.
*   **Unified Achievements Log**: Consolidated registry of student projects, regional hackathon victories (e.g. CIAA STEM Hackathon, Microsoft HBCU Hackathon), and academic research awards.
*   **Department News & Events Feed**: Live calendar of upcoming workshops, seminars, networking dinners, and chronological department announcements.
*   **Admissions & Connect Portal**: Interactive form for inquiries paired with a simulated **STEM Response Desk Console** to manage student interest.

---

## 🛠️ Technology Stack

The project is built on Next.js (App Router) using a modern utility-first stylesheet approach and physics-based animations:

*   **Framework**: [Next.js](https://nextjs.org/) `16.3.0` (App Router architecture)
*   **UI Engine**: [React](https://react.dev/) `19.2.8`
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) `^4.0.0` (utilizing `@import` CSS module imports & theme configuration)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) `^13.1.0` (physics-based spring transitions and stagger lists)
*   **Icons**: [Lucide React](https://lucide.dev/) `^1.31.0` (unified SVG icons)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) `^5.0.0`

---

## 📂 Project Structure & Directory Layout

The application isolates page routes, reusable components, static databases, and design tokens using the layout below:

```
├── public/                 # Static assets (images, branding logos)
├── design-system/          # Design tokens and specifications
│   └── livingstone-college-stem
│       └── MASTER.md       # Master design token files & rules
├── src/
│   ├── app/                # Next.js App Router Page components
│   │   ├── about/          # Mission, Vision, and department context
│   │   ├── competitions/   # Academic awards and hackathons showcase page
│   │   ├── contact/        # Contact form and response simulator console
│   │   ├── news-events/    # Live news feed & events calendar page
│   │   ├── programs/       # Program concentrations layouts
│   │   ├── spotlight/      # Student profiles directory
│   │   ├── globals.css     # Global styles & Tailwind v4 theme mapping
│   │   ├── layout.tsx      # Root HTML scaffolding & providers
│   │   └── page.tsx        # Homepage / Landing page
│   ├── components/
│   │   ├── layout/         # Persistent structural elements (Navbar, Footer)
│   │   └── ui/             # Reusable UI widgets (BentoGrid, StatCounter, ScrollReveal)
│   └── data/
│       └── stemData.ts     # Static database containing students, projects, and achievements
├── package.json
└── tsconfig.json
```

---

## 🗃️ Data Schema & Models

All database-like information is statically typed and declared within [stemData.ts](file:///Users/im/Desktop/Projects%20IDE/LC-Stem.website/src/data/stemData.ts) for simple admin-driven changes:

### Academic Concentrations Schema
```typescript
export interface AcademicProgram {
  name: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  overview: string;
  careers: string[];
  skills: string[];
  highlights: string[];
}
```

### Student Spotlight Profiles
```typescript
export interface StudentSpotlight {
  id: string;
  name: string;
  major: 'Computer Information Systems' | 'Mathematics' | 'Biology' | 'Business';
  gradYear: number;
  photo: string;
  bio: string;
  leadership: string[];
  internships: string[];
  awards: string[];
  certifications: string[];
  achievements: string[];
  featured: boolean;
}
```

### Projects & Competitions Schemas
```typescript
export interface StudentProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  team: string[];
  outcomes: string;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Competition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  award: string;
  students: string[];
  image: string;
  topics?: string[];
  outcomes?: string;
  link?: string;
}
```

---

## 🎨 Visual System & Typography

Designed around an academic, clean, and high-contrast dark-mode friendly theme:
*   **Primary Palette**: Charcoal `#181818`, Pure White `#FFFFFF`, Slate `#0F172A`
*   **Accents**: Electric Lime `#E2FD52`, Vibrant Orange `#FF3B00`, Electric Blue `#0066FF`, Lavender `#C2B2E9`
*   **Typography**:
    *   *Headings & Heros*: Neue Haas Grotesk / Helvetica Now
    *   *Body & Interfaces*: Inter
    *   *Metadata & Labels*: PP Neue Montreal / SF Pro Display
*   **Interactive Core Classes**:
    *   `.premium-btn`: Handles scale transitions (`scale(0.97)`) on click active state.
    *   `.premium-card-light` / `.premium-card-dark`: Hover translation overlays for interactive cards.
    *   `.grid-pattern` / `.grid-pattern-dark`: Custom background grid canvas overlays.

---

## ⚡ Getting Started

### Prerequisites

*   Node.js (v18.x or later)
*   npm or pnpm / yarn

### Installation & Run

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Aidarag/public.stemwebsite.git
    cd public.stemwebsite
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To create a production-optimized build of the project:
```bash
npm run build
npm run start
```

---

## 👥 Contributors & Administration

This project is maintained by the **Livingstone College STEM Department**. Salisbury, North Carolina.
