import Image from "next/image";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutMarie from "@/ui/pages/about/section/main/marie/index";

export default function About() {
    const backgroundRef = useOnScrollAnimation({ removeAnimation: false });
    const contentRef = useOnScrollAnimation();

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
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                }
                bodyClassName="h-[1800px]"
            >
                <AboutMarie ref={contentRef} />
            </Body>
        </>
    );
}
