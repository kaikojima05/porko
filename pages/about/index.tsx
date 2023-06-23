import classNames from "classnames";
import { useState } from "react";
import { useIsProfileContext } from "@/ui/hooks/useIsProfile";
import Image from "next/image";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutMarie from "@/ui/pages/about/section/main/marie/index";
import AboutKai from "@/ui/pages/about/section/main/kai/index";
import Button from "@/ui/base/button";
import { getWorks } from "@/lib/newt";
import type { Works } from "@/ui/base/types/works";
import ToggleProfileFooter from "@/ui/base/toggleProfileFooter/index";

export default function About({ works }: { works: Works[] }) {
  const [isProfile, setIsProfile] = useState("");
  const backgroundRef = useOnScrollAnimation();
  const MarieRef = useOnScrollAnimation();
  const KaiRef = useOnScrollAnimation();

  const handleToggleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isProfile === "" && event.currentTarget.innerText === "Marie Kojima") {
      return;
    }
    event.preventDefault();
    setIsProfile(event.currentTarget.innerText);
  };

  return (
    <useIsProfileContext.Provider
      value={{ profile: isProfile, isProfile: setIsProfile }}
    >
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
        <h2 className={classNames("text-[1.35rem] text-center")}>
          Our Profile
        </h2>
        <div
          className={classNames(
            "hidden gap-4 justify-evenly items-center my-3",
            "md:justify-center md:gap-10 md:flex"
          )}
        >
          <Button
            buttonText="Marie Kojima"
            clickHandler={handleToggleProfile}
          />
          <Button buttonText="Kai Kojima" clickHandler={handleToggleProfile} />
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

  return {
    props: {
      works,
    },
  };
};
