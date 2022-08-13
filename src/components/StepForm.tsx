import React from 'react'

interface StepsProps {
  steps: number
  currStep: number
  children: React.ReactNode
}

const Line = () => {
  return <div className='h-px w-full bg-black10' />
}

const Steps: React.FC<StepsProps> = ({ children, steps, currStep }) => {
  const active = steps === currStep

  return (
    <div className='relative flex flex-col items-center'>
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          active ? 'bg-primary' : 'bg-black10'
        }`}>
        <span className='p-2 text-center font-bold text-white'>{steps}</span>
      </div>
      {active && (
        <p className='absolute mt-8 w-32 text-center text-sm'>{children}</p>
      )}
    </div>
  )
}

const StepForm = ({ currStep }: { currStep: number }) => {
  return (
    <div className='mx-24 my-10 flex items-center justify-evenly'>
      <Steps steps={1} currStep={currStep}>
        Campaign
      </Steps>
      <Line />
      <Steps steps={2} currStep={currStep}>
        Template
      </Steps>
      <Line />
      <Steps steps={3} currStep={currStep}>
        Recipients
      </Steps>
      <Line />
      <Steps steps={4} currStep={currStep}>
        Review & Approval
      </Steps>
      <Line />
      <Steps steps={5} currStep={currStep}>
        Booking & Payment
      </Steps>
    </div>
  )
}

export default StepForm
