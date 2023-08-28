import classNames from 'classnames'

type HeadingProps = {
  children: React.ReactNode;
  headingClassName?: string
}

export const HeadingH1 = ({
  children,
  headingClassName
}: HeadingProps) => {
  return (
    <h1 className={classNames(
      'font-head text-[1.5rem] font-extralight',
      'md:text-[1.8rem]',
      'lg:px-6 lg:text-[2.25rem]',
      `${headingClassName}`
    )}>
      {children}
    </h1>
  );
}

export const HeadingH2 = ({
  children,
  headingClassName
}: HeadingProps) => {
  return (
    <div className={classNames(
      'text-center',
      'lg:px-6'
    )}>
      <h2 className={classNames(
        'font-head text-[1.5rem] font-extralight',
        'md:text-[1.75rem]',
        'lg:text-[2rem]',
        `${headingClassName}`
      )}>
        {children}
      </h2>
    </div>
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
