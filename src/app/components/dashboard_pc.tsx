"use client"
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import useAppContext from '../context/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPC() {
  const { currentPage, setCurrentPage, user, setUser } = useAppContext();
  const [showDashboard, setShowDashboard] = useState(true);
  const router = useRouter();

  function handleDashboard() {
    showDashboard ? setShowDashboard(false) : setShowDashboard(true);
  }

  function Logout() {
    if (typeof window != "undefined") {
      localStorage.removeItem("Trackit_admin[3343]-token")      
    }

    setTimeout(() => {
      router.push("/sign_in")
    }, 2000)
  }

 const focusBg = "flex cursor-pointer gap-2 items-center justify-start rounded-lg px-4 py-2 text-gray-500 bg-primary text-white"
 const nonFocusBG = "flex cursor-pointer gap-2 items-center justify-start rounded-lg px-4 py-2 text-gray-500 hover:bg-primary hover:text-white";

  return (
    <>
     {
      !showDashboard ?
      <div onClick={() => handleDashboard()} className="flex m-4 justify-center items-center h-10 w-12 rounded-lg bg-primary text-white font-bold cursor-pointer">
    <i className="material-icons flex justify-center items-center m-auto">
    chevron_right
    </i>
    </div>
    : <></>
     }
       <div className={`${showDashboard ? "flex" : "hidden"} h-screen justify-between flex-col border-e bg-white w-[24rem] relative `}>
  <div className="px-4 py-6">
    <div className='flex flex-row justify-between'>
    <span
      className="grid h-10 w-52 place-content-center rounded-lg bg-primary text-xs text-white font-bold cursor-pointer"
    >
      View Messages Dashboard
    </span>
    <div onClick={() => handleDashboard()} className="flex justify-center items-center h-10 w-12 rounded-lg bg-primary text-white font-bold cursor-pointer">
    <i className="material-icons flex justify-center items-center m-auto">
    chevron_left
    </i>
    </div>
    </div>

    <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">

    <a
        href="#"
        className={currentPage == "Home" ? focusBg : nonFocusBG}
      >
          <svg className='h-5 w-5 opacity-90' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M15 16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2044 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L4 10L8 6.5M12 3L20 10L20 20H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>

        <span className="text-sm font-medium"> Home </span>
      </a>

            <a
        href="#"
        className={currentPage == "Admin" ? focusBg : nonFocusBG}
      >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

        <span className="text-sm font-medium"> Admins  </span>
      </a>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="text-sm font-medium"> Account </span>
          </div>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
          <a
            href="/account"
            className="flex cursor-pointer gap-2 items-center justify-start rounded-lg px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span className="text-sm font-medium"> Details </span>
          </a>

          
            <button
              onClick={() => Logout()}
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="text-sm font-medium"> Logout </span>
            </button>
          
        </nav>
      </details>

      <Link
        href="/messages"
        as={"/messages"}
        className="flex cursor-pointer gap-2 items-center justify-start rounded-lg px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
      >
        <svg className='h-5 w-5 opacity-80' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
          <path d="M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> 
          <path d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
          <path d="M15.9965 11H16.0054" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
          <path d="M11.9955 11H12.0045" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
          <path d="M7.99451 11H8.00349" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
          </g>
          </svg>

        <span className="text-sm font-medium"> Messages  </span>
      </Link>
    </nav>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="PfP"
        src={user.pfp}
        className="h-10 w-10 rounded-full object-cover bg-primary"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">{user.firstName} {user.lastName}</strong>

          <span> {user.email} </span>
        </p>
      </div>
    </a>
  </div>
</div>
    
    </>
  )
}
