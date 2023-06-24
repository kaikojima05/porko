import { createContext } from "react";

type useHamburgerStateProps = {
  ishamburgerState: boolean;
  setIshamburgerState: (profile: boolean) => void;
};

export const useIsProfileContext = createContext<useHamburgerStateProps>({
  ishamburgerState: false,
  setIshamburgerState: () => {},
});
