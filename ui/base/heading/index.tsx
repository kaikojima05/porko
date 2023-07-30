import classNames from 'classnames'

type HeadingProps = {
  children: React.ReactNode;
  headingClassName?: string
}

export const HeadingH2 = ({
  children,
  headingClassName
}: HeadingProps) => {
  return (
    <h2 className={classNames(
      'font-head text-[1.5rem] text-center font-extralight',
      'md:text-[1.75rem]',
      'lg:px-6 lg:text-[2rem]',
      `${headingClassName}`
    )}>
      {children}
    </h2>
  );
}

export const HeadingH3 = ({
  children,
  headingClassName
}: HeadingProps) => {
  return (
    <h3
      className={classNames(
        "text-[1.5rem] font-head",
        `${headingClassName}`
      )}
    >
      {children}
    </h3>
  );
}
