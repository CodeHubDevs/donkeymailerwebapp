import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useCreateGroup, useRecipients } from '@/api'
import GoBackToSelectButton from '@/components/GoBackToSelectButton'
import Spinner from '@/components/Spinner'
import StepForm from '@/components/StepForm'
import { useAuth } from '@/context/AuthContext'

import CreateRecipientList from './CreateRecipientList'

const CreateRecipient = () => {
  const [canCreate, setCanCreate] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupId, setGroupId] = useState<any>()
  const [newGroup, setNewGroup] = useState<any>()

  const auth = useAuth()
  const router = useRouter()

  const { register, handleSubmit } = useForm()
  const { execute, isLoading } = useCreateGroup()
  const { data: groups, mutate } = useRecipients()

  useEffect(() => {
    if (groupId) {
      setNewGroup(() =>
        groups?.find((group: any) => group.stannp_group_id === groupId)
      )
    }
  }, [groupId, groups])

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        const { group_name } = data

        const {
          data: { data: groupId }
        } = await execute({
          group_name,
          modified_by: 'admin',
          user_id: auth.decoded?.user_id,
          country: 'Not'
        })

        await mutate(`/api/recipients-group/${auth.decoded?.user_id}`)

        setGroupName(group_name)
        setGroupId(groupId)
        setCanCreate(true)
      } catch (error: any) {
        toast.error(error.response.data.error)
      }
    },
    [execute, auth.decoded?.user_id, mutate]
  )

  return (
    <>
      {!router.query.create && <StepForm currStep={3} />}
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-bold'>Create Recipient Group</h3>
          {!router.query.create && <GoBackToSelectButton />}
        </div>
        <div className='mt-4 rounded-xl bg-white p-4 shadow-lg'>
          <form
            className='flex flex-col items-start gap-2'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-2'>
              <h4 className='text-xl font-bold'>Name of Group</h4>
              <p>(First, create your recipient group name)</p>
            </div>
            <input
              type='text'
              disabled={canCreate}
              className='disabled:placeholder:text-black2 w-64 rounded-lg border-2 border-gray-300 p-2 disabled:cursor-not-allowed disabled:bg-black10 disabled:opacity-75'
              placeholder='Enter Group Name'
              {...register('group_name')}
            />
            {!canCreate && (
              <button
                className={`block rounded-full bg-primary py-1 px-4 ${
                  isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                disabled={isLoading}>
                <h5 className='flex items-center justify-center gap-2 text-sm font-bold text-white'>
                  {isLoading && <Spinner className='h-3 w-3' />}Save
                </h5>
              </button>
            )}
          </form>
          {canCreate && (
            <CreateRecipientList
              groupName={groupName}
              grp={newGroup?.id}
              stannpId={newGroup?.stannp_group_id}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default CreateRecipient
