import React from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div className='p-4 max-w-lg mx-auto' >
      <h1 className='text-4xl text-center font-semibold my-7'> Sign Up</h1>

      <form className='flex flex-col gap-4'>
 

        <input type="text" placeholder='username' className='border p-4 rounded-lg ' id='username' />
       <input type="email" placeholder='email' className='border p-4 rounded-lg ' id='email' />
        <input type="password" placeholder='password' className='border p-4 rounded-lg ' id='password'  />
        <button className='bg-slate-700 text-white p-4 rounded-lg hover:opacity-80'> Sign up</button>
      </form>
      <div className='flex gap-4 mt-5'>
        <p>


          Have an account?
        </p>
        <Link to={"/sign-in"}>
        <span className='text-blue-800'>
          Sign in</span>
          </Link>
        </div>
    </div>
  )
}
