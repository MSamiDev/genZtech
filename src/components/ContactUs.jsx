import React from "react";

const ContactUs = () => {
    return (
        <div>

            <section id="ContactUs" class="pt-20 pb-5 px-4 bg-black">
                <div class="container mx-auto flex items-center">
                    <div class="w-1/2 flex justify-center">
                        <img src="genztech-logo.png" alt="Gen Z Tech Logo" class="w-64 h-64 object-contain animate-spin-slow" />
                    </div>

                    <div class="w-1/2 px-4">
                        <h2 class="text-3xl font-bold mb-4 text-yellow-500">Contact Us</h2>
                        <p class="text-lg text-gray-500">Have questions or need more information? Reach out to us.</p>
                        <p class="text-lg text-gray-500">Phone: (123) 456-7890</p>
                        <p class="text-lg text-gray-500">Email: info@genztech.com</p>


                    </div>
                </div>
            </section>
            <hr/>
            <section id="Contact" class="py-7 px-4 bg-black">
                <div class="container mx-auto flex flex-col justify-center items-center">
                    <h2 class="text-3xl font-bold mb-4 text-yellow-500">Get in Touch</h2>
                    <div class="mt-8 w-2/5 mx-20 bg-white rounded-lg p-6 shadow-lg">
                        <form action="#" method="POST">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input class="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="email" type="email" placeholder="you@example.com" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">
                                    Phone Number
                                </label>
                                <input class="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="phoneNumber" type="tel" placeholder="Your Phone Number" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                                    Message
                                </label>
                                <textarea class="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" id="message" rows="4" placeholder="Your message..."></textarea>
                            </div>
                            <div class="flex items-center justify-center">
                                <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default ContactUs;