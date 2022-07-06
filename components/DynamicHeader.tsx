import dynamic from 'next/dynamic'

export const DynamicHeader = dynamic(() => import('../components/Header'), {
  ssr: false,
})