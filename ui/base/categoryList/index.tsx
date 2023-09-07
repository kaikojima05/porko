import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import type { Works } from "@/ui/base/types/works";
import type { Creatives } from "@/ui/base/types/creatives";
import { Button } from "@/ui/base/button";
import { HeadingH3 } from "@/ui/base/heading";

type CategoryListProps = {
  baseUrl: "works" | "creatives";
  data: Works[] | Creatives[] | undefined;
};

export default function CategoryList({ baseUrl, data }: CategoryListProps) {
  const router = useRouter();
  const path = router.asPath;
  const currentPath = decodeURIComponent(path);
  const categoryData = data?.map((item) => item.category);
  const categories = Array.from(new Set(categoryData?.flat()));

  return (
    <div
      className={classNames(
        "border border-dashed border-base-black p-[1.875rem] rounded",
        "md:p-[3.125rem] md:flex md:justify-start md:items-center md:gap-[5rem]",
        "lg:gap-[8rem]",
        "xl:gap-[10rem]"
      )}
    >
      <div className="">
        <span className={classNames(
          'text-[0.875rem]',
          'md:text-[1rem]'
        )}>
          category
        </span>
      </div>
      {categories && (
        <div className={classNames(
          "mt-5 flex flex-wrap gap-4",
          "md:mt-0",
        )}>
          <Button
            size="custom"
            style="rounded"
            optionClassName={classNames(
              `${currentPath === `/${baseUrl}`
                ? "bg-primary text-white"
                : "border-base-black"
              }`
            )}
          >
            <Link
              className={classNames(
                "px-3 py-1 flex justify-center items-center",
                "md:px-4",
                "lg:px-5"
              )}
              href={`/${baseUrl}/`}
              scroll={false}
            >
              all
            </Link>
          </Button>
          {categories.map((category, index) => (
            <Button
              key={index}
              size="custom"
              style="rounded"
              optionClassName={classNames(
                `${currentPath.includes(category)
                  ? "bg-primary text-white"
                  : "border-base-black"
                }`
              )}
            >
              <Link
                className={classNames(
                  "px-3 py-1 flex justify-center items-center",
                  "md:px-4",
                  "lg:px-5"
                )}
                href={`/${baseUrl}/${category}/`}
                scroll={false}
              >
                {category}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
