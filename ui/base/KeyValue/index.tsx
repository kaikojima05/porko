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
        'w-[5rem]',
        'lg:w-[10rem]'
      )}>
        <span className={classNames(
          "font-bold text-[1.15rem]",
          `${keyClassName}`
        )}>
          {guide}
        </span>
      </div>
      <div className={classNames(
        `${valueClassName}`
      )}>
        <p className="text-[1.15rem]">{value}</p>
      </div>
    </div>
  );
}
