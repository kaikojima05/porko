import React from 'react'
import classNames from 'classnames'

type SupplementProps = {
  headLine: string
  children: React.ReactNode
  supplementClassName: string
}
export function Supplement({
  headLine,
  children,
  supplementClassName
}: SupplementProps) {
  return (
    <>
      <h4 className={classNames(
        'text-[0.75rem]',
        supplementClassName
      )}>
        {headLine}
      </h4 >
      {children}
    </>
  )
}

type SupplementLoopProps = {
  loopItems: SupplementProps[]
  SupplementComponent: React.ComponentType<SupplementProps>
}

export function SupplementLoop({
  loopItems,
  SupplementComponent
}: SupplementLoopProps) {
  return (
    <>
      {loopItems.map((item, index) => {
        <React.Fragment key={index}>
          <SupplementComponent {...item} />
        </React.Fragment>
      })}
    </>
  )
}
