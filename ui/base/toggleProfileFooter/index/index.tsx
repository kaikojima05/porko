import { useContext } from "react";
import classNames from "classnames";
import Button from "@/ui/base/button";
import { useIsProfileContext } from "@/ui/hooks/useIsProfile";

export default function ToggleProfileFooter() {
  const { profile, isProfile } = useContext(useIsProfileContext);

  const handleToggleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (profile === "" && event.currentTarget.innerText === "Marie Kojima") {
      return;
    }
    event.preventDefault();
    isProfile(event.currentTarget.innerText);
  };

  const buttonClass = "px-4 py-2";

  return (
    <article
      className={classNames(
        "z-[9999] fixed bottom-2 w-full text-center",
        "md:hidden"
      )}
    >
      <div className="border border-black rounded-full m-auto inline-block gap-6 backdrop-blur">
        <div className="flex py-1">
          <div
            className={classNames(
              "animate-border",
              `${buttonClass}`,
              `${
                profile === "Marie Kojima"
                  ? "animate-border-in"
                  : profile === "Kai Kojima"
                  ? "animate-border-out"
                  : ""
              }`
            )}
          >
            <Button
              buttonText="Marie Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
            />
          </div>
          <div
            className={classNames(
              `${buttonClass}`,
              `${
                profile === "Kai Kojima"
                  ? "animate-border animate-border-in"
                  : profile === "Marie Kojima"
                  ? "aniate-border animate-border-out"
                  : ""
              }`
            )}
          >
            <Button
              buttonText="Kai Kojima"
              buttonBorder={false}
              clickHandler={handleToggleProfile}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
