// ScrollContext.js
import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const connectRef = useRef(null);

  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ connectRef, scrollToConnect }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
