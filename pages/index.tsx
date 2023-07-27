import { getWorks } from "@/lib/newt";
import { getCreatives } from "@/lib/newt";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Image from "next/image";
import Article from '@/ui/base/article'
import Section from '@/ui/base/section'
import { HeadingH2 } from '@/ui/base/heading'
import CtaWorks from "@/ui/base/ctaWorks/index";
import CtaCreatives from "@/ui/base/ctaCreatives/index";
import Body from "@/ui/base/body";
import { Works } from "@/ui/base/types/works";
import { Creatives } from "@/ui/base/types/creatives";

type HomeProps = {
  works: Works[]
  creatives: Creatives[]
}

export default function Home({
  works,
  creatives
}: HomeProps) {
  const sectionMessageRef = useOnScrollAnimation();

  return (
    <Body>
      <Article >
        <Section isTopMargin={true}>
          <div
            className="flex justify-center items-start flex-row-reverse gap-8 before-scroll-repeat"
            ref={sectionMessageRef}
          >
            <Image
              src="/images/LINE_ALBUM_230609.jpg"
              width={300}
              height={400}
              alt="top の message image"
              style={{
                objectFit: "cover"
              }}
              className="h-[18.75rem]"
            />
            <div className="flex flex-row-reverse gap-6">
              <HeadingH2 headingClassName="writing-vertical !text-[1.25rem]">
                声を掬い、創って世界へ。
              </HeadingH2>
              <p className="leading-6 writing-vertical text-[14px]">
                こんな想いがある
                <br />
                あんな景色が見たい
                <br />
                あなたの〈声〉は、届けられていますか？
                <br />
                形がないのなら
                <br />
                色が塗られていないのなら
                <br />
                おいでおいでと差し出された手を
                <br />
                そっとにぎって
              </p>
              <p className="leading-6 writing-vertical text-[14px]">
                ここはちいさな
                <br />
                秘密基地のような場所だから
                <br />
                まずは、内緒話でも。
              </p>
            </div>
          </div>
        </Section>
        <Section isTopMargin={false}>
          <CtaWorks works={works} />
          <div className="my-10" />
          <CtaCreatives creatives={creatives} />
        </Section>
      </Article>
    </Body>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  const creatives = await getCreatives();

  return {
    props: {
      works,
      creatives,
    },

    revalidate: 5,
  };
};
