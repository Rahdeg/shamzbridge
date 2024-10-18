"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Hero = () => {

    const router = useRouter();



    return (
        <div className=' py-16 px-3 lg:px-14 w-full'>
            <div className=' w-full flex flex-col lg:flex-row items-center justify-between '>
                <div className=' flex flex-col items-start justify-center w-full  gap-y-4' >
                    <p className="text-4xl md:text-7xl font-bold flex items-center text-blue-700">
                        Transforming Your Workforce
                    </p>


                    <div className=' flex items-start justify-between'>
                        <p className='  text-[#007DFC] text-2xl'>
                            Empower your business with our top-notch HR solutions
                        </p>



                    </div>


                    <Button className=' rounded-3xl bg-blue-700 text-white mt-5 hover:bg-blue-800 text-lg' onClick={() => router.push("/services")}>
                        Discover Our Services
                    </Button>
                </div>

                <div className="relative flex items-center justify-center w-full mt-28 lg:mt-0">
                    <div className="absolute lg:inset-0   flex items-center justify-center ">
                        <div className="w-96 h-96 bg-[#Feeeea] rounded-full"></div>
                    </div>
                    <div className='relative px-2  md:px-0'>
                        <Image src="/human.svg" alt='happy' width={600} height={600} />

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Hero