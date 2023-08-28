import Article from '@/ui/base/article'
import Section from '@/ui/base/section'
import type { News } from '@/ui/base/types/news'
import NewsTitleList from '@/ui/module/newsTitleList/index'
import classNames from 'classnames'


type NewsPageProps = {
  news: News[]
}

export default function NewsPage({ news }: NewsPageProps) {
  return (
    <Section isTopMargin={false}>
      <NewsTitleList newsList={news} />
    </Section>
  )
}
