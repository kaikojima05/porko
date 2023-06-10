import classNames from "classnames";

type ArticleProps = {
    children: React.ReactNode;
    articleClassName?: string;
};

export default function ArticleProps({
    children,
    articleClassName,
}: ArticleProps) {
    return <article className={articleClassName}>{children}</article>;
}
