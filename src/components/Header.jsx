'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function ChevronDownIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

function XMarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

const navigationItems = [
  {
    title: "L'association",
    submenu: [
      { label: "Qui sommes-nous", href: "/association/qui-sommes-nous" },
      { label: "Notre histoire", href: "/association/notre-histoire" },
    ],
  },
  {
    title: "Assemblées & réunions",
    href: "/assemblees/calendrier"
  },
  {
    title: "Actions & activités", 
    submenu: [
      { label: "Événements", href: "/actions/evenements" },
      { label: "Galerie", href: "/actions/galerie" },
    ],
  },
  {
    title: "Commissions",
    submenu: [
      { label: "Liste des commissions", href: "/commissions/liste" },
      { label: "S'engager", href: "/commissions/engager" },
    ],
  },
  {
    title: "Documents",
    href: "/documents"
  },
  { title: "Témoignages", href: "#temoignages" },
];

function BetaPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 transition-opacity" onClick={onClose}></div>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 relative bg-white">
      {/* Bannière beta - Modification du positionnement */}
      <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 z-10 lg:block hidden">
        <div className="absolute top-[14px] right-[-35px] rotate-45 bg-[#ff6b6b] text-white py-1 px-10 text-center text-sm font-bold shadow-md">
          BETA
        </div>
      </div>
      
      {/* Version alternative pour mobile */}
      <div className="absolute top-0 left-0 w-full lg:hidden">
        <div className="bg-[#ff6b6b] text-white py-1 px-2 text-center text-xs font-bold shadow-md">
          BETA
        </div>
      </div>

      <Container>
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="Home">
              <span className="sr-only">Association ADJOBI Porto-Novo</span>
              <Logo className="h-14 w-auto" />
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
          <PopoverGroup className="hidden lg:flex lg:gap-x-6">
            {navigationItems.map((item) => (
              item.submenu ? (
                <Popover key={item.title} className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
                    {item.title}
                    <ChevronDownIcon className="h-4 w-4 flex-none text-gray-400" aria-hidden="true" />
                  </PopoverButton>

                  <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.href}
                          className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <a href={subItem.href} className="block font-semibold text-gray-900">
                              {subItem.label}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                          <ChevronRightIcon className="h-4 w-4 flex-none text-gray-400 group-hover:text-gray-600" aria-hidden="true" />
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <a key={item.title} href={item.href} className="text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
                  {item.title}
                </a>
              )
            ))}
          </PopoverGroup>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
              onClick={() => setIsPopupOpen(true)}
              color="blue" 
              className="!bg-[#58c469] !hover:bg-[#4ab059] text-white"
            >
              <span>Nous rejoindre</span>
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="Home">
              <span className="sr-only">Association ADJOBI Porto-Novo</span>
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  item.submenu ? (
                    <Disclosure as="div" key={item.title} className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50">
                            {item.title}
                            <ChevronDownIcon
                              className={clsx(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none'
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {item.submenu.map((subItem) => (
                              <DisclosureButton
                                key={subItem.href}
                                as="a"
                                href={subItem.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                              >
                                {subItem.label}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <a
                      key={item.title}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50"
                    >
                      {item.title}
                    </a>
                  )
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsPopupOpen(true);
                  }}
                  className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[#58c469] hover:bg-[#4ab059]"
                >
                  Nous rejoindre
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Popup */}
      <BetaPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </header>
  )
}