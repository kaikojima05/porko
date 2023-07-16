import classNames from 'classnames'
import Icon from '@/ui/base/icons/index'

export default function CircleArrow() {
  return (
    <div className={classNames(
      'absolute border border-base-black rounded'
    )}>
      <Icon
        name="arrow-one-side"
        symbol={true}
        symbolViewBox="0 0 50 21"
        width="w-[3.125rem]"
        height="h-[1.3125rem]"
        className="relative"
      />
    </div>
  );
}
