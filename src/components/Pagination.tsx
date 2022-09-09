import React from 'react'

const Pagination = ({ page, setPage }: any) => {
  return (
    <div className='mt-4 flex items-center gap-4'>
      <button
        className='rounded-lg bg-primary p-1 text-white'
        onClick={() => setPage((prev: number) => prev - 1)}>
        Prev Page
      </button>
      <p>{page}</p>
      <button
        className='rounded-lg bg-primary p-1 text-white'
        onClick={() => setPage((prev: number) => prev + 1)}>
        Next Page
      </button>
    </div>
  )
}

export default Pagination
