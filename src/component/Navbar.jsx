"use client"

import { fetchApi } from '@/api/api'
import Link from 'next/link'
import { useEffect } from 'react'
const Navbar = () => {

  useEffect(()=>{
    fetchApi()
  },[])

  return (
     <nav className='flex gap-16 justify-around  mt-10'>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="navlinks flex gap-16">
      <Link href="/">Home</Link>
      <Link href="/showreel">Showreel</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar