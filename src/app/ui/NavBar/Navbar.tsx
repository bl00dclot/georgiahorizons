'use client'
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import {NavDropdown, MobileNavDropdown} from './NavDropdown';
import Logo from '@/app/ui/Logo/Logo'
import { useEffect, useState } from 'react';

// Properly utilized Navigation interface
interface Navigation {
  name: string;
  href: string;
  subItems?: Navigation[];
}

const navigationConfig: { main: Navigation[] } = {
  main: [
    { 
      name: 'Georgia', 
      href: '#', 
      subItems: [
        { name: 'General', href: '/general' },
        { name: 'History', href: '/history' },
        { name: 'Culture', href: '/culture' },
        { name: 'Nature', href: '/nature' },
      ]
    },
    { 
      name: 'Tours', 
      href: '#', 
      subItems: [
        { name: 'Guide tours', href: '/guide' },
        { name: 'Adventure', href: '/adventure' },
        { name: 'Health & Relax', href: '/health' },
        { name: 'Nightlife', href: '/nightlife' },
        { name: 'Cuisine & Wine', href: '/cuisine-wine' },
      ]
    },
    { name: 'Booking', href: '/booking' },
    { name: 'About', href: '/about' },
  ]
};


export default function Navbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

    useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollPos = window.scrollY;
      
      // Set visibility based on scroll direction
      // visible when scrolling up, hidden when scrolling down
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);
      
      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Disclosure as="nav" className={`
          fixed w-full bg-white shadow-md z-5 transition-transform duration-300 border-b-4 border-darkGreen
          ${visible ? 'translate-y-0' : '-translate-y-full'}
        `}>
      {({ open: mobileMenuOpen }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-darkGreen hover:bg-olive hover:text-white active:bg-darkGreen active:text-beige focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkGreen">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            <div className="flex justify-center w-full items-center sm:hidden">
              <Logo 
              widthIcon={40}
              heightIcon={40}
              widthText={240}
              heightText={80}/>
            </div>

            <div className="hidden sm:flex items-center">
              <Logo 
              widthIcon={40}
              heightIcon={40}
              widthText={240}
              heightText={80}/>
            </div>

            <div className="flex flex-1 items-right justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  {navigationConfig.main.map((item) => (
                    item.subItems ? (
                      <NavDropdown 
                        key={item.name} 
                        name={item.name} 
                        items={item.subItems} 
                      />
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="hover:cursor-pointer text-darkGreen hover:bg-olive hover:text-white active:bg-darkGreen active:text-beige
                          rounded-md px-3 py-2 text-sm font-medium">
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationConfig.main.map((item) => (
                item.subItems ? (
                  <MobileNavDropdown 
                    key={item.name} 
                    name={item.name} 
                    items={item.subItems} 
                  />
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="text-darkGreen hover:bg-olive hover:text-white active:bg-darkGreen active:text-beige
                            block rounded-md px-3 py-2 text-base font-medium">
                    {item.name}
                  </DisclosureButton>
                )
              ))}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}