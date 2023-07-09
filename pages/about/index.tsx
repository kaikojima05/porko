import classNames from "classnames";
import { useState } from "react";
import { useIsProfileContext } from "@/ui/hooks/useIsProfile";
import Image from "next/image";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutMarie from "@/ui/pages/about/section/main/marie/index";
import AboutKai from "@/ui/pages/about/section/main/kai/index";
import ProfileButton from "@/ui/base/profileButton";
import { getWorks } from "@/lib/newt";
import { getCreatives } from "@/lib/newt";
import type { Works } from "@/ui/base/types/works";
import type { Creatives } from "@/ui/base/types/creatives";
import ToggleProfileFooter from "@/ui/base/toggleProfileFooter/index";

export default function About({ works, creatives }: { works: Works[], creatives: Creatives[] }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isProfile, setIsProfile] = useState("");
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const backgroundRef = useOnScrollAnimation();
  const MarieRef = useOnScrollAnimation();
  const KaiRef = useOnScrollAnimation();

  const ToggleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isProfile === "" && event.currentTarget.innerText === "Marie Kojima") {
      return;
    }
    if (isProfile === event.currentTarget.innerText) { return }
    event.preventDefault();
    setIsProfile(event.currentTarget.innerText);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 1800);
  };

  return (
    <useIsProfileContext.Provider
      value={{
        profile: isProfile,
        isProfile: setIsProfile,
        isHamburgerOpen: isHamburgerOpen,
        setIsHamburgerOpen: setIsHamburgerOpen,
      }}
    >
      {showOverlay && <div className="disabled-overlay" />}
      <Body
        isBackground={true}
        backgroundImage={
          <div ref={backgroundRef} className="before-scroll-once h-[600px]">
            <Image
              alt=""
              src="/images/hero1.jpg"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        }
        bodyClassName="z-0 h-[200rem]"
      >
        <h2 className={classNames("text-[1.35rem] text-center")}>about us</h2>
        <div
          className={classNames(
            "hidden gap-4 justify-evenly items-center my-3",
            "md:justify-center md:gap-10 md:flex"
          )}
        >
          <ProfileButton
            buttonText="Marie Kojima"
            clickHandler={ToggleProfile}
          />
          <ProfileButton buttonText="Kai Kojima"
            clickHandler={ToggleProfile}
          />
        </div>
        <div className="relative">
          <AboutMarie
            ref={MarieRef}
            toggleProfile={
              isProfile === "Kai Kojima"
                ? "animate-out"
                : isProfile === "Marie Kojima"
                  ? "animate-in"
                  : ""
            }
            works={works}
            creatives={creatives}
          />
          <AboutKai
            ref={KaiRef}
            toggleProfile={
              isProfile === "Kai Kojima"
                ? "animate-in"
                : isProfile === "Marie Kojima"
                  ? "animate-out"
                  : isProfile === ""
                    ? "z-[-10] opacity-0"
                    : ""
            }
          />
        </div>
      </Body>
      <ToggleProfileFooter />
    </useIsProfileContext.Provider>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  const creatives = await getCreatives();

  return {
    props: {
      works,
      creatives,
    },

    revalidate: 1800
  };
};
