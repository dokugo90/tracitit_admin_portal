"use client"
import React, { useEffect, useState } from 'react'
import useAppContext from '../context/store';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AnimationLoader from './loader';
import { chatRoomProps } from '../interfaces/interfaces';

export default function DashboardMobile() {
  const { currentPage, setCurrentPage, user, setUser, allChats, currentChat, setCurrentChat } = useAppContext();
  const [isHomeRoute, setIsHomeRoute] = useState(true);
  const [isAdminsRoute, setIsAdminsRoute] = useState(false);
  const [isAccountRoute, setIsAccountRoute] = useState(false);
  const [isMessagesRoute, setIsMessagesRoute] = useState(false);
  const [isChatRoute, setIsChatRoute] = useState(false);
  const [chat, setChat] = useState<chatRoomProps>();

  const router = useRouter();

  const path = usePathname();

  function handleCurrentPage() {
    if (path == '/account') {
      setIsAccountRoute(true);
      setIsAdminsRoute(false);
      setIsMessagesRoute(false)
      setIsHomeRoute(false)
      setIsChatRoute(false);
    } else if (path == "/messages") {
      setIsAccountRoute(false);
      setIsAdminsRoute(false);
      setIsMessagesRoute(true)
      setIsHomeRoute(false);
      setIsChatRoute(false);
    } else if (path.includes("/chat")) {
      setIsAccountRoute(false);
      setIsAdminsRoute(false);
      setIsMessagesRoute(false)
      setIsHomeRoute(false)
      setIsChatRoute(true);
    } else if (path == '/admins') {
      setIsAccountRoute(false);
      setIsAdminsRoute(true);
      setIsMessagesRoute(false)
      setIsHomeRoute(false)
      setIsChatRoute(false);
    } else {
      setIsAccountRoute(false);
      setIsAdminsRoute(false);
      setIsMessagesRoute(false)
      setIsHomeRoute(true);
      setIsChatRoute(false);
    }
  }

  function findChatId(otherUserId: string) {
    const chat = allChats.find((chat: any) => {
      const participant = chat.participants.find((member: any) => member._id === otherUserId);
      return participant && participant._id === otherUserId && chat.adminId === user._id;
    });
  
    if (chat) {
      setChat(chat);
    } else {
      // Handle the case when the chat is not found
    }
  }
  

    useEffect(() => {
        let ignore = false;

        if (!ignore) {
         handleCurrentPage()
        }

        return () => {
          ignore = true;
        }
    }, [path])

  function Logout() {
    if (typeof window != "undefined") {
      localStorage.removeItem("Trackit_admin[3343]-token")      
    }

    setTimeout(() => {
      router.push("/sign_in")
    }, 2000)
  }

  return (
    <>
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
  <div>
    <div className="inline-flex h-16 w-16 items-center justify-center">
      <a
      href='/account'
      className="t group relative flex justify-center rounded px-2 py-1.">
    <img
        alt="PfP"
        src={user.pfp}
        className="h-10 w-10 rounded-full object-cover bg-primary"
      />
       <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                <p className="text-xs">
          <strong className="block font-medium">{user.firstName} {user.lastName}</strong>

          <span> {user.email} </span>
        </p>
              </span>
              </a>
    </div>

    <div className="border-t border-gray-100">
      <nav aria-label="Main Nav" className="flex flex-col p-2">
        <div className="py-4">
          <Link
            href="/"
            
            className={`t group relative flex justify-center rounded ${isHomeRoute ? "bg-blue-50 text-blue-700" : "first-letter:"} px-2 py-1.5`}
          >
            <svg className='h-5 w-5 opacity-90' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M15 16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2044 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L4 10L8 6.5M12 3L20 10L20 20H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>

            <span
              className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
            >
              Home
            </span>
          </Link>
        </div>

        <ul className="space-y-1 border-t border-gray-100 pt-4">
          <li>
            <Link
              href=""
              className={`t group relative flex justify-center rounded ${isAdminsRoute ? "bg-blue-50 text-blue-700" : ""} px-2 py-1.5`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Admins
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/account"
              className={`t group relative flex justify-center rounded ${isAccountRoute ? "bg-blue-50 text-blue-700" : "first-letter:"} px-2 py-1.5`}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Account
              </span>
            </Link>
          </li>

          <li>
              <Link
        href="/messages"
        as={"/messages"}
        className={`t group relative flex justify-center rounded ${isMessagesRoute ? "bg-blue-50 text-blue-700" : "text-gray-100"} px-2 py-1.5`}
      >
              <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                Messages
              </span>
              </Link>
          </li>

         {
          isMessagesRoute || isChatRoute ?
          <li className="w-full">
          {
                          user.messageList == undefined ?
                          <AnimationLoader />
                          : user.messageList.map((userMList: any, index: any) => (
                              <Link
                              onMouseEnter={() => findChatId(userMList._id)}
                              onClick={() => setCurrentChat(chat)}
                              href="/chat/[chatId]"
                              as={`/chat/${chat?._id}`}
                              key={index}
                              className={`t group relative flex justify-center  rounded px-2 py-1.5`}
                            >
                              <img src={userMList.pfp} className='w-[50px] h-[50px]' />
                      
                                    <span
                                      className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                       <p className="text-xs">
                <strong className="block font-medium">{userMList.firstName} {userMList.lastName}</strong>
      
                <span> {userMList.email} </span>
              </p>
                                    </span>
                                    </Link>
                        ))
                      }
          </li>
          : <></>
         }
        </ul>
      </nav>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
   
  <button
      onClick={() => Logout()}
        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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

        <span
          className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        >
          Logout
        </span>
      </button>
  </div>
</div>
    </>
  )
}
