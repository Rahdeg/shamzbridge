

import { Footer } from '@/components/footer';
import Header from '@/components/header';
import React from 'react'



type Props = {
    children: React.ReactNode;
}

const ProductsLayout = ({ children }: Props) => {
    return (
        <div className='bg-[#ffffff]'>
            <Header />
            <main className=' mt-20'>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default ProductsLayout