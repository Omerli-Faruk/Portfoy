import { memo } from 'react';
import { projects, type Project } from '../data/projects';
import { ExternalLinkIcon, GitHubIcon } from '../components/Icons';

// --- Components ---
const ProjectCard = memo(({ project }: { project: Project }) => (
    <div className="
        flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800/50 shadow-lg
        transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20"
    >
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">{project.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900/50 dark:text-blue-300">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <GitHubIcon className="w-5 h-5" />
                    <span>Kod</span>
                </a>
                {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ExternalLinkIcon className="w-5 h-5" />
                        <span>Canlı Demo</span>
                    </a>
                )}
            </div>
        </div>
    </div>
));
ProjectCard.displayName = 'ProjectCard';

const Projects = memo(() => (
    <section id="projects" className="w-full py-20 px-4">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Öne Çıkan Projelerim</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl">Yeteneklerimi ve tecrübelerimi sergilediğim bazı projeler.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    </section>
));
Projects.displayName = 'Projects';

export default Projects;