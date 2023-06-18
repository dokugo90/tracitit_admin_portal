import React, { FormEvent, useRef, useState } from 'react';
import axios, { Axios } from 'axios';
import { useRouter } from "next/navigation";
import { Alert, Snackbar } from '@mui/material';

function SignIn() {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function SignInAdmin(e: FormEvent) {
    e.preventDefault()

    const form = new FormData(formRef.current as HTMLFormElement | undefined)
  
      const email = form.get("email");
      const password = form.get("password")

      let navigate = false;

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}admin_sign_in`, { email: email, password: password }).then((response) => {
        if (response.data.token != null) {
          if (typeof window != "undefined") {
            localStorage.setItem("Trackit_admin[3343]-token", response.data.token)
          }
          setMessage("Logging you in!")
          setOpen(true)
          navigate = true;
        } else {
          setMessage(response.data.message)
          setOpen(true)
        }
      }).finally(() => {
        if (navigate) {
          router.push("/")
        } else {
          return;
        }
      })
    } catch (err) {
      alert(err)
    }
  }

  function handlePasswordVisibility() {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  }

  return (
    <>
    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<Snackbar
  open={open}
  className='shadow-lg shadow-gray-100'
  autoHideDuration={6000}
  onClose={() => {
    setOpen(false)
  }}
  >
    <Alert  severity="info">
    {message}
  </Alert>
    </Snackbar>

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
     Admin Sign In
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Track It Admin Portal
    </p>

    <form
      action=""
      ref={formRef}
      onSubmit={(e) => SignInAdmin(e)}
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            name='email'
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type={!showPassword ? "password" : "text"}
            name='password'
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            {
              !showPassword ? 
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => handlePasswordVisibility()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            : 
            <svg className='h-4 w-4 cursor-pointer'  onClick={() => handlePasswordVisibility()} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9CA3AF">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z" fill="#9CA3AF"></path>
             </g>
             </svg>
            

            }

            
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

    </form>
  </div>
</div>
    </>
  )
}

export default SignIn