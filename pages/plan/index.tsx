import classNames from 'classnames'
import Body from '@/ui/base/body'
import PlanPage from '@/ui/pages/plan/section/main/index'

type PlanProps = {

}

export default function Plan() {
  return (
    <Body
      heading="plan"
      src="/images/hero_plan.webp"
      whats={
        <>
          <span className="opacity-0">プ</span>
          <span className="opacity-0">ラ</span>
          <span className="opacity-0">ン</span>
        </>
      }
    >
      <PlanPage />
    </Body>
  );
}
