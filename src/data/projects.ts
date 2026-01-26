export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  techStack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'possimus',
    title: 'Possimus',
    description: 'Officia sit numquam fugiat gest molestiae sit et modi est et debitis dolorum. Quia volupt quas libero voluptatem dolores vel. Non natus esse voluptatum dolores est nisi.',
    content: `# Possimus

## Est est ipsa voluptates deserunt architecto

Debitis rerum perspiciatis aliquol porre ab culpa similique architecto. Sit minima qui et delectus. Possimus velit est architecto qui.

## Nihil ut sit ipsa

This project showcases cutting-edge architecture and design principles. Built with modern technologies to ensure scalability and performance.

### Key Features

- Real-time data synchronization
- Advanced caching strategies
- Responsive and accessible UI
- Comprehensive testing coverage

## Technical Implementation

The project leverages Next.js for server-side rendering, React for component architecture, and TypeScript for type safety. The backend is powered by Node.js with a PostgreSQL database.

### Architecture Decisions

We chose a microservices architecture to enable independent scaling and deployment of different system components.`,
    date: '2024-04-08',
    image: '/images/project-1.jpg',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/possimus',
  },
  {
    slug: 'dolorum-ullam-totam',
    title: 'Dolorum Ullam Totam',
    description: 'Consequatur et consectetur adipiscing elit perferemdis recusandae dicta. Sint quas. Eligendi magni deserunt sequi. Neon malesuada quo et laboriosam velit eaque sequi dignissim aspernatur.',
    content: `# Dolorum Ullam Totam

## Project Overview

An innovative solution combining modern web technologies with elegant design.

## Implementation Details

This project demonstrates advanced state management and data flow patterns using React and Redux. The UI is crafted with attention to detail and user experience.

### Technologies Used

The stack includes cutting-edge tools that ensure performance, maintainability, and developer experience.`,
    date: '2024-04-08',
    image: '/images/project-2.jpg',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Docker'],
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/dolorum',
  },
  {
    slug: 'nexus-platform',
    title: 'Nexus Platform',
    description: 'A comprehensive enterprise solution for managing distributed teams and workflows. Built with scalability and security as top priorities.',
    content: `# Nexus Platform

## Enterprise-Grade Solution

Nexus Platform revolutionizes how distributed teams collaborate and manage complex workflows.

## Core Features

- Real-time collaboration
- Advanced analytics dashboard
- Role-based access control
- Integration with 50+ tools`,
    date: '2024-03-15',
    image: '/images/project-3.jpg',
    techStack: ['Vue.js', 'Express', 'Redis', 'GraphQL', 'Kubernetes'],
    featured: true,
  },
  {
    slug: 'aurora-cms',
    title: 'Aurora CMS',
    description: 'Modern content management system with headless architecture. Empowers content creators with intuitive tools.',
    content: `# Aurora CMS

## Headless CMS Architecture

Aurora provides a flexible, API-first content management system that adapts to any frontend framework.`,
    date: '2024-02-20',
    image: '/images/project-4.jpg',
    techStack: ['Svelte', 'FastAPI', 'Elasticsearch', 'AWS'],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
