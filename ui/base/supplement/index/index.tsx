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
      'md:flex md:gap-x-[5rem]',
      supplementClassName
    )}>
      <h4 className={classNames(
        headLineClassName
      )}>
        {headLine}
      </h4>
      {children}
    </div>
  )
}

