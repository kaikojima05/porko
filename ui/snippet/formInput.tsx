import { useRef } from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn, FieldValues } from 'react-hook-form'

type FormInputProps = {
  labelName: string
  register: UseFormRegisterReturn
  forName: string
  type: string
  placeholder: string
}

export default function FormInput({
  labelName,
  register,
  forName,
  type,
  placeholder,
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
      'border border-base-black px-10 py-6 rounded',
    )}
      onClick={handleClickInputArea}
    >
      <div className='basis-1/5'>
        <label
          htmlFor={forName}
          className={classNames(
            "text-base border-b border-base-black pb-1 px-2",
          )}
        >
          {labelName}
        </label>
      </div>
      {type !== 'textarea' ? (
        <input
          id={forName}
          type={type}
          className={classNames(
            "w-full outline-none grow-[2] text-[0.875rem] bg-[url('/images/texture.webp')]",
          )}
          {...register}
          placeholder={placeholder}
          ref={inputRef}
        />
      ) : (
        <textarea
          id={forName}
          className={classNames(
            "py-2 mt-3 w-full outline-none resize-none bg-[url('/images/texture.webp')]",
          )}
          {...register}
          placeholder={placeholder}
          rows={15}
          ref={textareaRef}
        />
      )}
    </div>
  )
}
