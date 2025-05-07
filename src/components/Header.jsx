'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="#nos-actions">Nos actions</MobileNavLink>
        <MobileNavLink href="#temoignages">Témoignages</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
      </PopoverPanel>
    </Popover>
  )
}

function BetaPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" onClick={onClose}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 z-50 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900">Fonctionnalité à venir</h3>
            <p className="mt-2 text-slate-600">Notre formulaire d'adhésion sera disponible très prochainement. Nous vous remercions de votre patience !</p>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-[#58c469] hover:bg-[#4ab059] text-white rounded-md font-medium"
          >
            Fermer
          </button>
        </div>
      </div>
    </>
  );
}

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <header className="py-10 relative">
      {/* Bannière beta */}
      <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 z-10">
        <div className="absolute top-[14px] right-[-35px] rotate-45 bg-[#ff6b6b] text-white py-1 px-10 text-center text-sm font-bold shadow-md">
          BETA
        </div>
      </div>

      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#nos-actions">Nos actions</NavLink>
              <NavLink href="#temoignages">Témoignages</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="#"></NavLink>
            </div>
            <Button 
              onClick={() => setIsPopupOpen(true)}
              color="blue" 
              className="!bg-[#58c469] !hover:bg-[#4ab059] text-white"
            >
              <span>
                Nous rejoindre
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>

      {/* Popup */}
      <BetaPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </header>
  )
}