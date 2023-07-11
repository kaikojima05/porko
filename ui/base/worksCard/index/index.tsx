import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import classNames from "classnames";
import { useOnscrollAnimations } from "@/ui/hooks/useOnScrollAnimations";
import PostIt from "@/ui/base/postIt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type WorksCardProps = {
  works: Works[];
  isMap?: boolean;
  isSlice?: boolean;
  isWorksList?: boolean;
};

export default function WorksCard({
  works,
  isMap = false,
  isSlice = false,
  isWorksList = false,
}: WorksCardProps) {
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  works.map((_, index) => {
    worksRefs.current[index] = createRef<HTMLDivElement>();
  });

  const showElement = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isSlice) {
        entry.target.classList.add("on-scroll");
      }
    });
  };

  const sortWorks = useMemo(() => {
    return [...works].sort((a, b) => {
      const recent = new Date(a.postDate).getTime();
      const ago = new Date(b.postDate).getTime();

      return ago - recent;
    });
  }, [works]);

  useOnscrollAnimations(worksRefs.current, showElement, { threshold: 0.1 });

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
.e {padding-bottom:  75% !important;}
.__wc {border-radius: 4px;}
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
      <div
        id="worksCards"
        className={classNames("my-6 grid grid-cols-2 gap-x-4", "md:grid-cols-4", `${(isWorksList && isMap) && 'lg:grid-cols-5 gap-y-10'}`)}
      >
        {isMap &&
          sortWorks.map((work, index) => {
            return <div key={work._id} ref={worksRefs.current[index]}></div>;
          })}
        {isSlice &&
          sortWorks
            .sort((a, b) => {
              if (a.appeal && !b.appeal) {
                return -1;
              } else if (!a.appeal && b.appeal) {
                return 1;
              }
              return 0;
            })
            .slice(0, 4)
            .map((work, index) => {
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
      {isSlice && works.length >= 4 && (
        <PostIt
          title="more ..."
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          isLink={true}
          href="about/worksList/"
        />
      )}
    </>
  );
}
