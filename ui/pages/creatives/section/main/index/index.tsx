import AllCreativesCard from "@/ui/base/allCreativesCard/index";
import type { Creatives } from "@/ui/base/types/creatives";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";
import CategoryList from '@/ui/base/categoryList'
import { HeadingH2 } from '@/ui/base/heading'

export default function CreativesPage({ creatives }: { creatives: Creatives[] }) {
  return (
    <Article>
      <Section isTopMargin={false}>
        <HeadingH2>
          all creatives
        </HeadingH2>
        <CategoryList creatives={creatives} />
      </Section>
      <Section isTopMargin={true}>
        <AllCreativesCard creatives={creatives} />
      </Section>
    </Article>
  );
}
