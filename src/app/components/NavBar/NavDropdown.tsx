import {Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import React from 'react';

interface NavItem {
    name: string;
    href: string;
  }

  interface NavDropdownProps {
    name: string;
    items: NavItem[];
  }

const NavDropdown: React.FC<NavDropdownProps> = ({name, items}) => {
    return(
    <Menu>
    <MenuButton className="text-darkGreen hover:bg-olive hover:text-white
   rounded-md px-3 py-2 text-sm font-medium data-[open]:bg-darkGreen data-[open]:text-white">
      {name}
    </MenuButton>
    <MenuItems
      transition
      anchor="bottom end"
      className="w-52 origin-top-right rounded-xl border border-white/5 bg-darkGreen p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
    >
      {items.map((item) => (
        <MenuItem key={item.name}>
          <Link
            href={item.href}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
          >
            {item.name}
          </Link>
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
)}
const MobileNavDropdown: React.FC<NavDropdownProps> = ({name, items}) => {
  return (
    <Disclosure key={name} as="div">
      <DisclosureButton
        className="group text-darkGreen hover:bg-olive hover:text-white
          flex w-full justify-between rounded-md px-3 py-2 text-base font-medium group-data-[open]:bg-darkGreen group-data-[open]:text-beige">
        {name}
        <span className="ml-2 transition duration-300 group-data-[open]:rotate-180">▼</span>
      </DisclosureButton>
      <DisclosurePanel className="pl-4 pt-2 pb-2 space-y-1">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-darkGreen hover:bg-olive hover:text-white
              block rounded-md px-3 py-2 text-base font-medium"
          >
            {item.name}
          </Link>
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}
export {NavDropdown}
export {MobileNavDropdown}