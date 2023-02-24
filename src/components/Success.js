import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div style={{flexWrap: "wrap-reverse"}} className='m-5 d-flex align-content-center flex-column'>
      <h2>Voila! 🍷</h2>
      <p>You caught the bug!.</p>
      <div>
        <div><iframe src="https://giphy.com/embed/o75ajIFH0QnQC3nCeD" className="giphy-embed"/></div>
      </div>
      <button className='btn btn-primary'><Link style={{textDecoration: "none", color: "white"}} to={"/"}>Catch Next Bug</Link></button>
    </div>
  )
}

export default Success