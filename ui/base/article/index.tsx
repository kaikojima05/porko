type ArticleProps = {
  children: React.ReactNode;
  articleClassName?: string;
};

export default function Article({
  children,
  articleClassName = "",
}: ArticleProps) {
  return (
    <article className={articleClassName}>
      {children}
    </article>
  );
}
