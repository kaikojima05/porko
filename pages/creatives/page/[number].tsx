import { GetStaticPropsContext } from 'next';
import { getAllData } from '@/lib/getAllData';
import { getPagesPaths } from '@/lib/getPagesPaths'
import Body from '@/ui/base/body'
import { getCreatives } from '@/lib/newt'
import type { Creatives } from '@/ui/base/types/creatives'
import CreativesPage from '@/ui/pages/creatives/section/main/index/index'

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getCreatives, pageSize: 12 })
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getCreatives, pageSize: 12 })
}

type CreativesProps = {
  data: Creatives[];
  currentPage: Creatives[];
  totalPage: number;
}

export default function Creativess({ data, currentPage, totalPage }: CreativesProps) {
  return (
    <Body
      heading="creatives"
      src="/images/hero_creatives.webp"
      whats={
        <>
          <span className="opacity-0">想</span>
          <span className="opacity-0">い</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">丈</span>
          <span className="opacity-0">を</span>
          <span className="opacity-0 writing-vertical">〈</span>
          <span className="opacity-0">こ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">ば</span>
          <span className="opacity-0 writing-vertical">〉</span>
          <span className="opacity-0 writing-vertical">に</span>
          <span className="opacity-0 writing-vertical">乗</span>
          <span className="opacity-0 writing-vertical">せ</span>
          <span className="opacity-0 writing-vertical">て</span>
        </>
      }
    >
      <CreativesPage data={data} creatives={currentPage} totalPage={totalPage} />
    </Body>
  );
}
