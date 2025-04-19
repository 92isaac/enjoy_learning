"use client"

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email is required";
    if (!formData.phone) errs.phone = "Phone number is required";
    if (!formData.subject) errs.subject = "Subject is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    emailjs
      .send("service_c9k6z3l", "template_4n1ed1f", { ...formData, to_email: "sangodareisaac92@gmail.com" }, "2xHxmqFRJndl03TzB")
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch(() => setSuccess("Oops! Something went wrong."));
  };

  return (
    <div className="grid md:grid-cols-2 items-center gap-10 py-10 px-6 md:px-12 lg:px-24">
      <div>
        <h2 className="text-3xl font-bold">Feel Free To Contact And Reach Us!</h2>
        {/* <p className="text-gray-600 mt-4 mb-8">Per sed, mattis. Integer viverra euismod maecenas...</p> */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <div className="bg-indigo-900 text-white p-3 rounded-full">
              <Phone />
            </div>
            <div>
              <p className="font-bold">Phone Number :</p>
              <Link href={"tel:+2349097253747"}>+234 - 9097253747</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <div className="bg-indigo-900 text-white p-3 rounded-full">
              <Facebook />
            </div>
            <div>
              <p className="font-bold">Facebook :</p>
              <p>Enjoy Learning Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <div className="bg-indigo-900 text-white p-3 rounded-full">
              <Instagram />
            </div>
            <div>
              <p className="font-bold">Instagram :</p>
              <p>Enjoy_LearningOnline</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <div className="bg-indigo-900 text-white p-3 rounded-full">
              <Mail />
            </div>
            <div>
              <p className="font-bold">Email Address :</p>
              <Link href={'mailto:enjoylearningonline@gmail.com'}>educationsector@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-xl space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              name="name"
              placeholder="Your Name.."
              className="w-full border p-3 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              name="email"
              placeholder="Your Email.."
              className="w-full border p-3 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              name="phone"
              placeholder="Phone Number.."
              className="w-full border p-3 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <input
              name="subject"
              placeholder="Your Subject.."
              className="w-full border p-3 rounded"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter Your Message.."
            rows={4}
            className="w-full border p-3 rounded"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded font-semibold">
          SUBMIT MESSAGE
        </button>
        {success && <p className="text-green-600 font-semibold mt-3">{success}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
