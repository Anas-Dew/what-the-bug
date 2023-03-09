import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FirstTour from './FirstTour'
import Footer from './Footer'
import Loading from './Loading'

const ProblemSheet = () => {
    const API_URL = process.env.REACT_APP_API_URL

    // eslint-disable-next-line 
    useEffect(() => {
        getProblemListFromGithub(`${API_URL}/get-all-files`)
        // placeEachProblemOnTable()

    }, []);

    const getProblemListFromGithub = async (url = `${API_URL}/get-all-files`) => {
        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()).then(
                data => {
                    let response = data;
                    // console.log(response.files);
                    // setResponseFromGithub(response.files)
                    for (const iterator of response.files) {
                        getProblemDetailsFromGithub(`${API_URL}/read-file/Problems/${iterator}`)
                    }
                }
            )
    }

    const getProblemDetailsFromGithub = async (url = `${API_URL}/read-file/Problems/two_sum.json`) => {
        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()).then(
                data => {
                    let response = data;
                    response = JSON.parse(response)
    
                    let problem_table = document.getElementById('problem-body');
                    const table_row_html_raw = `<tr>
                            <th scope="row">0</th>
                                        <td><a href='/practice/${response.code_name}'>${response.problem_name}</a></td>
                                        <td>${response.tag}</td>
                                        <td>${response.difficulty}</td>
                                    </tr>`
            
                    document.getElementById('loading').style.display = "none"
                    problem_table.innerHTML += table_row_html_raw
                }
            )
    }
    // const placeEachProblemOnTable = async () => {
    //     // getProblemDetailsFromGithub(`http://192.168.43.201:5000/read-file/Problems/two_sum.json`)
    //     let problem_table = document.getElementById('problem-body');
    //     const table_row_html_raw = `<tr>
    //                                     <th scope="row">${0}</th>
    //                                     <td><Link to={'/practice/${ResponseFromGithub[0]}'}>${nthProblemDetails.problem_name}</Link></td>
    //                                     <td>${nthProblemDetails.difficulty}</td>
    //                                     <td>${nthProblemDetails.tag}</td>
    //                                 </tr>`
    //     console.log(table_row_html_raw);
    //     problem_table.innerHTML = + table_row_html_raw
    // }

    return (
        <div className='m-5 d-flex flex-column'>
            <FirstTour/>
            <h2>Practice from the problems below.</h2>
            {/* DROP DOWN MENU FOR FILTERS */}
            {/* <Filters/> */}
            <table className="table">
                <thead style={{ backgroundColor: "#ececec" }}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Problem Name</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Difficulty</th>
                    </tr>
                </thead>
                <tbody id='problem-body'></tbody>
            </table>

            <Loading />
            <Footer />
            <button style={{display: "none"}} className='btn btn-primary'><Link style={{ color: "white" }} to={"/practice"}>Contribute A Problem</Link></button>
        </div>
    )
}

export default ProblemSheet