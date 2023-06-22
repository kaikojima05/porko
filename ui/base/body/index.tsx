import classNames from "classnames";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";

type BodyProps = {
	children?: React.ReactNode;
	backgroundImage?: React.ReactNode;
	isBackground?: boolean;
	bodyClassName?: string;
};

export default function Body({
	children,
	backgroundImage,
	isBackground = false,
	bodyClassName,
}: BodyProps) {
	return (
		<>
			<Header />
			{isBackground ? backgroundImage : undefined}
			<main
				className={classNames(
					"w-full",
					"mt-36 px-4",
					"md:px-[17%]",
					"xl:px-[22%]",
					"overflow-x-hidden",
					`${bodyClassName}`
				)}
			>
				{children || (
					<p className="text-center text-[14px]">
						待ってます...
					</p>
				)}
			</main>
			<Footer />
		</>
	);
}
