import { NextSeo } from "next-seo";
import { GetStaticPropsContext } from "next";
import { getAllData } from "@/lib/getAllData";
import { getPagesPaths } from "@/lib/getPagesPaths";
import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import type { Creatives } from "@/ui/base/types/creatives";
import CreativesPage from "@/ui/pages/creatives/section/main/index/index";

export const getStaticPaths = async () => {
  return await getPagesPaths({ getData: getCreatives, pageSize: 12 });
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return await getAllData({ context, getData: getCreatives, pageSize: 12 });
};

type CreativesProps = {
  data: Creatives[];
  currentPage: Creatives[];
  totalPage: number;
};

export default function Creativess({
  data,
  currentPage,
  totalPage,
}: CreativesProps) {
  return (
    <>
      <NextSeo
        title="porko - creatives"
        openGraph={{
          url: "https://porko.jp/creatives",
          title: "porko - creatives",
        }}
      />
      <Body
        heading="creatives"
        src="/images/hero_creatives.webp"
        whats={
          <>
            <span className="opacity-0">心</span>
            <span className="opacity-0">の</span>
            <span className="opacity-0">深</span>
            <span className="opacity-0 writing-vertical">み</span>
            <span className="opacity-0 writing-vertical">を</span>
            <span className="opacity-0 writing-vertical">晒</span>
            <span className="opacity-0 writing-vertical">す</span>
          </>
        }
      >
        <CreativesPage
          data={data}
          creatives={currentPage}
          totalPage={totalPage}
        />
      </Body>
    </>
  );
}
