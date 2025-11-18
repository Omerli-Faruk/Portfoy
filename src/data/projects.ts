import webSiteP from '../assets/photos/melihcetinSite.webp';
import webSiteG from '../assets/photos/Geoguessr_clone.webp';


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
        image: webSiteP,
        tags: ['React', 'Node.js', 'Tailwindcss'],
        github: 'https://github.com/Omerli-Faruk/portfolio-starter',
        live: 'https://www.melihcetin.dev',
    },
    {
        name: 'Proje 2: Geoguessr Clone',
        description: 'Next.js ve Tailwind CSS ile geliştirilmiş, Mapillary Panorama API tabanlı, Haversine Formülü kullanarak mesafeye dayalı puanlama yapan, dinamik ve sürdürülebilir GeoGuessr tarzı konum tahmin oyunu.',
        image: webSiteG,
        tags: ['Next.js', 'TypeScript', 'Tailwindcss'],
        github: 'https://github.com/Omerli-Faruk/geoguessr_clone',
        live: 'https://geobleedat.vercel.app/'
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