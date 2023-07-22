import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next';
import { getAllData } from '@/lib/getAllData';
import { getPagesPaths } from '@/lib/getPagesPaths'
import Body from '@/ui/base/body'
import { getCreatives } from '@/lib/newt'
import type { Creatives } from '@/ui/base/types/creatives'
import AllCreativesPage from '@/ui/pages/about/allCreatives/section/main/index/index'
import Pagination from '@/ui/base/pagination/index'

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getCreatives, pageSize: 12 })
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getCreatives, pageSize: 12 })
}

type CreativesPagesProps = {
  currentPage: Creatives[];
  totalPage: number;
}

export default function CreativesPages({ currentPage, totalPage }: CreativesPagesProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <Body
      bodyClassName="z-0"
    >
      <AllCreativesPage creatives={currentPage} />
      <Pagination
        url='/about/allcreatives/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  );
}
