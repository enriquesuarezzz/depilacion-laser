'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './NavbarLogic'
import { cn } from '@/utils/cn'

export function NavbarComponent() {
  return (
    <div className="relative flex w-full items-center justify-center ">
      <Navbar className="top-2 " />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div
      className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl', className)}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Inicio"
          index={0}
          key={0}
        >
          <div className="flex flex-col space-y-4  text-sm">
            <HoveredLink href="/#card0">
              ¿Por qué depilación laser SHR?
            </HoveredLink>
            <HoveredLink href="/#card1">Ventajas</HoveredLink>
            <HoveredLink href="/#card2">
              ¿La depilación laser SHR duele?
            </HoveredLink>
            <HoveredLink href="/#card3">
              ¿Es permanente la depilación laser SHR?
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
              Conoce nuestra especialista
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
              ¡Observa nuestras promociones!
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Opiniones"
          key={3}
          index={3}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#reviews'">
              ¡Expora opiniones de clientes!
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
              ¿Quieres que te contemos más?
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
