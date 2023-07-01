"use client"
import { useState } from "react"
import useAppContext from '../context/store';
import AnimationLoader from "./loader";

export default function DashboardMessages() {
  const { allUsers, setAllUsers, user, setUser } = useAppContext();
      const [messages, setMessages] = useState([
        {
          email: "test@gmail.com",
          photoUrl: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
          lastMessage: "Hey There!",
          lastMessageDate: "4/12/23"
        }
      ])

    return (
        <>
        
       <main className="flex float-left w-full border-r ">
        <div className="bg-white w-[24rem] flex flex-col gap-5 p-4">
        <span
      className="grid h-10 w-40 place-content-center rounded-lg bg-primary text-xs text-white font-bold cursor-pointer"
    >
      Messages
    </span>
    <div className="w-full">
    {
                    user.messageList == undefined ?
                    <AnimationLoader />
                    : user.messageList.map((user: any, index: any) => (
                      <div key={index} className="w-full hover:bg-primary hover:text-white rounded-lg cursor-pointer">
                          <div className="flex p-4 w-full items-center gap-2">
                              <img src={user.pfp} className="w-[40px] h-[40px] bg-red rounded-full object-cover" />
                              <p>{user.firstName}</p>
                          </div>
                      </div>
                  ))
                }
    </div>
        </div>
       </main>
        </>
    )
}