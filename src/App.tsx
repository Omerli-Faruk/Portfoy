import { useRef, useEffect, useState } from 'react';
import { Header, Hero, Abilities, Projects, Contact, Footer } from './sections';

function App() {
    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    return (
        <div className="relative bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 scroll-smooth">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-blue-200 via-transparent to-transparent dark:from-blue-900/50 dark:via-transparent dark:to-transparent -z-0"></div>
            <div className="relative z-10">
                <Header ref={headerRef} />
                <main style={{ paddingTop: `${headerHeight}px` }}>
                    <Hero />
                    <Abilities />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
