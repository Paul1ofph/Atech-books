import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import BookListings from '../Components/bookListings'
import VuewAllJobs from '../Components/ViewAllBooks'

const HomePage = () => {
  return (
    <>
     <Hero />
     <Homecards />
     <BookListings isHome={true} />
     <VuewAllJobs />
    </>
  )
}

export default HomePage