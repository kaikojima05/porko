import { useRouter } from 'next/router'
import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Creatives } from "@/ui/base/types/creatives";
import CreativesPage from "@/ui/pages/creatives/section/main/index";
import Pagination from '@/ui/base/pagination/index'

export const getStaticProps = async () => {
  return await getFirstView({ getData: getCreatives, pageSize: 12 })

}

export type CreativesProps = {
  currentPage: Creatives[]
  totalPage: number
}

export default function Creatives({ currentPage, totalPage }: CreativesProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <Body
      bodyClassName="z-0"
    >
      <CreativesPage creatives={currentPage} />
      <Pagination
        url='/creatives/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  );
}

