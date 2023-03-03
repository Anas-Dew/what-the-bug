import React from 'react'

const TestCase = (props) => {
  return (
    <div id='test-case-div' className='d-flex flex-column mb-3'>
      <div id='test-case-button-div'>
        <button>Case 1</button>
        <button>Case 2</button>
        <button>Case 3</button>
        <button>+</button>
      </div>
      <div style={{ width: "25rem", marginLeft: "1rem" }} className="mt-4">
        <div className="input-group">
          <span style={{ height: "40px" }} className="input-group-text">nums=</span>
          <textarea style={{ height: "40px" }} className="form-control" aria-label="Input">2, 2</textarea>
        </div>
      </div>
    </div>

  )
}

export default TestCase


{/* <div className="test_button">
          <button>Case 1</button>
          <span onClick={()=> {removeCase(1)}} className="button__badge">x</span>
        </div>
        <div className="button">
          <button>Case 2</button>
          <span className="button__badge">x</span>
        </div>
        <div className="button">
          <button>Case 3</button>
          <span className="button__badge">x</span>
        </div> */}