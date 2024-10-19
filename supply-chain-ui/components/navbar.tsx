'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ShinyButton from './ui/shiny-button'
import { ArrowRight } from 'lucide-react'
import { IconBox } from '@tabler/icons-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black text-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-xl font-bold">
                  <span className='flex'><IconBox className="ml-3px"/> SupplyChain</span></span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</Link>
                <div className="flex">
                  <Link href="/login">
                  <ShinyButton>
                    <span className="flex items-center">
                      Login <ArrowRight className="ml-1.5 w-5 h-5" />
                    </span>
                  </ShinyButton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <Button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-300 ease-in-out">
              Services
            </Link>
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-300 ease-in-out">
              Login
            </Link>
            <Link href="/signup" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-300 ease-in-out">
              Signup
            </Link>
          </div>
        </div>
      </nav>
      <div className="pt-16 backdrop-blur-sm">
        {/* Content that gets blurred under the navbar */}
      </div>
    </>
  )
}