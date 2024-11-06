import React from 'react'
import Form from 'next/form';
import { Search, X } from 'lucide-react';
import SearchReset from './SearchReset';
export default function SearchForm({query}:{query?:string}) {
    
  return (
  
       
     <Form action="/" className='flex items-center bg-toggle border-2 border-gray-500 rounded px-4 py-2 search-form'>
       <input name="query" className='grow focus:outline-none placeholder-custom-color bg-transparent'
       defaultValue={query}
       placeholder='Search Ideas'/>
       {query ?
       
            <SearchReset />
            : <button type="submit"><Search className='size-5 text-gray-500 font-extrabold'/></button>
       }

     </Form>
   );

  
}
