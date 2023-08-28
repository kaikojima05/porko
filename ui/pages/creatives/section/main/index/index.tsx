import { useRouter } from "next/router";
import AllCreativesCard from "@/ui/base/allCreativesCard/index";
import type { Creatives } from "@/ui/base/types/creatives";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Pagination from "@/ui/base/pagination/index";

type CreativesPageProps = {
  creatives: Creatives[];
  totalPage: number;
}

export default function CreativesPage({
  creatives,
  totalPage
}: CreativesPageProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <>
      <Section isTopMargin={false}>
        <CategoryList creatives={creatives} />
        <AllCreativesCard creatives={creatives} />
        <Pagination
          url="creatives/page/"
          totalPage={totalPage}
          currentPageNumber={pageNumberFromQuery}
        />
      </Section>
    </>
  );
}
