'use client'

import React, { useEffect, useState } from 'react'
import ReactGridLayout, { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Image from 'next/image'
import _ from 'lodash'

const GridLayout = WidthProvider(Responsive)

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'

interface Layout {
  /**
   * A string corresponding to the component key.
   * Uses the index of components instead if not provided.
   */
  i: string

  /**
   * X position in grid units.
   */
  x: number

  /**
   * Y position in grid units.
   */
  y: number

  /**
   * Width in grid units.
   */
  w: number

  /**
   * Height in grid units.
   */
  h: number

  /**
   * Minimum width in grid units.
   */
  minW?: number | undefined

  /**
   * Maximum width in grid units.
   */
  maxW?: number | undefined

  /**
   * Minimum height in grid units.
   */
  minH?: number | undefined

  /**
   * Maximum height in grid units.
   */
  maxH?: number | undefined

  /**
   * set by DragEvents (onDragStart, onDrag, onDragStop) and ResizeEvents (onResizeStart, onResize, onResizeStop)
   */
  moved?: boolean | undefined

  /**
   * If true, equal to `isDraggable: false` and `isResizable: false`.
   */
  static?: boolean | undefined

  /**
   * If false, will not be draggable. Overrides `static`.
   */
  isDraggable?: boolean | undefined

  /**
   * If false, will not be resizable. Overrides `static`.
   */
  isResizable?: boolean | undefined

  /**
   * By default, a handle is only shown on the bottom-right (southeast) corner.
   * Note that resizing from the top or left is generally not intuitive.
   */
  resizeHandles?: ResizeHandle[] | undefined

  /**
   * If true and draggable, item will be moved only within grid.
   */
  isBounded?: boolean | undefined
}

interface Layouts {
  [P: string]: Layout[]
}

interface Component {
  id: string
  name: string
  img: string
}

export default function DashBoard() {
  const [layout, setlayout] = useState<Layout[]>()
  const [components, setComponents] = useState<Component[]>([])

  function handleBreakPointChange(newBreakpoint: string, newCols: number) {
    console.log('newBreakpoint', newBreakpoint)
    console.log('newCols', newCols)
  }

  function handleDropChange(layout: Layout[], item: Layout, e: Event) {
    console.log('e', e)
    console.log('item', item)
    console.log('layout', layout)
  }

  function handleLayoutChange(currentLayout: Layout[], allLayouts: Layouts) {
    setlayout(currentLayout)
  }

  useEffect(() => {
    fetch('/mockApiData.json')
      .then((response) => {
        return response.json()
      })
      .then((dashBoardData) => {
        if (dashBoardData) {
          setlayout(dashBoardData?.data?.layout)
          setComponents(dashBoardData?.data?.components)
        }
      })
  }, [])

  return (
    <GridLayout
      className="layout"
      // layout={layout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      width={1200}
      isDraggable
      isRearrangeable
      isResizable
      onDrop={handleDropChange}
      onBreakpointChange={handleBreakPointChange}
      onLayoutChange={handleLayoutChange}
      compactType={null}
    >
      {components?.map((component) => {
        const layoutCoords: Layout = layout?.find((l) => l?.i === component.id)
        const { x, y, h, w, i } = layoutCoords
        return (
          <div
            className="grid-card"
            id={component?.id}
            key={component?.id}
            data-grid={{ x: x, y: y, h: h, w: w, i: i }}
          >
            <Image
              src={`/${component?.img}`}
              width={1000}
              height={760}
              className="block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        )
      })}
    </GridLayout>
  )
}
