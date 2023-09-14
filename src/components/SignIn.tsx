"use client"
import React from 'react'
import { useSession , signOut , signIn } from 'next-auth/react'
const SignIn = () => {
    const {data : session} = useSession();
    if(session && session.user){
        return ( 
            <div>
                <button
                className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                onClick={()=>signOut()}>Sign Out</button>
            </div>
          )
    }
    return (
        <div>
        <button
        className='py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
        onClick={()=>signIn()}>Sign In with github</button>
        </div>

    )
}

export default SignIn