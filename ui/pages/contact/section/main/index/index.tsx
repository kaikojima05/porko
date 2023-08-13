import classNames from "classnames";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import FormInput from '@/ui/snippet/formInput'
import { Button } from '@/ui/base/button'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Article>
      <Section isTopMargin={true}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={classNames(
            "[&>*]:mt-4",
            "first:[&>*]:mt-0",
          )}>
            <FormInput
              labelName="name"
              register={register("name", { required: true })}
              forName="name"
              type="text"
              placeholder="your name"
            />
            <FormInput
              labelName="company"
              register={register("company", { required: false })}
              forName="company"
              type="text"
              placeholder="your company"
            />
            <FormInput
              labelName="email"
              register={register("email", { required: true })}
              forName="email"
              type="email"
              placeholder="porko@example.com"
            />
            <FormInput
              labelName="message"
              register={register("message", { required: true })}
              forName="message"
              type="textarea"
              placeholder="please free message ..."
            />
          </div>
          <div className="mt-8">
            <Button
              size="m"
              style="square"
              optionClassName={classNames(
                "ml-auto border-base-black rounded duration-300",
                "hover:bg-base-black hover:text-white"
              )}
            >
              <button type="submit">
                send message
              </button>
            </Button>
          </div>
        </form>
      </Section>
    </Article>
  )
}
