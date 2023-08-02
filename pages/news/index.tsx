import NewsPage from '@/ui/pages/news/section/main/index'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCatchProfileContext } from '@/ui/hooks/useCatchProfile'
import Body from "@/ui/base/body";
import Footer from '@/ui/base/footer'
import { HeadingH2 } from '@/ui/base/heading/index'
import { getFirstView } from '@/lib/getFirstView'
import { getNews } from '@/lib/newt'
import type { News } from '@/ui/base/types/news'
import Pagination from '@/ui/base/pagination/index'


export const getStaticProps = async () => {
  return await getFirstView({ getData: getNews, pageSize: 10 })
}

type NewsProps = {
  currentPage: News[];
  totalPage: number;
}

export default function News({
  currentPage,
  totalPage
}: NewsProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <useCatchProfileContext.Provider
      value={{
        isHamburgerOpen: isHamburgerOpen,
        setIsHamburgerOpen: setIsHamburgerOpen
      }}
    >
      <Body
        bodyClassName="z-0"
      >
        <HeadingH2>news</HeadingH2>
        <NewsPage news={currentPage} />
      </Body>
      <Pagination
        url='/news/page'
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
      <Footer />
    </useCatchProfileContext.Provider>
  );
}


