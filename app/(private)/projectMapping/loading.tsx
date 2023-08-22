import { DashboardHeader } from '@/components/dashboard/header'
import { PostCreateButton } from '@/components/post-create-button'
import { PostItem } from '@/components/post-item'
import { DashboardShell } from '@/components/shell'
import { MainNav } from '@/components/main-nav'
import { UserAccountNavSkel } from '@/components/user-account-nav-skel'
import { dashboardConfig } from '@/config/dashboard'
import Image from 'next/image'


export default function DashboardLoading() {
  return (
    <>
     <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNavSkel
          />
        </div>
      </header>
    <div className="container mx-auto mt-8 grid w-full grid-cols-1 content-center items-center bg-dark pt-8 text-center  lg:max-w-none lg:grid-cols-1 lg:px-0">
     getting projects and batches...<br/><br/>
      <Image className='mx-auto animate-spin' src={'/icon.png'} alt='loading' width={64} height={64}/> 
     
    </div>
    </>
  )
}