"use client"
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import DashboardMessages from "../components/dashboard_messages";
import useAppContext from '../context/store';

export default function MessageScreen() {

    const { allUsers, setAllUsers } = useAppContext();
    const [messages, setMessages] = useState(
        [
            {
                username: "Testing",
                userPhoto: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                message: "Testing messaging!",
                time: "6/5/2023",
            },
            {
                username: "Testing",
                userPhoto: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                message: "Testing messaging!",
                time: "6/5/2023",
            }
        ]
        );

    

    return (
        <>
        <main className="w-full h-full flex">
            <section className="w-[24rem] flex float-left">
                <DashboardMessages />
            </section>
            <section className="flex flex-col float-right w-screen h-screen">
            <section className="w-full p-4 border-b flex justify-start">
                <div className="flex justify-center items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                    className="bg-blue-500 w-[50px] h-[50px] rounded-full object-cover" />
                    <p>Username</p>
                </div>
            </section>
            <section className="h-[74.7%] border-b">
                <div className="p-4">
                {
                    messages.map((message, index) => (
                        <div key={index} className="w-full">
                            <div className="flex p-4 w-full items-center gap-2">
                                <img src={message.userPhoto} className="w-[40px] h-[40px] bg-red rounded-full object-cover" />
                                <p>{message.message}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
            
            <footer className="p-4 flex w-full fle gap-2">
                {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<label
  htmlFor="UserEmail"
  className="block w-full overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="text-xs font-medium text-gray-700"> Message </span>

  <input
    type="text"
    id="message"
    placeholder="Hey There!"
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />
</label>
<div className="flex items-center">
<button className="bg-primary h-[25px] p-6 flex justify-center items-center rounded-lg gap-2">
    <p className="text-white font-bold">Send</p>
    <i className="material-icons text-white">send</i>
</button>
</div>
            </footer>
            </section>
        </main>
        </>
    )
}