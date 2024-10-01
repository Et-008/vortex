import React, { ReactElement } from 'react'
import { omit } from 'lodash'

export default function ContactUsPage(): React.ReactElement[] {
  const devs = [
    {
      name: 'Arun Elanthamil V P',
      email: 'arunet008@gmail.com',
      mobile: '882579642',
      profession: 'Frontend developer',
    },
  ]

  return devs.map((dev) => {
    return (
      <div
        key={dev.email}
        className="card flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
      >
        <span className="card-title">{dev?.profession}</span>
        {convertObjectToReactElement(omit(dev, 'profession'))}
      </div>
    )
  })
}

function convertObjectToReactElement(targetObject: Object): ReactElement[] {
  const reactElementsArray = []

  for (const [key, value] of Object.entries(targetObject)) {
    reactElementsArray.push(<div>{`${key}: ${value}`}</div>)
  }

  return reactElementsArray
}
