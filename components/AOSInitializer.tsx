'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      // Add other global settings here if needed
    });
    // Optional: refresh AOS when the window is loaded to ensure all elements are detected
    window.addEventListener('load', AOS.refresh);
    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return <></>; // This component doesn't render anything itself
}
