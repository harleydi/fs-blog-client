import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'

const Blogs = () => {
  const { sortedBlogs, blogs } = useOutletContext()
  const { data } = blogs
    console.log(sortedBlogs)
  return (
    <div>
        <h1>Blogs</h1>
        <select>
          <option value='latest'>Latest</option>
          <option value='earliest'>earliest</option>
        </select>
        {blogs.success && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {sortedBlogs.map((blog) => {
                    return <BlogCard key={blog._id} blog={blog} />
                })}
            </div>
        )}
    </div>
  )
}

export default Blogs