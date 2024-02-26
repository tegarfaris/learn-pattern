import React from 'react'

const AuthLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main>
    <header>
      <p>Ini Auth</p>
    </header>
    <section>{children}</section>
    </main>
  )
}

export default AuthLayout