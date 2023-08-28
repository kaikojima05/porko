import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Creatives } from "@/ui/base/types/creatives";
import CreativesPage from "@/ui/pages/creatives/section/main/index";

export const getStaticProps = async () => {
  return await getFirstView({ getData: getCreatives, pageSize: 12 })

}

export type CreativesProps = {
  currentPage: Creatives[]
  totalPage: number
}

export default function Creatives({ currentPage, totalPage }: CreativesProps) {
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

