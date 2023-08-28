import Link from 'next/link'
import type { News } from '@/ui/base/types/news'
import { HeadingH3 } from '@/ui/base/heading'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

type NewsTitleListProps = {
  newsList: News[]
}

export default function NewsTitleList({ newsList }: NewsTitleListProps) {
  return (
    <>
      {newsList.map((head, index) => (
        <Link
          key={index}
          href={`/news/${head._id}`}
          className={classNames(
            'w-full pb-2 flex justify-between items-center border-b border-base-black group',
            `${index !== 0 ? 'mt-8' : 'mt-0'}`
          )}
        >
          <div>
            <HeadingH3 headingClassName={classNames(
              'text-base',
              'md:text-[1.1rem]',
              'lg:text-[1.2rem]'
            )}>
              {ReactHtmlParser(head.newsTitle)}
            </HeadingH3>
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowRightLong} className={classNames(
              'text-base-black w-5 h-5 duration-300 -translate-x-4 group-hover:translate-x-0',
              'md:w-6 md:h-6',
              'lg:w-6 lg:h-6'
            )} />
          </div>
        </Link>
      ))}
    </>
  )
}
