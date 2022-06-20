import React from 'react'

const PaymentInformation = () => {
  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Payment Information</h1>
      <form className='flex flex-col items-start px-24'>
        <div className='my-8 flex flex-col gap-4'>
          <h2 className='font-bold'>You have no payment information saved</h2>
        </div>
        <button className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Add New Payment
        </button>
      </form>
    </div>
  )
}

export default PaymentInformation
