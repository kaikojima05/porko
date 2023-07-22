import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
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
            newStyle.textContent = `
.e {padding-bottom:  75% !important; border-radius: 4px;}
.body {box-shadow: none !important;}
.__wc {border: none; background-color: transparent;}
.wc {border-bottom-right-radius: 20%;}
`;
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
        "w-full my-6",
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

