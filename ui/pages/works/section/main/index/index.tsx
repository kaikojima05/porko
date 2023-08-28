import { useRouter } from "next/router"
import AllWorksCard from "@/ui/base/allWorksCard/index";
import type { Works } from "@/ui/base/types/works";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Pagination from '@/ui/base/pagination/index'

type WorksPageProps = {
  works: Works[];
  totalPage: number;
}

export default function WorksPage({
  works,
  totalPage
}: WorksPageProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <>
      <Section isTopMargin={false}>
        <CategoryList works={works} />
        <AllWorksCard works={works} />
        <Pagination
          url="works/page/"
          totalPage={totalPage}
          currentPageNumber={pageNumberFromQuery}
        />
      </Section>
    </>
  );
}
