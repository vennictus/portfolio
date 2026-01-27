# Pending UI Improvements

## ✅ Completed
1. ✅ Removed vignette/gradient from projects preview - now uses grid layout

## 🔧 Remaining Tasks

### Navigation & Layout
- [ ] Make navbar pill permanent (always show rounded background)
- [ ] Hide navbar on blog reader pages (`/blog/[slug]`)
- [ ] Center navbar text vertically in pill
- [ ] Reduce dead space on home page (reduce padding/margins)

### Browser Dots
- [ ] Make both dots equal size
- [ ] Ensure consistent spacing

### Blog Reader Improvements
- [ ] Reduce zoom - make max-width smaller (3xl instead of 5xl)
- [ ] Move title above image
- [ ] Style like terminal editor (monospace feel, darker background)
- [ ] Links: green color, no underline, no hover effects
- [ ] Customize date format per blog (use title in filename)

### Color System
- [ ] Blog accent color: **GREEN** (#28c840)
- [ ] Projects accent color: **RED** (#ef4444)
- [ ] Update all blog hovers/borders to green
- [ ] Update all project hovers/borders to red

### Blog List Page (`/blog`)
- [ ] Remove "beep boop bop" tagline
- [ ] Add decorative bar to header
- [ ] Add "view on hashnode" link opposite heading
- [ ] Style header with colors

### Blog Cards Updates
- [ ] Replace "read article" with "read blog"
- [ ] Replace category badge with "view on hashnode" link
- [ ] Add "X min read" with book icon
- [ ] Calculate reading time from MDX content

### Home Page Cards
- [ ] Make all cards same default size (equal heights)
- [ ] Blog cards: 4 equal cards
- [ ] Project cards: 3 equal cards

### Projects 404 Fix
- [ ] Check why `/projects` throws 404
- [ ] Verify projects data structure matches expected format

## 📝 Implementation Notes

### Green Accent for Blogs
```css
/* Add to globals.css */
.blog-accent {
  --local-accent: #28c840;
}

.blog-link:hover {
  color: #28c840;
  border-color: #28c840;
}
```

### Reading Time Calculation
```typescript
// Add to MDX processing
function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200); // 200 words per minute
}
```

### Terminal Editor Style
```css
.blog-content {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  background: #0d0d0d;
  padding: 2rem;
  border-radius: 0;
}

.blog-content a {
  color: #28c840;
  text-decoration: none;
}
```

### Permanent Pill Navbar
```typescript
// Remove scroll detection, always show pill
<div className="bg-card-bg/80 backdrop-blur-xl border border-card-border rounded-full px-4 py-2">
```

### Hide Navbar on Reader
```typescript
// In blog/[slug]/page.tsx
<Navbar className="hidden" /> // or remove completely
```

### Hashnode Link Component
```tsx
<a href="https://hashnode.com/@yourprofile" className="text-accent hover:underline">
  view on hashnode →
</a>
```

### Equal Card Heights
```css
.card-container {
  display: grid;
  grid-auto-rows: 1fr;
}
```

---

## 🎯 Priority Order
1. Fix projects 404 (blocking)
2. Color system (blog=green, projects=red)
3. Navbar improvements
4. Blog reader terminal style
5. Card updates (read time, hashnode links)
6. Layout/spacing refinements
