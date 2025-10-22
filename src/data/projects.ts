import webSite from '../assets/photos/melihcetinSite.webp';

// --- Data Structure ---
export type Project = {
    name: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live?: string;
};

// --- Data ---
export const projects: Project[] = [
    {
        name: 'Proje 1: Portföy Sitesi',
        description: 'React ve Node.js kullanılarak geliştirilmiş, modern ve anlaşılır bir portföy sitesi',
        image: webSite,
        tags: ['React', 'Node.js', 'Tailwindcss'],
        github: 'https://github.com/Omerli-Faruk/portfolio-starter',
        live: 'https://www.melihcetin.dev',
    },
    {
        name: 'Proje 2: XXX',
        description: 'XXXXXXXX',
        image: 'https://via.placeholder.com/400x250/cbd5e1/1e293b?text=Proje+Görseli',
        tags: ['X', 'X', 'X'],
        github: '#',
    },
    {
        name: 'Proje 3: XXX',
        description: 'XXXXXXXXX',
        image: 'https://via.placeholder.com/400x250/cbd5e1/1e293b?text=Proje+Görseli',
        tags: ['X', 'X', 'X', 'X'],
        github: '#',
        live: '#',
    },
];