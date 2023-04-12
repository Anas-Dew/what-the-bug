import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FirstTour from './FirstTour'
import Loading from './Loading'
import SearchAndSort from './key_components/SearchAndSort'
import PaginationBottom from './key_components/PaginationBottom'

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
                                        <td><a style="text-decoration: none;color: white;" href='/practice/${response.code_name}'>${response.problem_name}</a></td>
                                        <td>${response.difficulty}</td>
                                        <td>${response.tag}</td>
                                        <td>${'Not Attemped'}</td>
                                    </tr>`

                    document.getElementById('loading').style.display = "none"
                    problem_table.innerHTML += table_row_html_raw
                }
            )
    }

    return (
        <div className='m-5 d-flex flex-column'>
            <div className='d-flex justify-content-between align-content-center m-1'>
                <h2 style={{ color: `${props.text_color}` }}>PRACTICE FROM THE PROBLEMS BELOW</h2>
                <FirstTour />
            </div>
            {/* DROP DOWN MENU FOR FILTERS */}
            <SearchAndSort />
            <table className="table m-0 text-white">
                <thead style={{ backgroundColor: "#33404C", color: "white" }}>
                    <tr className="">
                        <th scope="col">#</th>
                        <th scope="col">Problem Name</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody style={{ background: "#33404C" }} className="" id='problem-body'></tbody>
            </table>
            <Loading />
            <PaginationBottom />

            <button id='contribute-button' className='btn btn-primary'><Link style={{ color: "white" }} to={"https://forms.gle/mXteKaSkMoRQGLRw6"}>+ Contribute a problem</Link></button>
        </div>
    )
}

export default ProblemSheet