"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import TableTow from "./TableTow";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  // console.log("we are in mood page")
   const router = useRouter();
  const currentRole = localStorage.getItem("role");
  const [userData, setUserData] = useState([]);
  if (currentRole !== "admin") {
    router.push("/error");
  }
  useEffect(() => {
    const useInfo = axios
      .get("http://localhost:4000/userinfo")
      .then((res) => setUserData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(userData)

  function handleMod(id) {
    console.log(id);
  }


  async function handleDelete(id)
  {
    console.log(id + " " + "deleted");
    const deleteUser = await axios.delete(`http://localhost:4000/userinfo/${id}`);
    console.log(deleteUser.status);
    if(deleteUser.status === 200)
    {
      alert("deleted");
    }
    else{
        alert("error");
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">User Accounts</h2>
            <span className="text-xs text-gray-500">
              View accounts of registered users
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                CSV
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                {userData
                  .filter((itr) => itr.role !== "admin")
                  .map((itr) => (
                    <tr key={itr.id}>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{itr.id}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">{itr.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{itr.role}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{itr.email}</p>
                      </td>
                     
                        <Link href={`/user/${itr.id}`}>
                          <button className="mx-2 my-2 items-center bg-green-500 text-white px-5  h-12 rounded-md text-center">
                            Edit
                          </button>
                        </Link>
                        <button onClick={()=>handleDelete(itr.id)} className="mx-2 my-2 items-center bg-red-500 text-white px-5  h-12 rounded-md text-center">
                          Delete
                        </button>
                     
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              Showing 1 to 5 of 12 Entries
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
