import classNames from "classnames";

type DividerProps = {
  course: "row" | "column"
  className?: string
}

export default function Divider({
  course = "row",
  className = "",
}: DividerProps) {
  return (
    <div
      className={classNames(
        `${className}`,
        `${course === "row" ? "w-full h-[1px]" : "w-[1px] h-full"}`,
      )}
    />
  );
}
