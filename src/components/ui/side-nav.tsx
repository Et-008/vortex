import Link from 'next/link'
import NavLinks from '@/components/ui/nav-links'
import { HomeIcon } from '@radix-ui/react-icons'
import { Power } from 'lucide-react'
import clsx from 'clsx'
import ThemeToggle from '../buttons/ThemeToggle'
import LogoutButton from '../buttons/LogoutButton'

export default function SideNav() {
  return (
    <div
      className="flex h-full flex-col gap-3 px-3 py-4 md:px-2"
      style={{ backgroundColor: 'hsl(var(--muted-foreground))' }}
    >
      <div className="flex h-full flex-col gap-3">
        <Link
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 overflow-hidden p-3 text-sm font-medium text-black hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
          )}
          href="/"
        >
          <HomeIcon color="black" className="w-6" />
          <div className="block">Home</div>
        </Link>
        <NavLinks />
      </div>
      <ThemeToggle showThemeName />
      <span className="text-sm font-medium text-black hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <LogoutButton
          buttonText="Sign out"
          icon={<Power size={15} className="w-6" />}
        />
      </span>
    </div>
  )
}
