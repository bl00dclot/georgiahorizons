import { Menu, MenuButton, MenuItem, MenuItems, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'

// Enhanced interface with optional properties and additional metadata
interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  badge?: string;
}

interface NavDropdownProps {
  name: string;
  items: NavItem[];
  className?: string;
}

// Common styling constants with enhanced flexibility
const COMMON_TEXT_STYLES = "hover:cursor-pointer text-darkGreen hover:bg-olive hover:text-white rounded-md px-3 py-2";

const NavDropdown: React.FC<NavDropdownProps> = ({ name, items, className = '' }) => {
  if (items.length === 0) return null;
  
  return (
    <Menu as="div">
    {({ open }) => (
      <>
        <MenuButton 
          className={`
            ${COMMON_TEXT_STYLES} 
            ${className} 
            text-sm font-medium 
            ${open ? 'bg-darkGreen text-white' : ''} 
          `}
        >
          {name}
          <ChevronDownIcon 
            className={`
              inline-block ml-1 w-4 h-4 transition duration-150
              ${open ? 'rotate-180' : ''}
            `} 
          />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 z-10 origin-top-right rounded-xl border border-white/5 bg-darkGreen p-1 text-sm leading-6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none closed:scale-95 closed:opacity-0"
        >
          {items.map((item) => (
            <MenuItem 
              key={item.name} 
              disabled={item.disabled}
            >
              {({ disabled, active }) => (
                <Link
                  href={item.disabled ? '#' : item.href}
                  aria-disabled={item.disabled}
                  className={`
                    group flex w-full items-center gap-2 rounded-lg py-1.5 px-3
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${active ? 'bg-white/10' : ''}
                  `}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-olive text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </>
    )}
  </Menu>
  )
}

const MobileNavDropdown: React.FC<NavDropdownProps> = ({ name, items, className = '' }) => {
  if (items.length === 0) return null;
  
  return (
    <Disclosure key={name} as="div">
      {({ open }) => (
        <>
          <DisclosureButton
            className={`
              ${COMMON_TEXT_STYLES} 
              ${className}
              text-base w-full justify-between group flex font-medium
              ${open ? 'bg-darkGreen text-beige!' : ''}
            `}
          >
            {name}
            <ChevronDownIcon 
              className={`
                ml-2 w-5 h-5 transition duration-150
                ${open ? 'rotate-180' : ''}
              `} 
            />
          </DisclosureButton>
          <DisclosurePanel className="pl-4 pt-2 pb-2 space-y-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.disabled ? '#' : item.href}
                aria-disabled={item.disabled}
                className={`
                  ${COMMON_TEXT_STYLES} 
                  text-base block
                  active:bg-darkGreen active:text-beige
                  ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {item.name}
                {item.badge && (
                  <span className="ml-2 bg-olive text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export { NavDropdown, MobileNavDropdown }