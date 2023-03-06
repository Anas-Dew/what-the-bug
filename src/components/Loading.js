import React from 'react'
import Loading_gif from '../loading.gif'

const Loading = () => {
  return (
    <img id='loading' className='center' style={{scale: "0.50"}} src={Loading_gif}/>
  )
}

export default Loading