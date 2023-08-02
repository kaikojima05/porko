import Link from 'next/link'
import type { News } from '@/ui/base/types/news'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'

type NewsTitleListProps = {
  newsList: News[]
}

export default function NewsTitleList({ newsList }: NewsTitleListProps) {
  return (
    <>
      {newsList.map((head, index) => (
        <div
          key={index}
          className={classNames(
            'border-b border-base-black text-[14px] pb-2'
          )}
        >
          {ReactHtmlParser(head.newsTitle)}
        </div>
      ))}
    </>
  )
}
