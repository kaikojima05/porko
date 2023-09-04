import { GetStaticPropsContext } from 'next'
import type { Creatives } from '@/ui/base/types/creatives'
import { client } from '@/lib/newt'
import Body from '@/ui/base/body'
import CreativesPage from '@/ui/pages/creatives/section/main/index'

export const getStaticPaths = async () => {
  const { items } = await client.getContents<Creatives>({
    appUid: 'creatives',
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

  const { items } = await client.getContents<Creatives>({
    appUid: 'creatives',
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

  const { items: allData } = await client.getContents<Creatives>({
    appUid: 'creatives',
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

  const currentPage = items.slice(0, 12)
  const totalPage = Math.ceil(items.length / 12)

  return {
    props: {
      allData,
      totalPage,
      currentPage,
    }
  }
}

type CreativesCategoryProps = {
  allData: Creatives[]
  currentPage: Creatives[]
  totalPage: number
}

export default function CreativesCategory({
  allData,
  currentPage,
  totalPage
}: CreativesCategoryProps) {
  return (
    <Body
      heading="creatives"
      src="/images/hero_creatives.webp"
      whats={
        <>
          <span className="opacity-0">想</span>
          <span className="opacity-0">い</span>
          <span className="opacity-0">の</span>
          <span className="opacity-0">丈</span>
          <span className="opacity-0">を</span>
          <span className="opacity-0 writing-vertical">〈</span>
          <span className="opacity-0">こ</span>
          <span className="opacity-0">と</span>
          <span className="opacity-0">ば</span>
          <span className="opacity-0 writing-vertical">〉</span>
          <span className="opacity-0 writing-vertical">に</span>
          <span className="opacity-0 writing-vertical">乗</span>
          <span className="opacity-0 writing-vertical">せ</span>
          <span className="opacity-0 writing-vertical">て</span>
        </>
      }
    >
      <CreativesPage data={allData} creatives={currentPage} totalPage={totalPage} />
    </Body>
  )
}

