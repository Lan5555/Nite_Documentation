const theme = localStorage.getItem('theme');

export const prefersDark =
  theme === 'dark' ||
  (theme !== 'light' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

export const darkShadow1 =`0 6px 20px rgba(0, 0, 0, 0.45),
  0 2px 6px rgba(0, 0, 0, 0.35)
`;
export const darkShadow = `0 12px 24px rgba(0, 0, 0, 0.7),
  0 6px 12px rgba(0, 0, 0, 0.5)`
export const darkColor = '#121212';
export const prefersDark2 = window.matchMedia('(prefers-color-scheme: dark)');