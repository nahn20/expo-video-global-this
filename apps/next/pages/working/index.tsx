'use client'
import { ensureNativeModulesAreInstalled } from 'expo-modules-core/build/ensureNativeModulesAreInstalled'
import { lazy } from 'react'
ensureNativeModulesAreInstalled()

const LazyVideo = lazy(() => import('../../src/components/Video'))

const Page = () => {
  return (
    <div>
      <div>Working page (with lazy loading and native module init)</div>
      <LazyVideo />
    </div>
  )
}
export default Page
