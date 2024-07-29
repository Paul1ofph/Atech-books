import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddBookPage = ({addBookSubmit}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [type, setType] = useState('100 Level');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('Under $50K');
    const [sellerName, setSellerName] = useState('');
    const [sellerDescription, setSellerDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()

        const newBook = {
            title,
            author,
            type,
            location,
            description,
            price,
            seller: {
                name: sellerName,
                description: sellerDescription,
                contactEmail,
                contactPhone
            },
        }

        addBookSubmit(newBook);

        toast.success('Book added succesfully')

        return navigate('/books')
    }
  return (
    <>
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Upload Book</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Select Level</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType (e.target.value)}
              >
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
                <option value="500 Level">500 Level</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Book Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Introduction to Mathematics"
                required
                value={title}
                onChange={(e) => setTitle (e.target.value)}
              />
              </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Author Name</label
              >
              <input
                type="text"
                id="author"
                name="author"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Dr. Paul Adibe"
                required
                value={author}
                onChange={(e) => setAuthor (e.target.value)}
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Book Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any book deatail, expectations, condition, etc"
                value={description}
                onChange={(e) => setDescription (e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Price Range</label
              >
              <select
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3"
                required
                value={price}
                onChange={(e) => setPrice (e.target.value)}
              >
                <option value="Under $5">Under $5</option>
                <option value="$5 - $6">$5 - $6</option>
                <option value="$6 - $7">$6 - $7</option>
                <option value="$7 - $8">$7 - $8</option>
                <option value="$8 - $9">$8 - $9</option>
                <option value="$9 - $10">$9 - $10</option>
                <option value="$10 - $12">$10 - $12</option>
                <option value="$12 - $15">$12 - $15</option>
                <option value="$15 - $17">$15 - $17</option>
                <option value="$17 - $20">$17 - $20</option>
                <option value="Over $20">Over $20</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Your Location'
                required
                value={location}
                onChange={(e) => setLocation (e.target.value)}           
              />
            </div>

            <h3 className="text-2xl mb-5">Seller Info</h3>

            <div className="mb-4">
              <label htmlFor="seller" className="block text-gray-700 font-bold mb-2"
                >Seller Name</label
              >
              <input
                type="text"
                id="seller"
                name="seller"
                className="border rounded w-full py-2 px-3"
                placeholder="Seller Name"
                value={sellerName}
                onChange={(e) => setSellerName (e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="seller_description"
                className="block text-gray-700 font-bold mb-2"
                >Seller Description</label
              >
              <textarea
                id="seller_description"
                name="seller_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Faculty, Department, Level"
                value={sellerDescription}
                onChange={(e) => setSellerDescription (e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Your Email Address "
                required
                value={contactEmail}
                onChange={(e) => setContactEmail (e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Your Phone Number"
                value={contactPhone}
                onChange={(e) => setContactPhone (e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Upload Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  )
}

export default AddBookPage