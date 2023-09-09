import classNames from "classnames";
import Body from "@/ui/base/body";
import Section from "@/ui/base/section";

export default function Contact() {
  return (
    <>
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
        <Section isTopMargin={false}>
          <div
            className={classNames(
              "flex justify-center items-start h-[15vh]",
              "md:h-[20vh]",
              "lg:h-[25vh]",
              "xl:h-[30vh]"
            )}
          >
            <div className="text-center">
              <p>
                お問い合わせが正常に送信されました
                <br />
                内容を確認次第、改めてご連絡いたします。
              </p>
            </div>
          </div>
        </Section>
      </Body>
    </>
  );
}
