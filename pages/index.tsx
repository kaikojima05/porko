import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Image from "next/image";
import Body from "@/ui/base/body";

export default function Home() {
  const sectionMessageRef = useOnScrollAnimation();

  return (
    <>
      <Body
        bodyClassName="h-[1800px]"
      >
        <section className="">
          <article>
            <div
              className="flex justify-center items-start flex-row-reverse gap-8 before-scroll-repeat"
              ref={sectionMessageRef}
            >
              <div className="h-[300px] overflow-y-hidden">
                <Image
                  src="/images/LINE_ALBUM_230609.jpg"
                  width={300}
                  height={300}
                  alt=""
                  className="w-[300px] overflow-y-hidden"
                />
              </div>
              <div className="flex flex-row-reverse gap-6">
                <h2 className="writing-vertical !text-[1.25rem]">声を掬い、創って世界へ。</h2>
                <p className="leading-6 writing-vertical text-[14px]">
                  こんな想いがある
                  <br />
                  あんな景色が見たい
                  <br />
                  あなたの〈声〉は、届けられていますか？
                  <br />
                  形がないのなら
                  <br />
                  色が塗られていないのなら
                  <br />
                  おいでおいでと差し出された手を
                  <br />
                  そっとにぎって
                </p>
                <p className="leading-6 writing-vertical text-[14px]">
                  ここはちいさな
                  <br />
                  秘密基地のような場所だから
                  <br />
                  まずは、内緒話でも。
                </p>
              </div>
            </div>
          </article>
        </section>
      </Body>
    </>
  );
}
