import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Filters from './platform_components/Filters'
const ProblemSheet = () => {
    return (
        <div className='m-5'>
            <h2>Practice from the problems below.</h2>
            {/* DROP DOWN MENU FOR FILTERS */}
            <Filters/>
            <table className="table">
                <thead style={{backgroundColor: "#ececec"}}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Problem Name</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Two Sum</td>
                        <td>Array</td>
                        <td>Easy</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Median of Two Sorted Arrays</td>
                        <td>Array</td>
                        <td>Hard</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Longest Palindromic Substring</td>
                        <td>String</td>
                        <td>Medium</td>
                    </tr>
                </tbody>
            </table>

            <Footer/>
            <button className='btn btn-primary'><Link style={{ color: "white" }} to={"/practice"}>Practice</Link></button>
        </div>
    )
}

export default ProblemSheet