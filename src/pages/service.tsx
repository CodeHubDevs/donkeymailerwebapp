import React from 'react'

import PublicLayout from '@/components/layout/PublicLayout'

const tableData = [
  {
    specification: 'Postcard 4*6 inches',
    first: 4.7,
    second: 4.4,
    third: 4,
    fourth: 3.8,
    fifth: 3.6
  },
  {
    specification: 'Postcard 6*9 inches',
    first: 4.8,
    second: 4.5,
    third: 4.1,
    fourth: 3.9,
    fifth: 3.7
  },
  {
    specification: 'Postcard 6*11 inches',
    first: 6,
    second: 5.7,
    third: 5.2,
    fourth: 5.0,
    fifth: 4.9
  },
  {
    specification: 'Letter 8*11 inches + size 10 envelope',
    first: 6.2,
    second: 5.9,
    third: 5.4,
    fourth: 5.2,
    fifth: 5.1
  }
]

const Service = () => {
  return (
    <PublicLayout>
      <div className='my-8 mx-64'>
        <h1 className='py-8 text-center text-4xl font-bold text-primary'>
          US Quote
        </h1>
        <div className='rounded-3xl bg-secondary50 py-8 text-center text-xl'>
          <h5 className='text-white'>
            U.S. Express, 1-3 working days for production, 3-5 working days for
            delivery
          </h5>
        </div>
        <div className='my-8 flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden border border-primary drop-shadow-md sm:rounded-lg'>
                <table className='min-w-full divide-y divide-primary'>
                  <thead className='bg-white text-sm text-primary'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left font-bold uppercase tracking-wider'>
                        Specification
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-center font-bold uppercase tracking-wider'>
                        Recharge Ladder
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-center font-bold uppercase tracking-wider'>
                        0
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-center font-bold uppercase tracking-wider'>
                        &#xA5;10,000
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-center font-bold uppercase tracking-wider'>
                        &#xA5;25,000
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-center font-bold uppercase tracking-wider'>
                        &#xA5;50,000
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left font-bold uppercase tracking-wider'>
                        &#xA5;100,000+
                      </th>
                    </tr>
                  </thead>
                  <tbody className='w-full divide-y divide-primary'>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className='whitespace-no-wrap px-6 py-4 text-left text-sm font-medium leading-5 text-black75'>
                          {item.specification}
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          Price per piece
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          {item.first}
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          {item.second}
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          {item.third}
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          {item.fourth}
                        </td>
                        <td className='whitespace-no-wrap px-6 py-4 text-center text-sm font-medium leading-5 text-black75'>
                          {item.fifth}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white p-4'>
          <h5 className='mb-2 text-xl font-bold text-primary'>
            Quote Description:
          </h5>
          <ol className='list-decimal pl-5 text-base text-black50'>
            <li>
              The above unit prices are based on the corresponding price for a
              single account. If you enjoy the same price for multiple accounts,
              a company entity association certificate (seal) is required;
            </li>
            <li>
              The balance can be withdrawn, and a 10% handling fee will be
              charged;
            </li>
            <li>
              After the accumulative recharge reaches the standard, only
              subsequent orders will enjoy the corresponding price, and the
              previous order amount will not be refunded;
            </li>
            <li>If you use more, or have other needs, please contact us;</li>
            <li>
              Billing content: technical service fee, electronic VAT ordinary
              invoice, 1% tax point
            </li>
          </ol>
        </div>
      </div>
    </PublicLayout>
  )
}

export default Service
