import React from 'react'
import seriesData from './series.js'
import profile from './profile.js'
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import { HeadingH3 } from "@/ui/base/heading";
import HoverIcons from '@/ui/module/hoverIcon/index'
import { Supplement } from '@/ui/base/supplement/index'
import { forwardRef } from "react";

const AboutPage = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <>
      <Section isTopMargin={false}>
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
                src="/images/profile.webp"
                fill
                style={{
                  objectPosition: "top",
                  objectFit: "cover",
                }}
                className="rounded"
              />
            </div>
            <div className={classNames(
              'md:flex md:flex-col md:justify-between'
            )}>
              <div>
                <p className={classNames(
                  "text-[1.125rem] block border-b border-base-black pb-2",
                  "md:text-[1.25rem] md:inline-block md:pr-[5rem]",
                  "lg:pr-[6rem]",
                  "xl:pr-[7rem]"
                )} >
                  小嶋 麻莉恵 - Marie Kojima
                </p>
              </div>
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
                      'sns-x',
                      'sns-note'
                    ]}
                    hrefs={[
                      'https://twitter.com/koji_mari7',
                      'https://note.com/kwkm711',
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
              supplementClassName={classNames(
                `[&_br]:h-0 ${index !== 0
                  ? 'mt-5'
                  : 'mt-0'
                }`,
              )}
              headLineClassName={classNames(
                'border-b border-base-black inline-block pr-5',
                'md:border-none md:pr-0'
              )}
            >
              <p
                dangerouslySetInnerHTML={{ __html: item.children }}
                className={classNames(
                  'mt-2',
                  'md:mt-0'
                )}
              />
            </Supplement>
          ))}
        </div>
      </Section>
    </>
  );
}
);

AboutPage.displayName = "AboutPage";
export default AboutPage;
