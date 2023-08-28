import Body from "@/ui/base/body";
import ContactPage from '@/ui/pages/contact/section/main/index'

export default function Contact() {
  return (
    <>
      <Body
        heading="contact"
        src="/images/hero_contact.webp"
        whats="お問い合わせ"
      >
        <ContactPage />
      </Body>
    </>
  );
}
