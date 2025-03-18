"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LimitlessLearning from "@/components/LimitlessLearning";
import TeachersSection from "@/components/TeachersSection";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Head>
        <title>Enjoy Learning Hub</title>
        <meta
          name="description"
          content="An innovative learning platform for all ages."
        />
      </Head>

      <Navbar />

      <main className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        {/* <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-primary text-white px-6 bg-gradient-to-tr from-[#2A5C8A] to-[#4CAF50]">
          <motion.h1
            className="text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Your Potential with Quality Education
          </motion.h1>
          <p className="mt-4 text-xl">Online & Onsite Learning for All Ages</p>
          <a href="#services" className="mt-6 bg-accent text-primary font-semibold py-3 px-6 rounded-lg hover:bg-[#4CAF50] hover:text-white">
            Explore Our Courses
          </a>
        </section> */}
        <HeroSection />
        <WhyChooseUs />

        {/* About Section */}
        {/* <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            Providing a dynamic learning environment for students of all ages, from foundational education to specialized courses in various subjects.
          </p>
        </section> */}

        {/* Core Services */}
        <section id="services" className=" py-20 px-6">
          <h2 className="text-4xl font-bold text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
            {[
              {
                title: "Academic Learning",
                desc: "Early Years to Sixth Form Education.",
              },
              {
                title: "Exam Preparation",
                desc: "SAT, GCSE, IGCSE, TOEFL, IELTS.",
              },
              {
                title: "Specialized Learning",
                desc: "Coding, Accounting, Languages.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-gray-200 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 px-6 bg-[#2b186b] text-white">
          <h2 className="text-4xl font-bold text-center">Our Programs</h2>
          <p className="mt-4 text-center text-xl">
            We offer a wide range of programs designed for students of all ages
            and interests. Whether you are preparing for exams, learning a new
            language, or upskilling in coding, our programs have you covered.
          </p>
          <div className="grid text-black md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
            {[
              "Early Years Education",
              "Primary & Secondary Education",
              "Exam Preparation (SAT, TOEFL, IGCSE)",
              "Coding & Programming",
              "Accounting & Statistics",
              "Language Learning (French, Nigerian Languages)",
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold">{program}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 bg-gray-200">
          <h2 className="text-4xl font-bold text-center">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
            {[
              {
                name: "Jane Doe",
                feedback:
                  "The online classes are so interactive and engaging! My grades have improved immensely.",
              },
              {
                name: "John Smith",
                feedback:
                  "I aced my TOEFL exam with the help of the expert guidance from Enjoy Learning Hub!",
              },
              {
                name: "Mary Johnson",
                feedback:
                  "The coding program was amazing. I can now build websites and apps on my own.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-[#F0F9F9] rounded-lg shadow-lg text-center"
              >
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <LimitlessLearning />

        <TeachersSection />

        {/* Contact Form */}
        <section id="contact" className="py-20 px-6 bg-gray-100">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <div className="max-w-4xl mx-auto mt-8">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border p-3 rounded-lg mt-2"
                required
              />

              <label className="block mt-4 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border p-3 rounded-lg mt-2"
                required
              />

              <label className="block mt-4 text-gray-700">Message</label>
              <textarea
                className="w-full border p-3 rounded-lg mt-2"
                rows={4}
                required
              ></textarea>

              <button className="mt-6 bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Home;
