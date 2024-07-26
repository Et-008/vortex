import React from 'react'
import { PackagesComponent } from '@/components/pricing/PackagesComponent'
import AuthButton from '@/components/AuthButton'

const Index = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      <PackagesComponent />
    </div>
  )
}

export default Index
