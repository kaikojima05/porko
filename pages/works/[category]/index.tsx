import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import type { Works } from '@/ui/base/types/works'
import { client } from '@/lib/newt'
import Body from '@/ui/base/body'
import AllWorksCard from '@/ui/pages/works/section/main/index'
import Pagination from '@/ui/base/pagination/index'

export const getStaticPaths = async () => {
  const { items } = await client.getContents<Works>({
    appUid: 'works',
    modelUid: 'portfolio',
    query: {
      select: [
        '_id',
        'fullName',
        'RefLink',
        'category',
        'postDate',
        'appeal',
      ],
    }
  })

  const paths = items.map((worksCategory) => ({
    params: { category: worksCategory.category.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const category = context.params?.category;
  if (typeof category !== 'string') {
    return {
      notFound: true,
    };
  }

  const { items } = await client.getContents<Works>({
    appUid: 'works',
    modelUid: 'portfolio',
    query: {
      select: [
        '_id',
        'fullName',
        'RefLink',
        'postDate',
        'appeal',
        'category'
      ],
      category: category,
    }
  })

  const currentPage = items.slice(0, 12)
  const totalPage = Math.ceil(items.length / 12)

  return {
    props: {
      category,
      totalPage,
      currentPage,
    }
  }
}

type WorksCategoryProps = {
  currentPage: Works[]
  category: string
  totalPage: number
}

export default function WorksCategory({
  currentPage,
  category,
  totalPage
}: WorksCategoryProps) {
  const router = useRouter()
  const pageNumberFromQuery = router.query.number ? Number(router.query.number) : 1

  return (
    <Body>
      <div>
        <AllWorksCard works={currentPage} />
      </div>
      <Pagination
        url={`works/${category}/`}
        totalPage={totalPage}
        currentPageNumber={pageNumberFromQuery}
      />
    </Body>
  )
}
