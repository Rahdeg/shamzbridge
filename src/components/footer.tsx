import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
    <footer className="bg-blue-700 text-white py-8 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <div className=' flex items-center justify-center gap-x-2'>
                    <Image src="/footerlogo.svg" alt='logo' width={25} height={25} />
                    <p className=' text-2xl font-bold text-[#FFFFFF]'>HR Solutions</p>
                </div>
            </div>
            <ul className="flex space-x-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="flex space-x-4 mt-4 lg:mt-0">
                <p className=""><Image src="/facebook.svg" alt="Facebook" width="24" height="24" /></p>
                <p ><Image src="/twitter.svg" alt="Twitter" width="24" height="24" /></p>
                <p ><Image src="/linkdiln.svg" alt="LinkedIn" width="24" height="24" /></p>
            </div>
        </div>
    </footer>
);