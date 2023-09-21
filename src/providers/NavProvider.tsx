import React, { createContext, useMemo, useState } from "react";

export enum NavState {
  ABOUT = 1,
  RESUME = 2,
  PORTFOLIO = 3,
  BLOG = 4,
  CONTACT = 5,
}

export const NavContext = createContext<{
  navState: NavState;
  setNavState: (value: NavState) => void;
}>({
  navState: NavState.ABOUT,
  setNavState: () => {},
});

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navState, setNavState] = useState<NavState>(NavState.ABOUT);

  const payload = useMemo(() => ({ navState, setNavState }), [navState]);

  return <NavContext.Provider value={payload}>{children}</NavContext.Provider>;
};
