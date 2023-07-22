import classNames from "classnames";

type sectionProps = {
  isTopMargin?: boolean;
  isAbout?: boolean;
  children: React.ReactNode;
  sectionClassName?: string;
};

export default function sectionProps({
  isTopMargin = false,
  isAbout = false,
  sectionClassName = '',
  children,
}: sectionProps) {
  return (
    <section
      className={classNames(
        `${!isAbout ? `${isTopMargin ? "mt-14" : "mt-16"}` : ''}`,
        `${isAbout ? `${isTopMargin ? "mt-0" : "mt-[7.5rem]"}` : ''}`,
        `${sectionClassName}`
      )}
    >
      {children}
    </section>
  );
}
