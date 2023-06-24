import { useState, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import classNames from "classnames";
import { useOnscrollAnimations } from "@/ui/hooks/useOnScrollAnimations";
import Icon from "@/ui/base/icons";
import Link from "next/link";

type WorksCardProps = {
  works: Works[];
};

export default function WorksCard({ works }: WorksCardProps) {
  const [worksProps, setWorksProps] = useState();
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  works.map((_, index) => {
    worksRefs.current[index] = createRef<HTMLDivElement>();
  });

  const showElement = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on-scroll");
      }
    });
  };

  useOnscrollAnimations(worksRefs.current, showElement, { threshold: 0.1 });

  useEffect(() => {
    if (!worksRefs.current) {
      return;
    }

    works.forEach((work, index) => {
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
.e {padding-bottom:  75% !important;}
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
  }, [works]);

  return (
    <>
      <div
        id="worksCards"
        className={classNames("my-4 grid grid-cols-2 gap-3", "md:grid-cols-4")}
      >
        {works.slice(0, 4).map((work, index) => {
          return (
            <div
              key={work._id}
              ref={worksRefs.current[index]}
              className="before-scroll-repeat relative"
              style={{ transitionDelay: `${index * 0.4}s` }}
            ></div>
          );
        })}
      </div>
      {works.length >= 4 && (
        <p className={classNames("text-right")}>
          <Link href="/about/">more...</Link>
        </p>
      )}
    </>
  );
}
