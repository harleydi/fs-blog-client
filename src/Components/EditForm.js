import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'

const EditForm = ({ blog }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()

  const url = process.env.REACT_APP_URL_ENDPOINT
  const { id } = useParams()
  const { blogs, setShouldRefresh } = useOutletContext()
  const allBlogs = blogs.data

  useEffect(() => {
    if (allBlogs) {
        const foundBlog = allBlogs.find((blog) => blog._id === id)
        if (foundBlog) {
            setTitle(foundBlog.title)
            setContent(foundBlog.content)
        }
    }
  }, [id, blogs])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShouldRefresh(true)
    const body ={
        title,
        content
      }
    const response = await fetch(`${url}/blogs/edit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    const updatedBlog = await response.json()
    setShouldRefresh(false)
    navigate('/')
  }

  const handleDelete = async () => {
    setShouldRefresh(true)
    const response = await fetch(`${url}/blogs/delete/${id}`, {
        method: "DELETE"
    })
    const deletedBlog = await response.json()
    console.log(deletedBlog)
    navigate('/')
    setShouldRefresh(false)
  }

  return (
    <div>
        <h1>Edit Post:</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title: </label>
            <br />
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <label htmlFor='content'>Content: </label>
            <br />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <br />
            <button>Edit</button>
        </form>
        <button onClick={handleDelete}>Delete</button> <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  )
}

export default EditForm