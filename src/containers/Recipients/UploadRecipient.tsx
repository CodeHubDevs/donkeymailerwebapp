import { faDownload, faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useCreateGroup, useCreateStannpCampaign, useRecipients } from '@/api'
import { useSelectGroup } from '@/api/useSelectGroup'
import { useUploadRecipients } from '@/api/useUploadRecipients'
import GoBackToSelectButton from '@/components/GoBackToSelectButton'
import Spinner from '@/components/Spinner'
import StepForm from '@/components/StepForm'
import { useAuth } from '@/context/AuthContext'
import useProcessStore from '@/stores/useProcessStore'

const UploadRecipient = () => {
  const [canCreate, setCanCreate] = useState(false)
  const [groupId, setGroupId] = useState<any>()
  const [newGroup, setNewGroup] = useState<any>()
  const [selectedFile, setSelectedFile] = useState<any>()

  const auth = useAuth()
  const router = useRouter()

  const { setRecipientId, campaign, templateId }: any = useProcessStore()

  const { register, handleSubmit } = useForm()
  const { execute, isLoading } = useCreateGroup()
  const { execute: uploadRecipients, isLoading: isUploading } =
    useUploadRecipients()
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

        setGroupId(groupId)
        setCanCreate(true)
      } catch (error: any) {
        toast.error(error.response.data.error)
      }
    },
    [execute, auth.decoded?.user_id, mutate]
  )

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return

      setSelectedFile(file)
    },
    []
  )

  const { execute: createStannp } = useCreateStannpCampaign()
  const { execute: selectGroup } = useSelectGroup()

  const handleSubmitUpload = useCallback(async () => {
    try {
      await uploadRecipients({
        file: selectedFile,
        group_id: newGroup?.stannp_group_id
      })
      toast.success('Recipients uploaded successfully')
      console.log({ newGroup })
      if (!router.query.create) {
        setRecipientId(newGroup?.stannp_group_id)
        const { data } = await createStannp({
          campaign_id: campaign?.id,
          template_id: templateId,
          group_id: newGroup?.stannp_group_id,
          what_recipients: 'all'
        })
        console.log(data)
        await selectGroup({
          country: 'Not',
          campaign_id: campaign.dbId,
          recipients_id: newGroup?.id
        })
        return await router.push(`/app/approve/${data?.id}`)
      }
      return await router.push('/app/recipient')
    } catch (error: any) {
      toast.error(error.response.data.error)
    }
  }, [
    selectedFile,
    uploadRecipients,
    newGroup,
    router,
    setRecipientId,
    createStannp,
    campaign,
    templateId,
    selectGroup
  ])

  return (
    <>
      {!router.query.create && <StepForm currStep={3} />}
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-bold'>Upload Recipients</h3>
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
        </div>
        {canCreate && (
          <div className='mt-4 rounded-lg bg-white p-16 shadow-lg'>
            <div className='mb-4 flex gap-2'>
              <h4 className='text-lg font-bold'>Upload File</h4>
              <p>(Download our example guide for reference)</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-secondary10 p-16'>
              <FontAwesomeIcon className='h-12 w-12' icon={faFileArrowUp} />
              <input
                type='file'
                onChange={handleUpload}
                className='text-grey-500 block text-sm file:mr-5 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-6 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer focus:outline-none'
              />
              <a
                href='/files/sample.csv'
                download={'sample.csv'}
                className='flex items-center text-sm text-primary'>
                <FontAwesomeIcon icon={faDownload} className='mr-2' />
                <span>Download CSV Guide</span>
              </a>
            </div>
            <button
              onClick={handleSubmitUpload}
              disabled={isUploading}
              className={`mx-auto mt-4 block rounded-xl bg-primary py-2 px-8 ${
                isUploading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}>
              <h5 className='flex items-center justify-center gap-2 text-center font-bold text-white'>
                {isUploading && <Spinner />}Upload
              </h5>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default UploadRecipient
