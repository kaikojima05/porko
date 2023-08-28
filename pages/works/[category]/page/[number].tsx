import { GetStaticPropsContext } from 'next';
import { getAllData } from '@/lib/getAllData';
import { getPagesPaths } from '@/lib/getPagesPaths'
import Body from '@/ui/base/body'
import { getWorks } from '@/lib/newt'
import type { Works } from '@/ui/base/types/works'
import WorksPage from '@/ui/pages/works/section/main/index/index'

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getWorks, pageSize: 12 })
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getWorks, pageSize: 12 })
}

type WorksPagesProps = {
  currentPage: Works[];
  totalPage: number;
}

export default function WorksPages({ currentPage, totalPage }: WorksPagesProps) {
  return (
    <Body
      heading="works"
      src="/images/hero_works.webp"
      whats="制作実績"
    >
      <WorksPage works={currentPage} totalPage={totalPage} />
    </Body>
  );
}
