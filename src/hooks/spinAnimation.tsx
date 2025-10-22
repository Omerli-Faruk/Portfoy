import { useState, useCallback, useRef } from 'react';

const DEFAULT_ANIMATION_CLASS = 'animate-spin';
const DEFAULT_ANIMATION_DURATION = 500;

const useAnimation = () => {
    const [animationClass, setAnimationClass] = useState('');
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const triggerAnimation = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setAnimationClass(DEFAULT_ANIMATION_CLASS);

        timeoutRef.current = setTimeout(() => {
            setAnimationClass('');
            timeoutRef.current = null;
        }, DEFAULT_ANIMATION_DURATION);
    }, []);

    return { animationClass, triggerAnimation };
};

export default useAnimation;
