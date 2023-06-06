"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/app/components/dashboard';
import { useMediaQuery } from 'react-responsive';
import DashboardMobile from '@/app/components/dashboard_mobile';
import AppContext from './utils/app_state';
import HomePage from './screens/home_page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MessageScreen from './screens/messageScreen';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState("Home");
  const router = useRouter();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      let token = null;

      if (typeof window !== 'undefined') {
        token = localStorage.getItem('Trackit_admin[3343]-token');
      }

      const getUsers = axios.get(`${process.env.NEXT_PUBLIC_API}users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      

      Promise.all([
        getUsers, 
      ])
      .then(([userResponse]) => {
        setAllUsers(userResponse.data);
       // setAuthorized(true);
      })
      .catch((error) => {
        console.error(error);
        router.push('/sign_in');
      });
    }

    return () => {

    }
  })

  const contextValue = {
    user,
    setUser,
    currentPage,
    setCurrentPage,
    allUsers,
    setAllUsers
  }

  return (
    <>
    <AppContext.Provider value={contextValue}>
      <main className='flex flex-row w-full'>
        <HomePage />
    </main>
    </AppContext.Provider>
    </>
  )
}
