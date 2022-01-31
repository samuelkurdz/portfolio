import { Dispatch, useEffect, useState } from 'react';

function useDarkMode(): [string, Dispatch<string>] {
  const [nextColorTheme, setTheme] = useState<string>(
    typeof window !== 'undefined' && localStorage.theme ? localStorage.theme : undefined
  );

  // currentColorTheme is always opposite of nextColorTheme
  const currentColorTheme = nextColorTheme === 'dark' ? 'light' : 'dark';


  useEffect(() => {
    const root = window.document.documentElement;

    if (localStorage.theme) {
      console.log('does have theme')
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      }
    }
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   root.classList.add('dark');
    // } else {
    //   root.classList.remove('dark');
    // }

    // // remove previous theme & add new theme
    // if (nextColorTheme) {
    //   root.classList.remove(currentColorTheme);
    //   root.classList.add(nextColorTheme)
    //   if (typeof window !== 'undefined') {
    //     localStorage.setItem('theme', nextColorTheme);
    //   }
    // }

  }, [nextColorTheme, currentColorTheme]);

  return [nextColorTheme, setTheme];
}

export default useDarkMode;