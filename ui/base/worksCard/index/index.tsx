import { useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import classNames from "classnames";
import Icon from "@/ui/base/icons";
import Link from "next/link";

type WorksCardProps = {
	works: Works[];
};

export default function WorksCard({ works }: WorksCardProps) {
	const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
	works.map((_, index) => {
		worksRefs.current[index] = createRef<HTMLDivElement>();
	});

	useEffect(() => {
		if (!worksRefs.current) {
			return;
		}

		works.forEach((work, index) => {
			const fragment = document
				.createRange()
				.createContextualFragment(work.RefLink.html);

			const currentElement =
				worksRefs.current[index]?.current;
			if (!currentElement) {
				return; // currentElementがnullの場合は早期リターン
			}

			while (currentElement.firstChild) {
				currentElement.removeChild(
					currentElement.firstChild
				);
			}

			worksRefs.current[index]?.current?.appendChild(
				fragment
			);

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
					"my-4 grid grid-cols-2 gap-3 relative",
					"md:grid-cols-4"
				)}
			>
				{works.slice(0, 4).map((work, index) => {
					return (
						<div
							key={work._id}
							ref={
								worksRefs
									.current[
									index
								]
							}
						></div>
					);
				})}
				<Icon
					name="push-pin"
					width="w-5"
					height="h-5"
					className={classNames(
						"absolute top-[-1rem] left-[-0.875rem] z-[9999]",
						"md:left-[-1rem] md:top-[-0.75rem]"
					)}
				/>
			</div>
			{works.length >= 4 && (
				<p className={classNames("text-right")}>
					<Link href="/about/">more...</Link>
				</p>
			)}
		</>
	);
}
