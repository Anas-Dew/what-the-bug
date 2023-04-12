import React from 'react'

const SearchAndSort = () => {
    return (
        <div style={{background: "#33404C"}} className='rounded-top p-3 d-flex justify-content-between'>
            <form class="d-flex" role="search">
                <input style={{background: "#ffffff00", color: "white"}} class="form-control rounded" type="search" placeholder="Search questions" aria-label="Search" />
            </form>

            <button type="button" class="btn btn-secondary rounded">Sort & filter</button>
        </div>
    )
}

export default SearchAndSort