export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    slug: 'what-will-website-be-like-in-100-years',
    title: 'What Will Website Be Like In 100 Years?',
    excerpt: 'Suspendisse error dignissim et egestas varius aliquet. Error beatae mollitie placeat est quasi. Aut facilis et repellendus architecto voluptates.',
    content: `# What Will Website Be Like In 100 Years?

Quia perspiciatis sint repudiandae.

## Introduction

Minima aperiam impendi quis veritatis. Error beatae mollitie placeat est quasi. Aut facilis et repellendus architecto voluptates porro at perferendis. Possimus vero dolorem ab velit laboriosam. Neque excepteur aut et delectus. Distinctio laboris corporis consectetur ex.

## The Future of Web

Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.

### Key Points

- Revolutionary AI integration
- Quantum computing interfaces
- Neural-direct browsing experiences
- Holographic displays

## Conclusion

The web of tomorrow will be vastly different from what we know today. Innovation drives us forward.`,
    category: 'Design',
    date: '2024-04-01',
    image: '/images/blog-1.jpg',
    featured: true,
  },
  {
    slug: 'best-blogs-to-follow-web-design',
    title: '15 Best Blogs To Follow About Web Design',
    excerpt: 'Laborum sit neque nam adipisci igem est voluptatas. Aut mollit ab placeat esse culpa quis aliquam eligendi pariatur aute ullamco laboris.',
    content: `# 15 Best Blogs To Follow About Web Design

## Introduction

Discover the top resources for modern web designers.

## The List

1. Smashing Magazine
2. CSS-Tricks
3. A List Apart
4. Codrops
5. Web Designer Depot

And many more amazing resources to level up your design game!`,
    category: 'WebFlow',
    date: '2024-04-06',
    image: '/images/blog-2.jpg',
    featured: true,
  },
  {
    slug: 'history-of-web-design',
    title: 'The History Of Web Design',
    excerpt: 'Malesuada aperiam lorem perceptus culpa. Animi ewerit consectetur adipisicing distinctio. Accusamus corporis at et sunt ratione.',
    content: `# The History Of Web Design

## Early Days

The web started simple with basic HTML pages.

## Evolution

From tables to CSS, from Flash to responsive design. The journey has been remarkable.

## Modern Era

Today we have sophisticated frameworks and tools that make beautiful design accessible.`,
    category: 'Business',
    date: '2024-04-08',
    image: '/images/blog-3.jpg',
    featured: false,
  },
  {
    slug: 'designers-who-changed-everything',
    title: 'Designers Who Changed Everything',
    excerpt: 'Lorem sit adipisci et nemo rerum culpa. Hic iure corporis et at ullamco mollitia blanditiis temporibus totam ratione.',
    content: `# Designers Who Changed Everything

## Introduction

These visionaries shaped the digital world we inhabit.

## The Legends

- Dieter Rams
- Paul Rand
- Massimo Vignelli
- Susan Kare

Their principles still guide us today.`,
    category: 'Design',
    date: '2024-04-04',
    image: '/images/blog-4.jpg',
    featured: true,
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getFeaturedBlogs(): Blog[] {
  return blogs.filter((blog) => blog.featured).slice(0, 4);
}

export function getAllBlogs(): Blog[] {
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
