import React from 'react'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import { redirect } from 'next/navigation'

interface LogoutButtonProps {
  showIcon?: boolean
  icon?: React.ReactNode
  buttonText?: string
}

const LogoutButton = async ({ buttonText, icon }: LogoutButtonProps) => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  return (
    <form action={signOut}>
      <button className="bg-btn-background hover:bg-btn-background-hover flex items-center justify-center gap-2 rounded-md no-underline">
        {icon ?? null}
        {buttonText || 'Logout'}
      </button>
    </form>
  )
}

export default LogoutButton
