import Icon from "@/ui/base/icons/index";
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import Article from "@/ui/base/article";
import { forwardRef } from "react";
import Footer from "@/ui/base/footer";

type AboutBodyLayoutProps = {
  toggleProfileFunction: string;
  name: string;
  profileImageSrc: string;
  profileSentence: React.ReactNode;
  sns: {
    note?: {
      href?: string;
    };
    twitter?: {
      href?: string;
    };
  };
  github?: {
    href?: string;
  };
  works: React.ReactNode;
};

const AboutBodyLayout = forwardRef<HTMLDivElement, AboutBodyLayoutProps>(
  (
    {
      toggleProfileFunction,
      name,
      profileImageSrc,
      profileSentence,
      sns,
      github,
      works,
    },
    ref
  ) => {
    return (
      <>
        <Article
          articleClassName={classNames(
            toggleProfileFunction,
            "w-full duration-[1050ms] translate-x-0 absolute"
          )}
        >
          <Section isTopMargin={true} isAbout={true}>
            <div className="before-scroll-repeat" ref={ref}>
              <div className="text-black text-[1.125rem] text-center">
                <h2>about me</h2>
              </div>
              <div
                className={classNames(
                  "flex justify-center items-start gap-6 mt-6 flex-col",
                  "md:flex-row"
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
                    src={profileImageSrc}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3>{name}</h3>
                  <div className={classNames("mt-4 mb-4", "md:mb-6")}>
                    <p>{profileSentence}</p>
                  </div>
                  <div className="">
                    <h3 className={classNames()}>On the web</h3>
                    <div
                      className={classNames(
                        "flex justify-start items-center text-black mt-4 gap-3"
                      )}
                    >
                      {sns.note && (
                        <a
                          href={sns.note.href}
                          className={classNames(
                            "text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="sns-note" width="w-5" height="h-5" />
                        </a>
                      )}
                      {sns.twitter && (
                        <a
                          href={sns.twitter.href}
                          className={classNames(
                            "text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="sns-twitter" width="w-5" height="h-5" />
                        </a>
                      )}
                      {github && (
                        <a
                          href={github.href}
                          className={classNames(
                            "text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="github" width="w-5" height="h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section isTopMargin={false} isAbout={true}>
            <div className={classNames("text-black")}>
              <h2 className="text-center text-[1.125rem]">works</h2>
              {works}
            </div>
          </Section>
          <Footer />
        </Article>
      </>
    );
  }
);

AboutBodyLayout.displayName = "AboutBodyLayout";
export default AboutBodyLayout;
