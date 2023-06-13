import classNames from "classnames";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutMarie from "@/ui/pages/about/section/main/marie/index";
import AboutKai from "@/ui/pages/about/section/main/kai/index";
import Button from "@/ui/base/button";

export default function About() {
	const [isProfile, setIsProfile] = useState("");
	const backgroundRef = useOnScrollAnimation({ removeAnimation: false });
	const MarieRef = useOnScrollAnimation();
	const KaiRef = useOnScrollAnimation();

	const handleToggleProfile = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
		setIsProfile(event.currentTarget.innerText);
	};

	return (
		<>
			<Body
				isBackground={true}
				backgroundImage={
					<div
						ref={backgroundRef}
						className="before-scroll-once relative h-[600px]"
					>
						<Image
							alt=""
							src="/images/hero1.jpg"
							fill
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
				}
				bodyClassName="h-[1800px] relative z-0"
			>
				<div
					className={classNames(
						"flex gap-4 justify-evenly items-center",
						"md:justify-center md:gap-10"
					)}
				>
					<Button
						buttonText="Marie Kojima"
						clickHandler={
							handleToggleProfile
						}
					/>
					<Button
						buttonText="Kai Kojima"
						clickHandler={
							handleToggleProfile
						}
					/>
				</div>
				<AboutMarie
					ref={MarieRef}
					toggleProfile={
						isProfile === "Kai Kojima"
							? "animate-out"
							: isProfile ===
							  "Marie Kojima"
							? "animate-in"
							: ""
					}
				/>
				<AboutKai
					ref={KaiRef}
					toggleProfile={
						isProfile === "Kai Kojima"
							? "animate-in"
							: isProfile ===
							  "Marie Kojima"
							? "animate-out"
							: isProfile === ""
							? "z-[-10] opacity-0"
							: ""
					}
				/>
			</Body>
		</>
	);
}
