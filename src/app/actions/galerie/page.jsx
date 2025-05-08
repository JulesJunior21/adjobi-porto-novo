'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { useState } from 'react'

// Importer les images directement depuis les dossiers publics
import DSC0429 from '@/images/DSC_0429.JPG'
import DSC1406 from '@/images/DSC_1406.JPG'
import DSC1573 from '@/images/DSC_1573.JPG'
import DSC1581 from '@/images/DSC_1581.JPG'
import DSC1601 from '@/images/DSC_1601.JPG'
import DSC1605 from '@/images/DSC_1605.JPG'
import DSC2216 from '@/images/DSC_2216.JPG'
import DSC2444 from '@/images/DSC_2444.JPG'
import DSC2826 from '@/images/DSC_2826.JPG'

export default function Galerie() {
  // État pour un effet simple de zoom sur les images au clic
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  // Créer un mapping des chemins d'images pour faciliter leur utilisation
  const imageMapping = {
    'patrimoine-1': DSC1406,
    'patrimoine-2': DSC1573,
    'patrimoine-3': DSC1581,
    'patrimoine-4': DSC1601,
    'patrimoine-5': DSC1605,
    'evenement-1': DSC0429,
    'evenement-2': DSC2216,
    'evenement-3': DSC2444,
    'evenement-4': DSC2826,
    'projet-1': DSC0429,
    'projet-2': DSC1605,
    'projet-3': DSC2826,
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
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
                  Explorez en images nos actions, nos événements et le patrimoine de Porto-Novo à travers notre galerie photo.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Section 1: Patrimoine architectural */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base/7 font-semibold text-[#58c469]">Notre héritage</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              Patrimoine architectural de Porto-Novo
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              <div className="relative lg:col-span-3">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                  <img
                    alt="Grande Mosquée de Porto-Novo"
                    src={imageMapping['patrimoine-1'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['patrimoine-1'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Lieu emblématique</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Grande Mosquée de Porto-Novo</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Ce chef-d'œuvre afro-brésilien est l'un des édifices les plus photographiés de la ville, 
                      reconnaissable à son style unique et ses couleurs vives.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
              </div>
              
              <div className="relative lg:col-span-3">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                  <img
                    alt="Palais royal de Porto-Novo"
                    src={imageMapping['patrimoine-2'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['patrimoine-2'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Histoire royale</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Palais royal Honmè</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Ancienne résidence des rois de Porto-Novo, ce palais est aujourd'hui un musée qui témoigne 
                      de la richesse historique du royaume.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
              </div>
              
              <div className="relative lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                  <img
                    alt="Quartier colonial"
                    src={imageMapping['patrimoine-3'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['patrimoine-3'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Architecture coloniale</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Rue typique du quartier ancien</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Ces rues témoignent de l'influence architecturale européenne du XIXe siècle.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
              </div>
              
              <div className="relative lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Musée ethnographique"
                    src={imageMapping['patrimoine-4'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['patrimoine-4'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Culture</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Musée ethnographique</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      L'ancien bâtiment portugais abrite aujourd'hui une riche collection d'objets traditionnels.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                  <img
                    alt="Jardin des Plantes et de la Nature"
                    src={imageMapping['patrimoine-5'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['patrimoine-5'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Environnement</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Jardin des Plantes</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Ce jardin botanique historique abrite des espèces végétales rares et centenaires.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Nos événements */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base/7 font-semibold text-[#58c469]">Nos activités</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              Événements et rencontres
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-5 lg:grid-rows-2">
              <div className="relative lg:col-span-2 lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Assemblée générale 2024"
                    src={imageMapping['evenement-1'].src}
                    className="h-[30rem] w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['evenement-1'].src)}
                  />
                  <div className="p-6 pt-4 bg-white">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Rencontre annuelle</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Assemblée générale 2024</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Notre assemblée générale a réuni plus de 120 membres et sympathisants pour faire le bilan 
                      de l'année écoulée et définir nos objectifs futurs.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-3">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Journée culturelle"
                    src={imageMapping['evenement-2'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['evenement-2'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Culture</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Journée du patrimoine 2024</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Une journée dédiée à la découverte des richesses architecturales de Porto-Novo.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-1">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Atelier de médiation"
                    src={imageMapping['evenement-3'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['evenement-3'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Éducation</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Atelier scolaire</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Forum citoyen"
                    src={imageMapping['evenement-4'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['evenement-4'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Engagement</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Forum des habitants</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Lieu d'échange et de débat sur l'avenir urbanistique de notre ville.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 3: Projets en action */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base/7 font-semibold text-[#58c469]">Terrain</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              Nos projets en action
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
              <div className="relative lg:col-span-1">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Nettoyage des berges"
                    src={imageMapping['projet-1'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['projet-1'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Environnement</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Nettoyage des berges</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Opération collective pour préserver la lagune de Porto-Novo.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-1">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Rénovation de façade"
                    src={imageMapping['projet-2'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['projet-2'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Patrimoine</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Rénovation de façades</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Restauration participative d'une maison afro-brésilienne.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
              
              <div className="relative lg:col-span-1">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <img
                    alt="Jardin communautaire"
                    src={imageMapping['projet-3'].src}
                    className="h-80 w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(imageMapping['projet-3'].src)}
                  />
                  <div className="p-6 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#58c469]">Cadre de vie</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Jardin communautaire</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      Création d'espaces verts partagés au cœur des quartiers.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal pour afficher l'image en grand */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="max-w-5xl max-h-[90vh] relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Image agrandie" 
                className="max-h-[90vh] max-w-full object-contain"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}