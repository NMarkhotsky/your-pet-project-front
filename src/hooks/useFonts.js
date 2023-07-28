import { useState, useEffect } from 'react';

export const useFont = fonts => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fontPromises = fonts.map(async font => {
      const { fontFamily, fontUrl } = font;
      const newFont = new FontFace(fontFamily, `url(${fontUrl})`);

      const loadedFont = await newFont.load();
      document.fonts.add(loadedFont);
    });

    Promise.all(fontPromises)
      .then(() => {
        setFontsLoaded(true);
      })
      .catch(error => {
        console.error(`Error loading fonts: ${error}`);
      });
  }, [fonts]);

  return fontsLoaded;
};
