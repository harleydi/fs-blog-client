import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Blogs = () => {
  const { blogs } = useOutletContext()
  const { data } = blogs
  console.log(blogs) 
  return (
    <div>
        Blogs
        {blogs.success && (
            <div>
                {data.map((blog) => {
                    return <p>{blog.title}</p>
                })}
            </div>
        )}
    </div>
  )
}

export default Blogs