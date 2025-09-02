# Niharika Deokar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, inspired by professional portfolio designs.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Professional Sections**: Hero, About, Experience, Expertise, Projects, Events, Volunteering, and Contact

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: Next-themes for dark/light mode
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
niharika-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Expertise.tsx      # Skills and expertise
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Portfolio projects
│   ├── Events.tsx         # Achievements and events
│   ├── Volunteering.tsx   # Community involvement
│   ├── Contact.tsx        # Contact form and info
│   ├── Navbar.tsx         # Navigation bar
│   └── ThemeProvider.tsx  # Theme context
└── public/                 # Static assets
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## ✏️ Customization

### Personal Information
Update the following files with your information:

- **Hero.tsx**: Your name, title, and social links
- **About.tsx**: Your professional summary and current focus
- **Experience.tsx**: Your work experience and internships
- **Projects.tsx**: Your portfolio projects
- **Events.tsx**: Your achievements and events
- **Volunteering.tsx**: Your community involvement
- **Contact.tsx**: Your contact information

### Social Links
Update the social media links in:
- `components/Hero.tsx` (LinkedIn, GitHub)
- `components/Contact.tsx` (contact information)

### Colors and Styling
The website uses Tailwind CSS with a blue color scheme. You can customize colors by:
- Modifying the `bg-blue-600`, `text-blue-600` classes
- Updating the CSS variables in `app/globals.css`

### Adding New Sections
To add new sections:
1. Create a new component in the `components/` folder
2. Import and add it to `app/page.tsx`
3. Add the section name to the navigation in `components/Navbar.tsx`

## 🎨 Design Features

- **Gradient Text**: Hero title uses blue-to-purple gradient
- **Card Layouts**: Professional card designs for projects and experience
- **Hover Effects**: Subtle animations and hover states
- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Professional Typography**: Clean, readable font hierarchy

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Adaptive navigation
- Responsive grids and layouts
- Touch-friendly interactions

## 🌙 Dark Mode

- Automatic theme detection
- Manual theme toggle in navbar
- Smooth transitions between themes
- Consistent color schemes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js and Tailwind CSS**
