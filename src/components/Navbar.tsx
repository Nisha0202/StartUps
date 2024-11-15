import React from 'react'
import { auth, signIn, signOut } from "../../auth"
import { LogOut } from 'lucide-react';
import Profile from './Profile';
import Theme from './Theme';

export default async function Navbar() {

    const session = await auth()


    return (
        <header>
            <nav className='py-4 flex-between'>
                <div className="logo flex items-center gap-1 font-bold">
                    <img src={"/logo.svg"} alt="Logo" className="size-6" /> StartUps
                </div>
                <div className='flex items-center gap-3'>

                    {!session ? <div className='flex items-center gap-3'>
                        <Theme />
                        <form
                            action={async () => {
                                "use server"
                                await signIn("github")
                            }}
                        >
                <button type="submit"
                    className='flex items-center gap-2 w-full px-3 py-1.5 text-sm action_btn font-medium
                     rounded  '>Signin with GitHub <image/></button>
                        </form>
                    </div> : <div className='flex items-center '>
                        <Profile session={session} />

                        {/* <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <button type="submit"
                                className="flex items-center hover:text-gray-500"
                                title='Log Out'><LogOut className='size-5' /></button>
                        </form> */}

                    </div>
                    }



                </div>



            </nav>




        </header>
    )
}
