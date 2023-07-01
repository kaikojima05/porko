import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Image from "next/image";
import Body from "@/ui/base/body";
import NewsPage from '@/ui/pages/news/section/main/index'

export default function News() {
  const backgroundRef = useOnScrollAnimation();

  return (
    <>
      <Body
        isBackground={true}
        backgroundImage={
          <div
            ref={backgroundRef}
            className="before-scroll-once relative h-[600px]"
          >
            <Image
              alt=""
              src="/images/hero1.jpg"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        }
        bodyClassName="h-[1800px]"
      >
      </Body>
    </>
  );
}
