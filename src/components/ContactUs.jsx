import React, { useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { BsFillSendFill } from "react-icons/bs";
import GenZ_withText_trans from "../assets/images/GenZ_withText_trans.png";

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
    <div className="relative bg-black overflow-hidden "  id="ContactUs">
      {/* Background shapes */}
      <div
        className="h-80 w-96 absolute blur-6xl rotate-45 top-10 -right-60"
        style={{
          background:
            "radial-gradient(rgba(208,193,25,1) 0%, rgba(240,179,10,8) 10%, rgba(0,0,0,7) 90%)",
        }}
      ></div>
      <div
        className="h-80 w-52 absolute blur-6xl -rotate-45 bottom-60 left-10"
        style={{
          background:
            "radial-gradient(rgba(208,193,25,1) 0%, rgba(240,179,10,8) 10%, rgba(0,0,0,7) 90%)",
        }}
      ></div>

      <section
       
        className="pt-10 px-4 md:px-20 h-full flex flex-col md:flex-row"
      >
        <div className="container mx-auto flex flex-col justify-center items-center md:flex-row md:items-center relative">
          <div className=" w-40 h-40  mx-10 flex justify-center rounded-full  border-yellow-500 border-x-8 border-y-2  animate-spin">
            <div className="w-40 h-40  border-yellow-500 border-4 object-contain ">

            </div>
            {/* <div class="animation-container relative w-400 h-300 overflow-hidden">
  <img class="image absolute w-full h-full opacity-0 animate-fade-in-out" src="GenZ_withoutText_trans" alt="Image " />
  <img class="image absolute w-full h-full opacity-0 animate-fade-in-out" src="GenZ_withText_trans.jpg" alt="Image " />
</div> */}
          </div>
          <img
            src={GenZ_withText_trans}
            alt="Gen Z Tech Logo"
            className="w-40 m-4 object-contain  absolute left-1/4 md:left-1/4 lg:left-20 lg:top-52 md:top-56 -top-5 "
          />

          <div className="w-full md:w-1/2   px-4">
            <h2 className="text-xl text-center lg:text-left md:text-3xl font-bold mb-4 text-yellow-500 md:justify-center md:items-center">
              Contact Us
            </h2>
            <p className="text-sm text-center lg:text-left md:text-lg text-gray-500">
              Have questions or need more information?
              <br /> Reach out to us.
            </p>
            <p className="text-sm text-center lg:text-left md:text-lg text-gray-500">
              Phone: (123) 456-7890
            </p>
            <p className="text-sm text-center lg:text-left md:text-lg text-gray-500">
              Email: info@genztech.com
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col justify-center items-center pb-5">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-yellow-500">
            Get in Touch
          </h2>
          <div className="mt-8 w-full md:w-4/5 mx-2 bg-white rounded-lg p-6 shadow-lg z-10">
            <form action="#" method="POST" onSubmit={handleClick}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none focus:border-black focus:border-4 bg-gray-100 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
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
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none bg-gray-100 focus:border-black focus:border-4 border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 "
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
              <div className="flex items-center justify-center flex-row">
                <button
                  className="flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
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
