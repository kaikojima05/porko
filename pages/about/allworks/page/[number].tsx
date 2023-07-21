import { GetStaticPropsContext } from 'next';
import Body from '@/ui/base/body'
import { getWorks } from '@/lib/newt'
import type { Works } from '@/ui/base/types/works'
import AllWorksPage from '@/ui/pages/about/allWorks/section/main/index/index'
import ReactPaginate from 'react-paginate'

export const getStaticPaths = async () => {
  const works = await getWorks()
  const totalWorks = Math.ceil(works.length / 12)
  const paths = Array.from({ length: totalWorks }, (_, i) => ({
    params: { number: (i + 1).toString() }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const works = await getWorks();
  const offset = (parseInt(context.params?.number as string) - 1) * 12;
  const currentPageData = works.slice(offset, offset + 12);
  const totalPages = Math.ceil(works.length / 12);

  return {
    props: {
      currentPageData,
      totalPages,
    },
  };
};

type WorksPagesProps = {
  currentPageData: Works[];
  totalPages: number;
}

export default function WorksPages({ currentPageData, totalPages }: WorksPagesProps) {
  console.log(currentPageData)
  console.log(totalPages)
  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <AllWorksPage works={currentPageData} />
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
          window.location.href = `/about/allworks/${nextPage}`;
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Body>
  );
}
