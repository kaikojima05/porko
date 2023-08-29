import classNames from 'classnames'
import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  headingClassName?: string
}

export const HeadingH1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, headingClassName }, ref) => {
    return (
      <h1 className={classNames(
        'font-head text-[1.5rem] font-extralight',
        'md:text-[1.8rem]',
        'lg:px-6 lg:text-[2.25rem]',
        `${headingClassName}`
      )}
        ref={ref}
      >
        {children}
      </h1>
    );
  }
)

HeadingH1.displayName = 'HeadingH1'

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
