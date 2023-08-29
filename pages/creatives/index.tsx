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
      whats={
        <>
          <span className="opacity-0">ク</span>
          <span className="opacity-0">リ</span>
          <span className="opacity-0">エ</span>
          <span className="opacity-0">イ</span>
          <span className="opacity-0">テ</span>
          <span className="opacity-0">ィ</span>
          <span className="opacity-0">ブ</span>
          <span className="opacity-0">ス</span>
        </>
      }
    >
      <CreativesPage creatives={currentPage} totalPage={totalPage} />
    </Body>
  );
}

