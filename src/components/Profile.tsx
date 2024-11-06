import React from 'react'
import { Session } from 'next-auth';

export default function 
({session}:{session: Session}) {
  return (
    <div>
        
 
                                <img src={session?.user?.image!} alt="Profile Image" 
                                className='size-9 rounded-full border-2 border-gray-700 object-contain'
                                title={session?.user?.name?.split(' ')[0]}/>
                            
                     
    </div>
  )
}
