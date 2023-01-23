import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { FC } from "react"
import PaginationButton from "./PaginationButton"

type PaginationProps = {
  page: number
  count: number
  take: number
  setPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ page, count, take, setPage }) => {

  const pagesCount = Math.ceil(count / take)
  const isFirstPage = page < 1
  const isLastPage = page + 1 === pagesCount

  const handleFirst = () => setPage(0)
  const handleLast = () => setPage(pagesCount - 1)
  const handlePrev = () => setPage(page - 1)
  const handleNext = () => setPage(page + 1)

  return (
    <div className='flex gap-5'>
      {!isFirstPage &&
        <>
          <PaginationButton onClick={handleFirst}>
            <ChevronDoubleLeftIcon className='w-6 h-6'/>
          </PaginationButton>
          <PaginationButton onClick={handlePrev}>
            <ChevronLeftIcon className='w-6 h-6'/>
          </PaginationButton>
        </> 
      }
      <span className='text-lg'>{page + 1}</span>
      {!isLastPage &&
        <>
          <PaginationButton onClick={handleNext}>
            <ChevronRightIcon className='w-6 h-6'/>
          </PaginationButton>
          <PaginationButton onClick={handleLast}>
            <ChevronDoubleRightIcon className='w-6 h-6'/>
          </PaginationButton>
        </>
      }
    </div>
  )
}

export default Pagination