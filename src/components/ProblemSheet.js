import React from 'react'
import { Link } from 'react-router-dom'
const ProblemSheet = () => {
    return (
        <div className='m-5'>
            <h2>Practice from the problems below.</h2>
            <p>Hi</p>
            <ul class="list-group m-4">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
            <button className='btn btn-primary'><Link style={{ color: "white" }} to={"/practice"}>Practice</Link></button>
        </div>
    )
}

export default ProblemSheet