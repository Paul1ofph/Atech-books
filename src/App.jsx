
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from "./Pages/HomePage"
import BooksPage from './Pages/booksPage'
import NotfoundPage from './Pages/NotfoundPage'
import BookPage, {bookLoader} from './Pages/bookPage'
import AddBookPage from './Pages/AddbookPage'
import EditBookPage from './Pages/EditbookPage'



const App = () => {
  // Add new book
  const addBook = async (newBook) =>{
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook),
    })
    return
  }

  // Delete book
  const deleteBook = async (id) => {
    const res = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
    return  
  }

  // Update Book
  const updateBook = async (book) => {
    const res = await fetch(`/api/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book),
    })
    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    {/* <Route path='/HomePage' element={<HomePage />} /> */}
    <Route index element={<HomePage />} />
    <Route path='/books' element={<BooksPage />} />
    <Route path='/add-book' element={<AddBookPage addBookSubmit={addBook} />} />
    <Route path='/edit-book/:id' element={<EditBookPage updateBookSubmit={updateBook} />} loader={bookLoader} />
    <Route path='/books/:id' element={<BookPage deleteBook={deleteBook} />} loader={bookLoader} />
    <Route path='*' element={<NotfoundPage/>} />
    </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App