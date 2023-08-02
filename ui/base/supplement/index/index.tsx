import React from 'react'
import classNames from 'classnames'

type SupplementProps = {
  headLine: string
  children: React.ReactNode
  headLineClassName?: string
  supplementClassName?: string
}
export function Supplement({
  headLine,
  children,
  headLineClassName,
  supplementClassName
}: SupplementProps) {
  return (
    <div className={classNames(
      'flex flex-col gap-y-[2px]',
      'md:flex-row md:gap-x-[5rem] md:gap-y-0',
      supplementClassName
    )}>
      <h4 className={classNames(
        'border-b border-text-'
        headLineClassName
      )}>
        {headLine}
      </h4>
      {children}
    </div>
  )
}

