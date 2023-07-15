import { forwardRef } from "react";
import AboutBodyLayout from "@/ui/base/about/body";

type AboutKaiProps = {
  toggleProfile: string;
};

const AboutKai = forwardRef<HTMLDivElement, AboutKaiProps>((props, ref) => {
  return (
    <>
      <AboutBodyLayout
        toggleProfileFunction={props.toggleProfile}
        name="小嶋 凱 - Kai Kojima"
        profileImageSrc="/images/LINE_ALBUM_230613.jpg"
        profileSentence={
          <>
            <p>
              神奈川県出身の26歳。<br />
              現在は東京都八王子市在住。妻（麻莉恵）に時々怒られながらも、ほのぼのと平和な夫婦ふたり暮らしを愉しんでいます。
            </p>
            <p>八王子市内の制作会社でWebエンジニアの仕事をしています。<br />
              好きなものは「猫」「ラーメン」「ビール」「寝ること」。
            </p>
            <p>
              妻の影響もあり、夫婦揃ってなにわ男子を推しています。<br />
              生粋のインドア人間。ふかふかのベッドをこよなく愛しているものの、最近はキャンプに興味津々。
            </p>
          </>
        }
        sns={{
          twitter: {
            href: "https://twitter.com/kaikojima0724",
          },
        }}
        github={{
          href: "https://github.com/kaikojima05?tab=repositories",
        }}
        works={
          <p className="text-center mt-4">
            coming soon ...
          </p>
        }
        ref={ref}
      >
      </AboutBodyLayout>
    </>
  );
});

AboutKai.displayName = "AboutKai";
export default AboutKai;
