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
          ? "mt-5 mb:mt-[1.875rem] lg:mt-[2.5rem]"
          : "mt-[3.75rem] md:mt-[6.25rem] lg:mt-[8.75rem]"}`,
        `${sectionClassName} `
      )}
    >
      {children}
    </section>
  );
}
