import classNames from "classnames";
import { useState } from "react";
import { useCatchProfileContext } from "@/ui/hooks/useCatchProfile";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import Footer from "@/ui/base/footer";
import AboutPage from "@/ui/pages/about/section/main/index";
import { HeadingH2 } from '@/ui/base/heading/index'

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
        bodyClassName="z-0"
      >
        <HeadingH2>about me</HeadingH2>
        <AboutPage
          ref={Ref}
        />
      </Body>
      <Footer />
    </useCatchProfileContext.Provider>
  );
}
