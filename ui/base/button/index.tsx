import classNames from "classnames";

type ButtonProps = {
  buttonText: "Marie Kojima" | "Kai Kojima";
  buttonBorder?: boolean;
  buttonClassName?: string;
  textClassName?: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  buttonText,
  buttonBorder = true,
  buttonClassName,
  textClassName,
  clickHandler,
}: ButtonProps) {
  return (
    <div
      className={classNames(
        buttonClassName,
        `${buttonBorder && "border"}`,
        "rounded-full px-2 py-[0.15rem]",
        "md:px-3 md:py-1"
      )}
    >
      <button onClick={clickHandler}>
        <span className={`${textClassName} text-[14px]`}>{buttonText}</span>
      </button>
    </div>
  );
}
