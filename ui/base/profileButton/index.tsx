import classNames from "classnames";

type ProfileButtonProps = {
  buttonText: "Marie Kojima" | "Kai Kojima";
  buttonBorder?: boolean;
  buttonClassName?: string;
  textClassName?: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProfileButton({
  buttonText,
  buttonBorder = true,
  buttonClassName,
  textClassName,
  clickHandler,
}: ProfileButtonProps) {
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
