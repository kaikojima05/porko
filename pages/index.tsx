import Link from 'next/link'
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
import classNames from "classnames";

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
            className={classNames(
              "flex flex-col justify-center items-start before-scroll-repeat gap-5",
              "md:flex-row-reverse md:gap-8"
            )}
            ref={sectionMessageRef}
          >
            <div className="w-full md:w-auto">
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
            </div>
            <div className="flex flex-row-reverse gap-2">
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
          <div className={classNames(
            'flex justify-end',
            'lg:hidden'
          )}>
            <Link
              href="/works"
              className="py-2 px-6 border rounded-full border-black inline-block text-center"
            >
              see more ...
            </Link>
          </div>
          <div className={classNames(
            "py-[4.375rem]",
          )} />
          <CtaCreatives creatives={creatives} />
          <div className={classNames(
            'flex justify-end',
            'lg:hidden'
          )}>
            <Link
              href="/creatives"
              className="py-2 px-6 border rounded-full border-black inline-block text-center"
            >
              see more ...
            </Link>
          </div>
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
