import Link from "next/link";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import classNames from "classnames";

type PostItProps = {
  title: string;
  icon: React.ReactNode;
  isLink?: boolean;
  href?: Url;
};

export default function PostIt({
  href,
  title,
  icon,
  isLink = false,
}: PostItProps) {
  const content = (
    <div className=" flex justify-end">
      <div
        className={classNames(
          "overflow-hidden px-8 py-1.5 flex items-center gap-2 post-it relative"
        )}
      >
        <p className="inline-block">{title}</p>
        {icon}
      </div>
    </div>
  );
  return <>{isLink && href ? <Link href={href}>{content}</Link> : content}</>;
}
