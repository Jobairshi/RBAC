"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ViewUp() {
  const router =  useRouter();
  const userToken = localStorage.getItem("userToken");
  const userRole = localStorage.getItem("role");
  

  if(userRole !== 'user')
    {
      router.push('/error');
    }
  console.log(userRole);
  const [userData, SetuserData] = useState();

  const [copyUser, setcopyUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setcopyUser({
        name: userData?.name,
        email: userData?.email,
        password: userData?.password,
      });
    }
  }, [userData]);

  useEffect(() => {
    const userinfo = axios
      .get(`http://localhost:4000/userinfo/${userToken}`)
      .then((res) => SetuserData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [userToken]);

  function handleChange(e) {
    const { name, value } = e.target;
    setcopyUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  console.log(copyUser);
  //   console.log(userData);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = {
      name: copyUser.name,
      email: copyUser.email,
      password: copyUser.password,
    };

    try {
      const response = await axios.patch(
        `http://localhost:4000/userinfo/${userToken}`,
        formData
      );
      console.log("Update successful", response.data);
      alert("successfull");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <div className="lg:m-10">
        <form
          onSubmit={handleUpdate}
          className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
        >
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
            View or Update Details
          </h1>
          <div>
            <label className=""> Username </label>
            <input
              onChange={handleChange}
              name="name"
              value={copyUser?.name}
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              onChange={handleChange}
              name="email"
              value={copyUser?.email}
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              onChange={handleChange}
              name="password"
              value={copyUser?.password}
              type="password"
              placeholder="********"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="flex flex-row gap-10 bg-gray-100">
            <label className="" > Role: </label>
            <h1 className="font-bold font-serif">
              {
                userData?.role
              }
            </h1>
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
