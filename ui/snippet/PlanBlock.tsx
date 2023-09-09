import { useOnScrollAnimation } from '@/ui/hooks/useOnScrollAnimation'
import classNames from "classnames";
import Section from "@/ui/base/section";
import { HeadingH3 } from "@/ui/base/heading";
import KeyValue from "@/ui/base/KeyValue";
import Icon from "@/ui/base/icons";

type PlanBlockProps = {
  heading: string
  guide?: string
  value?: string
  children: React.ReactNode
}

export default function PlanBlock({
  heading,
  guide,
  value,
  children
}: PlanBlockProps) {
  const scrollRef = useOnScrollAnimation()

  return (
    <Section isTopMargin={false}>
      <div
        className='before-scroll-once'
        ref={scrollRef}
      >
        <div className={classNames(
          'flex justify-start',
        )}>
          <div className={classNames(
            'flex border-b border-dashed border-base-black pb-1',
            'md:pb-2',
          )}>
            <HeadingH3
              headingClassName='flex justify-center items-center whitespace-nowrap'
            >
              {heading}
            </HeadingH3>
            <div className={classNames(
              'ml-2 w-8 h-8 border rounded-[100%] flex justify-center items-center bg-accent',
              'md:ml-3 md:w-10 md:h-10',
              'md:ml-4 lg:w-10 lg:h-10',
            )}>
              <Icon
                name="pen"
                className={classNames(
                  'm-[6px] text-white',
                  'md:m-2'
                )}
              />
            </div>
          </div>
        </div>
        {guide && (
          <KeyValue guide={guide} value={value} />
        )}
        <div className={classNames(
          'mt-4',
        )}>
          {children}
        </div>
      </div>
    </Section>
  )
}
