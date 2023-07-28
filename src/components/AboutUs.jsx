import React from "react";


const AboutUs = () => {
    return (
        <div className="h-screen from-yellow-500   to-white bg-gradient-to-r">
            <section id="AboutUs" class="py-20 px-20 text-center">
                <div class="container mx-auto px-20 ">
                    <h2 class="text-5xl font-bold mb-4 ">Welcome to Gen Z Tech</h2>
                    <p class="text-lg text-black ">Gen Z Tech is a leading provider of cutting-edge technology courses for the next generation. Our DevOps course is designed to equip you with essential knowledge and practical skills for seamless integration of development and operations teams.<br/>Join us and learn industry best practices, cutting-edge tools, and real-world scenarios to optimize workflows and deliver high-quality software at a rapid pace.</p>
                    <h2 className="font-bold pt-4 text-3xl">Why Choose Gen Z Tech DevOps?</h2>
                    <ol className="text-lg">
                        <li><bold className="font-bold">Expert Instructor:</bold> Learn from industry expert with real-world experience in DevOps practices and technologies.</li>
                        <li><bold className="font-bold">Hands-on Experience:</bold> Get hands-on experience with industry-standard tools and technologies used in modern DevOps environments.</li>
                        <li><bold className="font-bold">Continuous Integration & Deployment:</bold> Master the art of continuous integration and deployment to deliver software faster and with greater efficiency.</li>
                        <li><bold className="font-bold">Real-World Scenarios: </bold>Gain practical insights through real-world scenarios and case studies to apply DevOps principles effectively.</li>
                        <li><bold className="font-bold">Industry-Relevant Curriculum:</bold> Our curriculum is tailored to meet the demands of the ever-evolving tech industry, ensuring you stay ahead of the curve.</li>
                    </ol>
                    <p className="text-lg pt-4 font-semibold">Join us on this journey to unlock the full potential of DevOps and revolutionize the way software development and deployment are done. Empower yourself with Gen Z Tech DevOps and take the first step towards a successful career in the world of technology.</p>
                    <p className="font-bold text-3xl pt-16">Enroll now and become a part of the Gen Z Tech community!</p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;