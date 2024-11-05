import React from 'react'

import { signIn } from "../../auth"

export default function Navbar() {
    return (
        <header>
            <nav className='py-4 flex items-center justify-between'>
                <div className="logo flex items-center gap-2 font-bold text-lg">

                    <img src={"/logo.svg"} alt="Logo" className="size-6" /> StartUps
                </div>
                <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className='hover:text-gray-500'>Signin with GitHub</button>
    </form>

            </nav>




        </header>
    )
}
