import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/blog-form"}>Create Blog</Link>
        <Link to={"/favorites"}>Favorites</Link>
    </div>
  )
}

export default Navbar