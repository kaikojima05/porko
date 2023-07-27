import Icon from "@/ui/base/icons/index";
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import Article from "@/ui/base/article";
import { HeadingH3 } from "@/ui/base/heading";
import { forwardRef } from "react";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Article>
      <Section isTopMargin={true}>
        <div className="before-scroll-repeat" ref={ref}>
          <div
            className={classNames(
              "flex justify-center items-start gap-6 flex-col",
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
                src="/images/LINE_ALBUM_230610.jpg"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded"
              />
            </div>
            <div className="overflow-hidden">
              <HeadingH3 headingClassName={classNames(
                "inline-block pr-[2rem] pb-2 border-b border-base-black text-[1.125rem]",
                "md:pr-[9rem]"
              )} >
                小嶋 麻莉恵 - Marie Kojima
              </HeadingH3>
              <div className={classNames("my-6", "md:my-6")}>
                <p>
                  埼玉県寄居町出身の27歳。
                </p>
                <br />
                <p>
                  現在は東京都八王子市在住。夫（凱）と共に、ひそやかでのんびりとした夫婦ふたり暮らしを愉しんでいます。
                </p>
                <br />
                <p>
                  会社員を5年ほど経験したのち、2022年にフリーランスライターとして独立しました。 ライフスタイル・おでかけ・キャリア等の多ジャンルに渡るメディア記事・プレスリリース・SEO・インタビュー等、記事執筆や校正業務を幅広く行っています。そのほか、Instagramのキャプション制作や商品付随のブランディングレター制作など、「ことば」にまつわるあらゆるお仕事に柔軟に対応させていただいています。
                </p>
                <br />
                <p>
                  元々「書く」ことが好きで、7歳前後から物語の創作をするようになりました。高校を卒業する頃からはインターネット上での投稿活動も開始。
                </p>
                <br />
                <p>
                  不定期ではありますが、今でも創作は続けています。小説のほか、今はエッセイの創作も精力的に行っています。
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  className={classNames(
                    "flex items-center text-black gap-3 relative pb-2 pl-[2rem] border-b border-base-black",
                    "md:pr-4 md:pl-[12rem]"
                  )}
                >
                  <p className="text-[1.125rem]">Online -</p>
                  <a
                    href="https://note.com/kwkm711"
                    className={classNames(
                      "bg-white text-accent rounded-full duration-[530ms]",
                      "hover:text-black hover:bg-transparent"
                    )}
                  >
                    <Icon name="sns-twitter" width="w-6" height="h-6" />
                  </a>
                  <a
                    href="https://twitter.com/koji_mari7"
                    className={classNames(
                      "text-accent bg-white rounded-full duration-[530ms]",
                      "hover:text-black hover:bg-transparent"
                    )}
                  >
                    <Icon name="sns-note" width="w-6" height="h-6" />
                  </a>
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
      </Section>
    </Article>
  );
}
);

AboutPage.displayName = "AboutPage";
export default AboutPage;
