import classNames from 'classnames'
import type { News } from '@/ui/base/types/news'
import ReactHtmlParser from 'react-html-parser'
import Section from '@/ui/base/section'
import { HeadingH2 } from '@/ui/base/heading'

type NewsDetailPageProps = {
  news: News
}

export default function NewsDetailPage({ news }: NewsDetailPageProps) {
  return (
    <>
      <Section isTopMargin={false}>
        <div>
          <HeadingH2>
            {ReactHtmlParser(news.newsTitle)}
          </HeadingH2>
        </div>
        <div className={classNames(
          'mt-10',
          '[&>*]:mt-4 [&>*]:first:mt-0',
          '[&>h3]:text-[1.25rem]',
          '[&>h3]:md:text-[1.5rem]',
          '[&>h3]:lg:text-[1.75rem]',
          '[&>h4]:text-[1.1rem]',
          '[&>h4]:text-[1.25rem]',
          '[&>h4]:text-[1.5rem]',
          '[&>h5]:text-base',
          '[&_img]:rounded-lg [&_img]:max-h-[50rem]'
        )}>
          {ReactHtmlParser(news.newscontent)}
        </div>
      </Section>
    </>
  );
}
