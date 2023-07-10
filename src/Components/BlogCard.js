import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <div style={{ border: '2px solid black', width: '30rem'}}>
        <h1>{blog.title}</h1>
        <h6>{blog.author}</h6>
        <p>{blog.createdAt}</p>
        <p>{blog.content}</p>
    </div>
  )
}

export default BlogCard