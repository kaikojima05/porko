import classNames from 'classnames';
import Link from 'next/link';

type CtaProps = {
  cta: React.ReactNode
  ctaStyle?: string
  children: React.ReactNode
}

export default function Cta({
  cta,
  ctaStyle,
  children,
}: CtaProps) {
  return (
    <div className={classNames(
      'w-full',
      `${ctaStyle}`
    )}>
      <div className='text-center'>
        {cta}
      </div>
      <div className={classNames(
        'mt-4 flex items-center justify-center',
        'md:mt-[1.25rem]',
        'lg:mt-[1.875rem]'
      )}>
        <Link href="/contact/" className={classNames(
          'text-[1.125rem] flex justify-center items-center px-3 border-b border-primary-light border-b-[0.75rem] leading-[0.6rem] text-base-black',
          'md:text-[1.375rem]',
          'lg:text-[1.75rem]',
        )}
          scroll={false}>
          {children}
        </Link>
      </div>
    </div>
  );
}
