import React from 'react'

const Alert = () => {
    return (
        <div className="m-4 alert alert-warning alert-dismissible fade show" role="alert">
             It's an alpha preview version and need your <a href='https://tally.so/r/nPpOa1' target={'_blank'}>feedback</a>.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert