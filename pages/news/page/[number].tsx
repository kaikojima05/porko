import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next';
import { getAllData } from '@/lib/getAllData';
import { getPagesPaths } from '@/lib/getPagesPaths'
import Body from '@/ui/base/body'
import { HeadingH2 } from '@/ui/base/heading/index'
import NewsPage from '@/ui/pages/news/section/main/index'
import { getNews } from '@/lib/newt'
import type { News } from '@/ui/base/types/news'
import Pagination from '@/ui/base/pagination/index'

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getNews, pageSize: 10 })
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getNews, pageSize: 10 })
}

type WorksPagesProps = {
  currentPage: News[];
  totalPage: number;
}

export default function WorksPages({ currentPage, totalPage }: WorksPagesProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <Body
      bodyClassName="z-0"
    >
      <HeadingH2>news</HeadingH2>
      <NewsPage news={currentPage} />
      <Pagination
        url='/news/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  );
}
