import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

const Header=() => {
    return (
        <div className ="topnav">
            <a className ="logo" href="/">Watch Space</a>
            <div className ="search-container">
                <form>
                    <Link smooth to="#form">Add Movies</Link>
                    <input type="type" placeholder ="Search.." name="search"></input>
                    <button type ="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Header
