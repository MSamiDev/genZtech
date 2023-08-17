import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DevOps from "../pages/DevOps";
import WebDevelopment from "../pages/WebDevelopment";

const Courses = () => {
    return(
        <div className="from-yellow-500   to-white bg-gradient-to-l" id="courses">
            <section class="py-6 px-4 bg-black text-yellow-500">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold text-center">Explore Our Diverse Courses</h1>
        </div>
      </section>
            <section class="py-10 lg:px-52 sm:px-14 px-10 ">
          <p class="text-lg mb-10">
          Discover a few courses at genZtech designed to cater to your interests and ambitions. From technology and business to arts and sciences, our offerings encompass a variety of fields. Benefit from expert faculty, modern resources, and a dynamic learning environment as you equip yourself for a successful future. Choose from our range of programs to embark on a journey of knowledge and growth.
          </p>
    <div class="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-6">
      {/* Card 1  */}

      <a href="/DevOps">

      <div class="bg-black text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://thumbs.dreamstime.com/b/devops-agile-development-optimisation-concept-virtual-screen-151305105.jpg" alt="Blog Cover 1" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Embrace DevOps Excellence</h2>
        <p class="text-gray-600">Our DevOps course is designed to equip you with the skills and knowledge needed to excel in the fast-paced world of software development and deployment. Learn how to bridge the gap between development and operations, streamline workflows, and implement automation to achieve efficient, reliable, and continuous software delivery. With hands-on training and real-world scenarios, our DevOps course empowers you to become a key player in driving innovation and collaboration within your organization. Join us to unlock the potential of DevOps and become a valuable asset in the tech industry.</p>
      </div>
      </a>
       {/* Card 2  */}

       <a href="/WebDevelopment">

<div class="bg-black text-white rounded-lg shadow-md p-6 h-full ">
  <img src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="Blog Cover 1" class="w-full h-40 object-cover mb-4 rounded-lg"/>
  <h2 class="text-xl font-bold mb-2">Crafting Web Experiences: Web Development Course</h2>
  <p class="text-gray-600">Dive into the world of web development with our comprehensive course. Learn the art of designing and building captivating websites and web applications. From front-end aesthetics to back-end functionality, acquire the skills to create dynamic online experiences. Join us to master the tools and technologies shaping the digital landscape.</p>
</div>
</a>
      </div>
  </section>
        </div>
    )
}
export default  Courses;