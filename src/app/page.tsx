"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/app/components/dashboard';
import { useMediaQuery } from 'react-responsive';
import DashboardMobile from '@/app/components/dashboard_mobile';
import HomePage from './screens/home_page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MessageScreen from './screens/messageScreen';
import axios from 'axios';
import useAppContext from './context/store';
import { socket } from '../../socket';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user,
    setUser,
    currentPage,
    setCurrentPage,
    allUsers,
    setAllUsers,
    currentUser,
    setCurrentUser,
    filteredUsers,
    setFilteredUsers,
  allChats,
setAllChats } = useAppContext();
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

          const getAllChats = axios.get(`${process.env.NEXT_PUBLIC_API}chats`, {
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
            setFilteredUsers([...allUsers])
            setAllChats(chatsResponse.data)
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

  return (
    <>
      <main className='flex flex-row w-full'>
        <HomePage />
    </main>
    </>
  )
}
