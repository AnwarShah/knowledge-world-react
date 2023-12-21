import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // Remove bookmarks from list
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-x-4'>
        <Blogs 
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} reading_time={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
