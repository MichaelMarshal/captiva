# Captiva Cyber - Modern Cybersecurity Website

A cutting-edge, responsive cybersecurity website built with React, TypeScript, Tailwind CSS, and Framer Motion. This project showcases advanced web development techniques while delivering a professional cybersecurity company presentation.

![Captiva Cyber](https://img.shields.io/badge/Captiva-Cyber-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8?style=flat-square&logo=tailwindcss)

## 🚀 Features

### 🎨 Modern Design
- **Cybersecurity-themed UI** with dark mode aesthetics
- **Responsive design** optimized for all devices
- **Professional gradients** and cyberpunk color schemes
- **Interactive animations** powered by Framer Motion

### 🛡️ Core Sections
- **Hero Section** - Compelling cybersecurity messaging
- **Services** - Comprehensive security offerings
- **About** - Company information and team profiles
- **Contact** - Interactive contact form with validation
- **Footer** - Complete site navigation and resources

### ⚡ Technical Excellence
- **React 19.2** with functional components and hooks
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **React Router** for client-side navigation
- **Lucide React** for beautiful, consistent icons

### 🎯 Performance Optimized
- **Vite** for lightning-fast development and building
- **Code splitting** and lazy loading ready
- **Optimized images** and assets
- **SEO-friendly** structure and meta tags

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Library |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.2.2 | Build Tool |
| **Tailwind CSS** | 4.1.17 | Styling |
| **Framer Motion** | Latest | Animations |
| **React Router** | Latest | Navigation |
| **Lucide React** | Latest | Icons |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd captiva-cyber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in terminal)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── pages/
│   └── Home.tsx        # Main homepage
├── assets/             # Static assets
├── App.tsx            # Main app component
├── App.css            # Global styles
├── index.css          # Tailwind imports
└── main.tsx           # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) - Trust and security
- **Secondary**: Blue (#3b82f6) - Technology and reliability
- **Background**: Gray scales (#111827, #1f2937, #374151)
- **Accent**: Red (#ef4444) - Alerts and critical information

### Typography
- **Primary Font**: Inter - Modern, readable
- **Headings**: Bold weights (600-800)
- **Body**: Regular weight (400)

### Components
- Responsive grid layouts
- Card-based design elements
- Interactive hover states
- Smooth animations and transitions

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop** (1920px+) - Full layout with all features
- **Laptop** (1024px-1919px) - Optimized spacing
- **Tablet** (768px-1023px) - Stacked layouts
- **Mobile** (320px-767px) - Mobile-first approach

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `dist` folder
- **Static Hosting**: Upload `dist` folder contents
- **CDN**: Serve through CloudFlare or similar

## 🔧 Customization

### Brand Colors
Update `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### Content Updates
- Edit component files in `/src/components/`
- Update images in `/src/assets/`
- Modify contact information in `Contact.tsx`

### Adding New Pages
1. Create component in `/src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Header.tsx`

## 🛡️ Security Features

- **Input validation** on contact forms
- **XSS protection** through React's built-in escaping
- **HTTPS-ready** for secure deployments
- **Content Security Policy** ready

## 📋 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: contact@captivacyber.com
- Documentation: Check component comments for detailed usage

---

**Built with ❤️ and ☕ for the cybersecurity community**