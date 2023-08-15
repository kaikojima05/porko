import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next';
import { getAllData } from '@/lib/getAllData';
import { getPagesPaths } from '@/lib/getPagesPaths'
import Body from '@/ui/base/body'
import { getWorks } from '@/lib/newt'
import type { Works } from '@/ui/base/types/works'
import WorksPage from '@/ui/pages/works/section/main/index/index'
import Pagination from '@/ui/base/pagination/index'

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getWorks, pageSize: 12 })
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getWorks, pageSize: 12 })
}

type WorksPagesProps = {
  currentPage: Works[];
  totalPage: number;
}

export default function WorksPages({ currentPage, totalPage }: WorksPagesProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <Body
      bodyClassName="z-0"
    >
      <WorksPage works={currentPage} />
      <Pagination
        url='/write/allworks/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  );
}
