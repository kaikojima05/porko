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
      'text-[2rem] text-center',
      'lg:px-6',
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
        "text-[1.125rem]",
        `${headingClassName}`
      )}
    >
      {children}
    </h3>
  );
}
