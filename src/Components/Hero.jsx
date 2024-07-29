import React from 'react'
import { Link } from 'react-router-dom'

// const Hero = (props) => {
    const Hero = ({
        title = 'Atech Books',
        subtitle = 'No1 online bookstore for used books'}) => { //Default Props
    // const Hero = ({title, subtitle}) => {
  return (
    <>
      <section className="bg-[url('./images/herobg.jpg')] py-72 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {/* {props.title} */}
            {title}
          </h1>
          <p className="my-4 text-4xl text-white">
            {/* {props.subtitle} */}
            {subtitle}
          </p>
        </div>
        {/* <div  className="input flex flex-wrap items-center justify-center">
          <input type="text" className='form-control p-4 mb-4 rounded-md bg-transparent border text-white text-3xl'  placeholder='search...' />
        </div> */}
              <div className="flex flex-wrap justify-between gap-3">
                <Link to="/LoginPage">
                    <button className='px-16 py-3 text-white border text-2xl rounded-md hover:bg-indigo-700 hover:border-none'>Buy</button>
                </Link> <br />
                <Link to="/LoginPage">
                    <button className='px-16 py-3 text-white border text-2xl rounded-md hover:bg-indigo-700 hover:border-none'>Sell</button>
                </Link>
              </div>
      </div>
    </section>
    </>
  )
}

export default Hero