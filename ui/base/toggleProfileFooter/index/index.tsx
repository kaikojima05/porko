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
      <div
        className={classNames(
          "overflow-hidden relative border border-base-black rounded-full m-auto inline-block gap-6 backdrop-blur w-[16.875rem] h-[3.25rem]",
          `${profile === "Marie Kojima" ? "marie" : profile === "Kai Kojima" ? "kai" : ""}`, "toggleProfile"
        )}
      >
        <div className={classNames("flex py-1 grid grid-cols-2",
        )}>
          < div className={classNames(`${buttonClass}`)}>
            <Button
              buttonText="Marie Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
              buttonClassName=""
              textClassName={`${profile === "Marie Kojima"
                ? "animate-toggle-after-text-on"
                : profile === "Kai Kojima"
                  ? "animate-toggle-after-text-off"
                  : ""
                } animate-toggle-after-text`}
            />
          </div>
          <div className={classNames(`${buttonClass}`)}>
            <Button
              buttonText="Kai Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
              buttonClassName=''
              textClassName={`${profile === "Kai Kojima"
                ? "animate-toggle-before-text animate-toggle-before-text-on"
                : profile === "Marie Kojima"
                  ? "animate-toggle-before-text animate-toggle-before-text-off"
                  : "animate-toggle-before-text"
                }`}
            />
          </div>
        </div>
      </div >
    </article >
  );
}
