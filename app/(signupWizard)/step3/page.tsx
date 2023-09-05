import { UniversalSelect } from '@/components/dashboard/universal-select'
import { getCurrentUser } from '@/lib/session'

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
}

export default async function ConnectFEPage() {
  const user = await getCurrentUser()
  console.log(user)
  return (
    <div className="space-y-2 p-8 text-center">
      <p className="text-lg">
        <span className="font-bold text-accent-1">STEP 3:</span> Select your
        journal from Financial Edge.
      </p>
      <UniversalSelect
        title="Save and Continue"
        route={process.env.NEXT_PUBLIC_APP_URL + '/api/reJournals'}
        method="GET"
        fields={['journal_code_id', 'code', 'journal']}
        selected={user?.team?.defaultJournal}
        redirect="/step4"
      />
    </div>
  )
}
