import React, { useCallback, useState } from 'react'

import ModalLayout from '@/components/layout/ModalLayout'
import useAlternativeAddressStore from '@/stores/useAlternativeAddressStore'

const AlternativeAddressModal = ({
  showModal,
  closeModal,
  alternativeAddresses
}: any) => {
  const [selectedAddress, setSelectedAddress] = useState('')
  const { setAlternativeAddress }: any = useAlternativeAddressStore()

  const handleSave = useCallback(() => {
    setAlternativeAddress(selectedAddress)
    closeModal()
  }, [selectedAddress, closeModal, setAlternativeAddress])

  return (
    <ModalLayout showModal={showModal} closeModal={closeModal}>
      {alternativeAddresses.length <= 0 ? (
        <div className='flex h-full items-center justify-center'>
          <h3 className='text-2xl font-bold'>
            No alternative addresses found.
          </h3>
        </div>
      ) : (
        <div>
          <h3 className='mb-2 text-2xl font-bold'>
            Select Alternative Address 1
          </h3>
          {alternativeAddresses.map((address: any) => (
            <div
              key={address.address1}
              className='flex items-center justify-between border-b py-2'>
              <div className='flex w-full items-center justify-between'>
                <span
                  className={`text-sm ${
                    selectedAddress === address.address1 && 'text-green-400'
                  }`}>
                  {address.address1}
                </span>
                <button
                  onClick={() => setSelectedAddress(address.address1)}
                  disabled={selectedAddress === address.address1}
                  className='rounded-full bg-primary py-px px-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50'>
                  Select
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleSave}
            className='mt-4 rounded-full bg-primary px-4 py-1 text-sm text-white'>
            Submit
          </button>
        </div>
      )}
    </ModalLayout>
  )
}

export default AlternativeAddressModal
