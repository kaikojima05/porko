import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import type { Works } from "@/ui/base/types/works";
import type { Creatives } from "@/ui/base/types/creatives";
import { Button } from "@/ui/base/button";

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
        "lg:flex lg:justify-center lg:items-center lg:gap-4"
      )}
    >
      {categories &&
        categories.map((category, index) => (
          <Button
            key={index}
            size="s"
            style="square"
            optionClassName={classNames(
              "rounded",
              `${
                currentPath.includes(category)
                  ? "bg-primary text-white"
                  : "border-base-black"
              }`
            )}
          >
            <Link
              className={classNames(
                "flex justify-center items-center w-full h-full"
              )}
              href={`/${baseUrl}/${category}/`}
              scroll={false}
            >
              {category}
            </Link>
          </Button>
        ))}
    </div>
  );
}
