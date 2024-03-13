import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = blog => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='mx-auto container flex gap-6'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmark}></Bookmarks>
      </div>
    </>
  )
}


export default App
