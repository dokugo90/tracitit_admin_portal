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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 

  return (
    <>
      <main className='flex flex-row w-full'>
        <HomePage />
    </main>
    </>
  )
}
