import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [time, setTime] = useState(0);

  const handleBookmark = blog => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  const handleTime = (readTime, id) => {
    setTime(time+readTime);
    const remainingBookmarks = bookmark.filter(item=>item.id!==id);
    setBookmark(remainingBookmarks);
  } 


  return (
    <>
      <Header></Header>
      <div className='mx-auto container flex gap-6'>
        <Blogs handleTime={handleTime} handleBookmark={handleBookmark}></Blogs>
        <Bookmarks time={time} bookmarks={bookmark}></Bookmarks>
      </div>
    </>
  )
}


export default App
