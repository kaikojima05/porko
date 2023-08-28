import { useState } from "react";
import { useCatchProfileContext } from "@/ui/hooks/useCatchProfile";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutPage from "@/ui/pages/about/section/main/index";

export default function About() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const Ref = useOnScrollAnimation();

  return (
    <useCatchProfileContext.Provider
      value={{
        isHamburgerOpen: isHamburgerOpen,
        setIsHamburgerOpen: setIsHamburgerOpen,
      }}
    >
      <Body
        heading="about"
        src="/images/hero_1.webp"
        whats="私について"
      >
        <AboutPage
          ref={Ref}
        />
      </Body>
    </useCatchProfileContext.Provider>
  );
}
