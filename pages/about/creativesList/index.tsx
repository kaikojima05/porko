import Body from "@/ui/base/body";
import { getCreatives } from "@/lib/newt";
import type { Creatives } from "@/ui/base/types/creatives";
import CreativesList from "@/ui/pages/about/creativesList/section/main/index";

export default function Creatives({ creatives }: { creatives: Creatives[] }) {
  return (
    <Body
      bodyClassName="z-0 h-[200rem]"
    >
      <CreativesList creatives={creatives} />
    </Body>
  );
}

export const getStaticProps = async () => {
  const creatives = await getCreatives();

  return {
    props: {
      creatives,
    },

    revalidate: 900
  };
};

