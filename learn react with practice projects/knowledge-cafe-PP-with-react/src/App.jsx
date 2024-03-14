import { useState } from "react"
import Blogs from "./components/blogs/Blogs"
import Bookmarks from "./components/bookmarks/Bookmarks"
import Header from "./components/header/Header"

function App() {


  const [bookmarks, setBookmarks] = useState([])
  function handleAddToBookmark(blog) {
    // console.log('i am ready to add')
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  // console.log(bookmarks)
  return (
    <>
      <div>
        <Header></Header>
        <div className="md:flex md:m-10 gap-4 max-w-6xl">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
