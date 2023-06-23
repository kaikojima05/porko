import classNames from "classnames";

type ButtonProps = {
  buttonText: "Marie Kojima" | "Kai Kojima";
  buttonBorder?: boolean;
  buttonClassName?: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  buttonText,
  buttonBorder = true,
  buttonClassName,
  clickHandler,
}: ButtonProps) {
  return (
    <div
      className={classNames(
        buttonClassName,
        `${buttonBorder && "border"}`,
        "rounded-full px-2",
        "md:px-3 md:py-1"
      )}
    >
      <button onClick={clickHandler}>
        <span className="text-[14px] text-black">{buttonText}</span>
      </button>
    </div>
  );
}
