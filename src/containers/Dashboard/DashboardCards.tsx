import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface DashboardCardProps {
  title: string
  result: string
  action: string
  withIcon: boolean
  href?: any
}

const DashboardCards = () => {
  return (
    <div className='mt-8 grid grid-cols-3 gap-4'>
      <DashboardCard
        title='Campaigns'
        result='32'
        action='Create New Campaign'
        withIcon={true}
        href='campaign/select'
      />
      <DashboardCard
        title='Templates'
        result='50'
        action='Create New Template'
        withIcon={true}
        href='template/create'
      />
      <DashboardCard
        title='Recipient Groups'
        result='10'
        action='Create New Recipient Group'
        withIcon={true}
        href={{ pathname: 'recipient/create', query: { new: true } }}
      />
    </div>
  )
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  result,
  action,
  withIcon,
  href = '#'
}) => {
  return (
    <div className='rounded-3xl p-4 shadow-md'>
      <h5 className='mb-4 text-xl font-bold text-primary'>{title}</h5>
      <p className='mb-8 text-center text-5xl font-bold text-black'>{result}</p>
      <Link href={href}>
        <a className='mx-12 flex items-center justify-center gap-x-2 rounded-md bg-primary py-3 px-6'>
          {withIcon && (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className='cursor-pointer rounded-full bg-primary text-lg text-white'
            />
          )}
          <span className='text-center font-bold text-white'>{action}</span>
        </a>
      </Link>
    </div>
  )
}

export default DashboardCards
