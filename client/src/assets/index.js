// src/assets/index.js

const images = import.meta.glob('./*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  });
  
  const formattedImages = Object.fromEntries(
    Object.entries(images).map(([path, img]) => {
      const name = path
        .split('/')
        .pop()
        .replace(/\.[^/.]+$/, ''); // enleve l'extension
      return [name, img];
    })
  );
  
  export default formattedImages;
  