import { useState, useMemo, useEffect, useRef, createRef, RefObject } from "react";
import { Creatives } from "@/ui/base/types/creatives";
import classNames from "classnames";
import Link from 'next/link'
import CircleArrow from '@/ui/base/circleArrow/index'

type CtaCreativesProps = {
  creatives: Creatives[]
};

export default function CtaCreatives({
  creatives,
}: CtaCreativesProps) {
  const creativesRefs = useRef<RefObject<HTMLDivElement>[]>([]);
  const initialText = "最新の4つ";
  const finalText = "see more ...";
  const [clickEvent, setClickEvent] = useState<boolean>(false)
  const [text, setText] = useState<string>(initialText);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const hasStartedRef = useRef(false);
  const creativesIntroduction = "私的な想いを綴ったエッセイ等、お仕事外の自主制作コンテンツ"

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
  }, [sortCreatives]);

  const handleCardViewEvent = (event: React.MouseEvent<HTMLElement>) => {
    if (!clickEvent) {
      event.preventDefault()
      setClickEvent(true)
    }
    console.log(clickEvent)
    const creativesCardList = document.querySelectorAll('.creativesCard')
    const creativesBox = document.getElementById('creativesBox')
    const creativesContents = document.getElementById('creativesContents')

    creativesCardList.forEach((item, index) => {
      if (index !== 0) {
        item.classList.add('open')
      } else {
        item.classList.add('noMove')
      }
    })

    if (creativesBox) creativesBox.classList.add('move')
    if (creativesContents) creativesContents.classList.add('delete')

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
            }, 120);
          }, 1600);
        } else {
          timerId = setInterval(() => {
            setText(text.slice(0, -1));
          }, 120);
        }
      } else {
        setIsWriting(true);
      }
    } else if (isAnimating && isWriting) {
      if (currentIndex < finalText.length) {
        timerId = setInterval(() => {
          setText((t) => t + finalText[currentIndex]);
          setCurrentIndex((i) => i + 1);
        }, 120);
      } else {
        setIsAnimating(false);
      }
    }

    return () => clearInterval(timerId);
  }, [text, isAnimating, isWriting, currentIndex, finalText]);


  return (
    <>
      <div className={classNames(
        "w-full my-6",
      )}>
        <div
          id="creativesCard"
          className={classNames(
            "grid gap-x-4 grid-cols-3 relative w-full h-full",
            "lg:grid-cols-4",
            "lg:h-[19.375rem] lg:max-h-[19.375rem]",
            "xl:h-[20rem] xl:max-h-[20rem]",
          )}
        >
          {
            sortCreatives
              .sort((a, b) => {
                if (a.appeal && !b.appeal) {
                  return -1;
                } else if (!a.appeal && b.appeal) {
                  return 1;
                }
                return 0;
              })
              .slice(0, 5)
              .map((creative, index) => {
                return (
                  <div
                    id={`${index}`}
                    ref={creativesRefs.current[index]}
                    key={creative._id}
                    className={classNames(
                      `${index !== 0 ? "absolute w-0" : "static"}`,
                      "top-0 block creativesCard"
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
            'w-1/2',
            'lg:hidden'
          )}>
            <div></div>
          </div>

          {/*1024px 以上*/}
          <div id="creativesBox" className={classNames(
            "text-center absolute right-0 top-0 w-2/3 h-full hidden",
            "lg:block"
          )}>
            <div id="creativesContents" className={classNames(
              "md:overflow-hidden md:h-[40%]"
            )}>
              <h2 className="border-b border-black pb-3 text-right">Creatives</h2>
              <br />
              <p className="mt-3 text-right">{creativesIntroduction}</p>
            </div>
            <div
              className="mt-5 flex justify-end items-center"
            >
              <CircleArrow />
              <Link href="/about/allcreatives" onClick={handleCardViewEvent} className="px-6 py-2 border rounded-full border-black">
                {text}
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
