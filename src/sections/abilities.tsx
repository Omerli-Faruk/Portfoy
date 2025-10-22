import { memo } from 'react';
import { abilities, type Ability } from '../data/abilities';

// --- Components ---
const AbilityCard = memo(({ ability }: { ability: Ability }) => (
    <div className="
        p-8 text-center rounded-xl border border-slate-200 dark:border-slate-800
        bg-white dark:bg-slate-800/50 shadow-md
        transition-all duration-300 transform
        hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1
        dark:hover:shadow-blue-500/10"
    >
        <div className={`w-20 h-20 rounded-full inline-flex items-center justify-center mb-6 ${ability.iconBgClass}`}>
            <img src={ability.icon} alt={ability.name} className="w-12 h-12 object-contain" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${ability.textClass}`}>{ability.name}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-base">{ability.desc}</p>
    </div>
));
AbilityCard.displayName = 'AbilityCard';

const Abilities = memo(() => (
    <section id="about" className="relative w-full py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_45%_at_50%_50%,#dbeafe_0%,transparent_100%)] dark:bg-[radial-gradient(35%_45%_at_50%_50%,rgba(30,58,138,0.3)_0%,transparent_100%)]"></div>
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Teknoloji Yetkinliklerim</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl">Projelerimde kullandığım ve uzmanlaştığım teknolojiler.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                {abilities.map((ability) => (
                    <AbilityCard key={ability.name} ability={ability} />
                ))}
            </div>
        </div>
    </section>
));
Abilities.displayName = 'Abilities';

export default Abilities;