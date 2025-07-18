import { useEffect } from 'react';

// List of critical assets to preload
const criticalAssets: string[] = [
  // Add paths to critical images, fonts, etc.
];

const Preload = () => {
  useEffect(() => {
    // Preload images
    criticalAssets.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // Preload next route components
    const preloadRoutes = () => {
      // Preload Home component if not on home page
      if (window.location.pathname !== '/') {
        import('../pages/Home');
      }
      
      // Preload other critical components based on current route
      const currentPath = window.location.pathname;
      if (currentPath !== '/projects') import('../pages/Projects');
      if (currentPath !== '/skills') import('../pages/Skills');
    };
    
    // Delay preloading routes to prioritize current page rendering
    const timer = setTimeout(preloadRoutes, 2000);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Preload;