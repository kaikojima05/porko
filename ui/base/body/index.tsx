import { useRouter } from "next/router";
import classNames from "classnames";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";

type BodyProps = {
  children?: React.ReactNode;
  backgroundImage?: React.ReactNode;
  isBackground?: boolean;
  bodyClassName?: string;
};

export default function Body({
  children,
  backgroundImage,
  isBackground = false,
  bodyClassName,
}: BodyProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      {isBackground ? backgroundImage : undefined}
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
