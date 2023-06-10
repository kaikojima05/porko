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
  return (
    <>
      <Header />
      {isBackground ? backgroundImage : undefined}
      <main
        className={classNames(
          "mt-36 mx-4",
          "md:mx-[17%]",
          "xl:mx-[22%]",
          `${bodyClassName}`
        )}
      >
        {children || <p className="text-center text-[14px]">待ってます...</p>}
      </main>
      <Footer />
    </>
  );
}
