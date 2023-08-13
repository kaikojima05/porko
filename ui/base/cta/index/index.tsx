import { HeadingH2 } from '@/ui/base/heading/index'
import { Button } from '@/ui/base/button';
import Link from 'next/link';

type CtaProps = {
  cta: string
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
    <div className={ctaStyle}>
      <div>
        <HeadingH2
          headingClassName='!text-[1.5rem]'
        >
          {cta}
        </HeadingH2>
        <p></p>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <Button
          size="l"
          style="square"
          optionClassName={buttonStyle}
        >
          <Link href="contact/" className='flex justify-center items-center'>
            {children}
          </Link>
        </Button>
      </div>
    </div>
  );
}
