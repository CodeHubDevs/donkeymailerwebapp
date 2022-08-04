import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'

const ModalLayout = ({ showModal, closeModal, children }: any) => {
  return (
    <Transition appear show={showModal} as={React.Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => {}}>
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-60' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='m-auto flex min-h-full max-w-4xl items-center justify-center p-4 text-center'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title className='mb-4 flex justify-end'>
                  <button
                    onClick={closeModal}
                    className='flex h-6 w-6 items-center justify-center justify-self-end rounded-full bg-red-400'>
                    <FontAwesomeIcon icon={faXmark} className=' text-white' />
                  </button>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalLayout
