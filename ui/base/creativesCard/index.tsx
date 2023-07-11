import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Creatives } from "@/ui/base/types/creatives";
import classNames from "classnames";
import { useOnscrollAnimations } from "@/ui/hooks/useOnScrollAnimations";
import PostIt from "@/ui/base/postIt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type CreativesCardProps = {
  creatives: Creatives[]
  isMap?: boolean;
  isSlice?: boolean;
  isCreativesList?: boolean;
};

export default function CreativesCard({
  creatives,
  isMap = false,
  isSlice = false,
  isCreativesList = false,
}: CreativesCardProps) {
  const creativesRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  creatives.map((_, index) => {
    creativesRefs.current[index] = createRef<HTMLDivElement>();
  });

  const showElement = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isSlice) {
        entry.target.classList.add("on-scroll");
      }
    });
  };

  const sortCreatives = useMemo(() => {
    return [...creatives].sort((a, b) => {
      const recent = new Date(a.postDate).getTime();
      const ago = new Date(b.postDate).getTime();

      return ago - recent;
    });
  }, [creatives]);

  useOnscrollAnimations(creativesRefs.current, showElement, { threshold: 0.1 });

  useEffect(() => {
    if (!creativesRefs.current) {
      return;
    }

    sortCreatives.forEach((creative, index) => {
      const fragment = document
        .createRange()
        .createContextualFragment(creative.RefLink.html);

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
  }, [sortCreatives]);

  return (
    <>
      <div
        id="creativesCards"
        className={classNames("my-6 grid grid-cols-2 gap-x-4", "md:grid-cols-4", `${(isCreativesList && isMap) && 'lg:grid-cols-5 gap-y-10'}`)}
      >
        {isMap &&
          sortCreatives.map((creative, index) => {
            return <div key={creative._id} ref={creativesRefs.current[index]}></div>;
          })}
        {isSlice &&
          sortCreatives
            .sort((a, b) => {
              if (a.appeal && !b.appeal) {
                return -1;
              } else if (!a.appeal && b.appeal) {
                return 1;
              }
              return 0;
            })
            .slice(0, 4)
            .map((creative, index) => {
              return (
                <div
                  key={creative._id}
                  ref={creativesRefs.current[index]}
                  className="before-scroll-repeat relative"
                  style={{ transitionDelay: `${index * 0.4}s` }}
                ></div>
              );
            })}
      </div>
      {isSlice && creatives.length >= 4 && (
        <PostIt
          title="more ..."
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          isLink={true}
          href="about/creativesList/"
        />
      )}
    </>
  );
}
