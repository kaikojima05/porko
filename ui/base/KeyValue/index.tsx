import classNames from "classnames"

type KeyValueProps = {
  guide?: string;
  value?: string;
  keyClassName?: string;
  valueClassName?: string;
}

export default function KeyValue({
  guide,
  value,
  keyClassName = '',
  valueClassName = ''
}: KeyValueProps) {
  return (
    <div className="flex mt-4">
      <div className={classNames(
        'w-[7rem] shrink',
        'lg:w-[10rem]'
      )}>
        <span className={classNames(
          "font-bold text-[0.875rem]",
          "lg:text-base",
          `${keyClassName}`
        )}>
          {guide}
        </span>
      </div>
      <div className={classNames(
        `${valueClassName}`
      )}>
        <p className={classNames(
          "text-[0.875rem]",
          "lg:text-base"
        )}>
          {value}
        </p>
      </div>
    </div>
  );
}
