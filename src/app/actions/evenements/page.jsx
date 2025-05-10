'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'

export default function Evenements() {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
       
            
        {/* Section "À venir" */}
        <div className="bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-base/7 font-semibold text-[#58c469]">Bientôt disponible</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Le calendrier des événements est en préparation
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous finalisons actuellement notre programme d'activités. Revenez prochainement pour 
                découvrir nos événements culturels, patrimoniaux et associatifs à venir.
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