import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'

const Favorites = () => {
  const { favorites } = useOutletContext()
  return (
    <div>
        <h1>Favorites</h1>
        {favorites && favorites.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  )
}

export default Favorites