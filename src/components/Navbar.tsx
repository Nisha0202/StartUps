import React from 'react'
import Form from 'next/form';
import { auth, signIn, signOut } from "../../auth"
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import Profile from './Profile';

export default async function Navbar() {

    const session = await auth()
  

    return (
        <header>
            <nav className='py-4 flex items-center justify-between'>
                <div className="logo flex items-center gap-1 font-bold text-lg">

                    <img src={"/logo.svg"} alt="Logo" className="size-6" /> StartUps
                </div>
                {!session ?
                    <form
                        action={async () => {
                            "use server"
                            await signIn("github")
                        }}
                    >
                        <button type="submit" className='hover:text-gray-500'>Signin with GitHub</button>
                    </form>
                    : <div className='flex items-center gap-4'>
                       <Profile session= {session}/>
                   


                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <button type="submit" className='hover:text-gray-500 flex items-center' title='Log Out'><LogOut className='size-4'/></button>
                        </form>
                    </div>
                }


            </nav>




        </header>
    )
}
