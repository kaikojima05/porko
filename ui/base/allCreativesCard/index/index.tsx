import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Creatives } from "@/ui/base/types/creatives";
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
            newStyle.textContent = `
.e {padding-bottom:  75% !important; border-radius: 4px;}
.body {box-shadow: none !important;}
.__wc {border: none; background-color: transparent;}
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
          id="creativesCards"
          className={classNames(
            "grid gap-x-4 grid-cols-3 relative w-full h-full",
            "lg:grid-cols-4",
            "lg:h-[19.375rem] lg:max-h-[19.375rem]",
            "xl:h-[20rem] xl:max-h-[20rem]",
          )}
        >
          {sortWorks.map((work, index) => {
            return <div key={work._id} ref={creativesRefs.current[index]}></div>;
          })}
        </div>
      </div >
    </>
  );
}

