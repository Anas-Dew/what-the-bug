/* Importing the React library. */
import React from 'react'

const Footer = (props) => {
    return (
        <div  style={{color: `${props.text_color}`}} className='d-flex justify-content-center'>
            &copy; {new Date().getFullYear()} Anas Dew
        </div>
    )
}

export default Footer