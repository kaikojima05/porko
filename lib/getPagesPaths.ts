type getPagesPathsProps = {
  getData: () => Promise<any>
  pageSize: number
}

export async function getPagesPaths({
  getData,
  pageSize
}: getPagesPathsProps) {
  const data = await getData()
  const totalPage = Math.ceil(data.length / pageSize)

  const paths = Array.from({ length: totalPage }, (_, i) => ({
    params: { number: (i + 1).toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}
