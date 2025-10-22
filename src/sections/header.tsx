import { useState, useEffect, forwardRef, memo } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import logo from '../assets/logo/logo.webp';
import logoW from '../assets/logo/logoW.webp';

const NavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <a
            href={href}
            className="hover:underline hover:underline-offset-8 decoration-4 decoration-blue-500 transition-colors duration-300"
        >
            {children}
        </a>
    </li>
));
NavLink.displayName = 'NavLink';

const Logo = memo(({ size }: { size: 'buyuk' | 'kucuk' }) => (
    <button
        type="button"
        className={`cursor-pointer ${size === 'buyuk' ? 'h-20 w-20' : 'h-14 w-14'} bg-transparent border-none p-0 transition-all duration-500`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
    >
        <img src={logo} alt="Logo" className="block dark:hidden h-full w-full" />
        <img src={logoW} alt="Logo" className="hidden dark:block h-full w-full" />
    </button>
));
Logo.displayName = 'Logo';

const Header = memo(forwardRef<HTMLElement>((_, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const size = isScrolled ? 'kucuk' : 'buyuk';

    return (
        <header
            ref={ref}
            className={`
                fixed top-0 w-full z-50 flex items-center justify-center px-5 shadow-md
                bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm
                transition-all duration-500
                ${size === 'buyuk' ? 'py-6' : 'py-3'}
            `}
        >
            <div className="w-full flex justify-between items-center max-w-6xl">
                <Logo size={size} />
                <nav className="md:flex hidden">
                    <ul className="flex items-center gap-x-32 text-2xl font-bold text-slate-900 dark:text-slate-200">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </ul>
                </nav>
                <div>
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    );
}));
Header.displayName = 'Header';

export default Header;