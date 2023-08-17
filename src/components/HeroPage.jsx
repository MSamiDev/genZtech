import React from "react";
import HeroImg from "../assets/images/heroImg.jpeg";

const HeroPage = () => {
  return (
    <div className="from-yellow-500 flex justify-center items-center to-white bg-gradient-to-l" id="Home">
      {/* Show the image in medium and large screens */}
      <div className="hidden sm:block sm:w-2/5 p-10 md:p-20 h-screen md:h-auto md:flex flex-col justify-center">
        <div
          className="border-black shadow-2xl shadow-black w-4/5 md:w-full h-96 md:h-60 lg:h-96 border-4 bg-[image:var(--image-url)] bg-cover"
          style={{ "--image-url": `url(${HeroImg})` }}
        ></div>
      </div>
      <div className="w-full h-screen sm:h-auto sm:w-3/5 flex-col justify-center p-10 md:p-20 items-center">
        <h1 className="px-6 md:px-10 pt-6 md:pt-0 pb-8 md:pb-10 font-bold text-2xl md:text-5xl lg:text-6xl text-gray text-center md:text-left">
          Mastering DevOps: Unleashing the Power of Continuous Integration & Deployment
        </h1>
        <p className="px-6 md:px-10 pb-10 text-sm md:text-lg lg:text-xl text-center md:text-left">
          Ready to take your DevOps skills to the next level? Enroll now and unlock the power of continuous integration and deployment. Join us on this transformative journey and become a proficient DevOps practitioner today! Don't miss out on the opportunity to drive efficiency and elevate your career in the world of modern software development.
        </p>
      </div>
    </div>
  );
};

export default HeroPage;
