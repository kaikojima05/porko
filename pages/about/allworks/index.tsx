import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import type { Works } from "@/ui/base/types/works";
import AllWorksPage from "@/ui/pages/about/allWorks/section/main/index/index";
import ReactPaginate from 'react-paginate'

export type AllWorksProps = {
  currentPage: Works[]
  totalPages: number
}

export default function AllWorks({ currentPage, totalPages }: AllWorksProps) {
  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <AllWorksPage works={currentPage} />
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
          window.location.href = `/allworks/pages/${nextPage}`;
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Body>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  const currentPage = works.slice(0, 12)
  const totalPages = Math.ceil(works.length / 12)

  return {
    props: {
      works,
      currentPage,
      totalPages
    },
  };
};
