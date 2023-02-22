import React from 'react'
import { Link } from 'react-router-dom'
const Filters = () => {
  return (
    <div className='d-flex align-items-center'>
                <div className="dropdown filter-buttons">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Difficulty
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Easy</Link></li>
                        <li><Link className="dropdown-item" href="#">Medium</Link></li>
                        <li><Link className="dropdown-item" href="#">Hard</Link></li>
                    </ul>
                </div><div className="dropdown filter-buttons">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Status
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Unsolved</Link></li>
                        <li><Link className="dropdown-item" href="#">Attempted</Link></li>
                        <li><Link className="dropdown-item" href="#">Solved</Link></li>
                    </ul>
                </div><div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tag
                    </button>
                    <ul className="dropdown-menu filter-buttons">
                        <li><Link className="dropdown-item" href="#">Array</Link></li>
                        <li><Link className="dropdown-item" href="#">String</Link></li>
                        <li><Link className="dropdown-item" href="#">Linked List</Link></li>
                        <li><Link className="dropdown-item" href="#">Recursion</Link></li>
                    </ul>
                </div>
                {/* <form className="d-flex filter-buttons" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search questions" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
  )
}

export default Filters