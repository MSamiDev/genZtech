import HeroImg from "../assets/images/heroImg.jpeg"

const HeroPage = () => {
    return (

        <div className=" from-yellow-500   flex justify-center items-center to-white bg-gradient-to-l " id="Home">
            <div className="w-2/5 p-20 h-screen  flex flex-col justify-center float-left ">

                <div className=" border-black shadow-2xl shadow-black w-4/5 h-96 border-4 bg-[image:var(--image-url)] bg-cover" style={{ '--image-url': `url(${HeroImg})` }}></div>
            </div>
            <div className="w-3/5  flex-col justify-center pt-40  h-screen items-center ">
                <h1 className="px-10 pt- pb-10 font-bold text-5xl text-gray float-left ">Mastering DevOps: Unleashing the Power of Continuous Integration & Deployment</h1>
                <p className="px-10 pb-20 text-lg ">Ready to take your DevOps skills to the next level? Enroll now and unlock the power of continuous integration and deployment. Join us on this transformative journey and become a proficient DevOps practitioner today! Don't miss out on the opportunity to drive efficiency and elevate your career in the world of modern software development.</p>
            </div>
            
        </div>
    )
}

export default HeroPage;