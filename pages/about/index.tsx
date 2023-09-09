import { NextSeo } from "next-seo";
import { useState } from "react";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutPage from "@/ui/pages/about/section/main/index";

export default function About() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const Ref = useOnScrollAnimation();

  return (
    <>
      <NextSeo
        title="porko - about"
        openGraph={{
          url: "https://porko.jp/about",
          title: "porko - about",
        }}
      />
      <Body
        heading="about"
        src="/images/hero_about.webp"
        whats={
          <>
            <span className="opacity-0">わ</span>
            <span className="opacity-0">た</span>
            <span className="opacity-0">し</span>
            <span className="opacity-0">に</span>
            <span className="opacity-0">つ</span>
            <span className="opacity-0">い</span>
            <span className="opacity-0">て</span>
          </>
        }
      >
        <AboutPage ref={Ref} />
      </Body>
    </>
  );
}
