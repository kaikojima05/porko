import { RefObject } from "react";

type ArticleProps = {
  children: React.ReactNode;
  articleClassName?: string;
  ref?: RefObject<HTMLDivElement>;
};

export default function ArticleProps({
  children,
  articleClassName,
  ref,
}: ArticleProps) {
  return (
    <article className={articleClassName} ref={ref}>
      {children}
    </article>
  );
}
