import { useState } from 'react'
import classNames from 'classnames'
import { HeadingH3 } from '@/ui/base/heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'

type DisclosureProps = {
  icon: string
  heading: string
  children: React.ReactNode
}

export default function Deisclosure({
  icon,
  heading,
  children
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenEvent = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={classNames(
      'first:mt-0',
      'mt-4'
    )}>
      <div className={classNames(
        'flex cursor-pointer justify-between items-center bg-accent-light',
        'lg:px-6 lg:py-4'
      )}
        onClick={handleOpenEvent}
      >
        <div className={classNames(
          "flex items-center gap-4 select-none"
        )}>
          <div>
            <span className="text-[1.25rem]">
              {icon}
            </span>
          </div>
          <div>
            <HeadingH3 headingClassName='!text-[1.25rem]'>
              {heading}
            </HeadingH3>
          </div>
        </div>
        <div className={classNames(
          "duration-300",
          `${isOpen ? 'rotate-180' : ''}`
        )}>
          <FontAwesomeIcon icon={faHourglassStart} className={classNames(
            'text-[1.25rem]'
          )} />
        </div>
      </div>
      <div className={classNames(
        'overflow-hidden duration-300',
        `${isOpen ? 'py-5' : 'p-0 h-0'}`
      )}>
        {children}
      </div>
    </div>
  );
}
