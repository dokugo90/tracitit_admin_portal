"use client"
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import DashboardMessages from "../components/dashboard_messages";
import useAppContext from '../context/store';
import DashboardMobile from "../components/dashboard_mobile";
import { chatProps } from "../interfaces/interfaces";
import { socket } from "../../../socket"
import axios from "axios";
import { usePathname, useRouter } from 'next/navigation';


export default function ChatScreen({ chatId }: chatProps) {

    const { allUsers, setAllUsers, currentChat, setCurrentChat, user, messages, setMessages } = useAppContext();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    let isGetChatExecuted = false;

    const path = usePathname();

    socket.connect();

    socket.on("newMessage", (newMessage: any) => {
      if (!isGetChatExecuted) {
        getChat();
        isGetChatExecuted = true;
      }
    })

   function getChat() {
    setMessages([])
     try {
        const getChat = axios.post(`${process.env.NEXT_PUBLIC_API}getChat`, {
            chatId: path.slice(6).toString()
          })

          const getMessages = axios.post(`${process.env.NEXT_PUBLIC_API}getMessages`, {
            chatId: path.slice(6).toString()
          })

          Promise.all([
            getChat,
            getMessages
          ]).then(([chatResponse, messageResponse]) => {
            setCurrentChat(chatResponse.data)
            setMessages(messageResponse.data)
          })
     } catch (err) {
        alert(err)
     }
    }
    
    useEffect(() => {
        let ignore = false;
    
        if (!ignore) {
            getChat()
        }
    
        return () => {
            ignore = true;
        }
      }, []);

    async function sendMessage() {
        try {
      
          const req = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API}sendMessage`, {
              sender: user,
              chatId: currentChat._id,
              messageText: message
            }).then((response: any) => {
                //alert(response.data)
            });
          } catch (err) {
            alert(err)
          }
    }
    
    function getTimeAgo(sentDate: any) {
        const currentDateTime: any = new Date();
        const sentDateTime: any = new Date(sentDate);
      
        const timeDifference = currentDateTime - sentDateTime;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 0) {
          return `${days} day(s) ago`;
        } else if (hours > 0) {
          return `${hours} hour(s) ago`;
        } else if (minutes > 0) {
          return `${minutes} minute(s) ago`;
        } else {
          return 'Just now';
        }
      }
      

    return (
        <>
        <main className="w-full h-full flex">
            <section className="">
                <DashboardMobile />
            </section>
            <section className="flex flex-col float-right w-screen h-screen">
            <section className="w-full p-4 border-b flex justify-start">
                <div className="flex justify-center items-center gap-3">
                    {
                        loading ? 
                        <>
                        <img src={`${currentChat.participants == null ? "" : currentChat.participants[0].pfp}`} 
                    className="bg-blue-500 w-[50px] h-[50px] rounded-full object-cover" />
                    <div className="flex flex-col">
                    <p className="font-bold">{currentChat.participants == null ? "Loading..." : currentChat.participants[0].firstName}</p>
                    <p className="text-gray-700 text-sm font-bold mt-[-5px]">{currentChat.lastMessage ?? "Loading..."}</p>
                    </div>
                        </>
                    : <></>
                    }
                </div>
            </section>
            <section className="h-[74.7%] border-b">
                <div className="p-4">
                    {
                        messages.map((userMessage: any, index: number) => (
                            <div key={index} className="flex items-start mb-4">
      <img src={userMessage.sender.pfp} alt="Sender's Photo" className="w-10 h-10 rounded-full mr-4" />
      <div>
        <div className="flex items-center mb-1">
          <span className="text-sm font-semibold mr-2">{userMessage.sender.firstName} {userMessage.sender.lastName[0]}</span>
          <span className="text-xs text-gray-500">{getTimeAgo(userMessage.createdAt)}</span>
        </div>
        <p className="text-sm">{userMessage.messageText}</p>
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
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Hey There!"
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />
</label>
<div className="flex items-center">
<button onClick={() => sendMessage()} className="bg-primary h-[25px] p-6 flex justify-center items-center rounded-lg gap-2">
    <p className="text-white hidden lg:block font-bold">Send</p>
    <i className="material-icons text-white">send</i>
</button>
</div>
            </footer>
            </section>
        </main>
        </>
    )
}