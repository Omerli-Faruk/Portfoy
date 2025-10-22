import React, { useState, useEffect } from 'react';
import spinAnimation from '../hooks/spinAnimation.tsx';
import MoonIcon from '../assets/icons/moon.svg';
import SunIcon from '../assets/icons/sun.svg';

const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const DarkModeToggle: React.FC = () => {
    const { animationClass, triggerAnimation } = spinAnimation();
    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        triggerAnimation();
        setIsDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    return (
        <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            className={animationClass}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out'
            }}
        >
            <img
                src={isDarkMode ? MoonIcon : SunIcon}
                alt={isDarkMode ? 'Moon Icon' : 'Sun Icon'}
                className="w-16 h-16"/>
        </button>
    );
};

export default DarkModeToggle;
