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

function MobileNavSubmenu({ title, links }) {
  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <PopoverButton className="flex w-full items-center justify-between p-2">
            <span>{title}</span>
            <svg
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </PopoverButton>
          <PopoverPanel className="pl-4 py-2 space-y-1">
            {links.map((link) => (
              <MobileNavLink key={link.href} href={link.href}>
                {link.label}
              </MobileNavLink>
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
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

const navigationItems = [
  {
    title: "L'association",
    submenu: [
      { label: "Genèse et objectifs", href: "#genese-objectifs" },
      { label: "Histoire de l'Épiphanie", href: "#histoire-epiphanie" },
      { label: "Communication AGUEH/GOGAN", href: "#communication-agueh-gogan" },
      { label: "Présentation du bureau exécutif", href: "#bureau-executif" },
      { label: "Statuts & règlement", href: "#statuts-reglement" },
      { label: "Journal officiel & autorisation", href: "#journal-officiel" },
    ],
  },
  {
    title: "Assemblées & réunions",
    submenu: [
      { label: "Première AG", href: "#premiere-ag" },
      { label: "Procès-verbaux", href: "#proces-verbaux" },
      { label: "Ordres du jour", href: "#ordres-jour" },
      { label: "Comptes rendus", href: "#comptes-rendus" },
    ],
  },
  {
    title: "Actions & activités",
    submenu: [
      { label: "Journées citoyennes", href: "#journees-citoyennes" },
      { label: "Dépistages", href: "#depistages" },
      { label: "Chorégraphies & expositions", href: "#choregraphies-expositions" },
      { label: "Visites à des personnalités", href: "#visites-personnalites" },
      { label: "Participations officielles", href: "#participations-officielles" },
    ],
  },
  {
    title: "Commissions",
    submenu: [
      { label: "Liste des commissions", href: "#liste-commissions" },
      { label: "Membres par commission", href: "#membres-commission" },
      { label: "Rapports d'activités", href: "#rapports-activites" },
    ],
  },
  {
    title: "Documents",
    submenu: [
      { label: "Conditions d'adhésion", href: "#conditions-adhesion" },
      { label: "Formulaire d'adhésion", href: "#formulaire-adhesion" },
      { label: "Dépliant", href: "#depliant" },
      { label: "Courriers envoyés et reçus", href: "#courriers" },
    ],
  },
  // Lien simple (sans sous-menu)
  { title: "Témoignages", href: "#temoignages" },
];

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
        {navigationItems.map((item) => (
          item.submenu ? (
            <MobileNavSubmenu key={item.title} title={item.title} links={item.submenu} />
          ) : (
            <MobileNavLink key={item.title} href={item.href}>{item.title}</MobileNavLink>
          )
        ))}
        <hr className="m-2 border-slate-300/40" />
      </PopoverPanel>
    </Popover>
  )
}

function DesktopNavSubmenu({ title, links }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton 
            className={clsx(
              'flex items-center gap-2 rounded-lg py-1 px-2 text-sm font-medium text-slate-700 transition',
              open ? 'bg-slate-100' : 'hover:bg-slate-100'
            )}
          >
            <span>{title}</span>
            <svg
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </PopoverButton>
          <PopoverPanel 
            className="absolute left-1/2 z-10 mt-2 w-64 -translate-x-1/2 transform rounded-lg bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  )
}

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
            <div className="hidden md:flex md:items-center md:gap-x-4">
              {navigationItems.map((item) => (
                item.submenu ? (
                  <DesktopNavSubmenu key={item.title} title={item.title} links={item.submenu} />
                ) : (
                  <NavLink key={item.title} href={item.href}>{item.title}</NavLink>
                )
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
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