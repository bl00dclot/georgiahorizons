
'use client'
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import {NavDropdown, MobileNavDropdown} from './NavDropdown';
import Image from 'next/image';
import GeorgiaHorizonsLogoText from './../../../../public/logoText.svg?url'
import GeorgiaHorizonsLogoSmall from './../../../../public/logoSmall.svg?url'

interface Navigation {
  name: string;
  href: string;
}

export default function Navbar() {
  
  // Initial navigation arrays
  const navMenu: Navigation[] = [
    { name: 'Georgia', href: '#',},
    { name: 'Tours', href: '#',},
    { name: 'Booking', href: '#',},
    { name: 'About', href: '#',},
  ];
  
  const georgia: Navigation[] = [
    { name: 'General', href: '#',},
    { name: 'History', href: '#',},
    { name: 'Culture', href: '#',},
    { name: 'Nature', href: '#',},
  ];
  
  const tours: Navigation[] = [
    { name: 'Guide tours', href: '#',},
    { name: 'Adventure', href: '#',},
    { name: 'Health & Relax', href: '#',},
    { name: 'Photography', href: '#',},
    { name: 'Nightlife', href: '#',},
    { name: 'Cuisine & Wine', href: '#',},
  ];

  


  return (
    <Disclosure as="nav" className="bg-white border-b-4 border-darkGreen sticky top-0">
      {({ open: mobileMenuOpen }) => (
        <div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="inline-block inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-darkGreen hover:bg-darkGreen hover:text-beige focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkGreen">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              {/* Logo for mobile view - centered */}
              <div className="flex justify-center w-full items-center sm:hidden">
                <Link
                href="/">
                <Image
                className='m-1' 
                src={GeorgiaHorizonsLogoSmall}
                alt='Sun and Mountain logo small'
                width={40}
                height={0}
                />
                </Link>
                <Link href="/">
                <div className='mt-2 w-65 p-px'>
                <Image
                  src={GeorgiaHorizonsLogoText}
                  alt='Georgia Horizons logo'
                  width={0}
                  height={0}
                />
                </div>
                </Link>
              </div>
              
              {/* Logo for desktop view - left aligned */}
              <div className="hidden sm:flex items-center">
                <Link href="/">
                <Image 
                className='m-2'
                src={GeorgiaHorizonsLogoSmall}
                alt='Sun and Mountain logo small'
                width={40}
                height={0}
                /></Link>
                <Link href="/">
                <Image
                  className='mt-2'
                  src={GeorgiaHorizonsLogoText}
                  alt='Georgia Horizons logo'
                  width={0}
                  height={40}
                />
                </Link>
              </div>
              <div className="flex flex-1 items-right justify-end sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navMenu.map((item) => (
                      item.name === "Georgia" ? (
                      <NavDropdown key={item.name} name={item.name} items={georgia} />
                      ) : item.name === "Tours" ? (
                        <NavDropdown key={item.name} name={item.name} items={tours} />
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-darkGreen hover:bg-olive hover:text-white active:bg-darkGreen
                            rounded-md px-3 py-2 text-sm font-medium">
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navMenu.map((item) => (
                item.name === "Georgia" ? (
                  <MobileNavDropdown key={item.name} name={item.name} items={georgia} />
                ) : item.name === "Tours" ? (
                  <MobileNavDropdown key={item.name} name={item.name} items={tours} />
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="text-darkGreen hover:bg-olive hover:text-white
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