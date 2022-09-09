import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox } from '@headlessui/react'
import React from 'react'

const FormSelect = ({
  options,
  value,
  onChange,
  label,
  disabled,
  className = ''
}: any) => {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      {label && <label className='font-bold text-primary'>{label}</label>}
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className='relative w-full'>
          <Listbox.Button
            className={
              'w-full rounded-2xl border border-primary py-2 px-4 text-black50 shadow outline-primary placeholder:font-semibold placeholder:text-black10 disabled:cursor-not-allowed disabled:bg-black10 disabled:opacity-75 disabled:placeholder:text-black25'
            }>
            <span className='block truncate text-left'>{value.label}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {options.map((option: any, index: any) => {
              return (
                <Listbox.Option
                  key={index}
                  value={option}
                  className='group relative select-none py-2 px-8 pl-8 text-sm hover:bg-primary hover:text-white'>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-semibold' : 'font-normal'
                        }`}>
                        {option.label}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-secondary group-hover:text-white'>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className='h-4 w-4'
                            aria-hidden='true'
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default FormSelect
