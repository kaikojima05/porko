import Icon from "@/ui/base/icons/index";
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import Article from "@/ui/base/article";
import { forwardRef } from "react";
import Footer from "@/ui/base/footer";

type AboutBodyLayoutProps = {
  toggleProfileFunction: string;
  name: React.ReactNode;
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
                <div className="overflow-hidden">
                  <h3
                    className={classNames(
                      "inline-block pr-10 pb-2 border-b border-base-black"
                    )}
                  >
                    {name}
                  </h3>
                  <div className={classNames("my-5", "md:my-6")}>
                    <p>{profileSentence}</p>
                  </div>
                  <div className="flex justify-end">
                    <div
                      className={classNames(
                        "flex items-center text-black gap-3 relative pr-16 pb-2 pl-1 border-b border-base-black"
                      )}
                    >
                      {sns.twitter && (
                        <a
                          href={sns.twitter.href}
                          className={classNames(
                            "bg-white text-accent rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="sns-twitter" width="w-8" height="h-8" />
                        </a>
                      )}
                      {sns.note && (
                        <a
                          href={sns.note.href}
                          className={classNames(
                            "text-accent bg-white rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="sns-note" width="w-8" height="h-8" />
                        </a>
                      )}
                      {github && (
                        <a
                          href={github.href}
                          className={classNames(
                            "text-accent bg-white rounded-full duration-[530ms]",
                            "hover:text-black hover:bg-transparent"
                          )}
                        >
                          <Icon name="github" width="w-8" height="h-8" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section isTopMargin={false} isAbout={true}>
            <div className={classNames("text-base-black")}>
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
