import React from "react";
import { Link } from "react-router-dom";

const Loginform=()=>{
    return(
        <div className="flex justify-center items-center  h-screen bg-gradient-to-l from-violet-400 via-violet-300 via-violet-100 to-white">
            <div className="flex flex-col justify-center border border-gray-500 sm:w-[80%] w-[90%] lg:w-[40%] md:w-[70%]  items-center py-4 rounded-3xl">
                   
                   <h1 className="text-2xl text-sky-900 font-semibold mb-3">Assassins</h1>
                   
                    <form className="sm:w-[60%] w-[80%] ">
                     <label className="text-gray-800 text-sm font-semibold">Email or Phone Number</label><br></br>
                     <input type="text" className="border border-gray-500 w-[100%] rounded-md mb-2" ></input><br></br>
                     <label className="text-gray-800 text-sm font-semibold">Password</label><br></br>
                     <input type="password" className="border border-gray-500 w-[100%] rounded-md mb-2"></input>
                   </form>

                   <Link to="/landing">
                   <button className="border border-gray-500 px-4 mt-2 font-bold rounded-md text-gray-800 mb-3 bg-white">Log In</button>
                   </Link>

                   <h1>Or</h1>
                   
                   <div className="flex flex-row justify-center items-center border bg-white border-gray-500 cursor-pointer mt-3 mb-1 rounded-md sm:w-[35%] w-[50%]">
                    <img className="w-10 h-10" src="google.png" alt="google"></img>
                    <p>Google</p>
                   
                   </div>
                   
                   <div className="flex flex-row justify-center bg-white items-center border border-gray-500 cursor-pointer mb-1 rounded-md sm:w-[35%] w-[50%]">
                    <img className="w-10 h-10" src="apple.png" alt="google"></img>
                    <p>Apple</p>
                   </div>
                   
                   <div className="flex flex-row justify-center items-center border bg-white border-gray-500 cursor-pointer  mb-1 rounded-md sm:w-[35%] w-[50%]">
                    <img className="w-10 h-10" src="facebook.jpg" alt="google"></img>
                    <p>Facebook</p>
                   </div>

            </div>
        </div>
    )
}
export default Loginform;