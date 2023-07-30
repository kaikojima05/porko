import React from 'react'
import seriesData from './series.js'
import profile from './profile.js'
import concepts from './concept.js'
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import Article from "@/ui/base/article";
import { HeadingH3 } from "@/ui/base/heading";
import HoverIcons from '@/ui/module/hoverIcon/index'
import { Supplement } from '@/ui/base/supplement/index'
import { forwardRef } from "react";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Article articleClassName='font-content'>
      <Section isTopMargin={true}>
        <div className="before-scroll-repeat" ref={ref}>
          <div
            className={classNames(
              "flex justify-center items-start gap-6 flex-col",
              "md:flex-row md:items-stretch"
            )}
          >
            <div
              className={classNames(
                "relative w-full h-[28.125rem]",
                "md:min-w-[40%] md:max-w-[40%]"
              )}
            >
              <Image
                alt=""
                src="/images/LINE_ALBUM_230610.jpg"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded"
              />
            </div>
            <div className={classNames(
              'md:flex md:flex-col md:justify-between'
            )}>
              <p className={classNames(
                "text-[1.25rem] inline-block pr-[2rem] pb-2 border-b border-base-black text-[1.125rem]",
                "md:pr-[9rem]"
              )} >
                小嶋 麻莉恵 - Marie Kojima
              </p>
              <div className={classNames(
                'my-6',
                'md:my-0'
              )}>
                {profile.map((prf, index) => (
                  <React.Fragment key={index}>
                    <p>{prf.content}</p>
                    <br className={index + 1 === profile.length ? 'hidden' : ''} />
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-end">
                <div
                  className={classNames(
                    "flex items-center text-black gap-3 relative pb-2 pl-[2rem] border-b border-base-black",
                    "md:pr-4 md:pl-[12rem]"
                  )}
                >
                  <p className="text-[1.125rem]">Online -</p>
                  <HoverIcons
                    iconsName={[
                      'sns-twitter',
                      'sns-note'
                    ]}
                    hrefs={[
                      'https://note.com/kwkm711',
                      'https://twitter.com/koji_mari7'
                    ]}
                    iconSize='6'
                    iconClipColor='text-accent'
                    iconHoverClipColor='hover:text-base-black'
                    iconClassName='duration-[530ms]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section isTopMargin={false}>
        <HeadingH3 headingClassName="text-center">
          Concept
        </HeadingH3>
        <div className={classNames(
          'mt-5',
          'md:mt-6'
        )}>
          {concepts.map((concept, index) => (
            <React.Fragment key={index}>
              <p dangerouslySetInnerHTML={{ __html: concept.concept }} />
              <br className={index + 1 === profile.length ? 'hidden' : ''} />
            </React.Fragment>
          ))}
        </div>
      </Section>
      <Section isTopMargin={false}>
        <HeadingH3 headingClassName="text-center">
          Bio
        </HeadingH3>
        <div className={classNames(
          'mt-5',
          'md:mt-6'
        )}>
          {seriesData.map((item, index) => (
            <Supplement
              headLine={item.headLine}
              key={index}
              supplementClassName={
                `[&_br]:h-0 ${seriesData.length - 1 !== index ? 'mb-4' : 'mb-0'}`
              }
            >
              <p dangerouslySetInnerHTML={{ __html: item.children }} />
            </Supplement>
          ))}
        </div>
      </Section>
    </Article>
  );
}
);

AboutPage.displayName = "AboutPage";
export default AboutPage;
