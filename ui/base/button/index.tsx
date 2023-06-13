import classNames from "classnames";

type ButtonProps = {
	buttonText: "Marie Kojima" | "Kai Kojima";
	buttonClassName?: string;
	clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
	buttonText,
	buttonClassName,
	clickHandler,
}: ButtonProps) {
	return (
		<div
			className={classNames(
				buttonClassName,
				"border rounded-full backdrop-blur px-3 py-1"
			)}
		>
			<button onClick={clickHandler}>
				<span className="text-[14px] text-black">
					{buttonText}
				</span>
			</button>
		</div>
	);
}
