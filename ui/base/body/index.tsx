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
      <main
        className={classNames(
          "w-full",
          "pt-6 px-[0.9375rem]",
          "lg:min-w-[58.125rem] lg:max-w-[58.125rem] lg:px-0 lg:mx-auto",
          "xl:min-w-[62.5rem] xl:max-w-[62.5rem]",
          "overflow-x-hidden",
          `${bodyClassName}`
        )}
      >
        {children || <p className="text-center text-[14px]">待ってます...</p>}
      </main>
      {router.pathname !== "/about" && <Footer />}
    </>
  );
}
