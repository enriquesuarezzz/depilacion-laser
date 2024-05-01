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
        <MenuItem setActive={setActive} active={active} item="Más Información">
          <div className="flex flex-col space-y-4  text-sm">
            <HoveredLink href="/web-dev">
              ¿Por qué depilación laser SHR?
            </HoveredLink>
            <HoveredLink href="/interface-design">Ventajas</HoveredLink>
            <HoveredLink href="/seo">Preguntas frecuentes</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ofertas">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">
              ¡Observa nuestras promociones!
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Opiniones">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">
              ¡Expora opiniones de clientes!
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacto">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">
              ¿Quieres que te contemos más?
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
