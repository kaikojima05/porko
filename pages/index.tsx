import Link from 'next/link'
import { motion } from "framer-motion";
import { useRef, useEffect } from 'react'
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
import { Button } from '@/ui/base/button/index'
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
  const pageTitleRef = useRef<HTMLHeadingElement | null>(null)
  const sectionMessageRef = useOnScrollAnimation();
  const backgroundRef = useOnScrollAnimation()

  useEffect(() => {
    if (!pageTitleRef.current) return;

    let currentIndex = 0;

    const spans = pageTitleRef.current.querySelectorAll('span')

    const animationInterval = setInterval(() => {
      if (currentIndex < spans.length) {
        spans[currentIndex].classList.remove('opacity-0')
        currentIndex += 1
      } else {
        clearInterval(animationInterval)
      }
    }, 170)

    return () => clearInterval(animationInterval)

  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div className={classNames(
        'pt-[3.3125rem] w-full',
        'lg:pt-[4.875rem]'
      )}>
        <div ref={backgroundRef} className={classNames(
          "before-scroll-once h-[18rem] w-full",
          "md:h-[21rem]",
          "lg:h-[25rem]"
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
            'hidden',
            'xl:inline xl:fixed xl:bottom-8 xl:left-4 xl:z-10',
          )}
          >
            <HeadingH1 headingClassName='writing-vertical !text-[1.8125rem]' ref={pageTitleRef}>
              <span className="opacity-0">何</span>
              <span className="opacity-0">度</span>
              <span className="opacity-0">で</span>
              <span className="opacity-0">も</span>
              <span className="opacity-0">茂</span>
              <span className="opacity-0">り</span>
              <span className="opacity-0">、</span>
              <span className="opacity-0">ま</span>
              <span className="opacity-0">た</span>
              <span className="opacity-0">葉</span>
              <span className="opacity-0">は</span>
              <span className="opacity-0">色</span>
              <span className="opacity-0">づ</span>
              <span className="opacity-0">く</span>
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
                    "flex flex-row justify-center items-center before-scroll-once gap-5",
                    "md:flex-row-reverse md:gap-8",
                    "lg:items-start"
                  )}
                  ref={sectionMessageRef}
                >
                  <div className={classNames(
                    "flex flex-row-reverse gap-2 w-full justify-center",
                    "[&>div]:flex [&>div]:justify-center [&>div]:inline",
                    "md:w-auto"
                  )}>
                    <HeadingH2 headingClassName="writing-vertical">
                      言の葉の雨を降らせよう
                    </HeadingH2>
                    <div>
                      <p className="leading-8 writing-vertical text-base text-left">
                        話すことととは違い、書くことは
                        <br />
                        ひとつの形としていつまでも残り続けるもの。
                      </p>
                    </div>
                    <div>
                      <p className="leading-8 writing-vertical text-base text-left">
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
                      <p className="leading-8 writing-vertical text-base text-left">
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
                <div className="flex items-center justify-center border-b border-base-black">
                  <div>
                    <Link className="flex items-center justify-center text-[1.75rem]" href="/plan" scroll={false}>Plan</Link>
                  </div>
                  <div className={classNames(
                    'mx-2'
                  )}>
                    <p className="text-[2rem]">/</p>
                  </div>
                  <div>
                    <p className="text-[1.25rem]">お仕事のご依頼・ご相談の参考としてご覧ください</p>
                  </div>
                </div>
              </Section>
              <Section isTopMargin={false}>
                <div>
                  <HeadingH2>news</HeadingH2>
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
                        <HeadingH2>
                          contact
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
    </motion.div >
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
