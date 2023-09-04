import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import classNames from "classnames";
import Section from "@/ui/base/section";
import { Button } from '@/ui/base/button'
import FormInput from '@/ui/snippet/formInput'

type FormData = {
  name: string;
  company?: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!;

    const templateParams = {
      name: name,
      company: company,
      email: email,
      message: message,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicId);
    } catch (error) {
      console.error("エラーが出ました" + error)
    }
  }
  return (
    <>
      <Section isTopMargin={false}>
        <form onSubmit={onSubmit}>
          <div className={classNames(
            "[&>*]:mt-4",
            "first:[&>*]:mt-0",
          )}>
            <FormInput
              forName='name'
              type='text'
              placeholder='your name'
              register={register('name', { required: true })}
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <FormInput
              forName='company'
              type='text'
              placeholder='your company'
              register={register('company', { required: false })}
              onChange={(event) => setCompany(event.target.value)}
              value={company}
            />
            <FormInput
              forName='email'
              type='text'
              placeholder='your email address'
              register={register('email', { required: true })}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <FormInput
              forName='message'
              type='textarea'
              placeholder='please free message'
              register={register('message', { required: true })}
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </div>
          <div className="mt-8">
            <Button
              size="m"
              style="square"
              optionClassName={classNames(
                "ml-auto border-base-black rounded duration-300",
                "lg:hover:bg-base-black lg:hover:text-white"
              )}
            >
              <button type='submit'>
                send message
              </button>
            </Button>
          </div>
        </form>
      </Section>
    </>
  )
}
