import classNames from "classnames";

type sectionProps = {
  isTopMargin?: boolean;
  children: React.ReactNode;
  sectionClassName?: string;
};

export default function sectionProps({
  isTopMargin = false,
  sectionClassName = '',
  children,
}: sectionProps) {
  return (
    <section
      className={classNames(
        `${isTopMargin ? "mt-0" : "mt-16"}`,
        `${sectionClassName} `
      )}
    >
      {children}
    </section>
  );
}
