'use client'

import React, { useCallback } from 'react'

export const PackagesComponent = () => {
  const purchase = useCallback(async (price: number) => {
    const { url } = await (
      await fetch(`http://localhost:3000/api/prepare?price=${price}`)
    ).json()

    window.location.href = url
  }, [])

  return (
    <div className="max-w-55 mt-16 w-full">
      <h1 className="text-center text-6xl font-bold max-sm:text-5xl">
        Packages
      </h1>
      <div className="flex max-sm:flex-col max-sm:space-y-4 sm:space-x-8">
        <div className="mt-14 w-full flex-1 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 text-xl">
          <div className="text-[#4d66e5]">Startup</div>
          <div className="my-5 text-6xl font-light">$0</div>
          <ul>
            <li>Track 3 apps max</li>
          </ul>
          <button
            onClick={() => purchase(600)}
            className="my-5 w-full rounded-3xl bg-[#4E67E5] p-5 text-xl text-black transition-all hover:bg-[#8a9dfc] max-sm:p-2 max-sm:text-lg"
          >
            Purchase
          </button>
        </div>
        <div className="mt-14 w-full flex-1 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 text-xl">
          <div className="text-[#9967FF]">Growth</div>
          <div className="my-5 text-6xl font-light">$100</div>
          <ul>
            <li>Track upto 8 apps</li>
          </ul>
          <button
            onClick={() => purchase(1200)}
            className="my-5 w-full rounded-3xl bg-[#9966FF] p-5 text-xl text-black transition-all hover:bg-[#BB99FF] max-sm:p-2 max-sm:text-lg"
          >
            Purchase
          </button>
        </div>
        <div className="mt-14 w-full flex-1 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-10 text-xl">
          <div className="text-[#F7E16F]">Corporate</div>
          <div className="my-5 text-6xl font-light">$300</div>
          <ul>
            <li>Track 20+ apps</li>
          </ul>
          <button
            onClick={() => purchase(1800)}
            className="my-5 w-full rounded-3xl bg-[#F7E16F] p-5 text-xl text-black transition-all hover:bg-[#fdf2bb] max-sm:p-2 max-sm:text-lg"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
}
