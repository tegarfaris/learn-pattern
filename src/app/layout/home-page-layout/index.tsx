import Navbar from '@/components/navbar'
import React from 'react'

const HomePageLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main>
      <Navbar />
      <header>homepage layout</header>
      <section>{children}</section>
    </main>
  )
}

export default HomePageLayout