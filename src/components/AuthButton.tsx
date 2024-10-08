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
        href="/"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md px-3 py-2 no-underline"
      >
        ControlRoom
      </Link>
      <Link
        href="/dashboard"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md px-3 py-2 no-underline"
      >
        dashboard
      </Link>
      <Link
        href="/dashboard/user"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md px-3 py-2 no-underline"
      >
        account
      </Link>
      {/* <span>Supabase password: OpenDatabase@123</span> */}
      <div className="ml-auto flex items-center gap-4">
        <ThemeToggle />
        <LogoutButton />
      </div>
    </div>
  ) : (
    <div className="flex w-full items-center gap-10 font-extrabold">
      <Link
        href="/"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md px-3 py-2 no-underline"
      >
        ControlRoom
      </Link>
      <Link
        href="/pricing"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md no-underline"
      >
        how to use?
      </Link>
      <Link
        href="/pricing"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md no-underline"
      >
        what we have!
      </Link>
      <Link
        href="/pricing"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md no-underline"
      >
        security & privacy
      </Link>
      <Link
        href="/pricing"
        className="bg-btn-background hover:bg-btn-background-hover flex gap-2 rounded-md no-underline"
      >
        pricing
      </Link>
      <Link
        href="/login"
        className="bg-btn-background hover:bg-btn-background-hover ml-auto flex rounded-md no-underline"
      >
        Login
      </Link>
    </div>
  )
}
