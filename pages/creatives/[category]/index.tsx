import { NextSeo } from "next-seo";
import { GetStaticPropsContext } from "next";
import type { Creatives } from "@/ui/base/types/creatives";
import { client } from "@/lib/newt";
import Body from "@/ui/base/body";
import CreativesPage from "@/ui/pages/creatives/section/main/index";

export const getStaticPaths = async () => {
  const { items } = await client.getContents<Creatives>({
    appUid: "creatives",
    modelUid: "portfolio",
    query: {
      select: ["_id", "fullName", "RefLink", "category", "postDate", "appeal"],
    },
  });

  const paths = items.map((creativesCategory) => ({
    params: { category: creativesCategory.category.toString() },
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

  const { items } = await client.getContents<Creatives>({
    appUid: "creatives",
    modelUid: "portfolio",
    query: {
      select: ["_id", "fullName", "RefLink", "postDate", "appeal", "category"],
      category: category,
    },
  });

  const { items: allData } = await client.getContents<Creatives>({
    appUid: "creatives",
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

type CreativesCategoryProps = {
  allData: Creatives[];
  currentPage: Creatives[];
  totalPage: number;
};

export default function CreativesCategory({
  allData,
  currentPage,
  totalPage,
}: CreativesCategoryProps) {
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
          data={allData}
          creatives={currentPage}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </Body>
    </>
  );
}
