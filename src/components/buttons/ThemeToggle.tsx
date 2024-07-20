'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCallback, useMemo } from 'react'

type ThemeToggleProps = {
  side?: 'left' | 'top' | 'right' | 'bottom'
  showThemeName?: boolean
}

const ThemeToggle = ({ side, showThemeName }: ThemeToggleProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const Icon = useMemo(() => {
    if (resolvedTheme === 'light' || theme === 'light') {
      return (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )
    }
    return (
      <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    )
  }, [theme, resolvedTheme])

  return (
    <Button
      className="justify-start gap-2"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="outline"
      size={showThemeName ? 'default' : 'icon'}
    >
      {Icon}
      <span className={showThemeName ? 'block' : 'sr-only'}>{theme ?? ''}</span>
    </Button>
  )

  // return (
  //   <DropdownMenu>
  //     <DropdownMenuTrigger asChild>
  //       <Button variant="outline" size="icon">
  //         <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //         <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //         <span className="sr-only">Toggle theme</span>
  //       </Button>
  //     </DropdownMenuTrigger>
  //     <DropdownMenuContent align="start" side={side}>
  //       <DropdownMenuItem onClick={() => setTheme('light')}>
  //         Light
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme('dark')}>
  //         Dark
  //       </DropdownMenuItem>
  //       <DropdownMenuItem onClick={() => setTheme('system')}>
  //         System
  //       </DropdownMenuItem>
  //     </DropdownMenuContent>
  //   </DropdownMenu>
  // )
}

export default ThemeToggle
