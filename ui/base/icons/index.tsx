import classNames from "classnames";
import SnsNote from "./SnsNote";
import SnsTeitter from "./SnsTwitter";
import SnsTwitter from "./SnsTwitter";

const Icons = {
	"sns-note": SnsNote,
	"sns-twitter": SnsTwitter,
};

const keys = Object.keys(Icons) as (keyof typeof Icons)[];
export const ICON_NAMES = keys;
export type IconName = (typeof keys)[number];

type Props = {
	className?: string;
	width?: string;
	height?: string;
	name: IconName;
};

export default function Icon({
	className,
	name,
	width = "w-4",
	height = "h-4",
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
			viewBox="0 0 24 24"
			role="presentation"
		>
			<Icon />
		</svg>
	);
}
