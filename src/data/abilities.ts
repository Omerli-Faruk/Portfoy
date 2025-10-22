// --- Data Structure ---
export type Ability = {
    name: string;
    icon: string;
    desc: string;
    iconBgClass: string;
    textClass: string;
};

// --- Data ---
export const abilities: Ability[] = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Bileşen tabanlı, hızlı ve interaktif web uygulamaları geliştiriyorum.', iconBgClass: 'bg-sky-100 dark:bg-sky-900/50', textClass: 'text-sky-600 dark:text-sky-400' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', desc: 'Tek kod tabanıyla iOS ve Android için harika uygulamalar yapıyorum.', iconBgClass: 'bg-blue-100 dark:bg-blue-900/50', textClass: 'text-blue-600 dark:text-blue-400' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', desc: 'Modern ve güvenli Android uygulamaları için Kotlin tercih ediyorum.', iconBgClass: 'bg-purple-100 dark:bg-purple-900/50', textClass: 'text-purple-600 dark:text-purple-400' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Güçlü ve platform bağımsız uygulamalar için Java kullanıyorum.', iconBgClass: 'bg-orange-100 dark:bg-orange-900/50', textClass: 'text-orange-600 dark:text-orange-400' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', desc: 'Daha güvenli ve ölçeklenebilir projeler için TypeScript kullanıyorum.', iconBgClass: 'bg-indigo-100 dark:bg-indigo-900/50', textClass: 'text-indigo-600 dark:text-indigo-400' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Web’in temel diliyle dinamik ve etkileşimli projeler geliştiriyorum.', iconBgClass: 'bg-yellow-100 dark:bg-yellow-900/50', textClass: 'text-yellow-600 dark:text-yellow-400' },
    { name: 'Tailwindcss', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', desc: 'Hızlı ve esnek CSS frameworkü ile modern arayüzler tasarlıyorum.', iconBgClass: 'bg-teal-100 dark:bg-teal-900/50', textClass: 'text-teal-600 dark:text-teal-400' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', desc: 'Android geliştirme için resmi IDE ile verimli ve hızlı çalışıyorum.', iconBgClass: 'bg-lime-100 dark:bg-lime-900/50', textClass: 'text-lime-600 dark:text-lime-400' },
];