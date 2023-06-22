import Icon from "@/ui/base/icons/index";
import Image from "next/image";
import classNames from "classnames";
import Section from "@/ui/base/section";
import Article from "@/ui/base/article";
import { forwardRef } from "react";

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
			works,
		},
		ref
	) => {
		return (
			<Article
				articleClassName={classNames(
					toggleProfileFunction,
					"duration-[1050ms] translate-x-0 absolute top-[3.5rem] bottom-0 right-[1rem] left-[1rem]",
					"md:right-[17%] md:left-[17%]",
					"xl:right-[22%] xl:left-[22%]"
				)}
			>
				<Section isTopMargin={true}>
					<div
						className="before-scroll-repeat"
						ref={ref}
					>
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
									"relative",
									"md:min-w-[40%] md:min-h-[18.75rem] md:max-h-[31.25rem]"
								)}
							>
								<Image
									alt=""
									src={
										profileImageSrc
									}
									fill
									style={{
										objectFit: "cover",
									}}
								/>
							</div>
							<div>
								<h3>{name}</h3>
								<div
									className={classNames(
										"mt-4 mb-4",
										"md:mb-6"
									)}
								>
									{
										profileSentence
									}
								</div>
								<div className="">
									<h3
										className={classNames()}
									>
										On
										the
										web
									</h3>
									<div
										className={classNames(
											"flex justify-start items-center text-black mt-4 gap-2"
										)}
									>
										{sns.note && (
											<a
												href={
													sns
														.note
														.href
												}
												className={classNames(
													"text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
													"hover:text-black hover:bg-transparent"
												)}
											>
												<Icon
													name="sns-note"
													width="w-6"
													height="h-6"
												/>
											</a>
										)}
										{sns.twitter && (
											<a
												href={
													sns
														.twitter
														.href
												}
												className={classNames(
													"text-white bg-black p-[0.375rem] rounded-full duration-[530ms]",
													"hover:text-black hover:bg-transparent"
												)}
											>
												<Icon
													name="sns-twitter"
													width="w-6"
													height="h-6"
												/>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Section>
				<Section>
					<div
						className={classNames(
							"text-[1.125rem] text-black"
						)}
					>
						<h2 className="text-center">
							works
						</h2>
						{works}
					</div>
				</Section>
			</Article>
		);
	}
);

AboutBodyLayout.displayName = "AboutBodyLayout";
export default AboutBodyLayout;
