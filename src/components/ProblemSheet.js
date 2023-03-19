import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FirstTour from './FirstTour'
import Loading from './Loading'

const ProblemSheet = (props) => {
    const API_URL = process.env.REACT_APP_API_URL

    // eslint-disable-next-line 
    useEffect(() => {
        getProblemListFromGithub(`${API_URL}/get-all-files`)
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
                                        <td>${'Not Attemped'}</td>
                                        <td>${response.tag}</td>
                                        <td>${response.difficulty}</td>
                                    </tr>`

                    document.getElementById('loading').style.display = "none"
                    problem_table.innerHTML += table_row_html_raw
                }
            )
    }

    return (
        <div className='m-5 d-flex flex-column'>
            <FirstTour />
            <h2 style={{color: `${props.text_color}`}}>Practice from the problems below.</h2>
            {/* DROP DOWN MENU FOR FILTERS */}
            {/* <Filters/> */}
            <table className="table bg-dark">
                <thead style={{ backgroundColor: "#ececec" }}>
                    <tr className="bg-dark text-light">
                        <th scope="col">#</th>
                        <th scope="col">Problem Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Difficulty</th>
                    </tr>
                </thead>
                <tbody className="bg-dark text-light" id='problem-body'></tbody>
            </table>

            <Loading />
            <button style={{ width: "12rem" }} className='btn btn-primary'><Link style={{ color: "white" }} to={"https://forms.gle/mXteKaSkMoRQGLRw6"}>Contribute A Problem</Link></button>
        </div>
    )
}

export default ProblemSheet