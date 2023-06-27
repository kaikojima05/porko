import Image from "next/image";
import Body from "@/ui/base/body";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import { getWorks } from "@/lib/newt";
import type { Works } from "@/ui/base/types/works";
import WorksList from "@/ui/pages/about/worksList/section/main/index/index";

export default function Works({ works }: { works: Works[] }) {
  const backgroundRef = useOnScrollAnimation();

  return (
    <Body
      isBackground={true}
      backgroundImage={
        <div ref={backgroundRef} className="before-scroll-once h-[600px]">
          <Image
            alt=""
            src="/images/hero1.jpg"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      }
      bodyClassName="z-0 h-[200rem]"
    >
      <WorksList works={works} />
    </Body>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();

  return {
    props: {
      works,
    },
  };
};
