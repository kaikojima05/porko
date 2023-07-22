type getFirstViewProps = {
  getData: () => Promise<any[]>
  pageSize: number
}

export async function getFirstView({
  getData,
  pageSize
}: getFirstViewProps) {
  const data = await getData()
  const currentPage = data.slice(0, pageSize)
  const totalPage = Math.ceil(data.length / pageSize)

  return {
    props: {
      currentPage,
      totalPage,
    }
  }
}
