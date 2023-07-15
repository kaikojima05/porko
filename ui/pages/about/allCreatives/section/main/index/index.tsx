import AllCreativesCard from "@/ui/base/allCreativesCard/index";
import type { Creatives } from "@/ui/base/types/creatives";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import Heading from '@/ui/base/heading'

export default function AllCreativesPage({ creatives }: { creatives: Creatives[] }) {
  return (
    <Article>
      <Section isTopMargin={false}>
        <Heading heading="all creatives" />
        <CategoryList creatives={creatives} />
      </Section>
      <Section isTopMargin={true}>
        <AllCreativesCard creatives={creatives} />
      </Section>
    </Article>
  );
}
