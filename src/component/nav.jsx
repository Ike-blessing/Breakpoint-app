// Desc: This is the landing page for the website.
// Date 4/11/2023
// =====================================================================================================================
// IMPORTS
import React from "react";

function nav() {

  return (
  <div className="nav w-screen  flex sm:flex-col lg:flex-row justify-center items-center bg-hertechtarial">
    <div className='flex items-center'>
        <div className="w-full flex">
            <div className="w-6/12 ml-10 pt-5 flex">
                <img src="C./Assets/Logo.svg" alt="logo" className="logo "/>
                <p className="ml-2 pt1 5">Home</p>
            </div>
            <div className="w-6/12 pr-10 mr-7 flex justify-end">
                <p className="pr-3 pt-1.5">Login</p>
                <button className="p-2 m-2 bg-black text-base text-white rounded">Creat an account</button>
            </div>
        </div>
    </div>
  </div>
  )
}

export default nav