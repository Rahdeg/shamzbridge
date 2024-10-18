"use client"
import React from 'react';
import Logo from './logo';
import Navigation from './navbar';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


const Header = () => {
    const router = useRouter();

    return (
        <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
            <div className='flex py-5 border-b-2 w-full'>
                <div className='px-3 lg:px-14 flex items-center justify-between w-full'>
                    <div className='hidden lg:flex'>
                        <Logo />
                    </div>
                    <Navigation />
                    <Button className=' bg-[#007DFC] hover:bg-blue-700' onClick={() => router.push("/services")}>
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;