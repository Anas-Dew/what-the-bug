import React, { useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { useState } from 'react';
import { tags as t } from '@lezer/highlight';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import { useLocation } from 'react-router-dom';
import { Buffer } from 'buffer';


const CodePlayground = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [Output, setOutput] = useState('')
    const [CurrentCode, setCurrentCode] = useState('# Run anything you want. \nprint("Hello from WTB")')

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
                    }
                }
            )
    }
    const sendCode = () => {
        if(CurrentCode.length === 0) {
            return alert("Code something!")
        }
        codeProcessor('https://anasdew.pythonanywhere.com/execute', CurrentCode)
        setOutput('Executing...')
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        setCurrentCode(value)
    }, []);

    useEffect(() => {

        const program = queryParams.get('code');
        if (program) {
            let sharedCode = Buffer.from(`${program}`, 'base64').toString('utf-8')
            setCurrentCode(sharedCode)
        }
        console.log(program);

    }, [])

    const shareCode = () => {
        let encodedCode = Buffer.from(CurrentCode).toString('base64')
        let shareLink = `${window.location.origin}${window.location.pathname}?code=${encodedCode}`
        navigator.clipboard.writeText(shareLink).then(function () { alert('Copied to clipboard!'); }, function () { });
        // createLink(shareLink)
    }

    const getCode = async (url = 'https://api.openai.com/v1/completions', query) => {


        let master_prompt = `WRITE PYTHON CODE FOR THE FOLLOWING DESCRIPTION WITH PROPER COMMENTS: ${query}`

        if (process.env.NODE_ENV === 'development') {
            console.log("Logging in dev : => " + master_prompt);
        }

        // eslint-disable-next-line
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPEN_KEY}`
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": master_prompt,
                "temperature": 0.9,
                "max_tokens": 1500,
                "top_p": 1,
                "frequency_penalty": 0,
                "presence_penalty": 0
            })
        }).then(response => response.json()).then(
            data => {
                let response = data['choices'][0]['text'];

                setCurrentCode(response)
                setAICodeStatus("")
                // for (let i = 0; i < response.length; i++) {
                //     setTimeout(() => {
                //         setQueryResponse(QueryResponse => QueryResponse + response.charAt(i));
                //     }, i * 5);
                // }
            }
        )
    }
    const createLink = (link) => {
        fetch("https://superurl.pythonanywhere.com/api/short-link", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "original_link": link,
                "link_password": "",
                "custom_handle": ""
            }),
            mode: "cors"
        })
            .then(response => {
                // if (!response.ok) {
                //     throw new Error("Network response was not ok");
                // }
                return response.json();
            })
            .then(data => {
                if (process.env.NODE_ENV !== "production") {
                    console.log(data); // Do something with the response data
                    navigator.clipboard.writeText(data).then(function () { alert('Copied to clipboard!'); }, function () { });
                }
            })
            .catch(error => {
                console.error("There was a problem with the fetch request:", error);
            });

    }
    const [AICodeStatus, setAICodeStatus] = useState("")
    const callGenerator = () => {
        if (CurrentCode === `# Run anything you want. \nprint("Hello from WTB")`) {
            return setCurrentCode("# Please provide a description of the code you wish to generate and then click on the 'magic' icon.")
        } else if (CurrentCode === "# Please provide a description of the code you wish to generate and then click on the 'magic' icon.") {
            return alert("Please provide a description of the code you wish to generate and then click on 'magic' icon.")
        }
        // console.log(CurrentCode);
        if (localStorage.getItem("ai_practice") === 'true') {
            setAICodeStatus("fa-spin-pulse")
            getCode("https://api.openai.com/v1/completions", CurrentCode)

        } else {
            setCurrentCode("# Please provide a description of the code you wish to generate and then click on the 'magic' icon.")
            localStorage.setItem("ai_practice", true)
        }

    }
    return (
        <>
            <div class="modal fade" id="ai-code-gen-modal" tabindex="-1" aria-labelledby="ai-code-gen-modal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">AI Code Writer</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group">
                                <textarea placeholder='Build a Password generator function' id='ai-query' class="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                            <button onClick={callGenerator} type="button" class="btn btn-primary">{AICodeStatus}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-3 d-flex flex-column '>
                <CodeMirror
                    value={CurrentCode}
                    height="20rem"
                    extensions={[python()]}
                    onChange={onChange}
                    theme={draculaInit({
                        settings: {
                            caret: '#c6c6c6',
                            fontFamily: 'monospace',
                        },
                        styles: [
                            { tag: t.comment, color: '#6272a4' },
                        ]
                    })}
                    id="code-view"
                // onBeforeChange={onBeforeChange}
                />
                <div className='d-flex align-self-end'>
                    {/* <button data-bs-toggle="modal" data-bs-target="#ai-code-gen-modal" style={{ bottom: '3rem', right: "1rem", position: 'relative', marginRight: "0.5rem" }} type="button" className=" btn btn-success"><abbr title='Majestic AI will generate code for you!'><i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i></abbr></button> */}
                    <button onClick={callGenerator} style={{ bottom: '3rem', right: "1rem", position: 'relative', marginRight: "0.5rem" }} type="button" className=" btn btn-success"><abbr title='Majestic AI will generate code for you!'><i class={`fa-sharp fa-solid fa-wand-magic-sparkles ${AICodeStatus}`}></i></abbr></button>


                    <button onClick={shareCode} style={{ bottom: '3rem', right: "1rem", position: 'relative', marginRight: "0.5rem" }} type="button" className=" btn btn-success"><abbr title="Don't just copy and send (or save) the code, instead, get a special link to it."><i class="fa-sharp fa-solid fa-link"></i></abbr></button>


                    <button onClick={sendCode} style={{ bottom: '3rem', right: "1rem", position: 'relative' }} type="submit" className=" btn btn-success"><abbr title='Runnn!!!'><i class="fa-sharp fa-solid fa-play"></i></abbr></button>
                </div>

                <div className='mb-5' id='output-panel'>
                    &gt; {Output}
                </div>
            </div>
        </>
    )
}

export default CodePlayground