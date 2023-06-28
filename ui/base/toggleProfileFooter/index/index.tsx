import { useState, useContext } from "react";
import classNames from "classnames";
import Button from "@/ui/base/button";
import { useIsProfileContext } from "@/ui/hooks/useIsProfile";

export default function ToggleProfileFooter() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const { profile, isProfile, isHamburgerOpen } =
    useContext(useIsProfileContext);

  const handleToggleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (profile === "" && event.currentTarget.innerText === "Marie Kojima") {
      return;
    }
    console.log(profile);
    if (profile === event.currentTarget.innerText) {
      return;
    }
    isProfile(event.currentTarget.innerText);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 1800);
  };

  const buttonClass = "px-4 py-2";

  return (
    <article
      className={classNames(
        "z-[30] fixed bottom-2 w-full text-center duration-300",
        "md:hidden",
        `${isHamburgerOpen && "opacity-0"}`
      )}
    >
      {showOverlay && <div className="disabled-overlay" />}
      <div className="border border-base-black rounded-full m-auto inline-block gap-6 backdrop-blur">
        <div className="flex py-1">
          <div className={classNames(`${buttonClass}`)}>
            <Button
              buttonText="Marie Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
              buttonClassName={`${
                profile === "Marie Kojima"
                  ? "animate-border animate-border-in"
                  : profile === "Kai Kojima"
                  ? "animate-border animate-border-out"
                  : "animate-border"
              }`}
            />
          </div>
          <div className={classNames(`${buttonClass}`)}>
            <Button
              buttonText="Kai Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
              buttonClassName={`${
                profile === "Kai Kojima"
                  ? "animate-border animate-border-in"
                  : profile === "Marie Kojima"
                  ? "animate-border animate-border-out"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
