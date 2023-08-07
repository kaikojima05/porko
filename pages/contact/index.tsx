import Body from "@/ui/base/body";
import ContactPage from '@/ui/pages/contact/section/main/index'
import { HeadingH2 } from "@/ui/base/heading";

export default function Contact() {
  return (
    <>
      <Body
        bodyClassName="z-0"
      >
        <HeadingH2>Contact</HeadingH2>
        <ContactPage />
      </Body>
    </>
  );
}
