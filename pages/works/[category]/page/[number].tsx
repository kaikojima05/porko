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

  const { items: allData } = await client.getContents<Works>({
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
    }
  })

  const number = context.params?.number;

  const offset = (parseInt(context.params?.number as string) - 1) * 12;
  const currentPage = items.slice(offset, offset + 12)
  const totalPage = Math.ceil(items.length / 12)

  return {
    props: {
      number,
      category,
      allData,
      totalPage,
      currentPage,
    }
  }
}

type WorksCategoryProps = {
  number: string
  category: string
  allData: Works[]
  currentPage: Works[]
  totalPage: number
}

export default function WorksCategory({
  number,
  category,
  allData,
  currentPage,
  totalPage
}: WorksCategoryProps) {
  console.log(number)
  console.log(category)
  console.log(allData)
  console.log(currentPage)
  console.log(totalPage)
  return (
    <Body
      heading="works"
      src="/images/hero_works.webp"
      whats={
        <>
          <span className="opacity-0">ひ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">・</span>
          <span className="opacity-0">も</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">・</span>
          <span className="opacity-0">こ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">魅</span>
          <span className="opacity-0">力</span>
          <span className="opacity-0">を</span>
          <span className="opacity-0">記</span>
          <span className="opacity-0">す</span>
        </>
      }
    >
      <WorksPage
        data={allData}
        works={currentPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </Body>
  )
}
