import { useRouter } from "next/router"
import AllWorksCard from "@/ui/base/allWorksCard/index";
import type { Works } from "@/ui/base/types/works";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Pagination from '@/ui/base/pagination/index'

type WorksPageProps = {
  currentPage?: Works[]
  data: Works[]
  works: Works[];
  totalPage: number;
}

export default function WorksPage({
  currentPage,
  data,
  works,
  totalPage
}: WorksPageProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1
  let categoryPage: string[] = []

  if (currentPage) {
    categoryPage = currentPage.map((item) => item.category)
  }

  return (
    <>
      <Section isTopMargin={false}>
        <CategoryList baseUrl="works" data={data} />
        <AllWorksCard works={works} />
        <Pagination
          url={currentPage ? `/works/${categoryPage[0]}/` : "/works/"}
          totalPage={totalPage}
          currentPageNumber={pageNumberFromQuery}
        />
      </Section>
    </>
  );
}
