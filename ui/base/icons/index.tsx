import classNames from "classnames";
import SnsNote from "./SnsNote";
import SnsTwitter from "./SnsTwitter";
import PushPin from "./PushPin";
import GitHub from "./GitHub";
import Porko from './Porko'

const Icons = {
  "porko": Porko,
  "sns-note": SnsNote,
  "sns-twitter": SnsTwitter,
  github: GitHub,
  "push-pin": PushPin,
};

const keys = Object.keys(Icons) as (keyof typeof Icons)[];
export const ICON_NAMES = keys;
export type IconName = (typeof keys)[number];

type Props = {
  symbol?: boolean;
  className?: string;
  width?: string;
  height?: string;
  name: IconName;
};

export default function Icon({
  symbol = false,
  className,
  name,
  width = "w-8",
  height = "h-8",
}: Props) {
  const Icon = Icons[name];
  return (
    <svg
      className={classNames(
        className,
        width,
        height,
        "flex justify-center items-center"
      )}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={name}
      viewBox={`${symbol ? "0 0 80 30" : "0 0 32 32"}`}
      role="presentation"
    >
      <Icon />
    </svg>
  );
}
