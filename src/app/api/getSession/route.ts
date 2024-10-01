import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'

export async function GET() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return NextResponse.json({
      authenticated: true,
      user: { email: user.email, id: user?.id },
    })
  }

  return NextResponse.json({ authenticated: false })
}
