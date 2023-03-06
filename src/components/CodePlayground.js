import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useState } from 'react';

const CodePlayground = () => {
    const [Output, setOutput] = useState('')
    const [CurrentCode, setCurrentCode] = useState('print("Hello from WhatTheBug") \n# Run anything you want.')

    const codeProcessor = async (url = 'https://anasdew.pythonanywhere.com/execute', code) => {
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
                    if (response['output'] === "The code has bugs.") {
                        setOutput(response['output'])
                    } else {
                        let newOutput = response['output'].toString().slice(2, -1).replace(/\\n/g, "\n")
                        setOutput(newOutput)
                    }

                    // ON PASS, REDIRECT.
                    // const lol = newOutput.replace(/\s+/g, "").toLowerCase()
                    // if (lol === "pass") {
                        // document.getElementById('success-alert').style.display = "block"
                    //     setTimeout(() => {
                    //         navigate('/success')
                    //     }, 3000)
                    // } else {

                    // }
                }
            )
    }
    const sendCode = () => {
        console.log(CurrentCode);
        codeProcessor('https://anasdew.pythonanywhere.com/execute', CurrentCode)
        setOutput('Running...')
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        setCurrentCode(value)
    }, []);


    return (
        <div className='m-3 d-flex flex-column '>
            <CodeMirror
                value={CurrentCode}
                height="20rem"
                extensions={[python()]}
                onChange={onChange}
                // theme={solarizedLight}
                id="code-view"
            // onBeforeChange={onBeforeChange}
            />
            <div className='d-flex align-self-end'>
                <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative' }} type="submit" className=" btn btn-success">Run</button>
                {/* <button style={{ bottom: '3rem', right: "1rem", position: 'relative', marginLeft: "0.5rem" }} type="submit" className="btn btn-success"><Link style={{ color: "white" }} className="text-decoration-none" to={"/success"}>Submit</Link></button> */}
            </div>
            <div className='mb-5' id='output-panel'>
                Output : {Output}
            </div>
        </div>
    )
}

export default CodePlayground