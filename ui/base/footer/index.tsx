import classNames from "classnames";

export default function Footer() {
  return (
    <footer className={classNames("py-8")}>
      <p className={classNames("text-[10px] text-center", "md:text-[12px]")}>
        ©️ 2023 porko all rights reserved.
      </p>
    </footer>
  );
}
