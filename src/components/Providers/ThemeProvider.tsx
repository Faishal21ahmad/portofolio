'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

// export default function ThemeProvider({ children }: { children: React.ReactNode }) {
//     const [isDark, setIsDark] = useState<boolean>(false);

//     useEffect(() => {
//         const stored = localStorage.getItem('theme-dark');
//         const dark = stored === 'true';
//         setIsDark(dark);
//         updateBodyClass(dark);
//     }, []);

//     const updateBodyClass = (dark: boolean) => {
//         if (dark) {
//             document.body.classList.add('dark');
//         } else {
//             document.body.classList.remove('dark');
//         }
//     };

//     return <>{children}</>;
// }


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
    </NextThemeProvider>
        ;
}