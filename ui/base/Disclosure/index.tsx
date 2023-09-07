import { useState, useEffect, useRef } from 'react'
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
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight + 16}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  const contentStyles = {
    maxHeight: maxHeight,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out',
    paddingTop: isOpen ? '1rem' : '0px',
  };

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
        'flex cursor-pointer justify-between items-center bg-secondary px-2 py-1',
        'md:px-4 md:py-2',
        'lg:px-6 lg:py-4',
      )}
        onClick={handleOpenEvent}
      >
        <div className={classNames(
          "flex items-center gap-2 select-none",
          "md:gap-4"
        )}>
          <div>
            <span className={classNames(
              "!text-[0.75rem]",
              'lg:!text-[1rem]'
            )}>
              {icon}
            </span>
          </div>
          <div>
            <HeadingH3 headingClassName={classNames(
              "!text-[0.75rem]",
              'lg:!text-[1rem]'
            )}>
              {heading}
            </HeadingH3>
          </div>
        </div>
        <div className={classNames(
          "duration-300",
          `${isOpen ? 'rotate-180' : ''}`
        )}>
          <FontAwesomeIcon icon={faHourglassStart} className={classNames(
            "!text-[0.75rem]",
            'lg:!text-[1rem]'
          )} />
        </div>
      </div>
      <div className={classNames(
        'overflow-hidden duration-300 mx-4',
        '[&>*]:h-full'
      )}
        style={contentStyles} ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
}
