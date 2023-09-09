import { NextSeo } from "next-seo";
import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import { getFirstView } from "@/lib/getFirstView";
import type { Works } from "@/ui/base/types/works";
import WorksPage from "@/ui/pages/works/section/main/index/index";

export const getStaticProps = async () => {
  return await getFirstView({ getData: getWorks, pageSize: 12 });
};

export type AllWorksProps = {
  data: Works[];
  currentPage: Works[];
  totalPage: number;
};

export default function AllWorks({
  data,
  currentPage,
  totalPage,
}: AllWorksProps) {
  return (
    <>
      <NextSeo
        title="porko - works"
        openGraph={{
          url: "https://porko.jp/works",
          title: "porko - works",
        }}
      />
      <Body
        heading="works"
        src="/images/hero_works.webp"
        whats={
          <>
            <span className="opacity-0">魅</span>
            <span className="opacity-0">力</span>
            <span className="opacity-0">を</span>
            <span className="opacity-0">葉</span>
            <span className="opacity-0">で</span>
            <span className="opacity-0">紡</span>
            <span className="opacity-0">ぐ</span>
          </>
        }
      >
        <WorksPage data={data} works={currentPage} totalPage={totalPage} />
      </Body>
    </>
  );
}
