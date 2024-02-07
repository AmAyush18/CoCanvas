"use client"
import { useOrganization } from '@clerk/nextjs'
import { EmptyOrg } from './_components/empty-org'

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  }
}

const DashboardPage = ({
  searchParams
}: DashboardPageProps) => {

  const { organization } = useOrganization()

  return (
    <div className='flex-1 h-[calc(100vh-80px)] p-6'>
        {!organization ? (
          <EmptyOrg />
        ) : (
          <p>Hola!</p>
        )}
    </div>
  )
}

export default DashboardPage