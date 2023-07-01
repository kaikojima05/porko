import classNames from 'classnames'
import type { Works } from '@/ui/base/types/works'
import Article from '@/ui/base/article'
import Section from '@/ui/base/section'

type CategoryListProps = {
  works: Works[]
}

export default function CategoryList({ works }: CategoryListProps) {
  const categoryList = works.map((item) => item.category)
  const filterCategoryList = Array.from(new Set(categoryList.flat()))

  return (
    <Article>
      <Section>
        <div className={classNames('lg:flex lg:justify-center lg:items-center lg:gap-4')}>
          {filterCategoryList &&
            filterCategoryList.map((category, index) => (
              <div key={index} className={classNames('lg:rounded-full lg:border lg:border-base-black lg:py-1.5 lg:px-8')}>
                <p>{category}</p>
              </div>
            ))
          }
        </div>
      </Section>
    </Article >
  );
}
