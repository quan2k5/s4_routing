'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./b5.css"
export default function b5() {
  const pathName=usePathname();
  return (
    <div>
        <Link className={pathName === '/Home' ? 'active' : ''} href={"/Home"}>Home</Link>
        <Link className={pathName === '/About' ? 'active' : ''}  href={"About"}>About</Link>
        <Link className={pathName === '/Contact' ? 'active' : ''}  href={"/Contact"}>Contact</Link>
        <Link className={pathName === '/Login' ? 'active' : ''}  href={"Login"}>Login</Link>
    </div>
  )
}
