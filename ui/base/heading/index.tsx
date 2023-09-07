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

type HeadingH2Props = {
  outsideClassName?: string;
} & HeadingProps

export const HeadingH2 = ({
  children,
  headingClassName,
  outsideClassName
}: HeadingH2Props) => {
  return (
    <div className={classNames(
      'flex justify-center items-center',
      `${outsideClassName}`
    )}>
      <h2 className={classNames(
        'font-head text-[1.25rem] font-extralight',
        'md:text-[1.375rem]',
        'lg:text-[1.5rem]',
        'xl:text-[1.75rem]',
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
        "text-base font-head",
        "md:text-[1.125rem]",
        "lg:text-[1.375rem]",
        "xl:text-[1.5rem]",
        `${headingClassName}`
      )}
    >
      {children}
    </h3>
  );
}
