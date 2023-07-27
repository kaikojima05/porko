import { createContext } from "react";

type useCatchProfileProps = {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (catchHamburgerOpen: boolean) => void;
};

export const useCatchProfileContext = createContext<useCatchProfileProps>({
  isHamburgerOpen: false,
  setIsHamburgerOpen: () => {},
});
