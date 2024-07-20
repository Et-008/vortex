'use client'

import React, { useEffect, useState } from 'react'
import BackdropComponent from './Backdrop'
import LoaderComponent from './ui/loader'
import { EventEmitter } from '../utils/eventEmitter'

export default function AppLoadingState() {
  const [loading, setLoading] = useState<boolean>(false)

  function handleLoadingState({ showLoader }: any) {
    if (typeof showLoader === 'boolean') setLoading(showLoader)
  }

  useEffect(() => {
    EventEmitter.subscribe('Apploader', handleLoadingState)
    return () => {
      EventEmitter.unsubscribe('Apploader')
    }
  }, [])

  if (!loading) {
    return null
  }

  return (
    <BackdropComponent>
      <LoaderComponent />
    </BackdropComponent>
  )
}
