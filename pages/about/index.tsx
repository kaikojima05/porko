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
        src="/images/hero_about.webp"
        whats={
          <>
            <span className="opacity-0">私</span>
            <span className="opacity-0">に</span>
            <span className="opacity-0">つ</span>
            <span className="opacity-0">い</span>
            <span className="opacity-0">て</span>
          </>
        }
      >
        <AboutPage
          ref={Ref}
        />
      </Body>
    </useCatchProfileContext.Provider>
  );
}
