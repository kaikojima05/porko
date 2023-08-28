import classNames from 'classnames'
import Body from '@/ui/base/body'
import { GetStaticPropsContext } from 'next'
import type { News } from '@/ui/base/types/news'
import { client } from '@/lib/newt'
import NewsDetailPage from '@/ui/pages/news/detail/section/main/index'

export const getStaticPaths = async () => {
  const { items } = await client.getContents<News>({
    appUid: 'news',
    modelUid: 'news',
    query: {
      select: [
        '_id',
        'createdAt',
        'newsTitle',
        'newscontent'
      ],
    }
  })

  const paths = items.map((newsItem) => ({
    params: { id: newsItem._id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  if (typeof id !== 'string') {
    return {
      notFound: true,
    };
  }

  const { items } = await client.getContents<News>({
    appUid: 'news',
    modelUid: 'news',
    query: {
      _id: id,
      select: [
        'createdAt',
        'newsTitle',
        'newscontent'
      ],
      tags: {
        in: [id],
      },
    }
  })
  return {
    props: {
      id: id,
      news: items
    }
  }
}

type NewsDetailProps = {
  news: News[]
}

export default function NewsDetail({ news }: NewsDetailProps) {
  return (
    <Body
      src='/images/hero_news.webp'
    >
      <NewsDetailPage news={news[0]} />
    </Body>
  )
}
