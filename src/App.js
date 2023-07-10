import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [blogs, setBlogs] = useState([])
  const [shouldRefresh, setShouldRefresh] = useState(false)


  const url = process.env.REACT_APP_URL_ENDPOINT

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`)
      const data = await response.json()
      setBlogs(data)
    }
    getData()
  }, [url, shouldRefresh])

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
      <h1>Hello</h1>
      <Outlet context={{ blogs, handleNewBlog, setShouldRefresh }} />
    </div>
  );
}

export default App;
