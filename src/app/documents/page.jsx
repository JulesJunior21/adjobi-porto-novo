'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { useState } from 'react'

export default function Documents() {
  // État pour suivre la catégorie de document active
  const [activeTab, setActiveTab] = useState('statuts')

  // Fonction pour changer de tab
  const changeTab = (tabId) => {
    setActiveTab(tabId)
  }

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
                Documents officiels
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Consultez les documents officiels de l'Association ADJOBI Porto-Novo : statuts, règlement intérieur et rapports annuels.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
        
        {/* Onglets de document */}
        <div className="mx-auto max-w-7xl px-6 sm:mt-16 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {[
                { name: 'Statuts', id: 'statuts' },
                { name: 'Règlement intérieur', id: 'reglement' },
                { name: 'Rapports annuels', id: 'rapports' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-[#58c469] text-[#58c469]'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contenu des onglets */}
          <div className="py-12">
            {/* Onglet Statuts */}
            {activeTab === 'statuts' && (
              <div className="prose prose-lg prose-slate max-w-3xl mx-auto">
                <h2>Statuts de l'Association ADJOBI Porto-Novo</h2>
                <p className="text-slate-600 italic">
                  Les statuts définissent le cadre juridique et le fonctionnement de notre association. Ce document sera bientôt disponible en téléchargement.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Statuts_ADJOBI_2023.pdf</h3>
                    <p className="text-sm text-gray-500">Version adoptée le 15 mars 2023 - 1.2 MB</p>
                  </div>
                  <button className="flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Télécharger
                  </button>
                </div>
              </div>
            )}
            
            {/* Onglet Règlement intérieur */}
            {activeTab === 'reglement' && (
              <div className="prose prose-lg prose-slate max-w-3xl mx-auto">
                <h2>Règlement intérieur</h2>
                <p className="text-slate-600 italic">
                  Le règlement intérieur complète les statuts et détaille les modalités pratiques de fonctionnement de l'association. Ce document sera bientôt disponible en téléchargement.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Reglement_Interieur_ADJOBI_2023.pdf</h3>
                    <p className="text-sm text-gray-500">Version adoptée le 22 avril 2023 - 875 KB</p>
                  </div>
                  <button className="flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Télécharger
                  </button>
                </div>
              </div>
            )}
            
            {/* Onglet Rapports annuels */}
            {activeTab === 'rapports' && (
              <div className="prose prose-lg prose-slate max-w-3xl mx-auto">
                <h2>Rapports annuels</h2>
                <p className="text-slate-600 italic">
                  Les rapports annuels présentent les activités, les finances et les perspectives de l'association pour chaque année écoulée.
                </p>
                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Rapport annuel 2024",
                      date: "Adopté le 15 février 2025",
                      size: "1.8 MB",
                      filename: "Rapport_Annuel_ADJOBI_2024.pdf"
                    },
                    {
                      title: "Rapport annuel 2023",
                      date: "Adopté le 10 février 2024",
                      size: "1.5 MB",
                      filename: "Rapport_Annuel_ADJOBI_2023.pdf"
                    },
                    {
                      title: "Rapport annuel 2022",
                      date: "Adopté le 12 février 2023",
                      size: "1.3 MB",
                      filename: "Rapport_Annuel_ADJOBI_2022.pdf"
                    }
                  ].map((rapport) => (
                    <div key={rapport.title} className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{rapport.title}</h3>
                        <p className="text-sm text-gray-500">{rapport.date} - {rapport.size}</p>
                      </div>
                      <button className="flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Télécharger
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}