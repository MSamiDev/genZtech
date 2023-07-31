import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from "../firebase/firebase";
import { QuerySnapshot, doc, getDoc, query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const Blog = () => {

    // const [blogs, setBlogs] = useState([])

    // useEffect(()=> {
    //     const getBlogs = async () =>{
    //         const blogsRef =  collection(db, "blog");
    //         const getData = await getDocs(blogsRef);
    //         let list = []
    //         getData.forEach((doc) => {
    //          list.push({...doc.data(), id: doc.id})
    //         })
    //         setBlogs(list)
    //     }
    //     getBlogs();

    //     console.log(blogs)
        

    //     // const getData = db.collection("blog").get().then((querySnapshot) => {
    //     //     querySnapshot.forEach((doc) => {
    //     //         console.log(`${doc.id} => ${doc.data()}`);
    //     //     });
    //     // });
    // },[])


    



  return (
    <div className="from-yellow-500   to-white bg-gradient-to-l">
      <Header />
      <section class="py-6 px-4 bg-black text-yellow-500">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold">Gen Z Tech Blog</h1>
          <p class="text-lg">
            Explore the Latest Insights and Trends in the World of Technology
            and DevOps
          </p>
        </div>
      </section>
      {/* Blog Cards Section */}
  <section class="py-10 px-52">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6">
      {/* Blog Card 1  */}
{/* 
      {
        blogs.map(blog => (

        ))
      } */}
      <a href="/BlogPost">

      <div class="bg-black text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 1" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Demystifying DevOps: The Key to Seamless Software Delivery</h2>
        <p class="text-gray-600">By Def</p>
      </div>
      </a>

      {/* Blog Card 2 */}
      <a href="#">
      <div class="bg-black  text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 2" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">The Power of Automation: Transforming Software Development</h2>
        <p class="text-gray-600">By Jkh</p>
      </div>
      </a>

      {/* Blog Card 3  */}
      <a href="#">

      <div class="bg-black  text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 3" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Continuous Integration: A Paradigm Shift in Software Engineering</h2>
        <p class="text-gray-600">By Abc</p>
      </div>
      </a>

        {/* Blog Card 4  */}
        <a href="">

      <div class="bg-black  text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 4" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Demystifying DevOps: The Key to Seamless Software Delivery</h2>
        <p class="text-gray-600">By Def</p>
      </div>
        </a>
       {/* Blog Card 5  */}
       <a href="">
        
       <div class="bg-black text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 5" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Demystifying DevOps: The Key to Seamless Software Delivery</h2>
        <p class="text-gray-600">By Def</p>
      </div>
       </a>
       {/* Blog Card 6  */}
       <a href="#">

       <div class="bg-black text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 6" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">Demystifying DevOps: The Key to Seamless Software Delivery</h2>
        <p class="text-gray-600">By Def</p>
      </div>
       </a>
      {/* Blog Card 7 */}
      {/* <a href="#">

      <div class="bg-black  text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 7" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">The Power of Automation: Transforming Software Development</h2>
        <p class="text-gray-600">By Jkh</p>
      </div>
      </a>
      {/* Blog Card 8 
      <a href="#">

      <div class="bg-black  text-white rounded-lg shadow-md p-6 h-full">
        <img src="https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Blog Cover 8" class="w-full h-40 object-cover mb-4 rounded-lg"/>
        <h2 class="text-xl font-bold mb-2">The Power of Automation: Transforming Software Development</h2>
        <p class="text-gray-600">By Jkh</p>
      </div>
      </a> */}
    </div>
  </section>

      <Footer />
    </div>
  );
};

export default Blog;
