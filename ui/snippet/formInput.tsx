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
  return (
    <div className={classNames(
      `${type !== 'textarea' ? 'flex' : ''}`,
      'border border-base-black px-7 py-5 rounded',
    )}>
      <label
        htmlFor={forName}
        className={classNames(
          "basis-1/5",
        )}
      >
        {labelName}
      </label>
      {type !== 'textarea' ? (
        <input
          id={forName}
          type={type}
          className={classNames(
            "w-full outline-none grow-[2]",
          )}
          {...register}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={forName}
          className={classNames(
            "mt-3 w-full outline-none grow-[2] resize-none",
          )}
          {...register}
          placeholder={placeholder}
          rows={15}
        />
      )}
    </div>
  )
}
