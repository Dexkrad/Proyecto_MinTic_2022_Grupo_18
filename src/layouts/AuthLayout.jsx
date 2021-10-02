import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default AuthLayout
