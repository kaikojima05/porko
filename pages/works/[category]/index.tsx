import { NextSeo } from "next-seo";
import { GetStaticPropsContext } from "next";
import type { Works } from "@/ui/base/types/works";
import { client } from "@/lib/newt";
import Body from "@/ui/base/body";
import WorksPage from "@/ui/pages/works/section/main/index";

export const getStaticPaths = async () => {
  const { items } = await client.getContents<Works>({
    appUid: "works",
    modelUid: "portfolio",
    query: {
      select: ["_id", "fullName", "RefLink", "category", "postDate", "appeal"],
    },
  });

  const paths = items.map((worksCategory) => ({
    params: { category: worksCategory.category.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = context.params?.category;
  if (typeof category !== "string") {
    return {
      notFound: true,
    };
  }

  const { items } = await client.getContents<Works>({
    appUid: "works",
    modelUid: "portfolio",
    query: {
      select: ["_id", "fullName", "RefLink", "postDate", "appeal", "category"],
      category: category,
    },
  });

  const { items: allData } = await client.getContents<Works>({
    appUid: "works",
    modelUid: "portfolio",
    query: {
      select: ["_id", "fullName", "RefLink", "postDate", "appeal", "category"],
    },
  });

  const currentPage = items.slice(0, 12);
  const totalPage = Math.ceil(items.length / 12);

  return {
    props: {
      allData,
      totalPage,
      currentPage,
    },
  };
};

type WorksCategoryProps = {
  allData: Works[];
  currentPage: Works[];
  totalPage: number;
};

export default function WorksCategory({
  allData,
  currentPage,
  totalPage,
}: WorksCategoryProps) {
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
            <span className="opacity-0">お</span>
            <span className="opacity-0">仕</span>
            <span className="opacity-0">事</span>
            <span className="opacity-0">の</span>
            <span className="opacity-0">実</span>
            <span className="opacity-0">績</span>
          </>
        }
      >
        <WorksPage
          data={allData}
          works={currentPage}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </Body>
    </>
  );
}
