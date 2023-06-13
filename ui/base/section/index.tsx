import classNames from "classnames";

type sectionProps = {
	isTopMargin?: boolean;
	children: React.ReactNode;
	sectionClassName?: string;
};

export default function sectionProps({
	isTopMargin = false,
	sectionClassName,
	children,
}: sectionProps) {
	return (
		<section
			className={classNames(
				`${isTopMargin ? "mt-14" : "mt-10"}`,
				`${sectionClassName}`
			)}
		>
			{children}
		</section>
	);
}
