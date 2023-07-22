import { GetStaticPropsContext } from 'next'

type getAllDataProps = {
  context: GetStaticPropsContext
  getData: () => Promise<any[]>
  pageSize: number
}

export async function getAllData({
  context,
  getData,
  pageSize
}: getAllDataProps) {
  const data = await getData()
  const offset = (parseInt(context.params?.number as string) - 1) * pageSize;
  const currentPage = data.slice(offset, offset + pageSize);
  const totalPage = Math.ceil(data.length / pageSize);

  return {
    props: {
      currentPage,
      totalPage,
    },
  };
};
