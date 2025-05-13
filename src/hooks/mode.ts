import { WatchFunction } from "./watch";

function getInitialTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

const [darkMode, setDarkMode, observeMode] = WatchFunction<'light' | 'dark'>(getInitialTheme());

observeMode(() => {
  const current = darkMode();
  localStorage.setItem('theme', current);
});

export { darkMode, setDarkMode, observeMode };
