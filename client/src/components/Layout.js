import React from 'react'
import Header from './Header'
// import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
const Layout = ({children}) => {
  return (
    <>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    <Header/>
    
    <main  style={{minHeight:'80vh'}}>
      {children}
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Layout
