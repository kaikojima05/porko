import Link from 'next/link'
import { Button } from '@/ui/base/button/index'
import classNames from 'classnames'

type ClickButtonProps = {
  href: string
  button: string
}

export default function ClickButton({ href, button }: ClickButtonProps) {
  return (
    <div className={classNames(
      "flex justify-center items-center",
    )}>
      <Link href={href} className={classNames(
        "group flex items-center justify-center gap-2",
        "lg:gap-4"
      )}>
        <p className={classNames(
          'text-base',
          'lg:text-[1.25rem]'
        )}>
          {button}
        </p>
        <Button
          size="s"
          style="circle"
          optionClassName={classNames(
            'bg-accent w-8 h-8 flex justify-center items-center overflow-hidden',
            'md:w-12 md:h-12',
            'lg:w-14 lg:h-14'
          )}
        >
          <span className={classNames(
            "flex justify-center items-center text-[1rem] text-white",
            "md:text-[1.4rem]",
            "lg:group-hover:translate-x-[0.75rem] lg:duration-300",
          )}>
            →
          </span>
        </Button>
      </Link>
    </div>
  );
}
