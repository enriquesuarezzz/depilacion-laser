'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem } from './NavbarLogic' // Import components from NavbarLogic
import { cn } from '@/utils/cn'
import { BarlowText } from '@/components/atoms/BarlowText'

export function NavbarComponent() {
  return (
    <div className="relative flex w-full items-center justify-center ">
      <Navbar className="top-2 " />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null) // State to track active menu item

  return (
    <div
      className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl', className)}
    >
      {' '}
      {/* Navbar container with fixed positioning */}
      <Menu setActive={setActive}>
        {' '}
        {/* Menu component with setActive prop */}
        {/* Menu items */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Inicio"
          index={0}
          key={0}
        >
          <div className="flex flex-col space-y-4  text-sm">
            <HoveredLink href="/#card0">
              <BarlowText
                text="¿Por qué depilación laser SHR?"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
            <HoveredLink href="/#card1">
              {' '}
              <BarlowText
                text="Ventajas"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
            <HoveredLink href="/#card2">
              <BarlowText
                text="¿La depilación laser SHR duele?"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
            <HoveredLink href="/#card3">
              <BarlowText
                text="¿Es permanente la depilación laser SHR?"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Equipo"
          key={1}
          index={1}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#about_us_section">
              <BarlowText
                text="Conoce nuestra especialista"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Ofertas"
          key={2}
          index={2}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#offers">
              <BarlowText
                text="¡Observa nuestras promociones!"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contacto"
          key={4}
          index={4}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contacto">
              <BarlowText
                text="¿Quieres que te contemos más?"
                className="text-black hover:text-gray-300 dark:text-white "
              />
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
