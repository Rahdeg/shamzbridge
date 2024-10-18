import React from 'react'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
    href: string;
    label: string;
    active?: boolean
}

const NavButton = ({ href, label, active }: Props) => {
    return (
        <Button asChild size="sm" variant="outline" className={cn("w-full border-none lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-[#007DFC]  focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-[#64748B]focus:bg-white/30 transition text-base", active ? " text-[#007DFC] border-solid  border-b-2 border-blue-500" : " text-[#64748B]")}>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

export default NavButton