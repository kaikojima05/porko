import { useRouter } from "next/router";
import AllCreativesCard from "@/ui/base/allCreativesCard/index";
import type { Creatives } from "@/ui/base/types/creatives";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Pagination from "@/ui/base/pagination/index";

type CreativesPageProps = {
  currentPage?: Creatives[]
  data: Creatives[]
  creatives: Creatives[];
  totalPage: number;
}

export default function CreativesPage({
  currentPage,
  data,
  creatives,
  totalPage
}: CreativesPageProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1
  let categoryPage: string[] = []

  if (currentPage) {
    categoryPage = currentPage.map((item) => item.category)
  }

  return (
    <>
      <Section isTopMargin={false}>
        <CategoryList baseUrl="creatives" data={data} />
        <AllCreativesCard creatives={creatives} />
        <Pagination
          url={currentPage ? `/creatives/${categoryPage[0]}/` : "/creatives/"}
          totalPage={totalPage}
          currentPageNumber={pageNumberFromQuery}
        />
      </Section>
    </>
  );
}
