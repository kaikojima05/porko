import classNames from 'classnames';
import { Button } from '@/ui/base/button';
import Link from 'next/link';

type CtaProps = {
  cta: React.ReactNode
  ctaStyle: string
  buttonStyle: string
  children: React.ReactNode
}

export default function Cta({
  cta,
  ctaStyle,
  buttonStyle,
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
      <div className='mt-4 flex items-center justify-center'>
        <Button
          size="l"
          style="square"
          optionClassName={buttonStyle}
        >
          <Link href="contact/" className='text-[1rem] flex justify-center items-center' scroll={false}>
            {children}
          </Link>
        </Button>
      </div>
    </div>
  );
}
