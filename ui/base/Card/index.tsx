import { useMemo, useEffect, useRef, createRef, RefObject } from "react";
import type { Creatives } from "@/ui/base/types/creatives";
import type { Works } from '@/ui/base/types/works'
import classNames from "classnames";
import { useOnscrollAnimations } from "@/ui/hooks/useOnScrollAnimations";
import PostIt from "@/ui/base/postIt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
  creatives?: Creatives[]
  works?: Works[]
  isMap?: boolean;
  isSlice?: boolean;
  isCreativesList?: boolean;
};

export default function Card({
  creatives,
  works,
  isMap = false,
  isSlice = false,
  isCreativesList = false,
}: CardProps) {
  const card = useMemo(() => {
    if (works) {
      return works;
    } else if (creatives) {
      return creatives;
    } else {
      return [];
    }
  }, [works, creatives])

  const cardRefs = useRef<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    card.forEach((_, index) => {
      cardRefs.current[index] = createRef<HTMLDivElement>();
    });
  }, [card])

  const showElement = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isSlice) {
        entry.target.classList.add("on-scroll");
      }
    });
  };

  const sortCards = useMemo(() => {
    return [...card].sort((a, b) => {
      const recent = new Date(a.postDate).getTime();
      const ago = new Date(b.postDate).getTime();

      return ago - recent;
    });
  }, [card]);

  useOnscrollAnimations(cardRefs.current, showElement, { threshold: 0.1 });

  useEffect(() => {
    if (!cardRefs.current) {
      return;
    }

    sortCards.forEach((creative, index) => {
      const fragment = document
        .createRange()
        .createContextualFragment(creative.RefLink.html);

      const currentElement = cardRefs.current[index]?.current;
      if (!currentElement) {
        return;
      }

      while (currentElement.firstChild) {
        currentElement.removeChild(currentElement.firstChild);
      }

      cardRefs.current[index]?.current?.appendChild(fragment);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const elements = cardRefs.current[index]?.current?.querySelectorAll(
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
  }, [sortCards]);

  return (
    <>
      <div
        id="cardCards"
        className={classNames("my-6 grid grid-cols-2 gap-x-4", "md:grid-cols-4", `${(isCreativesList && isMap) && 'lg:grid-cols-5 gap-y-10'}`)}
      >
        {isMap &&
          sortCards.map((creative, index) => {
            return <div key={creative._id} ref={cardRefs.current[index]}></div>;
          })}
        {isSlice &&
          sortCards
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
                  ref={cardRefs.current[index]}
                  className="before-scroll-repeat relative"
                  style={{ transitionDelay: `${index * 0.4}s` }}
                ></div>
              );
            })}
      </div>
      {isSlice && card.length >= 4 && (
        <PostIt
          title="more ..."
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          isLink={true}
          href="about/cardList/"
        />
      )}
    </>
  );
}
