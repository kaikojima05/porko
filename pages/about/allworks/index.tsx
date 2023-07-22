import { useRouter } from 'next/router'
import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Works } from "@/ui/base/types/works";
import AllWorksPage from "@/ui/pages/about/allWorks/section/main/index/index";
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
      <AllWorksPage works={currentPage} />
      <Pagination
        url='/about/allworks/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  );
}
