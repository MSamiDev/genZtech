import HeroImg from "../assets/images/heroImg.jpeg"
import Git from "../assets/images/Git.png"
const HeroPage = () => {
    return (

        <div className="  " id="Home">
            <div className="w-3/5 p-20 h-screen bg-yellow-500 flex flex-col justify-center float-left ">

                <h1 className="px-20 pt- pb-10 font-bold text-5xl text-gray float-left ">Mastering DevOps: Unleashing the Power of Continuous Integration & Deployment</h1>
                <p className="px-20 pb-20 text-lg ">Ready to take your DevOps skills to the next level? Enroll now and unlock the power of continuous integration and deployment. Join us on this transformative journey and become a proficient DevOps practitioner today! Don't miss out on the opportunity to drive efficiency and elevate your career in the world of modern software development.</p>
            </div>
            <div className="w-2/5  bg-yellow-500 flex justify-center py-10  h-screen items-center ">
                <div className=" border-black w-4/5 h-96 border-4 bg-[image:var(--image-url)] bg-cover" style={{ '--image-url': `url(${HeroImg})` }}></div>
            </div>
            <div className=" flex justify-center h-full w-screen  items-center ">
                <div className="bg-[image:var(--image)]  z-0 h-60 bg-top w-full  bg-contain bg-no-repeat w-sc" style={{ '--image': `url(${Git})` }}></div>
            </div>
        </div>
    )
}

export default HeroPage;