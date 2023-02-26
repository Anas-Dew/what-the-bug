import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
// import { solarizedLight, solarizedDark } from '@uiw/codemirror-theme-solarized';
const Platform = (props) => {
    const navigate = useNavigate();
    let nameAndmain = `
if __name__ == "__main__":
    # Unit tests
    try:
        assert add_numbers(2, 2) == 4
        assert add_numbers(-2, 2) == 0
        assert add_numbers(0, 0) == 0
        assert add_numbers(3.14, 2.71) == 5.85
        print("Pass")
    except AssertionError:
        print("Unit test failed")`

    let example = `def add_numbers(a, b):
  return a - b
    ` + nameAndmain
    // eslint-disable-next-line
    const getProblemDetails = async () => { }
    let problem_response = {
        "title": "Two Sum",
        "description": "This is an example description. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
        "test_cases": { "case1": "solution1", "case2": "solution2", "case3": "solution3" },
        "bug_code": example
    }
    const [Output, setOutput] = useState('')
    const [CurrentCode, setCurrentCode] = useState(problem_response.bug_code)

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
                    let newOutput = response['output'].toString().slice(2, -1).replace(/\\n/g, "\n")
                    setOutput(newOutput)

                    // ON PASS, REDIRECT.
                    const lol = newOutput.replace(/\s+/g, "").toLowerCase()
                    if (lol === "pass") {
                        document.getElementById('success-alert').style.display = "block"
                        setTimeout(() => {
                            navigate('/success')
                        }, 3000)
                    } else {

                    }
                }
            )
    }
    const sendCode = () => {
        console.log(CurrentCode);
        setOutput('Running...')
        codeProcessor('https://anasdew.pythonanywhere.com/execute', CurrentCode)
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        setCurrentCode(value)
    }, []);

    // const onBeforeChange = (editor, data, value) => {
    //     const { line } = editor.getCursor();
    //     if (line === 1) {
    //         // Disable changes to the second line
    //         const newValue = value.split('\n');
    //         newValue[line] = CurrentCode.split('\n')[line];
    //         setCurrentCode(newValue.join('\n'));
    //         editor.setValue(newValue.join('\n'));
    //         return;
    //     }
    //     // Allow all other changes
    //     setCurrentCode(value);
    // };


    return (
        <div className='m-3'>
            <div style={{display: "none"}} id="success-alert" className="alert alert-success" role="alert">
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
                <div style={{ fontFamily: "monospace" }}>
                    Output : {Output}
                </div>
            </div>
        </div>
    )
}

export default Platform