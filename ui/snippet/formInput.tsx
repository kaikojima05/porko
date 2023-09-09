import { useRef } from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'

type FormInputProps = {
  register: UseFormRegisterReturn
  forName: string
  type: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
}

export default function FormInput({
  register,
  forName,
  type,
  placeholder,
  onChange,
  value,
}: FormInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleClickInputArea = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    } else if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  return (
    <div className={classNames(
      `${type !== 'textarea' ? 'flex' : ''}`,
      'border border-base-black px-3 py-2 rounded',
      'md:px-7 md:py-4',
      'lg:px-10 lg:py-6'
    )}
      onClick={handleClickInputArea}
    >
      <div className='basis-1/5'>
        <label
          htmlFor={forName}
          className={classNames(
            "text-[0.875rem] mr-3",
            "md:mr-0",
            "lg:px-2 lg:border-b lg:border-dashed lg:border-base-black lg:pb-1 lg:px-1",
          )}
        >
          {forName}
        </label>
      </div>
      <div className={classNames(
        "w-full grow-[2] text-[0.875rem] ",
        "[&>*]:w-full [&>*]:outline-none [&>*]:bg-[url('/images/texture.webp')]"
      )}>
        {type !== 'textarea' ? (
          <input
            id={forName}
            type={type}
            {...register}
            placeholder={placeholder}
            ref={inputRef}
            name={forName}
            onChange={onChange}
            value={value}
          />
        ) : (
          <textarea
            id={forName}
            className={classNames(
              "py-2 px-1 mt-0 resize-none",
              "lg:mt-3 lg:p-2"
            )}
            {...register}
            placeholder={placeholder}
            rows={10}
            ref={textareaRef}
            onChange={onChange}
            value={value}
          />
        )}
      </div>
    </div >
  )
}
