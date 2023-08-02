import Link from 'next/link'
import classNames from 'classnames'

type OptionClassProps = {
  optionClassName?: string;
}

type ButtonStyleProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'custom'
  style: 'rounded' | 'underBar' | 'circle' | 'square' | 'none'
  children: React.ReactNode
} & OptionClassProps

type CtaButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  buttonText: string;
  ctaLink: string;
} & OptionClassProps

export const ButtonStyle = ({
  size = 'custom',
  style = 'none',
  optionClassName = '',
  children,
}: ButtonStyleProps) => {
  const rootSize = classNames(
    size === 'xs' && 'w-[6.25rem]',
    size === 's' && 'w-[9.375rem] h-[2.5rem]',
    size === 'm' && 'w-[12.5rem] h-[3.125rem]',
    size === 'l' && 'w-[15.625rem] h-[3.75rem]',
    size === 'xl' && 'w-[18.75rem] h-full',
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
    <ButtonStyle
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
      >
        {buttonText}
      </Link>
    </ButtonStyle>
  );
} 
