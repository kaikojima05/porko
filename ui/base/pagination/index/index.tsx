import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type PaginationProps = {
  url: string
  totalPage: number
  currentPageNumber: number
}

export default function Pagination({
  url,
  totalPage,
  currentPageNumber
}: PaginationProps) {
  const router = useRouter()

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={totalPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      forcePage={currentPageNumber - 1}
      onPageChange={({ selected }) => {
        const nextPage = selected + 1;
        router.push(`${url}/${nextPage}`)
      }}
      containerClassName={classNames(
        'flex justify-center items-center gap-6',
        'lg:mt-[7.5rem]'
      )}
      activeClassName={''}
    />
  );
}
