'use client'
import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function SearchReset({query}:{query?:string})  {
    const reset = () => {
       
    
        // Select the form with the class 'search-form'
        const form = document.querySelector('.search-form');
    
        // Check if form is an HTMLFormElement
        if (form instanceof HTMLFormElement) {
            query = ''
            form.reset(); // Safe to call reset
        }
    };
    
    return (
      
          <Link href={'/'} >
                 <button type="button" onClick={reset}>
                <X className='size-4 text-gray-500' />
            </button>
          </Link>
      
      
    );
}



