import classNames from 'classnames'
import { useState } from "react";
import Image from "next/image";
import { useOnScrollAnimation } from "@/ui/hooks/useOnScrollAnimation";
import Body from "@/ui/base/body";
import AboutMarie from "@/ui/pages/about/section/main/marie/index";
import Button from '@/ui/base/button'

export default function About() {
  const [isProfile, setIsProfile] = useState<boolean>(true);
  const [toggleProfile, setToggleProfile] = useState<"Marie" | "Kai">("Marie");
  const backgroundRef = useOnScrollAnimation({ removeAnimation: false });
  const contentRef = useOnScrollAnimation();

  const handleToggleProfile = () => {
    setIsProfile(!isProfile);
  };

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
        <div className={classNames('flex gap-4 justify-evenly items-center', 'md:justify-center')}>
					<Button buttonText='Marie Kojima' />
					<Button buttonText="Kai Kojima" />
	</div>
        <AboutMarie ref={contentRef} nowProfile={toggleProfile}/>
      </Body>
    </>
  );
}
