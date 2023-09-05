import Link from 'next/link'
import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Creatives } from "@/ui/base/types/creatives";
import classNames from "classnames";
import { HeadingH2 } from '@/ui/base/heading/index'
import { Button } from '@/ui/base/button/index'
import { CardStyle } from "@/ui/module/cardStyle/index";

type CtaCreativesProps = {
  creatives: Creatives[];
};

export default function CtaCreatives({
  creatives,
}: CtaCreativesProps) {
  const creativesRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const creativesIntroduction = "執筆実績（企画・取材・撮影から携わったものもあります）"

  creatives.map((_, index) => {
    creativesRefs.current[index] = createRef<HTMLDivElement>();
  });

  const sortCreatives = useMemo(() => {
    return [...creatives].sort((a, b) => {
      const recent = new Date(a.postDate).getTime();
      const ago = new Date(b.postDate).getTime();

      return ago - recent;
    });
  }, [creatives]);

  useEffect(() => {
    if (!creativesRefs.current) {
      return;
    }

    sortCreatives.forEach((work, index) => {
      const fragment = document
        .createRange()
        .createContextualFragment(work.RefLink.html);

      const currentElement = creativesRefs.current[index]?.current;
      if (!currentElement) {
        return;
      }

      while (currentElement.firstChild) {
        currentElement.removeChild(currentElement.firstChild);
      }

      creativesRefs.current[index]?.current?.appendChild(fragment);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const elements = creativesRefs.current[index]?.current?.querySelectorAll(
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
  }, [sortCreatives]);

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
            {sortCreatives
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
                  ref={creativesRefs.current[index]}
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
                creatives
              </HeadingH2>
            </div>
            <div>
              <p className="mt-4">{creativesIntroduction}</p>
            </div>
            <div className="mt-4">
              <Button size="x-full" style="square" optionClassName="border-base-black rounded-md">
                <Link href="/creatives/" className="flex justify-center items-center py-2" scroll={false}>
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
                <HeadingH2 headingClassName="">
                  creatives
                </HeadingH2>
                <div className='w-full h-[1px] bg-base-black'></div>
              </div>
              <div className={classNames(
                'mt-4',
                '[&>*]:mt-3 [&>*]:text-center first:[&>*]:mt-0'
              )}>
                <p>自由に綴ったエッセイ等、お仕事からは離れた自主制作コンテンツの一覧です。</p>
                <p>エッセイでは、日頃考えていることや、</p>
                <p>日常の中のささやかな出来事などを、</p>
                <p>できるだけ丁寧に掬い取って書き連ねています。</p>
              </div>
              <div>
                <Button size="m" style="square" optionClassName='rounded border-base-black ml-auto mr-auto'>
                  <Link href="/creatives/" className="flex justify-center items-center py-2" scroll={false}>see more ...</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
