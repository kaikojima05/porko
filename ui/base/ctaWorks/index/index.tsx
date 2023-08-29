import Link from 'next/link'
import { useState, useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Works } from "@/ui/base/types/works";
import classNames from "classnames";
import { HeadingH2 } from '@/ui/base/heading/index'
import { Button } from '@/ui/base/button/index'
import { CtaButton } from '@/ui/base/button/index'
import { CardStyle } from "@/ui/module/cardStyle/index";

type CtaWorksProps = {
  works: Works[];
};

export default function CtaWorks({
  works,
}: CtaWorksProps) {
  const worksRefs = useRef<RefObject<HTMLDivElement>[]>([]);

  const initialText = "latest 4 ...";
  const finalText = "see more ...";

  const [clickEvent, setClickEvent] = useState<boolean>(false)
  const [text, setText] = useState<string>(initialText);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const hasStartedRef = useRef(false);
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

  const handleCardViewEvent = (event: React.MouseEvent<HTMLElement>) => {
    if (!clickEvent) {
      event.preventDefault()
      setClickEvent(true)
    }
    const worksCardList = document.querySelectorAll('.worksCard')
    const worksBox = document.getElementById('worksBox')
    const worksContents = document.getElementById('worksContents')

    worksCardList.forEach((item, index) => {
      if (index !== 0) {
        item.classList.add('open')
      } else {
        item.classList.add('noMove')
      }
    })

    if (worksBox) worksBox.classList.add('move')
    if (worksContents) worksContents.classList.add('delete')

    setIsAnimating(true);
  }

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isAnimating && !isWriting) {
      if (text.length > 0) {
        if (!hasStartedRef.current) {
          hasStartedRef.current = true;
          setTimeout(() => {
            timerId = setInterval(() => {
              setText(text.slice(0, -1));
            }, 100);
          }, 1600);
        } else {
          timerId = setInterval(() => {
            setText(text.slice(0, -1));
          }, 100);
        }
      } else {
        setIsWriting(true);
      }
    } else if (isAnimating && isWriting) {
      if (currentIndex < finalText.length) {
        timerId = setInterval(() => {
          setText((t) => t + finalText[currentIndex]);
          setCurrentIndex((i) => i + 1);
        }, 100);
      } else {
        setIsAnimating(false);
      }
    }

    return () => clearInterval(timerId);
  }, [text, isAnimating, isWriting, currentIndex, finalText]);

  return (
    <>
      <div className={classNames(
        "w-full",
      )}>
        <div
          id="worksCards"
          className={classNames(
            "grid gap-x-4 grid-cols-2 relative w-full h-full",
            "lg:grid-cols-4",
            "lg:h-[19.375rem] lg:max-h-[19.375rem]",
            "xl:h-[20rem] xl:max-h-[20rem]",
          )}
        >
          {
            sortWorks
              .sort((a, b) => {
                if (a.appeal && !b.appeal) {
                  return -1;
                } else if (!a.appeal && b.appeal) {
                  return 1;
                }
                return 0;
              })
              .slice(0, 5)
              .map((work, index) => {
                return (
                  <div
                    id={`${index}`}
                    ref={worksRefs.current[index]}
                    key={work._id}
                    className={classNames(
                      `${index !== 0 ? "absolute w-0" : "static"}`,
                      "top-0 block worksCard"
                    )}
                    style={{
                      zIndex: `${10 - index}`,
                      opacity: index !== 0 ? '0' : '1'
                    }}
                  ></div>
                );
              })}

          {/*1024px 未満*/}
          <div className={classNames(
            'w-full',
            'lg:hidden'
          )}>
            <div>
              <HeadingH2 headingClassName=
                "pb-2 border-b border-base-black"
              >
                Works
              </HeadingH2>
            </div>
            <div>
              <p className="mt-4">{worksIntroduction}</p>
            </div>
            <div className='mt-4'>
              <Button
                size="x-full"
                style="square"
                optionClassName="border-base-black rounded-md"
              >
                <Link
                  href="works/"
                  className='flex justify-center items-center py-2'
                  scroll={false}
                >
                  {finalText}
                </Link>
              </Button>
            </div>
          </div>

          {/*1024px 以上*/}
          <div id="worksBox" className={classNames(
            "text-center absolute right-0 top-0 w-2/3 h-full hidden",
            "lg:block"
          )}>
            <div id="worksContents" className={classNames(
              "md:overflow-hidden md:h-[40%]"
            )}>
              <HeadingH2 headingClassName='border-b border-base-black pb-3 text-right'>
                Works
              </HeadingH2>
              <p className="mt-3 text-right">
                {worksIntroduction}
              </p>
            </div>
            <div className="text-right mt-5">
              <CtaButton
                ctaLink="/works"
                onClick={handleCardViewEvent}
                buttonText={text}
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
