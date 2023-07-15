import Body from "@/ui/base/body";
import { getWorks } from "@/lib/newt";
import type { Works } from "@/ui/base/types/works";
import AllWorksPage from "@/ui/pages/about/allWorks/section/main/index/index";

export default function Works({ works }: { works: Works[] }) {
  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <AllWorksPage works={works} />
    </Body>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();

  return {
    props: {
      works,
    },

    revalidate: 1800
  };
};
