import { useRouter } from "next/router";
import classNames from "classnames";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";
import Image from 'next/image'
import { useOnScrollAnimation } from '@/ui/hooks/useOnScrollAnimation'

type BodyProps = {
  children?: React.ReactNode;
  bodyClassName?: string;
};

export default function Body({
  children,
  bodyClassName,
}: BodyProps) {
  const router = useRouter();
  const backgroundRef = useOnScrollAnimation();

  return (
    <>
      <Header />
      <div ref={backgroundRef} className={classNames(
        "before-scroll-once h-[400px]",
      )}>
        <Image
          alt=""
          src="/images/hero1.jpg"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
      <div className="flex justify-center overflow-hidden">
        <main
          className={classNames(
            "w-full mx-0",
            "pt-[5.625rem] px-[0.9375rem]",
            "lg:min-w-[58.125rem] lg:max-w-[58.125rem]",
            "xl:min-w-[62.5rem] xl:max-w-[62.5rem]",
            `${bodyClassName}`
          )}
        >
          {children || <p className="text-center text-[14px]">待ってます...</p>}
        </main>
        {router.pathname !== "/about" && <Footer />}
      </div>
    </>
  );
}
