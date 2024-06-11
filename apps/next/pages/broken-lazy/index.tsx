'use client'
import { lazy } from 'react'

const LazyVideo = lazy(() => import('../../src/components/Video'))

const Page = () => {
  return (
    <div>
      <div>Broken page (with lazy loading, missing native module init)</div>
      <LazyVideo />
    </div>
  )
}
export default Page
