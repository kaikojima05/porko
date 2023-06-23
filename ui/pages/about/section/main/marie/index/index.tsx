import type { Works } from "@/ui/base/types/works";
import { forwardRef } from "react";
import classNames from "classnames";
import AboutBodyLayout from "@/ui/base/about/body/index";
import WorksCard from "@/ui/base/worksCard/index";

type AboutMarieProps = {
  toggleProfile: string;
  works: Works[];
};

const AboutMarie = forwardRef<HTMLDivElement, AboutMarieProps>((props, ref) => {
  return (
    <>
      <AboutBodyLayout
        toggleProfileFunction={props.toggleProfile}
        name="小嶋 麻莉恵 Marie kojima"
        profileImageSrc="/images/LINE_ALBUM_230610.jpg"
        profileSentence={
          <>
            埼玉県寄居町出身の27歳。
            <br />
            現在は東京都八王子市在住。夫（凱）と共に、ひそやかでのんびりとした夫婦ふたり暮らしを愉しんでいます。
            <br />
            <br />
            会社員を5年ほど経験したのち、2022年にフリーランスライターとして独立しました。
            ライフスタイル・おでかけ・キャリア等の多ジャンルに渡るメディア記事・プレスリリース・SEO・インタビュー等、記事執筆や校正業務を幅広く行っています。そのほか、Instagramのキャプション制作や商品付随のブランディングレター制作など、「ことば」にまつわるあらゆるお仕事に柔軟に対応させていただいています。
            <br />
            <br />
            元々「書く」ことが好きで、7歳前後から物語の創作をするようになりました。高校を卒業する頃から、インターネット上での投稿活動を開始。
            <br />
            不定期ではありますが、今でも創作は続けています。小説のほか、今はエッセイの創作も精力的に行っています。
          </>
        }
        sns={{
          note: {
            href: "https://note.com/kwkm711",
          },
          twitter: {
            href: "https://twitter.com/koji_mari7",
          },
        }}
        works={<WorksCard works={props.works} />}
        ref={ref}
      />
    </>
  );
});

AboutMarie.displayName = "AboutMarie";
export default AboutMarie;
