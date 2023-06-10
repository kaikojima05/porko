import classNames from "classnames";

type sectionProps = {
    isTopMargin?: boolean;
    children: React.ReactNode;
    sectionClassName?: string;
};

export default function sectionProps({
    isTopMargin = true,
    sectionClassName,
    children,
}: sectionProps) {
    return (
        <section
            className={classNames(
                `${isTopMargin ? "" : "mt-14"}`,
                `${sectionClassName}`
            )}
        >
            {children}
        </section>
    );
}
