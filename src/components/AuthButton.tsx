import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerClient } from '@/utils/supabase'
import ThemeToggle from '@/components/buttons/ThemeToggle'
import { PersonIcon } from '@radix-ui/react-icons'
import LogoutButton from './buttons/LogoutButton'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div className="flex w-full items-center gap-10">
      <Link
        href="/user"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md px-3 py-2 no-underline"
      >
        <PersonIcon />
        {user.email}
      </Link>
      <Link
        href="/notes"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md no-underline"
      >
        notes
      </Link>
      {/* <span>Supabase password: OpenDatabase@123</span> */}
      <div className="ml-auto flex items-center gap-4">
        <ThemeToggle />
        <LogoutButton />
      </div>
    </div>
  ) : (
    <Link
      href="/login"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md no-underline"
    >
      Login
    </Link>
  )
}
