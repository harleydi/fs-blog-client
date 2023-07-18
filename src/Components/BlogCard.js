import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Favorites from '../Pages/Favorites'

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const { favorites, setFavorites } = useOutletContext()

  const [favorited, setFavorited] = useState(false)
  
  const handleFavorites = () => {
    setFavorites([...favorites, blog]) 
  }

  console.log(favorites)

  return (
    <div style={{ border: '2px solid black', width: '30rem'}}>
        <h1>{blog.title}</h1>
        <h6>{blog.author}</h6>
        <p>{blog.createdAt}</p>
        <p>{blog.content}</p>
        <button onClick={handleFavorites}>Add to favorites</button>
        <button onClick={() => navigate(`/edit/${blog._id}`)}>Edit Blog</button>
    </div>
  )
}

export default BlogCard