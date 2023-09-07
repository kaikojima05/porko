import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from "classnames";
import Article from "@/ui/base/article";
import Section from '@/ui/base/section'
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";
import Cta from '@/ui/base/cta/index'
import Image from 'next/image'
import { HeadingH1, HeadingH2, HeadingH3 } from '@/ui/base/heading/index'
import { useOnScrollAnimation } from '@/ui/hooks/useOnScrollAnimation'

type BodyProps = {
  whats: React.ReactNode;
  src: string
  heading?: string
  children?: React.ReactNode;
  bodyClassName?: string;
};

export default function Body({
  whats,
  src,
  heading,
  children,
  bodyClassName = '',
}: BodyProps) {
  const pageTitleRef = useRef<HTMLHeadingElement | null>(null)
  const router = useRouter()
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
        'pt-[3.5625rem] w-full',
        'lg:pt-[5.1875rem]',
      )}>
        <div ref={backgroundRef} className={classNames(
          "before-scroll-once h-[18rem] w-full",
          "md:h-[21rem]",
          "lg:h-[25rem]"
        )}>
          <Image
            alt="portforio サイト porko のイメージ画像"
            src={src}
            fill
            style={{
              userSelect: 'none',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <main
          className={classNames(
            "w-full mx-0 z-0 relative",
            "pt-[4.375rem]",
            "lg:pt-[5.625rem] lg:flex lg:flex-col lg:justify-center lg:items-center",
            "xl:pt-[7.5rem]",
            "[&_section]:px-4",
            "[&_section]:lg:px-0",
            `${bodyClassName}`
          )}
        >
          <div className={classNames(
            'hidden',
            'xl:inline xl:fixed xl:bottom-8 xl:left-4 xl:z-10',
          )}
          >
            <HeadingH1 headingClassName='writing-vertical !text-[1.8125rem]' ref={pageTitleRef}>
              {whats}
            </HeadingH1>
          </div>
          <div className={classNames(
            'w-full',
            'lg:min-w-[58.125rem] lg:max-w-[58.125rem]',
            'xl:min-w-[62.5rem] xl:max-w-[62.5rem]'
          )}>
            <Article articleClassName='font-content'>
              {heading &&
                <Section isTopMargin={true}>
                  <div className="flex items-center">
                    <div className='w-full h-[1px] bg-base-black' />
                    <HeadingH2 outsideClassName={classNames(
                      'px-4',
                      'md:px-6',
                      'lg:px-8'
                    )}>
                      {heading}
                    </HeadingH2>
                    <div className='w-full h-[1px] bg-base-black' />
                  </div>
                </Section>
              }
              {children}
            </Article>
          </div>
          {router.pathname !== '/contact' &&
            <div className={classNames(
              'w-screen relative h-[12.5rem] mt-[3.125rem] bg-secondary',
              "md:h-[16.875rem] mt-[4.275rem]",
              "lg:h-[20.625rem] lg:mt-[5.625rem]",
              "xl:h-[23.125rem]"
            )}>
              <div className='absolute w-full top-[50%] translate-y-[-50%]'>
                <Cta
                  cta={
                    <>
                      <HeadingH2
                        headingClassName={classNames(
                          '!text-[1.25rem] text-base-black',
                          'md:!text-[1.5rem]',
                          'lg:!text-[1.75rem]',
                        )}
                      >
                        contact
                      </HeadingH2>
                      <HeadingH3
                        headingClassName={classNames(
                          'mt-4 text-base-black',
                          'md:mt-[1.25rem]',
                          'lg:mt-[1.875rem]'
                        )}
                      >
                        お問い合わせはこちらから
                      </HeadingH3>
                    </>
                  }
                  ctaStyle=""
                >
                  mail form
                </Cta>
              </div>
            </div>
          }
        </main>
      </div>
      <Footer />
    </motion.div>
  );
}
