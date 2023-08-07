import AllCreativesCard from "@/ui/base/allCreativesCard/index";
import type { Creatives } from "@/ui/base/types/creatives";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import { HeadingH2 } from '@/ui/base/heading'

export default function CreativesPage({ creatives }: { creatives: Creatives[] }) {
  return (
    <Article>
      <Section isTopMargin={true}>
        <HeadingH2>
          all creatives
        </HeadingH2>
      </Section>
      <Section isTopMargin={false}>
        <CategoryList creatives={creatives} />
        <AllCreativesCard creatives={creatives} />
      </Section>
    </Article>
  );
}
