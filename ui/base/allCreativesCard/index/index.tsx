import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Creatives } from "@/ui/base/types/creatives";
import { CardStyle } from '@/ui/module/cardStyle/index'
import classNames from "classnames";

type AllCreativesCardProps = {
  creatives: Creatives[];
};

export default function AllCreativesCard({
  creatives,
}: AllCreativesCardProps) {
  const creativesRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  creatives.map((_, index) => {
    creativesRefs.current[index] = createRef<HTMLDivElement>();
  });

  const sortWorks = useMemo(() => {
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

    sortWorks.forEach((work, index) => {
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
            newStyle.textContent = CardStyle()
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
        "w-full my-[3.75rem]",
      )}>
        <div
          id="creativesCards"
          className={classNames(
            "grid gap-x-4 grid-cols-2 w-full h-full",
            "lg:grid-cols-3 lg:gap-y-12",
          )}
        >
          {sortWorks.map((creative, index) => {
            return <div key={creative._id} ref={creativesRefs.current[index]}></div>;
          })}
        </div>
      </div >
    </>
  );
}

