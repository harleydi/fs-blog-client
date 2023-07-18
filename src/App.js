import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [blogs, setBlogs] = useState([])
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const [sortDate, setSortDate] = useState('latest')
  const [sortedBlogs, setSortedBlogs] = useState([])
  const [favorites, setFavorites] = useState([])


  const url = process.env.REACT_APP_URL_ENDPOINT

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`)
      const data = await response.json()
      setBlogs(data)
    }
    getData()
  }, [url, shouldRefresh])

  useEffect(() => {
    if (blogs.success) {
      const arrayCopy = [...blogs.data]
      if (sortDate === 'latest') {
        const sortBlogs = arrayCopy.sort((a, b) => {
          return new Date(b.createAt) - new Date(a.createAt)
        })
        setSortedBlogs(sortBlogs)
      } else {
        const sortBlogs = arrayCopy.sort((a, b) => {
          return new Date(a.createAt) - new Date(b.createAt)
        })
        setSortedBlogs(sortBlogs)
      }
    }
  }, [blogs, sortDate])

  const handleNewBlog = async (blog) => {
    const response = await fetch(`${url}/blogs/new-blog`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(blog)
    })
    console.log(response)
    const data = await response.json()
    setShouldRefresh(false)
    console.log('blog', blog)
  }

  return (
    <div className="App">
      <Navbar />
      <Outlet context={{ blogs, handleNewBlog, setShouldRefresh, sortedBlogs, favorites, setFavorites }} />
    </div>
  );
}

export default App;
