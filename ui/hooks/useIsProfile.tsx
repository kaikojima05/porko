import { createContext } from "react";

type useIsProfileProps = {
  profile: string;
  isProfile: (profile: string) => void;
};

export const useIsProfileContext = createContext<useIsProfileProps>({
  profile: "",
  isProfile: () => {},
});
