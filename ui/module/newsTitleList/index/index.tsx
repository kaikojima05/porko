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
            `${index !== 0 ? 'mt-[1.875rem]' : 'mt-0'}`
          )}
        >
          <h3
            className={classNames(
              'text-[1.125rem]'
            )}
          >
            <Link
              href={`/news/${head._id}`}
              className={classNames(
                'w-full inline-block border-b border-base-black text-[14px] pb-3 pt-1'
              )}
            >
              {ReactHtmlParser(head.newsTitle)}
            </Link>
          </h3>
          <div>

          </div>
        </div>
      ))}
    </>
  )
}
