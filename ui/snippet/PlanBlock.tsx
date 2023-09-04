import classNames from "classnames";
import Section from "@/ui/base/section";
import { HeadingH2 } from "@/ui/base/heading";
import KeyValue from "@/ui/base/KeyValue";

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
  return (
    <Section isTopMargin={false}>
      <div className="flex items-center lg:gap-4">
        <HeadingH2
          headingClassName='whitespace-nowrap'
          outsideClassName='lg:!px-0'
        >{heading}</HeadingH2>
        <div className="w-full h-[1px] bg-base-black" />
      </div>
      {guide && (
        <KeyValue guide={guide} value={value} />
      )}
      <div className={classNames(
        'mt-4'
      )}>
        {children}
      </div>
    </Section>
  )
}
