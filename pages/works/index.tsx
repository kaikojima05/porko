import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import { getFirstView } from '@/lib/getFirstView'
import type { Works } from "@/ui/base/types/works";
import WorksPage from "@/ui/pages/works/section/main/index/index";

export const getStaticProps = async () => {
  return await getFirstView({ getData: getWorks, pageSize: 12 })
}

export type AllWorksProps = {
  currentPage: Works[]
  totalPage: number
}

export default function AllWorks({ currentPage, totalPage }: AllWorksProps) {
  return (
    <Body
      heading="works"
      src="/images/hero_works.webp"
      whats={
        <>
          <span className="opacity-0">制</span>
          <span className="opacity-0">作</span>
          <span className="opacity-0">実</span>
          <span className="opacity-0">績</span>
        </>
      }
    >
      <WorksPage works={currentPage} totalPage={totalPage} />
    </Body>
  );
}
