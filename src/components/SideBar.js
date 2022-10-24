import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
        <ul>
          <li>
            <Link to="/">Get all products</Link>
          </li>

          <li>
            <Link to="/categories">Get all Categories</Link>
          </li>
        </ul>
    </>
  )
}

export default SideBar