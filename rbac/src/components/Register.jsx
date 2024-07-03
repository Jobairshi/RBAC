"use client"

import axios from "axios";
import React, { useEffect, useRef } from "react";

export default function Register() {


  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

   const  handleSubmit = async (e)=>{
    e.preventDefault();
    const name  = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const newUser = await axios.post("http://localhost:4000/userinfo",{
      role:"user",
      name:name,
      email:email,
      password:password
    }).catch((err)=>
    {
      alert("errrorr");
    })
    console.log(newUser)
    if(newUser === null)
      {
        alert("user not created");
      }
    else if(newUser.status === 201)
      {
        alert("user created");
      }
  }
   
  return (
    <div>
      <div className="lg:m-10">
        <form onSubmit={handleSubmit} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>
          <div>
            <label className=""> Username </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              ref={passRef}
              type="password"
              placeholder="********"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
