import WorksCard from "@/ui/base/worksCard/index";
import type { Works } from "@/ui/base/types/works";
import Article from "@/ui/base/article";
import Section from "@/ui/base/section";

export default function WorksList({ works }: { works: Works[] }) {
  return (
    <Article>
      <Section>
        <WorksCard works={works} isMap={true} />
      </Section>
    </Article>
  );
}
