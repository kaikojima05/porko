import classNames from "classnames";
import SnsNote from "./SnsNote";
import SnsTwitter from "./SnsTwitter";
import SnsX from "./SnsX";
import PushPin from "./PushPin";
import GitHub from "./GitHub";
import Porko from './Porko'
import Curve from "./Curve";
import Pen from "./Pen";

const Icons = {
  "porko": Porko,
  "sns-note": SnsNote,
  "sns-twitter": SnsTwitter,
  "sns-x": SnsX,
  github: GitHub,
  "push-pin": PushPin,
  "curve": Curve,
  "pen": Pen,
};

const keys = Object.keys(Icons) as (keyof typeof Icons)[];
export const ICON_NAMES = keys;
export type IconName = (typeof keys)[number];

type Props = {
  symbol?: boolean;
  symbolViewBox?: string;
  className?: string;
  width?: string;
  height?: string;
  name: IconName;
};

export default function Icon({
  symbol = false,
  symbolViewBox,
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
      viewBox={`${symbol ? `${symbolViewBox}` : "0 0 32 32"}`}
      role="presentation"
    >
      <Icon />
    </svg>
  );
}
