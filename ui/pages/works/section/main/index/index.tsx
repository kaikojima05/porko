import AllWorksCard from "@/ui/base/allWorksCard/index";
import type { Works } from "@/ui/base/types/works";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import { HeadingH2 } from '@/ui/base/heading'

export default function WorksPage({ works }: { works: Works[] }) {
  return (
    <Article>
      <Section isTopMargin={false}>
        <HeadingH2>
          all works
        </HeadingH2>
        <CategoryList works={works} />
      </Section>
      <Section isTopMargin={true}>
        <AllWorksCard works={works} />
      </Section>
    </Article>
  );
}
