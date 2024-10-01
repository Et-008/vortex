import Header from '@/components/Header'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import ThemeToggle from '@/components/buttons/ThemeToggle'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function Index() {
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
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Navbar />

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <Header />
        <main className="flex flex-1 flex-col gap-6"></main>
      </div>

      <footer className="w-full border-t border-t-foreground/10">
        <div className=" justify-center p-8 text-center text-xs">
          <p className="mb-6">
            Powered by{' '}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeToggle />
        </div>
        <div className="flex gap-10 pb-10 pl-52 pt-10 text-xs">
          <Link href="/contact-us">Contact us</Link>
          <Link href="/contact-us">Security and privacy</Link>
          <Link href="/contact-us">Careers</Link>
          <Link href="/contact-us">Pricing</Link>
        </div>
      </footer>
    </div>
  )
}
