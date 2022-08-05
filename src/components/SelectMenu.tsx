import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Listbox } from '@headlessui/react'
import React from 'react'

const SelectMenu = ({ options, value, onChange, isLeft, disabled }: any) => {
  return (
    <Listbox
      disabled={disabled}
      value={value}
      onChange={onChange}
      as='div'
      className='relative'>
      <Listbox.Button className='flex w-full items-center gap-2 rounded-lg bg-primary px-2 text-white disabled:cursor-not-allowed disabled:opacity-50'>
        <span className='block truncate text-sm font-semibold'>
          {value.label}
        </span>
        <span className='pointer-events-none  text-white'>
          <FontAwesomeIcon
            icon={faAngleDown}
            className='h-4 w-4'
            aria-hidden='true'
          />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={`absolute z-50 mt-2 max-h-60 origin-top-right overflow-auto rounded-md bg-white py-1 shadow-lg ${
          isLeft ? 'left-0' : 'right-0'
        }`}>
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
    </Listbox>
  )
}

export default SelectMenu
