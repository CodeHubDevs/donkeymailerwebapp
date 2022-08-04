import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useCreateRecipientLists } from '@/api'
import { useRecipientLists } from '@/api/useRecipientLists'
import FormInput from '@/components/FormInput'

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  company_name: yup.string().required(),
  address_1: yup.string().required(),
  address_2: yup.string().required(),
  city: yup.string().required(),
  country_or_state: yup.string().required(),
  postal_or_zipcode: yup.string().required(),
  country: yup.string().required(),
  phone_number: yup.string().required()
})

const CreateRecipientList = ({ groupName, grp, stannpId }: any) => {
  const [formArray, setFormArray] = React.useState<any>([])
  const [isFormActive, setIsFormActive] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { data: lists, mutate } = useRecipientLists(stannpId)

  const { execute } = useCreateRecipientLists()

  const addInputField = () => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    setFormArray([...formArray, formArray.length + 1])
    setIsFormActive(true)
  }

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await execute({
          ...data,
          group_id: stannpId,
          modified_by: 'admin',
          recipients_grp: grp
        })
        await mutate('/api/recipients-list/')

        toast.success('Recipient added')
        setIsFormActive(false)
        reset()
      } catch (error: any) {
        console.log(error)
        toast.error(
          error.response.data.data.is_valid === false
            ? 'This recipient is invalid'
            : 'Something went wrong'
        )
      }
    },
    [execute, grp, stannpId, mutate, reset]
  )

  return (
    <div>
      <div className='mt-4 flex items-center justify-between border-t py-2'>
        <h3 className='text-xl font-bold'>{groupName}</h3>
        <button
          onClick={addInputField}
          type='button'
          disabled={isFormActive}
          className='rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white disabled:cursor-not-allowed disabled:opacity-50 '>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className='mt-1 rounded-full bg-primary text-white'
          />
          <span className='ml-2 text-center text-sm font-bold text-white'>
            Add Recipient
          </span>
        </button>
      </div>
      <div className='grid grid-cols-11 gap-2 border-b border-t py-4 text-center text-sm font-bold text-gray-700'>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Company Name</h4>
        <h4>Address 1</h4>
        <h4>Address 2</h4>
        <h4>City</h4>
        <h4>County/State</h4>
        <h4>Postal/Zip Code</h4>
        <h4>Country</h4>
        <h4>Phone Number</h4>
      </div>
      {lists?.recipients && lists.recipients.length > 0 && (
        <div className='grid grid-cols-11 gap-2 py-3 text-sm text-gray-700'>
          {lists?.recipients?.map((list: any) => (
            <Fragment key={list.id}>
              <p>hi</p>
            </Fragment>
          ))}
        </div>
      )}
      {formArray.map((item: any) => (
        <form
          key={item}
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-11 gap-2 py-3 text-sm font-bold text-gray-700'>
          <FormInput
            fieldName='first_name'
            register={register}
            placeholder='First Name'
            errors={errors.first_name}
          />
          <FormInput
            fieldName='last_name'
            register={register}
            placeholder='Last Name'
            errors={errors.last_name}
          />
          <FormInput
            fieldName='company_name'
            register={register}
            placeholder='Company Name'
            errors={errors.company_name}
          />
          <FormInput
            fieldName='address_1'
            register={register}
            placeholder='Address 1'
            errors={errors.address_1}
          />
          <FormInput
            fieldName='address_2'
            register={register}
            placeholder='Address 2'
            errors={errors.address_2}
          />
          <FormInput
            fieldName='city'
            register={register}
            placeholder='City'
            errors={errors.city}
          />
          <FormInput
            fieldName='country_or_state'
            register={register}
            placeholder='County/State'
            errors={errors.country_or_state}
          />
          <FormInput
            fieldName='postal_or_zipcode'
            register={register}
            placeholder='Postal/Zip Code'
            errors={errors.postal_or_zipcode}
          />
          <FormInput
            fieldName='country'
            register={register}
            placeholder='Country'
            errors={errors.country}
          />
          <FormInput
            fieldName='phone_number'
            register={register}
            placeholder='Phone Number'
            errors={errors.phone_number}
          />
          <button className='h-6 w-16 self-center justify-self-center rounded-full bg-primary text-xs text-white'>
            Save
          </button>
        </form>
      ))}
    </div>
  )
}

export default CreateRecipientList
