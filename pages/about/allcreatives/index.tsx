import { useRouter } from 'next/router'
import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Creatives } from "@/ui/base/types/creatives";
import AllCreativesPage from "@/ui/pages/about/allCreatives/section/main/index/index";
import Pagination from '@/ui/base/pagination/index'

export const getStaticProps = async () => {
  return await getFirstView({ getData: getCreatives, pageSize: 12 })

}

export type AllCreativesProps = {
  currentPage: Creatives[]
  totalPage: number
}

export default function AllCreatives({ currentPage, totalPage }: AllCreativesProps) {
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

