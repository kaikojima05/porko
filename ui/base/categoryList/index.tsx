import Link from 'next/link'
import classNames from 'classnames'
import type { Works } from '@/ui/base/types/works'
import type { Creatives } from '@/ui/base/types/creatives'
import Article from '@/ui/base/article'
import Section from '@/ui/base/section'
import { Button } from '@/ui/base/button'

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
    <div className={classNames('lg:flex lg:justify-center lg:items-center lg:gap-4')}>
      {filterCategoryList &&
        filterCategoryList.map((category, index) => (
          <Button
            key={index}
            size="s"
            style="square"
            optionClassName='border-base-black rounded'
          >
            <Link
              className='flex justify-center items-center w-full h-full'
              href={
                `${works ? 'works' : 'creatives'}/${category}/`
              }
            >
              {category}
            </Link>
          </Button>
        ))
      }
    </div>
  );
}
