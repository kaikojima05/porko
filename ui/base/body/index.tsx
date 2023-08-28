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
  whats: string
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
  const router = useRouter()
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
            "pt-[5.625rem] pb-[5.625rem] px-4",
            "lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0",
            `${bodyClassName}`
          )}
        >
          <div className={classNames(
            'hidden before-scroll-once',
            'lg:inline lg:fixed lg:bottom-4 lg:left-4',
          )}
            ref={titleRef}
          >
            <HeadingH1 headingClassName='writing-vertical'>
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
                  <HeadingH2>
                    {heading}
                  </HeadingH2>
                </Section>
              }
              {children}
            </Article>
            {router.pathname !== '/contact' &&
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
                      ctaStyle="rounded-md border border-base-black py-14 px-20"
                      buttonStyle="flex flex-col items-center justify-center rounded-md border-base-black"
                    >
                      mail form
                    </Cta>
                  </div>
                </Section>
              </Article>
            }
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
