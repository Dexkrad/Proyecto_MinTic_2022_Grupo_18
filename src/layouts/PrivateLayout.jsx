import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'


const PrivateLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default PrivateLayout
