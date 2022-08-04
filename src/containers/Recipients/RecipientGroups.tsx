import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
// import { useForm } from 'react-hook-form'

import { useRecipients } from '@/api/useRecipients'
// import FormInput from '@/components/FormInput'
import DeleteModal from '@/components/DeleteModal'
import Spinner from '@/components/Spinner'

import GroupModal from './GroupModal'

const RecipientGroups = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState<any>(null)
  // const [editItem, setEditItem] = useState<any>()

  const { data: groups, isValidating: groupValidating } = useRecipients()
  const isLoading = useMemo(() => {
    return groupValidating || !groups
  }, [groupValidating, groups])

  // const { register, handleSubmit, reset } = useForm()

  // const onSubmit = useCallback((data: any) => {
  //   console.log(data)
  //   setTimeout(() => {
  //     setEditItem(null)
  //   }, 1000)
  // }, [])

  // const editRow = useCallback(
  //   (row: string) => {
  //     reset()
  //     setEditItem(row)
  //   },
  //   [reset]
  // )

  // const handleClick = useCallback(
  //   (id: string) => {
  //     if (editItem === id) {
  //       return handleSubmit(onSubmit)()
  //     }

  //     return editRow(id)
  //   },
  //   [editItem, handleSubmit, onSubmit, editRow]
  // )

  return (
    <div className='mt-10'>
      <h3 className='text-xl font-bold'>Reciepient Groups</h3>
      {isLoading ? (
        <div className='mt-4 flex h-[30vh] items-center justify-center rounded-lg bg-white shadow-xl'>
          <Spinner />
        </div>
      ) : (
        <div className='mt-4 rounded-lg bg-white p-4 shadow-xl'>
          <div className='mb-2 flex items-center justify-end'>
            <Link href={{ pathname: 'recipient/create', query: { new: true } }}>
              <a
                type='button'
                className='rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                />
                <span className='ml-2 text-center text-sm font-bold text-white'>
                  Create New Group
                </span>
              </a>
            </Link>
          </div>
          <table className='min-h-[100px] w-full text-left text-sm text-gray-500'>
            <thead className='border-b border-t text-sm text-gray-700'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Group Name
                </th>
                {/* <th scope='col' className='px-6 py-3'>
                  Total Recipients
                </th>
                <th scope='col' className='px-6 py-3'>
                  Countries
                </th> */}
                <th scope='col' className='px-6 py-3'>
                  <span className='className-only'></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <GroupModal
                onClick={() => {}}
                setShowModal={setIsModalOpen}
                showModal={isModalOpen}
              />
              <DeleteModal
                showModal={isDeleting}
                closeModal={() => setIsDeleting(false)}
                id={selectedGroup?.stannp_group_id}
              />
              {groups?.map((item: any) => (
                <tr key={item.id}>
                  <td
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                    {/* {editItem === item.id ? (
                      <FormInput
                        register={register}
                        fieldName='group_name'
                        placeholder='Enter New Group Name...'
                        className='py-1'
                      />
                    ) : (
                      item.group_name
                    )} */}
                    {item.group_name}
                  </td>
                  {/* <td
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                    {item.total_recipients}
                  </td>
                  <td
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                    {item.countries}
                  </td> */}
                  <th scope='row' className='whitespace-nowrap px-6 py-4'>
                    <div className='flex items-center gap-8'>
                      <button
                        className='cursor-pointer font-bold text-primary hover:text-secondary'
                        onClick={() => setIsModalOpen(true)}>
                        View
                      </button>
                      {/* <button
                        className='cursor-pointer font-bold text-primary hover:text-secondary'
                        onClick={() => handleClick(item.id)}>
                        {editItem === item.id ? 'Save' : 'Edit'}
                      </button> */}
                      <button
                        className='font-bold text-red-500 hover:text-red-600'
                        onClick={() => {
                          setSelectedGroup(item)
                          setIsDeleting(true)
                        }}>
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default RecipientGroups
