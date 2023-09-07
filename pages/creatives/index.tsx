import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Creatives } from "@/ui/base/types/creatives";
import CreativesPage from "@/ui/pages/creatives/section/main/index";

export const getStaticProps = async () => {
  return await getFirstView({ getData: getCreatives, pageSize: 12 })

}

export type CreativesProps = {
  data: Creatives[]
  currentPage: Creatives[]
  totalPage: number
}

export default function Creatives({ data, currentPage, totalPage }: CreativesProps) {
  return (
    <Body
      heading="creatives"
      src="/images/hero_creatives.webp"
      whats={
        <>
          <span className="opacity-0 writing-vertical">〈</span>
          <span className="opacity-0">こ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">ば</span>
          <span className="opacity-0 writing-vertical">〉</span>
          <span className="opacity-0 writing-vertical">で</span>
          <span className="opacity-0 writing-vertical">想</span>
          <span className="opacity-0 writing-vertical">い</span>
          <span className="opacity-0 writing-vertical">の</span>
          <span className="opacity-0 writing-vertical">深</span>
          <span className="opacity-0 writing-vertical">み</span>
          <span className="opacity-0 writing-vertical">へ</span>
        </>
      }
    >
      <CreativesPage data={data} creatives={currentPage} totalPage={totalPage} />
    </Body>
  );
}

