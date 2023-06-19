import { useRef, useLayoutEffect, createRef, RefObject } from "react";
import type { Works } from "@/ui/base/types/works";
import { forwardRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import Icon from "@/ui/base/icons";

type AboutMarieProps = {
  toggleProfile: string;
  works: Works[];
};

const AboutMarie = forwardRef<HTMLDivElement, AboutMarieProps>((props, ref) => {
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  props.works.map((_, index) => {
    worksRefs.current[index] = createRef<HTMLDivElement>();
  });
  console.log(worksRefs);

  useLayoutEffect(() => {
    if (!worksRefs.current) {
      return;
    }

    props.works.forEach((work, index) => {
      const fragment = document
        .createRange()
        .createContextualFragment(work.RefLink.html);
      worksRefs.current[index]?.current?.appendChild(fragment);
      console.log(fragment);
    });
  }, [props.works]);

  return (
    <Article
      articleClassName={classNames(
        props.toggleProfile,
        "duration-[1050ms] translate-x-0 absolute"
      )}
    >
      <Section isTopMargin={true}>
        <div ref={ref} className="before-scroll-repeat">
          <div className="text-black text-[1.125rem] text-center">
            <h2>about me</h2>
          </div>
          <div
            className={classNames("flex justify-center items-start gap-6 mt-6")}
          >
            <div className="relative min-w-[18.75rem] min-h-[31.25rem]">
              <Image
                alt=""
                src="/images/LINE_ALBUM_230610.jpg"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <h3>小嶋 麻莉恵 Marie Kojima</h3>
              <div className="my-4">
                <p>
                  群馬県中之条町出身。現在は、静岡県東部にて旦那さんと猫の３人で平屋暮らし。音楽と猫と眠ることをこよなく愛する27歳。
                </p>
                <p>
                  小さな頃から、音楽・ダンスなど言葉以外の何かで感情を表現することを好み、気付いた時には写真の世界にどっぷりと浸かっていました。自分の感情だけでなく、誰かの伝えきれない想いもわたしが写し、届ける。そんな写真で人の想いに寄り添うお仕事が出来たら良いなと思い、スタジオ経験を経て、結婚を機に独立しました。
                  透明人間のように静かに寄り添い、物事の流れをそのまま素直に写すことを得意としています。偽りない瞬間こそが人の心を動かすと感じています。背伸びすることなく写すので、背伸びすることなく写ってください。
                  本名は、青木美咲です。写真と共に生きるという覚悟のもと大好きなおばあちゃんと同じ苗字を借りました。みいさんでも猫さんでも今まで通り親しみやすい呼び名で呼んでいただけたら喜びます。
                </p>
              </div>
              <div className="">
                <h3 className={classNames()}>On the web</h3>
                <div
                  className={classNames(
                    "flex justify-start items-center text-black mt-4 gap-2"
                  )}
                >
                  <a
                    href="https://note.com/kwkm711"
                    className={classNames(
                      "text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
                      "hover:text-black hover:bg-transparent"
                    )}
                  >
                    <Icon name="sns-note" width="w-6" height="h-6" />
                  </a>
                  <a
                    href="https://twitter.com/koji_mari7"
                    className={classNames(
                      "text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
                      "hover:text-black hover:bg-transparent"
                    )}
                  >
                    <Icon name="sns-twitter" width="w-6" height="h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className={classNames("text-[1.125rem] text-black")}>
          <h2 className="text-center">works</h2>
          <div className={classNames("mt-4 grid grid-cols-3 gap-3")}>
            {props.works.map((work, index) => {
              return <div key={work._id} ref={worksRefs.current[index]} />;
            })}
          </div>
        </div>
      </Section>
    </Article>
  );
});

AboutMarie.displayName = "AboutMarie";
export default AboutMarie;
