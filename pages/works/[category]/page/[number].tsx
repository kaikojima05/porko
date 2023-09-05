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

  const categoryCounts = items.reduce<Record<string, number>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category]++;
    return acc;
  }, {});

  const paths = [];

  for (const [category, count] of Object.entries(categoryCounts)) {
    const pageCount = Math.ceil(count / 12);
    for (let i = 1; i <= pageCount; i++) {
      paths.push({ params: { category, number: String(i) } });
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

  const offset = (parseInt(context.params?.number as string) - 1) * 12;
  const currentPage = items.slice(offset, offset + 12)
  const totalPage = Math.ceil(items.length / 12)

  return {
    props: {
      allData,
      totalPage,
      currentPage,
    }
  }
}

type WorksCategoryProps = {
  allData: Works[]
  currentPage: Works[]
  totalPage: number
}

export default function WorksCategory({
  allData,
  currentPage,
  totalPage
}: WorksCategoryProps) {
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
