import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import type { Creatives } from "@/ui/base/types/creatives";
import AllCreativesPage from "@/ui/pages/about/allCreatives/section/main/index";

export default function Creatives({ creatives }: { creatives: Creatives[] }) {
  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <AllCreativesPage creatives={creatives} />
    </Body>
  );
}

export const getStaticProps = async () => {
  const creatives = await getCreatives();

  return {
    props: {
      creatives,
    },

    revalidate: 1800
  };
};

