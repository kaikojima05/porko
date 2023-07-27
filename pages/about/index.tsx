import classNames from "classnames";
import { useState } from "react";
import { useCatchProfileContext } from "@/ui/hooks/useCatchProfile";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import Footer from "@/ui/base/footer";
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
        bodyClassName="z-0"
      >
        <h2 className={classNames("text-[2rem] text-center")}>about us</h2>
        <div
          className={classNames(
            "hidden gap-4 justify-evenly items-center mt-10 mb-3",
            "md:justify-center md:gap-10 md:flex"
          )}
        >
        </div>
        <AboutPage
          ref={Ref}
        />
      </Body>
      <Footer />
    </useCatchProfileContext.Provider>
  );
}
