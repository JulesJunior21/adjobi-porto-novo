'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { useState } from 'react'

export default function Galerie() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        {/* Hero section */}
        {/* <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                Galerie
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Découvrez bientôt notre galerie photo présentant nos actions, événements et le patrimoine de Porto-Novo.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div> */}

        {/* Section "À venir" */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-base/7 font-semibold text-[#58c469]">Bientôt disponible</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Notre galerie est en cours de préparation
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous sommes en train de rassembler les photos de nos actions et du riche patrimoine de Porto-Novo. 
                Revenez bientôt pour découvrir notre collection d'images.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Button 
                  href="/"
                  color="blue" 
                  className="!bg-[#58c469] !hover:bg-[#4ab059] text-white"
                >
                  <span>Retour à l'accueil</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}