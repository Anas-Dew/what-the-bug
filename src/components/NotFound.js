import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='m-4 d-flex flex-column align-items-center'>
            <h2>Wherefore Art Thou Page?</h2>
            <p id='not-found-paragraph'>Oh! Fair user, what sorrow doth befall thee!
                Forsooth, thy quest hath led thee astray,
                And lo, a page not found doth stand in thy way.
                <br></br>
                <br></br>
                Alas, the link thou seeketh doth not exist,
                No matter how thou search or how thou persist,
                Forsooth, 'tis a shame, a grievous error,
                That thou art denied the page's fair terror.

                <br></br>
                <br></br>
                Thus, take heart, and search again with care,
                For on this vast web, there are pages to spare,
                And mayhap, in thy quest for knowledge anew,
                A page of wisdom and truth may soon ensue.</p>
                <Link to={"/"}>Go Home</Link>
        </div>
    )
}

export default NotFound