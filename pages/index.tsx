import Image from "next/image";
import { getWorks } from "@/lib/newt";
import { getCreatives } from "@/lib/newt";
import { getNews } from '@/lib/newt'
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Article from "@/ui/base/article";
import Section from '@/ui/base/section'
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";
import NewsTitleList from "@/ui/module/newsTitleList/index";
import { HeadingH1, HeadingH2, HeadingH3 } from '@/ui/base/heading'
import Cta from '@/ui/base/cta/index'
import CtaWorks from "@/ui/base/ctaWorks/index";
import CtaCreatives from "@/ui/base/ctaCreatives/index";
import { Works } from "@/ui/base/types/works";
import { Creatives } from "@/ui/base/types/creatives";
import { News } from "@/ui/base/types/news";
import classNames from "classnames";

type HomeProps = {
  works: Works[]
  creatives: Creatives[]
  news: News[]
}

export default function Home({
  works,
  creatives,
  news,
}: HomeProps) {
  const sectionMessageRef = useOnScrollAnimation();
  const backgroundRef = useOnScrollAnimation()
  const titleRef = useOnScrollAnimation()

  return (
    <>
      <Header />
      <div className={classNames(
        'pt-[3.3125rem] w-full',
        'lg:pt-[4.875rem]'
      )}>
        <div ref={backgroundRef} className={classNames(
          "before-scroll-once h-[25rem] w-full",
        )}>
          <Image
            alt="portforio サイト porko のイメージ画像"
            src="/images/hero_top.webp"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <main
          className={classNames(
            "w-full mx-0 z-0 relative",
            "pt-[5.625rem]",
            "lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0",
            "[&_section]:px-4",
            "[&_section]:lg:px-0"
          )}
        >
          <div className={classNames(
            'hidden before-scroll-once',
            'lg:inline lg:fixed lg:bottom-4 lg:left-4',
          )}
            ref={titleRef}
          >
            <HeadingH1 headingClassName='writing-vertical'>
              声を掬い、創って世界へ。
            </HeadingH1>
          </div>
          <div className={classNames(
            'w-full',
            'lg:min-w-[58.125rem] lg:max-w-[58.125rem]',
            'xl:min-w-[62.5rem] xl:max-w-[62.5rem]'
          )}>
            <Article articleClassName='font-content'>
              <Section isTopMargin={true}>
                <div
                  className={classNames(
                    "flex flex-col justify-center items-start before-scroll-repeat gap-5",
                    "md:flex-row-reverse md:gap-8"
                  )}
                  ref={sectionMessageRef}
                >
                  <div className="flex flex-row-reverse gap-2">
                    <HeadingH2 headingClassName="writing-vertical">
                      言の葉の雨を降らせよう
                    </HeadingH2>
                    <div>
                      <p className="leading-8 writing-vertical text-base">
                        話すことととは違い、書くことは
                        <br />
                        ひとつの形としていつまでも残り続けるもの。
                      </p>
                    </div>
                    <div>
                      <p className="leading-8 writing-vertical text-base">
                        だからこそ丁寧に、真摯に。
                        <br />
                        どんなにちいさな〈ことば〉だとしても、
                        <br />
                        大切に向き合っています。
                      </p>
                    </div>
                    <div className={classNames(
                      "hidden",
                      "md:inline-block"
                    )}>
                      <p className="leading-8 writing-vertical text-base">
                        〈ことば〉で情報を正しく伝え、
                        <br />
                        〈ことば〉で想いを届ける担い手になるために。
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
              <Section isTopMargin={false}>
                <CtaWorks works={works} />
                <div className={classNames(
                  "py-[2.5rem]",
                  "md:py-[3.125rem]",
                  "lg:py-[3.75rem]",
                )} />
                <CtaCreatives creatives={creatives} />
              </Section>
            </Article>
          </div>
          <div
            className={classNames(
              "mt-[5rem]",
              "md:mt-[6.25rem]",
              "lg:mt-[7.5rem]"
            )}
          >
            <div className={classNames(
              'w-screen relative h-[10.625rem]',
              "md:h-[15.625]",
              "lg:h-[18.75rem]",
              "xl:h-[21.875rem]"
            )}>
              <Image
                alt=""
                src="/images/banner.webp"
                fill
                style={{
                  objectPosition: 'top',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className={classNames(
            'w-full',
            'lg:min-w-[58.125rem] lg:max-w-[58.125rem]',
            'xl:min-w-[62.5rem] xl:max-w-[62.5rem]'
          )}>
            <Article>
              <Section isTopMargin={false}>
                <div>
                  <HeadingH2>News</HeadingH2>
                </div>
                <div className={classNames(
                  'mt-8',
                  'md:mt-12',
                  'lg:mt-16'
                )}>
                  <NewsTitleList newsList={news.slice(0, 5)} />
                </div>
              </Section>
            </Article>
            <Article>
              <Section isTopMargin={false}>
                <div className='relative w-full'>
                  <Cta
                    cta={
                      <>
                        <HeadingH2
                          headingClassName=''
                        >
                          Contact
                        </HeadingH2>
                        <HeadingH3
                          headingClassName='mt-4'
                        >
                          お問い合わせはこちらから
                        </HeadingH3>
                      </>
                    }
                    ctaStyle={classNames(
                      "rounded-md border border-base-black py-8",
                      "lg:py-14"
                    )}
                    buttonStyle="flex flex-col items-center justify-center rounded-md border-base-black"
                  >
                    mail form
                  </Cta>
                </div>
              </Section>
            </Article>
          </div>
        </main >
      </div >
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const works = await getWorks();
  const creatives = await getCreatives();
  const news = await getNews();

  return {
    props: {
      works,
      creatives,
      news,
    },

    revalidate: 5,
  };
};
