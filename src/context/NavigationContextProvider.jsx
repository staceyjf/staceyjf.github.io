import { createContext, useRef } from "react";

export const NavigationContext = createContext(null);

function NavigationContextProvider({ children }) {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <NavigationContext.Provider
      value={{ introRef, aboutRef, projectsRef, contactRef }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContextProvider;
