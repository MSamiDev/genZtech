import React, { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { BsFillSendFill } from "react-icons/bs";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Pno, setPno] = useState("");
  const [msg, setMsg] = useState("");

  console.log(name);
  console.log(email);
  console.log(Pno);
  console.log(msg);
  const [fields, errors, form] = useFormInputValidation(
    {
      name: "",
      email: "",
      Pno: "",
      message: "",
    },
    {
      name: "required",
      email: "required|email",
      Pno: "required|numeric",
      message: "required",
    }
  );
  const handleClick = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      try {
        const { data: res } = await console.log(res.message);
        return <h1>{res.message}</h1>;
      } catch (error) {
        console.log(error);
      }
      console.log(fields);
    }
  };
  return (
    <div className=" relative bg-black overflow-hidden ">
      <div
        className=" h-80 w-96 absolute   blur-6xl rotate-45 top-10 -right-60"
        style={{
          background:
            " radial-gradient(rgba(208,193,25,1) 0%, rgba(240,179,10,8) 10%, rgba(0,0,0,7) 90%)",
        }}
      ></div>
      <div
        className=" h-80 w-52 absolute   blur-6xl -rotate-45 bottom-60 left-10"
        style={{
          background:
            " radial-gradient(rgba(208,193,25,1) 0%, rgba(240,179,10,8) 10%, rgba(0,0,0,7) 90%)",
        }}
      ></div>

      <section id="ContactUs" class="pt-20 px-4  h-full flex">
        <div class="container mx-auto flex items-center">
          <div class="flex justify-center rounded-full border-yellow-500 border-x-8 border-y-2 animate-pulse">
            <img
              src="genztech-logo.png"
              alt="Gen Z Tech Logo"
              class=" w-40 h-40 m-4  border-yellow-500 border-x-2 border-y-8 object-contain animate-spin"
            />
          </div>

          <div class="w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-4 text-yellow-500">Contact Us</h2>
            <p class="text-lg text-gray-500">
              Have questions or need more information?<br/> Reach out to us.
            </p>
            <p class="text-lg text-gray-500">Phone: (123) 456-7890</p>
            <p class="text-lg text-gray-500">Email: info@genztech.com</p>
          </div>
        </div>
        <div class="container mx-auto flex flex-col justify-center items-center pb-5">
          <h2 class="text-3xl font-bold mb-4 text-yellow-500">Get in Touch</h2>
          <div class="mt-8 w-4/5 mx-2 bg-white rounded-lg p-6 shadow-lg z-10">
            <form action="#" method="POST" onSubmit={handleClick}>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="appearance-none focus:border-black focus:border-4 bg-gray-100 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.name}
                  required
                />
                <bold className="text-red-700 font-bold">{errors.name}</bold>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.email}
                  required
                />
                <bold className="text-red-700 font-bold">{errors.email}</bold>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700  text-sm font-bold mb-2"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  class="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
                  id="Pno"
                  type="tel"
                  name="Pno"
                  placeholder="Your Phone Number"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.Pno}
                  required
                />
                <bold className="text-red-700 font-bold">{errors.Pno}</bold>
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.message}
                  required
                ></textarea>
                <bold className="text-red-700 font-bold">{errors.message}</bold>
              </div>
              <div class="flex items-center justify-center flex-row ">
                <button
                  class={
                    "flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  }
                  type="submit"
                >
                  Send Message <BsFillSendFill className="mx-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default ContactUs;
