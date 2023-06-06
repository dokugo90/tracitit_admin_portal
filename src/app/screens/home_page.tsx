"use client"
import React, { useState } from 'react'
import Dashboard from '../components/dashboard'
import useAppContext from '../utils/contexts'

function HomePage() {
  const { allUsers, setAllUsers } = useAppContext();

  return (
    <main className='flex w-full'>
      <section className='flex flex-left'>
      <Dashboard />
      </section>
      <section className='w-full flex-right'>
      <div className='flex w-full justify-center items-center p-12'>
      <label
  htmlFor="UserEmail"
  className="block w-full overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="text-xs font-medium text-gray-700"> Users </span>

  <input
    type="text"
    id="message"
    placeholder="Search Users"
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />
</label>
      </div>
      <div className='p-8 flex gap-2'>
        {
          allUsers.map((user: any, index: any) => (
            <div key={index} className='w-full border-4 rounded-xl border-primary p-4'>
              <div className='flex w-full items-center gap-2'>
                <img src={user.pfp} className='w-[55px] h-[55px] bg-red-500 rounded-full object-cover' />
                <p>{user.firstName}</p>
              </div>

            </div>
          ))
        }
      </div>
      </section>
      
    </main>
  )
}

export default HomePage