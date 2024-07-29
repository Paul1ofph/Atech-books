import React from 'react'
// // FETCHING USING USE-EFFECT
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Spinner from '../Components/Spinner'


// const JobPage = () => {
//     const {id} = useParams()
//     const [job, setJob] = useState(null)
//     const [loading, setLoading] = useState(true)

   
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json()
    //             setJob(data)        
    //           } catch (error) {
    //             console.log('Error fetching data', error);
    //           } finally{
    //             setLoading(false)
    //           }
    //     }

    //     fetchJob()
    // }, [])
//   return loading ? <Spinner /> : (
//     <h1>{ book.title }</h1>
//   )
// }

// export default JobPage

// // FETCHING USING USE-EFFECT END

// // FETCHING USING USE-LOADER DATA STARTS

import { useParams, useLoaderData, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const BookPage = ({deleteBook}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const book = useLoaderData()

    const onDeleteClick = (bookId) => {
        const confirm = window.confirm('Are you sure you want to delete this Book?')

        if (!confirm) return;

        deleteBook(bookId)

        toast.success('Book deleted successfully')

        navigate('/books')
    }


      return (<>
         <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/books"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className='mr-2' /> Back to Book Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{book.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {book.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1' />
                <p className="text-orange-700">{book.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Book Description
              </h3>

              <p className="mb-4">
               {book.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Price</h3>

              <p className="mb-4">{book.price} / Year</p>
            </div>
          </main>

          {/* <!-- Sidebar --> */}
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Seller Info</h3>

              <h2 className="text-2xl">{book.seller.name}</h2>

              <p className="my-2">
                {book.seller.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
              {book.seller.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{book.seller.contactPhone}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Book</h3>
              <Link
                to= {`/edit-book/${book.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Book</Link>
              <button onClick={ () => onDeleteClick(book.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Book
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

      </>)
  
}

const bookLoader = async({params}) => {
    const res = await fetch(`/api/books/${params.id}`)
    const data = await res.json()
    return data
}

export {BookPage as default, bookLoader}

// // FETCHING USING USE-LOADER DATA ENDS