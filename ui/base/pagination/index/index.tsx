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
        router.push(`/${url}/page/${nextPage}/`).then(() => window.scrollTo(0, 0))
      }}
      containerClassName={classNames(
        'flex justify-center items-center gap-6',
        'lg:mt-[7.5rem]'
      )}
      pageClassName={classNames(
        'border border-base-black rounded-[100%] duration-300 overflow-hidden',
        'lg:hover:scale-90 lg:hover:bg-accent lg:hover:border-accent'
      )}
      pageLinkClassName={classNames(
        'w-8 h-8 inline-block flex justify-center items-center',
        'md:w-12 md:h-12',
        'md:w-14 md:h-14',
      )}
      activeLinkClassName='bg-accent'
      activeClassName='!border-accent text-white'
    />
  );
}
