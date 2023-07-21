import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import Body from '@/ui/base/body'
import { getWorks } from '@/lib/newt'
import type { Works } from '@/ui/base/types/works'
import AllWorksPage from '@/ui/pages/about/allWorks/section/main/index/index'
import ReactPaginate from 'react-paginate'

export const getStaticPaths = async () => {
  const works = await getWorks()
  const totalWorks = Math.ceil(works.length / 12)

  const paths = Array.from({ length: totalWorks }, (_, i) => ({
    params: { number: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const works = await getWorks();
  const offset = (parseInt(context.params?.number as string) - 1) * 12;
  const currentPage = works.slice(offset, offset + 12);
  const totalPages = Math.ceil(works.length / 12);

  return {
    props: {
      currentPage,
      totalPages,
    },
  };
};

type WorksPagesProps = {
  currentPage: Works[];
  totalPages: number;
}

export default function WorksPages({ currentPage, totalPages }: WorksPagesProps) {
  const router = useRouter()

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
          router.push(`/about/allworks/page/${nextPage}`);
        }}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Body>
  );
}
