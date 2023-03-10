/* Importing the React library. */
import React from 'react'

const Footer = () => {
    return (
        <div className='d-flex justify-content-center'>
            &copy; {new Date().getFullYear()} Anas Raza
        </div>
    )
}

export default Footer