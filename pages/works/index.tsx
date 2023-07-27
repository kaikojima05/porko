import { useRouter } from 'next/router'
import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Works } from "@/ui/base/types/works";
import WorksPage from "@/ui/pages/works/section/main/index/index";
import Pagination from '@/ui/base/pagination/index'

export const getStaticProps = async () => {
  return await getFirstView({ getData: getWorks, pageSize: 12 })
}

export type AllWorksProps = {
  currentPage: Works[]
  totalPage: number
}

export default function AllWorks({ currentPage, totalPage }: AllWorksProps) {
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
