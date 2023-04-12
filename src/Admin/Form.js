import React from 'react'

const Form = () => {
    return (
        <div className='m-5'>
            <h1>Post a problem</h1>
            <p>Thanks for choosing to contribute a problem to Project WTB.</p>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="title" />
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" />
                </div>

                <div class="mb-3">
                    <label for="code-no-bug" class="form-label">Code Without Bug(s)</label>
                    <code lang='python' contentEditable={true} class="form-control" id="code-no-bug">
                        # Add python code here
                    </code>
                </div>

                <div class="mb-3">
                    <label for="code-bug" class="form-label">Code With Bug(s)</label>
                    <code lang='python' contentEditable={true} class="form-control" id="code-bug">
                        # Add python code here
                    </code>
                </div>

                <div class="mb-3">
                    <label for="test-case" class="form-label">Test cases</label>
                    <code lang='python' contentEditable={true} class="form-control" id="test-case">
                        # Add test cases here (using assert)
                    </code>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Your email (to contact, just in case)</label>
                    <input type='email' class="form-control" id="email"/>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="reviewed" />
                    <label class="form-check-label" for="reviewed">I've reviewed and tested the code.</label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form