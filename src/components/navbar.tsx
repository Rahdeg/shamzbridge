"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useMedia } from 'react-use'

import { Menu } from 'lucide-react'
import NavButton from './nav-button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Logo from './logo'
import { cn } from '@/lib/utils'


const routes = [
    {
        href: "/",
        label: "Home"
    },

    {
        href: "/about",
        label: "About"
    },
    {
        href: "/services",
        label: "Services"
    },
    {
        href: "/contact",
        label: "Contact"
    },

]

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className=' flex items-center justify-center gap-x-1'>
                    <Button variant="outline" size="sm" className=' font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'>
                        <Menu className=' size-8 text-[#007DFC]' />
                    </Button>
                    <Logo />
                </SheetTrigger>
                <SheetContent side="left" className='px-2 w-full'>
                    <nav className='flex flex-col gap-y-2 pt-6'>
                        {
                            routes.map((route) => (
                                <Button key={route.href}
                                    variant="ghost"
                                    onClick={() => onClick(route.href)}
                                    className={cn(" justify-start text-[#64748B]", route.href === pathname && "text-[#007DFC] border-solid  border-b-2 border-blue-500")}
                                >
                                    {route.label}
                                </Button>
                            ))
                        }
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }


    return (
        <nav className=' hidden lg:flex items-center gap-x-2 overflow-x-auto'>
            {
                routes.map((route) => (
                    <NavButton
                        key={route.href}
                        href={route.href}
                        label={route.label}
                        active={pathname === route.href}
                    />
                ))
            }

        </nav>
    )
}

export default Navigation