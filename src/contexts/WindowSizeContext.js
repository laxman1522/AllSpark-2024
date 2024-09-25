'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { setWindowSizeCategory } from '@/utils/screen-utils';

const WindowSizeContext = createContext({
  windowWidth: window.innerWidth || 0,
  windowSize: '',
});

/**
 * @description A context for getting the width of screen
 * @version 1.0.0
 * @author [Charanraj Thiyagarajan]
 */
export const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSizeCategory(window.innerWidth, windowSize, setWindowSize);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ windowSize, windowWidth }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => useContext(WindowSizeContext);
