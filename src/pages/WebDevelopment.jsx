import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GenZ_withText_trans2 from "../assets/images/GenZ_withText_trans2.png";

const WebDevelopment = () => {
  return (
    <div className="from-yellow-500   to-white bg-gradient-to-l">
      <header className="sticky top-0 z-20 shadow-lg shadow-gray-600">
        <nav className="flex justify-between bg-black text-yellow-500 w-full sticky top-0 h-20 items-center z-10 text-2xl font-bold px-5">
          <h1 className="flex items-center">
            <a href="/">
              <img
                src={GenZ_withText_trans2}
                alt="Gen Z Tech Logo"
                className="w-40  object-contain"
              />
            </a>
          </h1>
          <div className="flex items-center h-full">
            <ul className="flex items-center h-full">
              <li className="p-4 h-full flex justify-center items-center hover:text-red-500 hover:underline duration-300 ease-in">
                <a href="/">Back</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <h1 className="px-6 md:px-20 py-10 font-bold text-4xl md:text-6xl text-gray float-left text-center lg:text-left">
        Web Development Bootcamp
      </h1>
      <div className="md:w-full md:flex md:justify-center">
        <div className="md:w-full pb-10 h-auto  md:flex-col w-screen justify-center float-left">
          <h1 className="px-6 md:px-20 pb-10 font-bold text-2xl md:text-4xl text-gray  text-center ">
            Introduction
          </h1>
          <p className="px-6 md:px-20 text-sm md:text-lg text-center lg:text-left">
            Embark on an exciting journey into the realm of web development with
            our comprehensive 8-week program designed specifically for
            beginners. Explore the latest technologies, cultivate in-demand
            skills, and be well-prepared for the job market. Build a portfolio
            of real-world projects that showcase your expertise. With flexible
            full-time and part-time options, you can shape your learning
            experience to fit your schedule.
          </p>
        </div>
      </div>
      <section class="py-10 lg:px-52 sm:px-14 px:10 sm:text-left text-center">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6">
          {/*list 1  */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Model Curriculum</h2>
            <p className="md:text-xl">
              <ul className=" my-5 ">
                <li className="py-2">
                  <b className="font-bold">Module 1: </b> HTML, CSS Fundamentals
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 2: </b>JavaScript Core
                  Concepts
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 3: </b>React Frontend
                  Framework
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 4: </b> Node.js & Express
                  Backend
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 5: </b>MongoDB Database
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 6: </b>Development Workflow
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 7: </b>Deployment & Best
                  Practices
                </li>
                <li className="py-2">
                  <b className="font-bold">Module 8: </b>Career Support Services
                </li>
              </ul>
            </p>
          </div>
          {/*list 2  */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Program Schedule</h2>
            <p className="md:text-xl">
              <ul className=" my-5 ">
                <li className="py-2">
                  <b className="font-bold">Duration: </b>8 weeks
                </li>
                <li className="py-2">
                  <b className="font-bold">Days: </b>5 days a week
                </li>
                <li className="py-2">
                  <b className="font-bold">Class Duration: </b>: 2 hours per
                  class
                </li>
                <li className="py-2">
                  <b className="font-bold">Daily Structure: </b>Engaging
                  lectures, live demonstrations
                </li>
                <li className="py-2">
                  <b className="font-bold">Assignments: </b>: Exciting tasks and
                  weekend projects
                </li>
                <li className="py-2">
                  <b className="font-bold">Mentorship: </b>Enjoy personalized
                  1:1 guidance
                </li>
              </ul>
            </p>
          </div>
          {/*list 3  */}
          <div className="text-center lg:text-left flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Job Opportunities
            </h2>
            <p className="md:text-xl">
              <ul className=" my-5 ">
                <li className="py-2">Full Stack Developer</li>
                <li className="py-2">Frontend Developer</li>
                <li className="py-2">Backend Developer</li>
                <li className="py-2">Web Developer</li>
                <li className="py-2">JavaScript Developer</li>
              </ul>
            </p>
          </div>
        </div>
        {/*list 4 */}
        <div className="flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold ">
            Teaching Methodology
          </h2>
          <p className="md:text-xl">
            <ul className=" my-5 ">
              <li className="py-2">
                <b className="font-bold">Hands-on Learning: </b> Build your
                skills through practical coding experience.
              </li>
              <li className="py-2">
                <b className="font-bold">Instructor-led Classes: </b>: Learn
                from industry experts in live sessions.
              </li>
              <li className="py-2">
                <b className="font-bold">Project Focus: </b>Enhance your
                expertise with project-based assignments.
              </li>
              <li className="py-2">
                <b className="font-bold">Feedback Loop:</b>Receive valuable
                feedback to track your growth.
              </li>
              <li className="py-2">
                <b className="font-bold">Collaboration: </b>Foster a
                collaborative environment in the classroom.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default WebDevelopment;
