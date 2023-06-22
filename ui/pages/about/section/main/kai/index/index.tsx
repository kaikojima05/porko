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
				name="小嶋 凱 Kai Kojima"
				profileImageSrc="/images/LINE_ALBUM_230613.jpg"
				profileSentence="テスト"
				sns={{
					twitter: {
						href: "https://twitter.com/kaikojima0724",
					},
				}}
				works="テスト"
				ref={ref}
			/>
		</>
	);
});

AboutKai.displayName = "AboutKai";
export default AboutKai;
