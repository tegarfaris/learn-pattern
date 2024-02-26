import React, { ReactNode } from 'react'

const DashboardLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <>
    <main>
        <header>layout dashboard</header>
        <div>{children}</div>
    </main>
    </>
  )
}

export default DashboardLayout