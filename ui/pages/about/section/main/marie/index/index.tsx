import { useRef, useLayoutEffect, createRef, RefObject } from "react";
import Link from "next/link";
import type { Works } from "@/ui/base/types/works";
import { forwardRef } from "react";
import classNames from "classnames";
import AboutBodyLayout from "@/ui/base/about/body/index";

type AboutMarieProps = {
	toggleProfile: string;
	works: Works[];
};

type WorksComponentProps = {
	works: Works[];
};

function WorksComponent({ works }: WorksComponentProps) {
	const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
	works.map((_, index) => {
		worksRefs.current[index] = createRef<HTMLDivElement>();
	});

	useLayoutEffect(() => {
		if (!worksRefs.current) {
			return;
		}

		works.forEach((work, index) => {
			const fragment = document
				.createRange()
				.createContextualFragment(work.RefLink.html);

			worksRefs.current[index]?.current?.appendChild(
				fragment
			);

			const currentElement =
				worksRefs.current[index]?.current;
			if (!currentElement) {
				return; // currentElementがnullの場合は早期リターン
			}

			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					const elements = worksRefs.current[
						index
					]?.current?.querySelectorAll(
						".iframely-embed > div"
					);
					elements?.forEach((element) => {
						const newStyle =
							document.createElement(
								"style"
							);
						newStyle.textContent = `
.e {padding-bottom:  75% !important;}
`;
						element.shadowRoot?.appendChild(
							newStyle
						);
					});
				});
			});

			observer.observe(currentElement, {
				childList: true,
				subtree: true,
			});

			// Cleanup function
			return () => {
				observer.disconnect();
			};
		});
	}, [works]);

	return (
		<>
			<div
				className={classNames(
					"my-4 grid grid-cols-3 gap-3"
				)}
			>
				{works.slice(0, 3).map((work, index) => {
					return (
						<div
							key={work._id}
							ref={
								worksRefs
									.current[
									index
								]
							}
						/>
					);
				})}
			</div>
			{works.length >= 4 && (
				<p className={classNames("text-right")}>
					<Link href="/about/">more...</Link>
				</p>
			)}
		</>
	);
}

const AboutMarie = forwardRef<HTMLDivElement, AboutMarieProps>((props, ref) => {
	return (
		<>
			<AboutBodyLayout
				toggleProfileFunction={props.toggleProfile}
				name="小嶋 麻莉恵 Marie kojima"
				profileImageSrc="/images/LINE_ALBUM_230610.jpg"
				profileSentence={
					<>
						<p
							className={classNames(
								"box-border"
							)}
						>
							埼玉県寄居町出身の27歳。
							<br />
							現在は東京都八王子市在住。夫（凱）と共に、ひそやかでのんびりとした夫婦ふたり暮らしを愉しんでいます。
						</p>
						<p
							className={classNames(
								"box-border"
							)}
						>
							会社員を5年ほど経験したのち、2022年にフリーランスライターとして独立しました。
							ライフスタイル・おでかけ・キャリア等の多ジャンルに渡るメディア記事・プレスリリース・SEO・インタビュー等、記事執筆や校正業務を幅広く行っています。そのほか、Instagramのキャプション制作や商品付随のブランディングレター制作など、「ことば」にまつわるあらゆるお仕事に柔軟に対応させていただいています。
						</p>
						<p
							className={classNames(
								"box-border"
							)}
						>
							元々「書く」ことが好きで、7歳前後から物語の創作をするようになりました。高校を卒業する頃から、インターネット上での投稿活動を開始。
							<br />
							不定期ではありますが、今でも創作は続けています。小説のほか、今はエッセイの創作も精力的に行っています。
						</p>
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
				works={<WorksComponent works={props.works} />}
				ref={ref}
			/>
		</>
	);
});

AboutMarie.displayName = "AboutMarie";
export default AboutMarie;
