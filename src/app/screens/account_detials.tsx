"use client"
import Dashboard from "../components/dashboard";
import useAppContext from "../context/store";


export default function AccountDetails() {
    const { user, setUser } = useAppContext();

    return (
        <>
        <main className="flex w-full">
        <section className='flex flex-left'>
      <Dashboard />
      </section>
            <section className="w-full flex float-right flex-col p-8">
                   <div className="flex flex-col gap-8">
                   <h1 className="text-primary text-2xl font-bold lg:text-center">Account Details</h1> 
                <div className="flex justify-start flex-col items-center sm:flex-row lg:justify-center">
                <div className="flex items-center gap-2 border w-full p-2 sm:p-4 lg:w-1/3 ">
                    <img className="sm:h-12 sm:w-12 h-9 w-9 rounded-full" src={user.pfp} />
                    <div className="flex flex-col">
                    <p className="font-bold text-sm sm:text-base">{user.firstName} {user.lastName == null ? user.lastName : user.lastName[0]}</p>
                    <p className="text-gray-500 text-[9px] sm:hidden font-bold">{user.email == null ? "" : user.email.replace("@gmail.com", "...")}</p>
                    <p className="text-gray-500 text-sm sm:block font-bold hidden">{user.email}</p>
                    </div>
                    <i className="material-icons flex justify-end ml-auto text-red-500">delete</i>
                </div>

                <div>
                    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
      Change Account Details
    </h1>

    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            value={user.email}
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
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="text"
            value={user.firstName}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter firstname"
          />

        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="text"
            value={user.lastName}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter lastname"
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter new password"
          />

          
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Done
      </button>
    </form>
  </div>
</div>
                </div>
                </div>
                   </div>
            </section>
        </main>
        </>
    )
}