import Banner from '@/components/Banner'
import ContactForm from '@/components/contact-us/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Banner text='Contact Us' />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Page
