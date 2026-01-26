# Portfolio File Structure

## ✨ Clean & Simple Structure

```
portfolio/
├── src/
│   ├── app/                           # Next.js App Router pages
│   │   ├── page.tsx                   # Home page
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global styles
│   │   ├── blog/
│   │   │   ├── page.tsx               # Blog listing (4 blogs)
│   │   │   └── [slug]/page.tsx        # Individual blog post
│   │   └── projects/
│   │       ├── page.tsx               # Projects listing (3 projects)
│   │       └── [slug]/page.tsx        # Individual project details
│   │
│   ├── components/                    # All components (flat structure)
│   │   ├── Navbar.tsx                 # Navigation with pill effect
│   │   ├── Hero.tsx                   # Hero section with circular PFP
│   │   ├── QuickLinks.tsx             # GitHub, X, LinkedIn, Resume links
│   │   ├── BlogPreview.tsx            # Blog preview for home (4 blogs)
│   │   ├── ProjectsPreview.tsx        # Projects preview for home (3 projects)
│   │   ├── BlogCard.tsx               # Blog card component
│   │   ├── ProjectCard.tsx            # Project card component
│   │   ├── BrowserHeader.tsx          # Browser dots (red & green)
│   │   ├── TechBadge.tsx              # Tech stack badges
│   │   └── SpaceBackground.tsx        # Animated stars background
│   │
│   └── data/                          # All data in one place
│       ├── blogs.ts                   # 4 blog posts with placeholder content
│       └── projects.ts                # 3 projects with placeholder content
│
└── public/
    └── images/                        # Add your images here
        ├── blog-1.jpg → blog-4.jpg    # Blog featured images
        └── project-1.jpg → project-3.jpg  # Project featured images
```

## 📦 Import Patterns

### Data
```typescript
import { getBlogBySlug, getFeaturedBlogs, getAllBlogs } from '@/data/blogs';
import { getProjectBySlug, getFeaturedProjects, getAllProjects } from '@/data/projects';
```

### Components
```typescript
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import ProjectCard from '@/components/ProjectCard';
```

## 🎯 Key Features

### Structure Benefits
- ✅ **No nested folders** - everything flat & easy to find
- ✅ **Clear separation** - data vs components vs pages
- ✅ **Simple imports** - no deep paths like `../../`
- ✅ **Self-documenting** - file names match their purpose

### Design System
- **Lowercase everything** - modern, minimal aesthetic
- **Red accent** (#ef4444) - used for hovers, borders, active states
- **Monochrome base** - dark grays with white text
- **Browser dots** - Red (outer) & Green (inner) on all cards
- **Smooth animations** - cards pop up on hover with red glow

## 🎨 Color Palette

```css
--background: #0a0a0a      /* Near black */
--card-bg: #1a1a1a         /* Dark gray */
--card-border: #2a2a2a     /* Border gray */
--accent: #ef4444          /* Red (hover/active) */
--foreground: #e8e8e8      /* Off-white text */
--secondary: #888888       /* Muted text */
--dot-red: #ff5f57        /* Browser dot */
--dot-green: #28c840      /* Browser dot */
```

## 🚀 What Was Removed

Cleaned up from old structure:
- ❌ `src/lib/` - Old MDX blog system
- ❌ `src/types/` - Old type definitions
- ❌ `src/components/sections/` - Flattened to root
- ❌ `src/components/ui/` - Flattened to root

## 📝 To Add Your Content

1. **Replace placeholder text** in `src/data/blogs.ts` and `src/data/projects.ts`
2. **Add images** to `public/images/` (blog-1.jpg through blog-4.jpg, project-1.jpg through project-3.jpg)
3. **Update Hero** in `src/components/Hero.tsx` - replace "[your name]" and description
4. **Update social links** in `src/components/QuickLinks.tsx` - add your actual URLs
