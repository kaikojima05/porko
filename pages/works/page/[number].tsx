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
  data: Works[];
  currentPage: Works[];
  totalPage: number;
}

export default function WorksPages({ data, currentPage, totalPage }: WorksPagesProps) {
  return (
    <Body
      heading="works"
      src="/images/hero_works.webp"
      whats={
        <>
          <span className="opacity-0">ひ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">・</span>
          <span className="opacity-0">も</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">・</span>
          <span className="opacity-0">こ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">魅</span>
          <span className="opacity-0">力</span>
          <span className="opacity-0">を</span>
          <span className="opacity-0">記</span>
          <span className="opacity-0">す</span>
        </>
      }
    >
      <WorksPage data={data} works={currentPage} totalPage={totalPage} />
    </Body>
  );
}
