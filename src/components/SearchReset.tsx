'use client'
import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function SearchReset() {
    const reset = () => {

        const form = document.querySelector('.search-form');
        if (form instanceof HTMLFormElement) {

            form.reset();
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



