import { useRouter } from "next/router";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import classNames from "classnames";
import Section from "@/ui/base/section";
import FormInput from "@/ui/snippet/formInput";

type FormData = {
  name: string;
  company?: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!;

    const templateParams = {
      name: data.name,
      company: data.company,
      email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicId);
      router.push("/contact/success");
    } catch (error) {
      console.error("エラーが出ました" + error);
    }

    setIsLoading(false);
  };
  return (
    <>
      <Section isTopMargin={false}>
        <div>
          <h3
            className={classNames(
              "text-[0.75rem] text-center",
              "lg:text-[0.875rem]"
            )}
          >
            お仕事に関するご相談や、その他ご不明点など
            <br className="md:hidden" />
            下記フォームにご入力の上、送信してください。
            <br />
            ご連絡お待ちしております。
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames(
            "mt-[1.875rem]",
            "md:mt-[2.8125rem]",
            "lg:mt-[3.75rem]"
          )}
        >
          <div className={classNames("[&>*]:mt-4", "first:[&>*]:mt-0")}>
            <FormInput
              forName="name"
              type="text"
              placeholder="your name"
              register={register("name", {
                required: "! 氏名を入力してください",
              })}
            />
            <p className="ml-4 text-primary">{errors.name?.message}</p>
            <FormInput
              forName="company"
              type="text"
              placeholder="your company"
              register={register("company", {
                required:
                  "! 企業名を入力してください (個人の方は「個人」と入力してください)",
              })}
            />
            <p className="ml-4 text-primary">{errors.company?.message}</p>
            <FormInput
              forName="email"
              type="text"
              placeholder="your email address"
              register={register("email", {
                required: "! メールアドレスを入力してください",
              })}
            />
            <p className="ml-4 text-primary">{errors.email?.message}</p>
            <FormInput
              forName="message"
              type="textarea"
              placeholder="please free message"
              register={register("message", {
                required: "! お問い合わせ内容を入力してください",
              })}
            />
            <p className="ml-4 text-primary">{errors.message?.message}</p>
          </div>
          <div
            className={classNames(
              "mt-[1.875rem]",
              "md:mt-[2.8125rem]",
              "lg:mt-[3.75rem]"
            )}
          >
            <div className="flex justify-end">
              <div
                className={classNames(
                  "inline-block rounded-full border border-base-black duration-300",
                  "lg:hover:bg-primary lg:hover:text-white lg:hover:border-primary"
                )}
              >
                <button
                  className={classNames(
                    "px-4 py-1 ring-0",
                    "md:px-6 md:py-2",
                    "lg:px-8 lg:py-3"
                  )}
                  type="submit"
                  disabled={isLoading}
                >
                  send message
                </button>
              </div>
            </div>
          </div>
        </form>
      </Section>
    </>
  );
}
