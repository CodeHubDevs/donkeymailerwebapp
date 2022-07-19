import { faCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'

interface GroupModalProps {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  onClick: () => void
}

const GroupModal: React.FC<GroupModalProps> = ({
  showModal,
  setShowModal,
  onClick
}) => {
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
          <div className='m-auto flex min-h-full items-start p-4 text-center'>
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
                    onClick={() => setShowModal(false)}
                    className='flex h-6 w-6 items-center justify-center justify-self-end rounded-full bg-red-400'>
                    <FontAwesomeIcon icon={faXmark} className=' text-white' />
                  </button>
                </Dialog.Title>
                <div>
                  <div className='mb-4 flex items-center justify-between'>
                    <h3 className='text-xl font-bold'>Group Name</h3>
                    <div className=''>
                      <button
                        type='button'
                        className='rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                        />
                        <span className='ml-2 text-center text-sm font-bold text-white'>
                          Add Recipient
                        </span>
                      </button>
                    </div>
                  </div>
                  <table className='w-full text-left text-sm text-gray-500'>
                    <thead className=' className border-b border-t text-sm text-gray-700'>
                      <tr>
                        <th scope='col' className='p-4'>
                          <div className='flex items-center'>
                            <input
                              id='checkbox-all'
                              type='checkbox'
                              className='mr-2 border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary'
                            />
                            All
                          </div>
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          First Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Last Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Company Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Address 1
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Address 2
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          City
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          County/State
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Postal/Zip Code
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Country
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Phone Number
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Joined Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          <span className='className-only'></span>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default GroupModal
