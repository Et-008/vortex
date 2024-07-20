'use client'

import { createBrowserClient } from '@/utils/supabase'
import { useCallback, useEffect, useState } from 'react'

interface Note {
  id: string
  title: string
}

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createBrowserClient()

  const getData = useCallback(async () => {
    const { data } = await supabase.from('notes').select()
    setNotes(data)
  }, [supabase])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <pre className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in">
      {notes?.map((note: Note) => {
        return <div key={note?.id}>{note?.title}</div>
      })}
    </pre>
  )
}
