import classNames from 'classnames'
import type { Works } from '@/ui/base/types/works'
import type { Creatives } from '@/ui/base/types/creatives'
import Article from '@/ui/base/article'
import Section from '@/ui/base/section'

type CategoryListProps = {
  works?: Works[]
  creatives?: Creatives[]
}

export default function CategoryList({ works, creatives }: CategoryListProps) {
  let categoryList: Works[] | Creatives[] | undefined

  if (works) {
    categoryList = works
  } else if (creatives) {
    categoryList = creatives
  } else {
    return null
  }

  const allCategory = categoryList.map((item) => item.category)
  const filterCategoryList = Array.from(new Set(allCategory.flat()))

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
