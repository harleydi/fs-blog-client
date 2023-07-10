import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'

const Blogs = () => {
  const { blogs } = useOutletContext()
  const { data } = blogs
//   console.log(blogs) 
    
  return (
    <div>
        Blogs
        {blogs.success && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {data.map((blog) => {
                    return <BlogCard key={blog._id} blog={blog} />
                })}
            </div>
        )}
    </div>
  )
}

export default Blogs