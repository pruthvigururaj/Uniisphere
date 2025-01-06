import React from "react";
import { Link } from "react-router-dom";

const Landingpage=()=>{
    return(

        <div>

           <div className="sm:pl-10 md:pl-20 pl-3">
              
              <div className="flex flex-row sm:justify-between justify-between h-10 items-center mb-4"> 
                  <div className="sm:flex flex-row  flex-1 gap-10 hidden">
                     
                     <Link to="/"><p className="text-sm text-gray-800 cursor-pointer">Home</p></Link>
                     
                     <p className="text-sm text-gray-800 cursor-pointer">About</p>
                     <p className="text-sm text-gray-800 cursor-pointer">Contact</p>
                  </div>

                  <div className="flex-1 text-center  text-start sm:text-center">
                     <h1 className="text-sky-900 font-extrabold text-xl">Landing</h1>
                  </div>

                  <div className="flex-1 text-right"> 
                      <button className="bg-sky-900 text-white mr-2 cursor-pointer px-2 py-1 rounded-md">Get Started</button>
                  </div>

              </div>

            <div className="flex sm:flex-row sm:h-screen sm:items-center flex-col  sm:mb-0 mb-4  sm:bg-gradient-to-l from-violet-600 via-violet-300 via-violet-100 to-white">
                <div className="sm:w-1/2 w-full order-2 sm:order-1  ">
                   <h1 className="text-4xl text-sky-900 font-semibold mb-3 sm:mt-auto mt-6">Assassins</h1>
                   <p className="text-gray-600 w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                   </p>

                   <div className="flex flex-row w-[90%] mb-2 ">
                     <button className="bg-sky-900 text-white mr-2 cursor-pointer px-2 py-1 rounded-md w-1/2">Log in</button>
                     <button className="border border-sky-900   text-sky-900 w-1/2">Sign Up</button>
                   </div>

                </div>

                <div className="sm:w-1/2 flex sm:justify-end sm:h-[70%] items-start order-1 h-1/2 sm:order-2 ">
                 <img className="w-full mr-3 sm:mr-0 lg:w-[70%] md:w-full sm:h-full" src="Computer.JPG" alt="Computer"></img>

                </div>

            </div>



            <div className="flex sm:flex-row flex-col sm:h-[800px] h-auto ">
 
                  <div className="sm:w-1/2 w-full flex flex-col justify-center sm:order-1 order-2">
                      <h1 className="text-2xl text-sky-900 font-semibold mb-3">Light, Fast & Powerfull</h1>
                      <p className="text-gray-600 w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                   </p>

                    <div className="flex md:flex-row flex-col gap-3 w-[90%]">
                           <div className="">
                               <h1 className="text-2xl text-sky-900 font-semibold mb-3">Title Goes Here</h1>
                               <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
                           </div> 

                           <div>
                               <h1 className="text-xl text-sky-900 font-semibold mb-3">Title Goes Here</h1>
                               <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p>

                           </div>
                    </div>

                  </div>

                  <div className="flex sm:w-1/2 w-full   justify-center sm:order-2 order-1">
                      <img className="w-full " src="Capture1.JPG" alt="image"></img>
         
                  </div>

            </div>



            <div className="flex sm:flex-row flex-col sm:h-[600px] h-auto">

                <div className="flex sm:w-1/2 w-full   justify-center ">
                  <img className="w-full" src="Capture2.JPG" alt="image"></img>
               </div>
 
                <div className="sm:w-1/2 w-full flex flex-col justify-center">
                   <h1 className="text-2xl text-sky-900 font-semibold mb-3">Light, Fast & Powerfull</h1>
                   <p className="text-gray-600 w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  </p>
                 </div>
            
            </div>

            <div className="flex sm:flex-row flex-col sm:h-[600px] h-auto ">

                <div className="flex sm:w-1/2 w-full justify-center ">
                  <img className="w-full  " src="Capture3.JPG" alt="image"></img>
               </div>
 
                <div className="sm:w-1/2 w-full flex flex-col justify-center">
                   <h1 className="text-2xl text-sky-900 font-semibold mb-3">Light, Fast & Powerfull</h1>
                   <p className="text-gray-600 w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  </p>
                 </div>
            
            </div>


            <div className="flex sm:flex-row flex-col sm:h-[600px] h-auto mb-4 ">

                <div className="flex sm:w-1/2 w-full justify-center ">
                  <img className="w-full " src="Capture4.JPG" alt="image"></img>
               </div>
 
                <div className="sm:w-1/2 w-full flex flex-col justify-center">
                   <h1 className="text-2xl text-sky-900 font-semibold mb-3">Light, Fast & Powerfull</h1>
                   <p className="text-gray-600 w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  </p>
                  <button  className="bg-sky-900 text-white w-[200px] py-1">Purcahse Now</button>
                 </div>
                 
            </div>

            
        </div>

              <div className="w-full flex flex-col items-center py-10  bg-gradient-to-b from-sky-500 via-blue-200 to-white">
                
                 <h1 className="text-2xl font-semibold mb-3">A Price To Suite Everyone</h1>
                 <p className="text-gray-600 md:w-[60%] w-[90%] mb-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                 </p>
                 <h1 className="text-sky-900 text-2xl font-bold mt-6">$40</h1>
                 <p className="text-gray-600 mb-6">UI Design Kit</p>

                 <p>See, One Price</p>
                 <button  className="bg-sky-900 text-white w-[200px] py-1">Purcahse Now</button>               

              </div>

           </div>
 

    )
}
export default Landingpage;