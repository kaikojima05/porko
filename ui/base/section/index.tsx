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
        `${isTopMargin
          ? ""
          : "mt-[5rem] md:mt-[6.25rem] lg:mt-[7.5rem]"}`,
        `${sectionClassName} `
      )}
    >
      {children}
    </section>
  );
}
