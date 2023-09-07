import classNames from 'classnames'
import Section from '@/ui/base/section'
import PlanBlock from '@/ui/snippet/PlanBlock'
import Disclosure from '@/ui/base/Disclosure'
import Icon from '@/ui/base/icons'

type PlanPagesProps = {

}

export default function PlanPages({ }: PlanPagesProps) {
  return (
    <>
      <PlanBlock
        heading="SEO記事執筆"
        guide="文字単価目安"
        value="2.5円〜"
      >
        <p>
          （例：1記事3,000文字の場合、7,500円〜）
          <br />
          クライアント様の都合により実績公開不可のものが多いですが、約90記事の執筆経験がございます。
          <br />
          基本的にはご提示いただいたキーワードに基づき、リサーチ→構成案作成→記事執筆を承ります。
          <br />
          キーワード選定もご所望の場合は別途ご相談ください。
        </p>
      </PlanBlock>
      <PlanBlock
        heading="取材記事執筆"
        guide="記事単価目安"
        value="10,000円〜"
      >
        <p>
          飲食店やイベント等への取材実績がございます。
          <br />
          企画・取材・写真撮影・記事執筆を一貫して承ります。
        </p>
      </PlanBlock>
      <PlanBlock
        heading="コピーライティング"
        guide="費用"
        value="応相談"
      >
        <p>
          商品・サービス・ブランド等、コンテンツに添えるメッセージの制作を承ります。
          <br />
          ジャンルは問いません。
        </p>
      </PlanBlock>
      <PlanBlock
        heading="シナリオ制作"
        guide="費用"
        value="応相談"
      >
        <p>
          ライター活動を始める前から、個人で小説の制作を行ってきました。
          <br />
          コンテスト入賞経験等もございます。
          <br />
          YouTube動画やマンガ等、ご要望のコンテンツに応じてシナリオを制作いたします。
          <br />
          ★参考資料として、過去の制作物（小説）をお見せすることも可能です。
        </p>
      </PlanBlock>
      <PlanBlock
        heading="その他"
      >
        <p>
          上記ジャンルにとらわれず、
          <br className='md:hidden' />
          〈ことば〉にまつわるあらゆるご依頼・ご相談を受け付けています。
        </p>
      </PlanBlock>
      <Section>
        <Disclosure
          icon="Q"
          heading="納期はどれくらいですか？"
        >
          <p>
            文字数にもよりますが、SEO記事や取材記事は執筆開始から7〜10日以内を目処に納品させていただきます。
            <br />
            その他の案件につきましては、ボリュームや工数に応じて都度ご相談させていただきます。
          </p>
        </Disclosure>
        <Disclosure
          icon="Q"
          heading="修正対応の回数に上限はありますか？"
        >
          <p>
            〈3回まで〉をひとつの目安とさせていただきます。
            <br className='md:inline-block' />
            （緊急用件など、状況に応じて対応は柔軟にいたします。）
          </p>
        </Disclosure>
      </Section>
    </>
  )
}
