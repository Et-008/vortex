'use client'

import { DashboardIcon, FileIcon, PersonIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
  // {
  //     name: 'Invoices',
  //     href: '/dashboard/invoices',
  //     icon: FileIcon,
  // },
  { name: 'User', href: '/dashboard/user', icon: PersonIcon },
]

export default function NavLinks() {
  const pathName = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 overflow-hidden p-3 text-sm font-medium hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === link.href,
                'text-black': pathName !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
