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
      previousLabel={'前へ'}
      nextLabel={'次へ'}
      breakLabel={'...'}
      pageCount={totalPage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      forcePage={currentPageNumber - 1}
      onPageChange={({ selected }) => {
        const nextPage = selected + 1;
        router.push(`${url}/${nextPage}`)
      }}
      containerClassName={classNames(
        'flex justify-center items-center gap-6',
        'lg:mt-[7.5rem]'
      )}
      pageClassName={classNames(
        'border border-base-black rounded-[100%] duration-300 overflow-hidden',
        'hover:scale-90'
      )}
      pageLinkClassName={classNames(
        'w-6 h-6 inline-block flex justify-center items-center',
        'md:w-14 md:h-14',
      )}
      activeLinkClassName='bg-primary'
      activeClassName='border-primary'
    />
  );
}
