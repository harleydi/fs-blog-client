import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([])

  const url = process.env.REACT_APP_URL_ENDPOINT

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`)
      const data = await response.json()
      setBlogs(data)
    }
    getData()
  }, [url])

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
    console.log("data", data)
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Outlet context={{ blogs, handleNewBlog }} />
    </div>
  );
}

export default App;
