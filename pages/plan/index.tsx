import { NextSeo } from "next-seo";
import Body from "@/ui/base/body";
import PlanPage from "@/ui/pages/plan/section/main/index";

type PlanProps = {};

export default function Plan() {
  return (
    <>
      <NextSeo
        title="porko - plan"
        openGraph={{
          url: "https://porko.jp/plan",
          title: "porko - plan",
        }}
      />
      <Body
        heading="plan"
        src="/images/hero_plan.webp"
        whats={
          <>
            <span className="opacity-0">制</span>
            <span className="opacity-0">作</span>
            <span className="opacity-0">プ</span>
            <span className="opacity-0">ラ</span>
            <span className="opacity-0">ン</span>
            <span className="opacity-0">な</span>
            <span className="opacity-0">ど</span>
          </>
        }
      >
        <PlanPage />
      </Body>
    </>
  );
}
