import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import AuthButton from '@/components/AuthButton'

export default async function Navbar() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createServerClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <nav className="flex h-16 w-full justify-center bg-secondary-foreground text-secondary">
      <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  )
}
