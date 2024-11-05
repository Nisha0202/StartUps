import React from 'react'
 import Form from 'next/form';
import { Search } from 'lucide-react';
export default function SearchForm() {
  return (
       
     <Form action="/search" className='flex items-center bg-white border-2 rounded px-4 py-1'>
       <input name="query" className='grow focus:outline-none'/>
       <button type="submit"><Search className='size-4 text-gray-500'/></button>
     </Form>
   );

  
}
