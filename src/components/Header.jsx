const Header = () => {
    return (
    
        <header className="sticky top-0  z-10">
        
            <nav  class="flex justify-between bg-black text-yellow-500 w-full sticky top-0  h-20 items-center  z-10 text-2xl font-bold">
                <h1 class="flex items-center "><a href="#Home">Gen Z Tech</a></h1>
              
                <ul class="flex items-center h-full ">
                    <li className="p-4 h-full flex justify-center items-center  hover:bg-stone-800 hover:text-orange-400 duration-300 ease-in delay 
                    "><a href="#Home" >Home</a></li>
                    <li className="p-4 h-full flex justify-center items-center hover:bg-stone-800 hover:text-orange-400"><a href="#AboutUs">About us</a></li>
                    <li className="p-4 h-full flex justify-center items-center hover:bg-stone-800 hover:text-orange-400"><a href="#ContactUs">Blog</a></li>
                    <li className="p-4 h-full flex justify-center items-center hover:bg-stone-800 hover:text-orange-400"><a href="#ContactUs" >Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
    }
    
    export default Header;