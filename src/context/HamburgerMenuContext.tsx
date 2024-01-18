import React, { createContext, useState } from 'react';

export const hamburgerContext = createContext({
  hamburgerMenuChecked: false,
  setHamburgerCheck: (hamburgerMenuChecked: boolean) => {
    hamburgerMenuChecked = !hamburgerMenuChecked;
  },
});

interface Children {
  [key: string]: any;
}

export default function HamburgerMenuContext({ children }: Children) {
  const [hamburgerMenuChecked, setHamburgerCheck] = useState(false);

  return (
    <hamburgerContext.Provider
      value={{ hamburgerMenuChecked, setHamburgerCheck }}
    >
      {children}
    </hamburgerContext.Provider>
  );
}
