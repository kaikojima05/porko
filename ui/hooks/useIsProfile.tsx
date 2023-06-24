import { createContext } from "react";

type useIsProfileProps = {
  profile: string;
  isHamburgerOpen: boolean;
  isProfile: (profile: string) => void;
  setIsHamburgerOpen: (isHamburgerOpen: boolean) => void;
};

export const useIsProfileContext = createContext<useIsProfileProps>({
  profile: "",
  isProfile: () => {},
  isHamburgerOpen: false,
  setIsHamburgerOpen: () => {},
});
