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
          "pl-16 pr-2 py-1.5 flex items-center gap-10 post-it"
        )}
      >
        <p className="inline-block text-[0.9375rem]">{title}</p>
        {icon}
      </div>
    </div>
  );
  return <>{isLink && href ? <Link href={href}>{content}</Link> : content}</>;
}
