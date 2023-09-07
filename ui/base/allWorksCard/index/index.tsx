import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import { CardStyle } from '@/ui/module/cardStyle/index'
import classNames from "classnames";

type AllWorksCardProps = {
  works: Works[];
};

export default function AllWorksCard({
  works,
}: AllWorksCardProps) {
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
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
          id="worksCards"
          className={classNames(
            "grid gap-x-4 grid-cols-2 w-full h-full",
            "lg:grid-cols-3 lg:gap-y-12",
          )}
        >
          {sortWorks.map((work, index) => {
            return <div key={work._id} ref={worksRefs.current[index]}></div>;
          })}
        </div>
      </div >
    </>
  );
}

