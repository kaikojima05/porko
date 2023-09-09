import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { getWorks } from "@/lib/newt";
import { getCreatives } from "@/lib/newt";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";
import { HeadingH1, HeadingH2, HeadingH3 } from "@/ui/base/heading";
import Cta from "@/ui/base/cta/index";
import CtaWorks from "@/ui/base/ctaWorks/index";
import CtaCreatives from "@/ui/base/ctaCreatives/index";
import { Works } from "@/ui/base/types/works";
import { Creatives } from "@/ui/base/types/creatives";
import ClickButton from "@/ui/snippet/ClickButton";
import classNames from "classnames";

type HomeProps = {
  works: Works[];
  creatives: Creatives[];
};

export default function Home({ works, creatives }: HomeProps) {
  const pageTitleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionMessageRef = useOnScrollAnimation();
  const backgroundRef = useOnScrollAnimation();
  const endingRef = useOnScrollAnimation();

  useEffect(() => {
    if (!pageTitleRef.current) return;

    let currentIndex = 0;

    const spans = pageTitleRef.current.querySelectorAll("span");

    const animationInterval = setInterval(() => {
      if (currentIndex < spans.length) {
        spans[currentIndex].classList.remove("opacity-0");
        currentIndex += 1;
      } else {
        clearInterval(animationInterval);
      }
    }, 170);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <div className={classNames("pt-[3.5625rem] w-full", "lg:pt-[5.1875rem]")}>
        <div
          ref={backgroundRef}
          className={classNames(
            "before-scroll-once h-[18rem] w-full",
            "md:h-[21rem]",
            "lg:h-[25rem]"
          )}
        >
          <Image
            alt="portforio サイト porko のイメージ画像"
            src="/images/hero_top.webp"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <main
          className={classNames(
            "w-full mx-0 z-0 relative",
            "pt-[5.625rem]",
            "lg:flex lg:flex-col lg:justify-center lg:items-center",
            "xl:pt-[7.5rem]",
            "[&_section]:px-4",
            "[&_section]:lg:px-0"
          )}
        >
          <div
            className={classNames(
              "hidden",
              "xl:inline xl:fixed xl:bottom-8 xl:left-4 xl:z-10"
            )}
          >
            <HeadingH1
              headingClassName="writing-vertical !text-[1.8125rem]"
              ref={pageTitleRef}
            >
              <span className="opacity-0">雨</span>
              <span className="opacity-0">は</span>
              <span className="opacity-0">ま</span>
              <span className="opacity-0">た</span>
              <span className="opacity-0">空</span>
              <span className="opacity-0">へ</span>
              <span className="opacity-0">還</span>
              <span className="opacity-0">る</span>
            </HeadingH1>
          </div>
          <div
            className={classNames(
              "w-full",
              "lg:min-w-[58.125rem] lg:max-w-[58.125rem]",
              "xl:min-w-[62.5rem] xl:max-w-[62.5rem]"
            )}
          >
            <Article articleClassName="font-content">
              <Section isTopMargin={true}>
                <div className="before-scroll-once" ref={sectionMessageRef}>
                  <div
                    className={classNames(
                      "flex flex-row justify-center items-center gap-5 max-w-[18rem] mx-auto",
                      "md:flex-row-reverse md:gap-8 md:max-w-none",
                      "lg:items-start"
                    )}
                  >
                    <div
                      className={classNames(
                        "flex flex-row-reverse w-full justify-between",
                        "[&>div]:flex [&>div]:justify-center",
                        "sm:justify-center sm:gap-8",
                        "md:w-auto md:gap-10",
                        "lg:gap-12"
                      )}
                    >
                      <HeadingH2
                        headingClassName={classNames(
                          "writing-vertical !text-[1.125rem]",
                          "lg:!text-[1.5rem]"
                        )}
                      >
                        言の葉の雨を降らせよう
                      </HeadingH2>
                      <div>
                        <p
                          className={classNames(
                            "leading-6 writing-vertical text-[0.75rem] text-left",
                            "md:text-[0.875rem]",
                            "lg:text-base lg:leading-8"
                          )}
                        >
                          話すことととは違い、書くことは
                          <br />
                          ひとつの形としていつまでも残り続けるもの。
                        </p>
                      </div>
                      <div>
                        <p
                          className={classNames(
                            "leading-6 writing-vertical text-[0.75rem] text-left",
                            "md:text-[0.875rem]",
                            "lg:text-base lg:leading-8"
                          )}
                        >
                          だからこそ丁寧に、真摯に。
                          <br />
                          どんなにちいさな〈ことば〉だとしても、
                          <br />
                          大切に向き合っています。
                        </p>
                      </div>
                      <div className={classNames("hidden", "md:inline-block")}>
                        <p
                          className={classNames(
                            "leading-6 writing-vertical text-[0.75rem] text-left",
                            "md:text-[0.875rem]",
                            "lg:text-base lg:leading-8"
                          )}
                        >
                          〈ことば〉で情報を正しく伝え、
                          <br />
                          〈ことば〉で想いを届ける担い手になるために。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      "flex justify-center mt-6",
                      "sm:mr-24 sm:justify-end sm:mt-4"
                    )}
                  >
                    <ClickButton href="/about/" button="about me" />
                  </div>
                </div>
              </Section>
              <Section isTopMargin={false}>
                <CtaWorks works={works} />
                <div
                  className={classNames(
                    "py-[2.5rem]",
                    "md:py-[3.125rem]",
                    "lg:py-[3.75rem]"
                  )}
                />
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
            <div
              className={classNames(
                "w-screen relative h-[8.75rem]",
                "md:h-[12.5rem]",
                "lg:h-[15.625rem]",
                "xl:h-[20rem]"
              )}
            >
              <Image
                alt="バナー画像"
                src="/images/banner.webp"
                fill
                style={{
                  objectPosition: "top",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div
            className={classNames(
              "w-full before-scroll-once",
              "lg:min-w-[58.125rem] lg:max-w-[58.125rem]",
              "xl:min-w-[62.5rem] xl:max-w-[62.5rem]"
            )}
            ref={endingRef}
          >
            <Article>
              <Section isTopMargin={false}>
                <div className="">
                  <HeadingH2>
                    <span
                      className={classNames(
                        "font-head text-[1.25rem] font-extralight",
                        "md:text-[1.375rem]",
                        "lg:text-[1.625rem]",
                        "xl:text-[1.875rem]"
                      )}
                    >
                      plan
                    </span>
                    <span
                      className={classNames(
                        "font-head text-[1.25rem] font-extralight",
                        "md:text-[1.375rem]",
                        "lg:text-[1.625rem]",
                        "xl:text-[1.875rem]"
                      )}
                    >
                      {" "}
                      /{" "}
                    </span>
                    <span
                      className={classNames(
                        "text-base font-head",
                        "md:text-[1.125rem]",
                        "lg:text-[1.375rem]",
                        "xl:text-[1.5rem]"
                      )}
                    >
                      お仕事依頼について
                    </span>
                  </HeadingH2>
                </div>
                <div
                  className={classNames(
                    "mt-4 text-center",
                    "md:mt-6",
                    "lg:mt-8"
                  )}
                >
                  <p className="text-center inline-block">
                    伝えたいことを、確かな形に。
                    <br />
                    本当に届けたい人のもとへ、純度高く。
                    <br />
                    〈ことば〉にまつわるあらゆるご相談に柔軟にご対応できるよう、さまざまなプランをご用意しています。
                  </p>
                </div>
                <div
                  className={classNames(
                    "mt-4 text-center",
                    "md:mt-6",
                    "lg:mt-8"
                  )}
                >
                  <ClickButton href="/plan/" button="see more" />
                </div>
              </Section>
              <Section>
                <div
                  className={classNames(
                    "flex gap-12 justify-center",
                    "md:gap-24",
                    "lg:gap-32",
                    "xl:gap-40"
                  )}
                >
                  <div className="flex items-start">
                    <HeadingH2
                      outsideClassName="!items-start"
                      headingClassName={classNames(
                        "!text-[0.875rem]",
                        "md:!text-[1rem]",
                        "lg:!text-[1.25rem]"
                      )}
                    >
                      sns
                    </HeadingH2>
                  </div>
                  <div className="flex flex-col items-end">
                    <SnsAccount
                      sns="X (Twitter)"
                      account="@koji_mari7"
                      href="https://twitter.com/koji_mari7"
                    />
                    <SnsAccount
                      sns="note"
                      account="kwkm711"
                      href="https://note.com/kwkm711"
                    />
                  </div>
                </div>
              </Section>
            </Article>
          </div>
          <div
            className={classNames(
              "w-screen relative h-[14rem] mt-[3.125rem] bg-secondary",
              "md:h-[17rem] mt-[4.275rem]",
              "lg:h-[22rem] lg:mt-[5.625rem]",
              "xl:h-[25rem]"
            )}
          >
            <div className="absolute w-full top-[50%] translate-y-[-50%]">
              <Cta
                cta={
                  <>
                    <HeadingH2
                      headingClassName={classNames(
                        "!text-[1.25rem] text-base-black",
                        "md:!text-[1.5rem]",
                        "lg:!text-[1.75rem]"
                      )}
                    >
                      contact
                    </HeadingH2>
                  </>
                }
                ctaStyle=""
              >
                お問い合わせはこちらから
              </Cta>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </motion.div>
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

type SnsAccountProps = {
  sns: string;
  account: string;
  href: string;
};

function SnsAccount({ sns, account, href }: SnsAccountProps) {
  return (
    <div
      className={classNames(
        "mt-2 flex justify-center first:mt-0",
        "md:mt-3 md:first:mt-0",
        "lg:mt-4 lg:first:mt-0"
      )}
    >
      <div
        className={classNames(
          "flex gap-2 text-[0.875rem]",
          "md:gap-3 md:text-[1rem]",
          "lg:text-[1.25rem] lg:gap-4"
        )}
      >
        <span>{sns} :</span>
        <a
          href={href}
          className={classNames(
            "border-b border-base-black border-dashed",
            "md:pb-[2px]"
          )}
          target="_blank"
        >
          {account}
        </a>
      </div>
    </div>
  );
}
