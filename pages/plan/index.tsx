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
      whats="プラン"
    >
      <PlanPage />
    </Body>
  );
}
