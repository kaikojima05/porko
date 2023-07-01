import WorksCard from "@/ui/base/worksCard/index";
import type { Works } from "@/ui/base/types/works";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Heading from '@/ui/base/heading'

export default function WorksList({ works }: { works: Works[] }) {
  return (
    <Article>
      <Section isTopMargin={false}>
        <Heading heading="all works" />
        <CategoryList works={works} />
      </Section>
      <Section isTopMargin={true}>
        <WorksCard works={works} isMap={true} isWorksList={true} />
      </Section>
    </Article>
  );
}
