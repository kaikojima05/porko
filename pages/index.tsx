import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Image from "next/image";
import Body from "@/ui/base/body";
import Footer from "@/ui/base/footer";

export default function Home() {
    const backgroundRef = useOnScrollAnimation({ removeAnimation: false });
    const sectionMessageRef = useOnScrollAnimation();

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
                                <h2 className="writing-vertical">
                                    写真で想いを届けたい。
                                </h2>
                                <p className="writing-vertical text-[14px]">
                                    今、写ることを決めたあなたが未来のあなたの糧になる。
                                    <br />
                                    写真を残すことがどれほど大切なことか
                                    <br />
                                    写る瞬間は分からなくてもいい。
                                    <br />
                                    未来のあなたが写真を見返した時、
                                    <br />
                                    過去のあなたがたくさんの想いを届けてくれる。
                                    <br />
                                    写真で想いが届くなんて嘘みたいなホントの話。
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
            </Body>
        </>
    );
}
