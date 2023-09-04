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
          <span className="opacity-0">こ</span>
          <span className="opacity-0">ん</span>
          <span className="opacity-0">な</span>
          <span className="opacity-0">お</span>
          <span className="opacity-0">仕</span>
          <span className="opacity-0">事</span>
          <span className="opacity-0">、</span>
          <span className="opacity-0">承</span>
          <span className="opacity-0">り</span>
          <span className="opacity-0">ま</span>
          <span className="opacity-0">す</span>
        </>
      }
    >
      <PlanPage />
    </Body>
  );
}
