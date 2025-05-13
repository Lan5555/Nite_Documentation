import { WatchFunction } from "./watch";

const [darkMode, setDarkMode, observeMode] = WatchFunction<'light' | 'dark'>('dark');
    observeMode(() => {
    const current = darkMode();
    localStorage.setItem('theme', current);
    });
export {darkMode, setDarkMode, observeMode};