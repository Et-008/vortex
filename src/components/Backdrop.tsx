import React from 'react'

export default function BackdropComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed absolute z-50 h-screen h-screen w-full w-full bg-black opacity-50 ">
      {children}
    </div>
  )
}
