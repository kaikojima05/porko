import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import Body from '@/ui/base/body'
import { getCreatives } from '@/lib/newt'
import type { Creatives } from '@/ui/base/types/creatives'
import AllCreativesPage from '@/ui/pages/about/allCreatives/section/main/index/index'
import ReactPaginate from 'react-paginate'

export const getStaticPaths = async () => {
  const creatives = await getCreatives()
  const totalCreatives = Math.ceil(creatives.length / 12)

  const paths = Array.from({ length: totalCreatives }, (_, i) => ({
    params: { number: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const creatives = await getCreatives();
  const offset = (parseInt(context.params?.number as string) - 1) * 12;
  const currentPage = creatives.slice(offset, offset + 12);
  const totalPages = Math.ceil(creatives.length / 12);

  return {
    props: {
      currentPage,
      totalPages,
    },
  };
};

type CreativesPagesProps = {
  currentPage: Creatives[];
  totalPages: number;
}

export default function CreativesPages({ currentPage, totalPages }: CreativesPagesProps) {
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
