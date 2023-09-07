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
          : "mt-[3.75rem] md:mt-[5rem] lg:mt-[6.25rem]"}`,
        `${sectionClassName} `
      )}
    >
      {children}
    </section>
  );
}
