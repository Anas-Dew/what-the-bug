import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { Buffer } from 'buffer';
// import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';
const Platform = (props) => {
    const API_URL = process.env.REACT_APP_API_URL
    const [ResponseFromGithub, setRsponseFromGithub] = useState('')
    const {problem_unique_code} = useParams();
    var navigate = useNavigate();
 
    let problem_response = {
        "title": ResponseFromGithub.problem_name || 'Foo Bar',
        "description": ResponseFromGithub.problem_description || 'Lots of foo and lots of bar....',
        "bug_code": Buffer.from(`${ResponseFromGithub.problem_code}`, 'base64').toString('utf-8') || "Nope",
        "test_case": Buffer.from(`${ResponseFromGithub.test_case}`, 'base64').toString('utf-8') || "Pee"
    }
    const [CurrentCode, setCurrentCode] = useState(problem_response.bug_code)
    const [Output, setOutput] = useState('')
    
    useEffect(() => {
        getCodeFromGithub(`${API_URL}/read-file/Problems/${problem_unique_code}.json`)
      }, []);
    const getCodeFromGithub = async (url = `${API_URL}/read-file/Problems/two_sum.json`) => {
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
                    // console.log(response);
                    setRsponseFromGithub(JSON.parse(response))
                }
            )
    }

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
                    // console.log(response);
                    if (response['output'] === "The code has bugs.") {
                        setOutput(response['output'])
                    } else {
                        let newOutput = response['output'].toString().slice(2, -1).replace(/\\n/g, "\n")
                        setOutput(newOutput)
                        const lol = newOutput.replace(/\s+/g, "").toLowerCase()
                        if (lol === "pass") {
                            document.getElementById('success-alert').style.display = "block"
                            setTimeout(() => {
                                navigate('/success')
                            }, 3000)
                        } else { }
                    }

                    // ON PASS, REDIRECT.
                }
            )
    }
    const sendCode = () => {
        console.log("Here is the complete code : \n\n\n" + CurrentCode+problem_response.test_case);
        setOutput('Running...')
        codeProcessor('https://anasdew.pythonanywhere.com/execute', CurrentCode+problem_response.test_case)
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        setCurrentCode(value)
    }, []);


    return (
        <div className='m-3'>
            <div style={{ display: "none" }} id="success-alert" className="alert alert-success" role="alert">
                Congratulations buddy, you caught the bug!
            </div>
            <div>
                <h2>{problem_response.title}</h2>
                <p>{problem_response.description}</p>
            </div>

            <div className='d-flex flex-column '>
                <CodeMirror
                    value={problem_response.bug_code}
                    height="20rem"
                    extensions={[python()]}
                    onChange={onChange}
                    // theme={solarizedLight}
                    id="code-view"
                // onBeforeChange={onBeforeChange}
                />
                <div className='d-flex align-self-end'>
                    <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative' }} type="submit" className=" btn btn-secondary">Run</button>
                    <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative', marginLeft: "0.5rem" }} type="submit" className="btn btn-success"><Link style={{ color: "white" }} className="text-decoration-none" to={"/success"}>Submit</Link></button>
                </div>
                {/* <TestCase /> */}
                <div style={{ fontFamily: "monospace" }}>
                    Output : {Output}
                </div>
            </div>
        </div>
    )
}

export default Platform