import { useRef } from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn, FieldValues } from 'react-hook-form'

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
              "py-2 mt-3 resize-none",
            )}
            {...register}
            placeholder={placeholder}
            rows={15}
            ref={textareaRef}
            onChange={onChange}
            value={value}
          />
        )}
      </div>
    </div >
  )
}
