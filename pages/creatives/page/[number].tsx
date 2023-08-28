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
  currentPage: Creatives[];
  totalPage: number;
}

export default function Creativess({ currentPage, totalPage }: CreativesProps) {
  return (
    <Body
      heading="creatives"
      src="/images/hero_creatives.webp"
      whats="クリエイティブ"
    >
      <CreativesPage creatives={currentPage} totalPage={totalPage} />
    </Body>
  );
}
