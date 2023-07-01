"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>('admin portal');

export default function useAppContext() {
    const appContext = useContext(AppContext);
    return appContext;
}


export const AppContextProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentUser, setCurrentUser] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [allChats, setAllChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const router = useRouter();

    useEffect(() => {
        let ignore = false;
    
        if (!ignore) {
          let token = null;
    
          if (typeof window !== 'undefined') {
            token = localStorage.getItem('Trackit_admin[3343]-token');
          };

          const getUser = axios.get(`${process.env.NEXT_PUBLIC_API}admin`, {
            headers: { Authorization: `Bearer ${token}` },
          });
    
          const getUsers = axios.get(`${process.env.NEXT_PUBLIC_API}users`, {
            headers: { Authorization: `Bearer ${token}` },
          });


         const getAllChats = axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API}chats`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          
    
          Promise.all([
            getUser,
            getUsers, 
            getAllChats
          ])
          .then(([userResponse, allUsersResponse, chatsResponse]) => {
            setUser(userResponse.data);
            setAllUsers(allUsersResponse.data);
            setFilteredUsers([...allUsers]);
            setAllChats(chatsResponse.data);
           // setAuthorized(true);
          })
          .catch((error) => {
            console.error(error);
            router.push('/sign_in');
          });
        }
    
        return () => {
            ignore = true;
        }
      }, [])
    
      const contextValue = {
        user,
        setUser,
        currentPage,
        setCurrentPage,
        allUsers,
        setAllUsers,
        currentUser,
        setCurrentUser,
        filteredUsers,
        setFilteredUsers,
        currentChat,
        setCurrentChat,
        allChats,
        setAllChats,
        messages,
        setMessages,
      }

      return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
      )
}