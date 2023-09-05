import Link from 'next/link'
import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import classNames from "classnames";
import { HeadingH2 } from '@/ui/base/heading/index'
import { Button } from '@/ui/base/button/index'
import { CardStyle } from "@/ui/module/cardStyle/index";

type CtaWorksProps = {
  works: Works[];
};

export default function CtaWorks({
  works,
}: CtaWorksProps) {
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const worksIntroduction = "執筆実績（企画・取材・撮影から携わったものもあります）"

  works.map((_, index) => {
    worksRefs.current[index] = createRef<HTMLDivElement>();
  });

  const sortWorks = useMemo(() => {
    return [...works].sort((a, b) => {
      const recent = new Date(a.postDate).getTime();
      const ago = new Date(b.postDate).getTime();

      return ago - recent;
    });
  }, [works]);

  useEffect(() => {
    if (!worksRefs.current) {
      return;
    }

    sortWorks.forEach((work, index) => {
      const fragment = document
        .createRange()
        .createContextualFragment(work.RefLink.html);

      const currentElement = worksRefs.current[index]?.current;
      if (!currentElement) {
        return;
      }

      while (currentElement.firstChild) {
        currentElement.removeChild(currentElement.firstChild);
      }

      worksRefs.current[index]?.current?.appendChild(fragment);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const elements = worksRefs.current[index]?.current?.querySelectorAll(
            ".iframely-embed > div"
          );
          elements?.forEach((element) => {
            const newStyle = document.createElement("style");
            newStyle.textContent = CardStyle();
            element.shadowRoot?.appendChild(newStyle);
          });
        });
      });

      observer.observe(currentElement, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    });
  }, [sortWorks]);

  return (
    <>
      <div className={classNames(
        "w-full",
      )}>
        <div className={classNames(
          "grid grid-cols-2 gap-6 w-full",
          "lg:flex"
        )}>
          <div className={classNames(
            'lg:max-w-[30%]'
          )}>
            {sortWorks
              .sort((a, b) => {
                if (a.appeal && !b.appeal) {
                  return -1;
                } else if (!a.appeal && b.appeal) {
                  return 1;
                }
                return 0;
              })
              .slice(0, 1)
              .map((work, index) => (
                <div
                  id={`${index}`}
                  ref={worksRefs.current[index]}
                  key={work._id}
                  className="block"
                ></div>
              ))}
          </div>
          <div className={classNames(
            "w-full",
            "lg:hidden"
          )}>
            <div className='flex items-center'>
              <HeadingH2 headingClassName="pb-2 border-b border-base-black">
                works
              </HeadingH2>
            </div>
            <div>
              <p className="mt-4">{worksIntroduction}</p>
            </div>
            <div className="mt-4">
              <Button size="x-full" style="square" optionClassName="border-base-black rounded-md">
                <Link href="/works/" className="flex justify-center items-center py-2" scroll={false}>
                  see more ...
                </Link>
              </Button>
            </div>
          </div>

          <div className={classNames(
            "hidden",
            "lg:block lg:w-full lg:shrink"
          )}>
            <div className="[&>*]:mt-10 first:[&>*]:mt-0">
              <div className="flex items-center">
                <div className='w-full h-[1px] bg-base-black'></div>
                <HeadingH2>
                  works
                </HeadingH2>
                <div className='w-full h-[1px] bg-base-black'></div>
              </div>
              <div className={classNames(
                'mt-4',
                '[&>*]:mt-3 [&>*]:text-center first:[&>*]:mt-0'
              )}>
                <p>インタビュー記事・イベントレポート・プレスリリース等、</p>
                <p>お仕事で執筆させていただいたコンテンツの一覧です。</p>
                <p>また、記事制作のほか、企画・取材・写真撮影を併せて</p>
                <p>担当したものも一部ございます。</p>
              </div>
              <div>
                <Button size="m" style="square" optionClassName='rounded border-base-black ml-auto mr-auto'>
                  <Link href="/works/" className="flex justify-center items-center py-2" scroll={false}>see more ...</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
