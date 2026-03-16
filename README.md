# HillMak Corporate Website

A premium corporate website for HillMak (hillmak.co.zm) featuring two distinct divisions with separate visual themes.

## 🏢 About HillMak

HillMak is a Zambian innovation holding company operating at global standards with two primary divisions:

- **HillMak** (Technology Division) - Corporate / Software / AI / Safety
- **HillMak Creative** - Branding / Marketing / Design / Media

## 🎨 Color System

### Theme A — Home + Technology (Deep Navy & Orange)
- **Deep Navy**: `#0D1B2A` (primary background)
- **Orange Accent**: `#F88F1E` (CTAs, highlights)
- **White**: `#FFFFFF`

This theme conveys: Serious. Enterprise. Stable. Technical.

### Theme B — Creative Division (Magenta & Mint)
- **Charcoal**: `#333436` (primary background)
- **Magenta**: `#ED145B` (primary CTA)
- **Mint Green**: `#15EEA7` (secondary accents)
- **White**: `#FFFFFF`

This theme conveys: Energetic. Bold. Expressive. Modern.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
HillMak/
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page (Tech theme)
│   ├── globals.css         # Global styles & Tailwind
│   ├── technology/
│   │   └── page.tsx        # Technology division page
│   └── creative/
│       └── page.tsx        # Creative division page
├── components/
│   ├── Navigation.tsx      # Adaptive navigation component
│   ├── Footer.tsx          # Adaptive footer component
│   ├── Button.tsx          # Themed button component
│   ├── Card.tsx            # Themed card component
│   └── Section.tsx         # Section wrapper component
├── lib/
│   ├── theme.ts            # Theme configuration & utilities
│   └── animations.ts       # Framer Motion animation variants
├── tailwind.config.js      # Extended Tailwind with dual themes
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Design Principles

1. **Clear Separation** - Each division has its own distinct color theme
2. **No Mixing** - Themes are never mixed on the same page
3. **Premium Feel** - Large typography, generous spacing, subtle animations
4. **Mobile First** - Fully responsive design
5. **Performance** - Optimized animations and lazy loading
6. **Accessibility** - Semantic HTML and proper contrast ratios

## 📄 Pages

### 1. Home (`/`)
- **Theme**: Tech (Navy & Orange)
- **Sections**: Hero, Division Overview, Values
- **CTAs**: Explore Technology, Explore Creative

### 2. Technology (`/technology`)
- **Theme**: Tech (Navy & Orange)
- **Content**: Software Development, Enterprise Systems, AI & Automation, Procurement, Safety Wear, Digital Infrastructure

### 3. Creative (`/creative`)
- **Theme**: Creative (Magenta & Mint)
- **Content**: Brand Strategy, Corporate Identity, Exhibition Branding, Digital Marketing, Content Production, UI/UX Design

## 🎨 Tailwind Custom Classes

### Utility Classes

```css
.tech-theme          /* Tech theme background & text */
.creative-theme      /* Creative theme background & text */
.section-spacing     /* Consistent vertical spacing */
.container-custom    /* Centered container with padding */
```

### Color Classes

**Tech Theme:**
- `bg-tech-bg` - Deep Navy background
- `text-tech-accent` - Orange accent color
- `bg-tech-accent` - Orange background
- `hover:bg-tech-accent-dark` - Darker orange on hover

**Creative Theme:**
- `bg-creative-bg` - Charcoal background
- `text-creative-primary` - Magenta color
- `bg-creative-primary` - Magenta background
- `text-creative-accent` - Mint green color

## ✨ Animation Variants

Located in `lib/animations.ts`:

- `fadeUpVariants` - Fade up on scroll
- `fadeInVariants` - Simple fade in
- `cardHoverVariants` - Card hover lift effect
- `staggerContainer` - Stagger children animations

## 🔧 Customization

### Adding New Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      tech: {
        // Add new tech colors here
      },
      creative: {
        // Add new creative colors here
      }
    }
  }
}
```

### Adding New Pages

1. Create new directory in `app/`
2. Add `page.tsx` file
3. Choose appropriate theme
4. Update navigation links in `components/Navigation.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Then deploy the `.next` folder according to your hosting platform's instructions.

## 📞 Contact

For inquiries about HillMak:
- Website: hillmak.co.zm
- Location: Lusaka, Zambia

---

**Built with ❤️ for African Innovation**
