'use client'

import Link from 'next/link'


export default function NavBar() {
    const items = [
        {name: 'Home', href: '/'},
        {name: 'About', href: '/about'},
        {name: 'Projects', href: '/projects'},
        {name: 'Conatct', href: '/contact'},
        {name: 'Blog', href: '/blog'},
        {name: "Edit", href: '/edit'}
    ]

    return (
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold">Your Name</Link>
            </div>
            <div className="hidden md:block">
                <nav>
                    <ul className="flex space-x-4">
                        {items.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-gray-700 hover:text-blue-500">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>

    )

}