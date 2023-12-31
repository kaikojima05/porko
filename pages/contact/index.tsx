import { NextSeo } from "next-seo";
import Body from "@/ui/base/body";
import ContactPage from "@/ui/pages/contact/section/main/index";

export default function Contact() {
  return (
    <>
      <NextSeo
        title="porko - contact"
        openGraph={{
          url: "https://porko.jp/contact",
          title: "porko - contact",
        }}
      />
      <Body
        heading="contact"
        src="/images/hero_contact.webp"
        whats={
          <>
            <span className="opacity-0">お</span>
            <span className="opacity-0">問</span>
            <span className="opacity-0">い</span>
            <span className="opacity-0">合</span>
            <span className="opacity-0">わ</span>
            <span className="opacity-0">せ</span>
          </>
        }
      >
        <ContactPage />
      </Body>
    </>
  );
}
