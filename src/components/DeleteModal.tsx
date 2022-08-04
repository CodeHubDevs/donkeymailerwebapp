import React, { useCallback } from 'react'
import toast from 'react-hot-toast'

import { useDeleteGroup, useRecipients } from '@/api'

import ModalLayout from './layout/ModalLayout'

const DeleteModal = ({ showModal, closeModal, id }: any) => {
  const { execute } = useDeleteGroup()
  const { mutate } = useRecipients()
  const handleDelete = useCallback(async () => {
    try {
      await execute(id)
      closeModal()
      toast.success('Item deleted successfully')
      await mutate()
    } catch (error) {
      console.log(error)
      toast.error("Couldn't delete item")
    }
  }, [closeModal, id, execute, mutate])

  return (
    <ModalLayout showModal={showModal} closeModal={closeModal}>
      <div className='flex flex-col items-center justify-center p-4 text-center'>
        <h3 className='text-2xl font-bold'>Are you sure you want to delete?</h3>
        <form className='mt-4 flex items-center justify-center gap-4'>
          <button
            onClick={handleDelete}
            type='button'
            className='rounded-full bg-primary py-1 px-12 font-light text-white'>
            Yes
          </button>
          <button
            type='button'
            onClick={closeModal}
            className='rounded-full bg-secondary py-1 px-12 font-light text-white'>
            No
          </button>
        </form>
      </div>
    </ModalLayout>
  )
}

export default DeleteModal
