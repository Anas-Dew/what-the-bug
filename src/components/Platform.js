import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
// import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';
const Platform = (props) => {
    const [Output, setOutput] = useState('')
    const [CurrentCode, setCurrentCode] = useState(``)
    const codeProcessor = async(url = 'http://anasdew.pythonanywhere.com/execute', code) => {
        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "code": `${code}`
            })
        })
        .then(response => response.json()).then(
            data => {
                let response = data;
                console.log(response);
                setOutput(response['output'].toString().slice(2, -1).replace(/\\n/g, "\n"))
            }
        )
    }

    const sendCode = () => {
        console.log(CurrentCode);
        codeProcessor('http://anasdew.pythonanywhere.com/execute', CurrentCode)
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        setCurrentCode(value)
    }, []);

    let example = `print("Hi from WhatTheBug")`

    return (
        <div className='m-5'>
            <div>
                <h2>Problem Name Goes Here</h2>
                <p>The description of the problem goes here in a brief.</p>
            </div>

            <div className='d-flex flex-column '>
                <CodeMirror
                    value={example}
                    height="20rem"
                    extensions={[python()]}
                    onChange={onChange}
                    // theme={solarizedLight}
                    id="code-view"
                />
                <div className='d-flex align-self-end'>
                    {/* <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative' }} type="submit" className=" btn btn-secondary"><Link style={{ color: "white" }} className="text-decoration-none" to={"/success"}>Run</Link></button> */}
                    <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative' }} type="submit" className=" btn btn-secondary">Run</button>
                    <button style={{ bottom: '3rem', right: "1rem", position: 'relative', marginLeft: "0.5rem" }} type="submit" className="btn btn-success"><Link style={{ color: "white" }} className="text-decoration-none" to={"/success"}>Submit</Link></button>
                </div>
                <div>
                    Output : {Output}
                </div>
            </div>
        </div>
    )
}

export default Platform