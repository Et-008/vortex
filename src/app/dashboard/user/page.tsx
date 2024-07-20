'use server'

import React from 'react'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import { SaveIcon } from 'lucide-react'

const UserPage = async () => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const saveProfile = async (formData: FormData) => {
    'use server'

    const Name = formData.get('Name') as string

    console.log('Name', Name)

    // const { data, error } = await supabase.auth.updateUser({
    //     email: "new@email.com",
    //     password: "new-password",
    //     data: { displayName: Name }
    // })

    // if (error) {
    //     console.error(error)
    // }

    // if (data) {
    //     console.log(data)
    // }
  }

  return (
    <form
      action={saveProfile}
      className="flex flex-col items-start justify-start gap-5 "
    >
      <span>Email: {user?.email}</span>
      <span>
        Name: <input type="text" id="Name" />
      </span>
      <button className="flex items-center gap-2">
        <SaveIcon size={15} /> Save
      </button>
    </form>
  )
}

export default UserPage
