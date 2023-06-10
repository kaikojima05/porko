import { forwardRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";

const AboutMarie = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Article>
            <Section>
                <div ref={ref} className="before-scroll-repeat">
                    <div className="text-black text-[1.125rem]">
                        <h2>about me</h2>
                    </div>
                    <div className={classNames("flex justify-center gap-6")}>
                        <Image
                            alt=""
                            src="/images/LINE_ALBUM_230610.jpg"
                            width={300}
                            height={500}
                        />
                        <div>
                            <h3>小嶋 麻莉恵 Marie Kojima</h3>
                            <p>
                                群馬県中之条町出身。現在は、静岡県東部にて旦那さんと猫の３人で平屋暮らし。音楽と猫と眠ることをこよなく愛する27歳。
                            </p>
                            <p>
                                小さな頃から、音楽・ダンスなど言葉以外の何かで感情を表現することを好み、気付いた時には写真の世界にどっぷりと浸かっていました。自分の感情だけでなく、誰かの伝えきれない想いもわたしが写し、届ける。そんな写真で人の想いに寄り添うお仕事が出来たら良いなと思い、スタジオ経験を経て、結婚を機に独立しました。
                                透明人間のように静かに寄り添い、物事の流れをそのまま素直に写すことを得意としています。偽りない瞬間こそが人の心を動かすと感じています。背伸びすることなく写すので、背伸びすることなく写ってください。
                                本名は、青木美咲です。写真と共に生きるという覚悟のもと大好きなおばあちゃんと同じ苗字を借りました。みいさんでも猫さんでも今まで通り親しみやすい呼び名で呼んでいただけたら喜びます。
                            </p>
                            <div className={classNames("md:px-4 md:py-2")}>
                                <a href="/">
                                    <span>Twitter</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className={classNames("text-[1.125rem] text-black")}>
                    <h2>Work</h2>
                </div>
            </Section>
        </Article>
    );
});

export default AboutMarie;
