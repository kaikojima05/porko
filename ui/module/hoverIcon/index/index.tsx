import classNames from "classnames";
import Icon from "@/ui/base/icons/index";
import type { IconName } from "@/ui/base/icons/index";

type HoverIconsProps = {
  hrefs: string[];
  iconsName: IconName[];
  iconSize: "6" | "7" | "8";
  iconClipColor: string;
  iconBgColor?: string;
  iconHoverBgColor?: string;
  iconHoverClipColor: string;
  iconClassName?: string;
};

export default function HoverIcons({
  hrefs,
  iconsName,
  iconSize = "6",
  iconClipColor,
  iconBgColor = "bg-transparent",
  iconHoverBgColor = "hover:bg-transparent",
  iconHoverClipColor,
  iconClassName = "",
}: HoverIconsProps) {
  return (
    <>
      {iconsName.map((iconName, index) => (
        <a
          key={index}
          className={classNames(
            iconClipColor,
            iconBgColor,
            iconHoverClipColor,
            iconHoverBgColor,
            "rounded-full",
            iconClassName
          )}
          href={hrefs[index]}
          target="_blank"
        >
          <Icon
            name={iconName}
            width={
              iconSize === "6"
                ? "w-6"
                : iconSize === "7"
                ? "w-7"
                : iconSize === "8"
                ? "w-8"
                : ""
            }
            height={
              iconSize === "6"
                ? "h-6"
                : iconSize === "7"
                ? "h-7"
                : iconSize === "8"
                ? "h-8"
                : ""
            }
          />
        </a>
      ))}
    </>
  );
}
