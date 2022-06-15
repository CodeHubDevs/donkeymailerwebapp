import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface DashboardCardProps {
  title: string
  result: string
  action: string
  withIcon: boolean
}

const DashboardCards = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <DashboardCard
        title='Campaigns'
        result='32'
        action='Create New Campaign'
        withIcon={true}
      />
      <DashboardCard
        title='Templates'
        result='50'
        action='Create New Template'
        withIcon={true}
      />
      <DashboardCard
        title='Recipients'
        result='10'
        action='Create New Recipient'
        withIcon={true}
      />
      <DashboardCard
        title='Total Mails'
        result='22'
        action='Track All Mails'
        withIcon={false}
      />
    </div>
  )
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  result,
  action,
  withIcon
}) => {
  return (
    <div className='rounded-3xl p-4 shadow-2xl'>
      <h5 className='mb-4 text-xl font-bold text-primary'>{title}</h5>
      <p className='mb-8 text-center text-5xl font-bold text-black'>{result}</p>
      <button className='w-full rounded-md bg-primary from-secondary to-primary py-2 px-6'>
        <div className='flex items-center justify-center gap-x-2 rounded-md px-1 py-1 text-black50'>
          {withIcon && (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className='cursor-pointer rounded-full bg-primary text-white'
            />
          )}
          <span className='text-center font-bold text-white'>{action}</span>
        </div>
      </button>
    </div>
  )
}

export default DashboardCards
