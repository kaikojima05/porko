import { GetStaticPropsContext } from 'next'
import type { Works } from '@/ui/base/types/works'
import { client } from '@/lib/newt'
import Body from '@/ui/base/body'
import WorksPage from '@/ui/pages/works/section/main/index'

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

  const categories = Array.from(new Set(items.map(item => item.category)));
  const paths = [];

  for (const category of categories) {
    const itemsForCategory = items.filter(item => item.category === category);
    const totalPagesForCategory = Math.ceil(itemsForCategory.length / 12);

    for (let pageNumber = 1; pageNumber <= totalPagesForCategory; pageNumber++) {
      paths.push({
        params: {
          category: category.toString(),
          number: pageNumber.toString()
        }
      });
    }
  }

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
  return (
    <Body
      heading="works"
      src="/images/hero_works.webp"
      whats="制作実績"
    >
      <WorksPage works={currentPage} totalPage={totalPage} />
    </Body>
  )
}
