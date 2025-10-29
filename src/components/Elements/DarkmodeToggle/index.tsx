'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkmodeToggle() {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const dark = stored === 'true';
        setIsDark(dark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme.toString());

        if (newTheme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title={isDark ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    );
}
