import Link from 'next/link'
import classNames from 'classnames'

type OptionClassProps = {
  optionClassName?: string;
}

type ButtonProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'x-full' | 'y-full' | 'all-full' | 'custom'
  style: 'rounded' | 'underBar' | 'circle' | 'square' | 'none'
  children: React.ReactNode
} & OptionClassProps

type CtaButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  ctaLink: string;
} & OptionClassProps

export const Button = ({
  size = 'custom',
  style = 'none',
  optionClassName = '',
  children,
}: ButtonProps) => {
  const rootSize = classNames(
    size === 'xs' && 'w-[6.25rem]',
    size === 's' && 'w-[9.375rem] h-[2.5rem]',
    size === 'm' && 'w-[12.5rem] h-[3.125rem]',
    size === 'l' && 'w-[15.625rem] h-[3.75rem]',
    size === 'xl' && 'w-[18.75rem] h-[4rem]',
    size === 'x-full' && 'w-full',
    size === 'y-full' && 'h-full',
    size === 'all-full' && 'x-full h-full',
    size === 'custom' && '',
  )

  const rootStyle = classNames(
    style === 'rounded' &&
    `${rootSize} border rounded-full`,
    style === 'underBar' &&
    `${rootSize} border border-b`,
    style === 'circle' &&
    'border rounded-[100%]',
    style === 'square' &&
    `${rootSize} border`,
    style === 'none' &&
    '',
  )

  return (
    <div className={classNames(
      // defaultStyle
      '[&>*]:w-full [&>*]:h-full',
      // selectStyle
      `${rootStyle}`,
      `${optionClassName}`,
    )}>
      {children}
    </div>
  )
}

export const CtaButton = ({
  onClick,
  buttonText,
  ctaLink,
  optionClassName = '',
}: CtaButtonProps) => {
  return (
    <Button
      size='s'
      style='rounded'
      optionClassName='border-base-black ml-auto'
    >
      <Link
        href={ctaLink}
        onClick={onClick}
        className={classNames(
          'w-full h-full flex justify-center items-center text-left',
          `${optionClassName}`,
        )}
        scroll={false}
      >
        {buttonText}
      </Link>
    </Button>
  );
} 
