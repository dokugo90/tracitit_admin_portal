"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard';
import useAppContext from '../context/store';
import Link from 'next/link';
import { Dialog, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { socket } from '../../../socket';

interface userProp {
  firstName: string,
  lastName: string,
  pfp: string,
  email: string,
  _id: string
}

function HomePage() {
  const { allUsers, setAllUsers, user, setUser } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<userProp>();
  const [t, sT] = useState("testing")
  const router = useRouter();

  async function addToMessagesList() {
    try {
      let token = null;
    
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('Trackit_admin[3343]-token');
    };

    const req = await axios.post(`${process.env.NEXT_PUBLIC_API}adminMessagesList`, {
        userEmail: currentUser?.email,
        adminId: user._id
      }).then((response) => {
        router.push(`/chat/${response.data._id}`);
      });
    } catch (err) {
      console.log(err)
    }
  }

  function handleCurrentUser(id: string) {
    const curUser = allUsers.find((user: any) => user._id === id);
    setCurrentUser(curUser);
    setOpen(true)
  }
  
  // Filter the allUsers array based on the searchQuery
  const filteredUsers = allUsers.filter((user: any) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <Dialog onClose={() => {
       setOpen(false);
      }} open={open}>
        <DialogTitle className="bg-primary">
          <div className='flex items-center gap-2'>
            <img src={currentUser?.pfp} className='w-10 h-10 rounded-full' />  
          <div>
          <p className='text-white text-base'>{currentUser?.firstName} {currentUser?.lastName[0]}</p>
          <p className='text-white text-[11px]'>{currentUser?.email}</p>
          </div>
          </div>
          </DialogTitle>
        <div className="w-[250px] h-[300px] bg-white sm:w-[350px] p-4 ">
          <button onClick={() => addToMessagesList()} className='bg-primary rounded-lg text-white font-bold p-2 w-full'>Message</button>
        </div>
      </Dialog>
    <main className='flex w-full'>
      <section className='flex flex-left'>
        <Dashboard />
      </section>
      <section className='w-full flex-right'>
        <div className='flex w-full justify-center items-center p-1 md:p-12'>
          <label
            htmlFor='UserEmail'
            className='block w-full overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
          >
            <span className='text-xs font-medium text-gray-700'> Users </span>

            <input
              type='text'
              id='message'
              placeholder='Search Users'
              className='mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
        <div className='flex gap-2 flex-wrap justify-center p-1 md:p-1'>
          {filteredUsers.map((user: any, index: any) => (
           
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 border-4 rounded-xl border-primary p-4 cursor-pointer' key={index} onClick={() => handleCurrentUser(user._id)}>
              <div className='flex w-full items-center gap-2'>
                <img
                  src={user.pfp}
                  className='w-[55px] h-[55px] bg-red-500 rounded-full object-cover'
                />
                <p>{user.firstName} {t}</p>
              </div>
              </div>
          
          ))}
        </div>
      </section>
    </main>
    </>
  );
}

export default HomePage;
