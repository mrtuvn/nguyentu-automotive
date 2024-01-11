'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import categoryData from '@/data/categories.json'

export default function NavLinks(){
    const categories = [...categoryData];
    const pathname = usePathname();

    return(
        <>
            <nav className="navWrap flex flex-wrap list-none uppercase gap-4">
                {categories.map((category) => (
                    <li key={category.categoryId} className="navItem hover:underline">
                        <Link href={category.url} className="navItemLink">{category.name}</Link>
                    </li>
                ))}
            </nav>
        </>
    )
}

