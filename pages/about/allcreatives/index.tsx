import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import { useRouter } from 'next/router'
import type { Creatives } from "@/ui/base/types/creatives";
import AllCreativesPage from "@/ui/pages/about/allCreatives/section/main/index/index";
import ReactPaginate from 'react-paginate'

export type AllCreativesProps = {
  currentPage: Creatives[]
  totalPages: number
}

export default function AllCreatives({ currentPage, totalPages }: AllCreativesProps) {
  const router = useRouter()

  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <AllCreativesPage creatives={currentPage} />
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => {
          const nextPage = selected + 1;
          router.push(`/about/allcreatives/page/${nextPage}`);
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Body>
  );
}

export const getStaticProps = async () => {
  const creatives = await getCreatives();
  const currentPage = creatives.slice(0, 12)
  const totalPages = Math.ceil(creatives.length / 12)

  return {
    props: {
      currentPage,
      totalPages
    },
  };
};
