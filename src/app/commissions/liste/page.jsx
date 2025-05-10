'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'

export default function ListeCommissions() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCommission, setActiveCommission] = useState(1)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const commissions = [
    {
      id: 1,
      name: "Prospection, Contacts, Lobbying, Négociations",
      description: "Les membres de la CTP 1 doivent :",
      tasks: [
        "Faire la promotion de l'association et de la Fête identitaire",
        "Élaborer une liste des personnalités, institutions publiques et privées, locales, nationales et internationales",
        "Maintenir de bonnes relations entre l'Association et la diaspora, les partenaires et les sponsors",
        "Organiser le processus d'adhésion, etc."
      ],
      members: [
        "AKIBOU Naïm", "HAZOUME Rodrigue S.", "MICHONOU Davy", "AGBOTON Fortuné", 
        "HOUSSOU Bonaventure", "AGBOTON Eloi F.", "MEDEDJI Mêvognon A.", "ROUFAÏ Chakirou", 
        "HOUETO Ignace", "GOGAN Mathias", "LANDOU Izoulaï", "SOGAN Richard", 
        "HOUSOU Pascal B.", "AHOUANSOU Bernard", "ZOSSOU ODJO Louis", "ADEBO Malick", 
        "KAFFO Ismael", "EGOUNLETY Félix", "ZINSOU Jocelyne", "ADELOU Nassif"
      ]
    },
    {
      id: 2,
      name: "Étude et organisation de la Fête identitaire",
      description: "Les membres de la CTP 2 s'occuperont de la bonne organisation de la Fête identitaire ainsi que tous les autres événements à réaliser. Il s'agira surtout de :",
      tasks: [
        "Faire des propositions de programme des événements",
        "Choisir les sites et les publics cibles pour chaque événement",
        "Obtenir les autorisations nécessaires pour la tenue effective des événements",
        "Faire appel à des prestataires ou des personnes ressources",
        "Conduire l'organisation pratique sur le terrain (organisation de l'accueil et la sécurité des invités et du public, etc.)"
      ],
      members: [
        "HONFO Toussaint", "HOUSSOU Bonaventure", "AGBOTON Eloi F.", "ROUFAÏ Chakirou", 
        "MOUBARAK Bileoman", "ALAO Roméo", "AHLONSOU Jacques", "ADAMOU Madiou", 
        "BAKARY Akande C", "GBENOU A. Auguste", "SENOU V. H. Ferdinand", "ADEBO Mamoudou", 
        "GOGAN Mathias", "SOKENOU Dossa", "MEHOUHOUNSOU Gabriel", "FALADE Casmir", 
        "SAYI D. Gabriel", "ODJO Georges", "AHOUANSOU Bernard", "HAZOUME Damien Z.", 
        "AGBOTON Bruno L.", "ADELOU Nassif", "WHANNOU de DRAVO Eloi", "HOUETO Nestor", 
        "AGBOTON Jules", "De SOUZA Théodore"
      ]
    },
    {
      id: 3,
      name: "Affaires sociales, culturelles et sportives",
      description: "Il s'agira pour ses membres de :",
      tasks: [
        "Promouvoir des actions sociales, culturelles et sportives à l'occasion ou en dehors de la Fête identitaire, etc."
      ],
      members: [
        "AHLONSOU Jacques", "GBENOU A. Auguste", "De SOUZA Gustave", "LANDOU Izoulaï", "SOGAN Richard"
      ]
    },
    {
      id: 4,
      name: "Affaires économiques, financières et prospectives en recherche de financement",
      description: "Les membres de la CTP 4 doivent :",
      tasks: [
        "Développer des stratégies ou actions de mobilisation des ressources financières en vue d'assurer la réalisation des projets et programmes de l'association"
      ],
      members: [
        "MICHONOU Davi", "DANDJINOU Pierre", "BOURAÏMA Dine", "SENOU V. H. Ferdinand", 
        "TIDJANI Chakiou", "SOKENOU Dossa", "ALAO A. Machioudi", "AMINOU Tany", 
        "BOURAÏMA Is-Dine", "AKIBOU Naïm", "HAZOUME Damien Z."
      ]
    },
    {
      id: 5,
      name: "Création et gestion du site Web de l'association",
      description: "Les membres de cette commission s'occuperont à :",
      tasks: [
        "Étudier les formules existantes et proposer la meilleure",
        "Créer le site WEB",
        "Proposer et faire adopter une stratégie et procédure de gestion et de conservation de tous documents ou informations à réaliser et diffuser"
      ],
      members: [
        "OUSSOU Marc", "AKIBOU Naïm", "AGBOTON Raoul", "KAFFO Ismaël", "ODJO Georges", "ZINSOU Jocelyne"
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate pb-16">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Commissions Techniques
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Découvrez les commissions de l'association ADJOBI Porto-Novo, leurs missions et les membres qui les composent.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
        
        {/* Navigation des commissions - Mobile & Desktop */}
        <div className="bg-white sticky top-0 z-20 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto py-4 flex items-center space-x-2 md:space-x-4 whitespace-nowrap scrollbar-hide">
              {commissions.map((commission) => (
                <button
                  key={commission.id}
                  onClick={() => setActiveCommission(commission.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    activeCommission === commission.id
                    ? 'bg-[#58c469] text-white shadow-md transform scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={`mr-2 inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium ${
                    activeCommission === commission.id 
                    ? 'bg-white text-[#58c469]' 
                    : 'bg-gray-200 text-gray-700'
                  }`}>
                    {commission.id}
                  </span>
                  <span className="hidden sm:inline">{commission.name.length > 20 
                    ? commission.name.substring(0, 20) + '...' 
                    : commission.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section des commissions */}
        <Container className="mt-8 sm:mt-12">
          {commissions
            .filter(commission => commission.id === activeCommission)
            .map((commission) => (
              <motion.div
                key={commission.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* En-tête de la commission */}
                <div className="bg-gradient-to-r from-[#58c469]/10 to-transparent p-6 sm:p-8 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#58c469] text-white h-12 w-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-sm">
                      {commission.id}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                        {commission.name}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-sm uppercase font-semibold text-[#58c469] mb-3 tracking-wider flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Description
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {commission.description}
                    </p>
                  </div>
                  
                  {/* Missions */}
                  <div className="mb-8">
                    <h3 className="text-sm uppercase font-semibold text-[#58c469] mb-4 tracking-wider flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Missions
                    </h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {commission.tasks.map((task, taskIndex) => (
                        <motion.li 
                          key={taskIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                          className="flex items-start bg-gray-50 rounded-lg p-3 sm:p-4"
                        >
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#58c469]/20 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-4 w-4 text-[#58c469]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{task}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Membres */}
                  <div>
                    <h3 className="text-sm uppercase font-semibold text-[#58c469] mb-4 tracking-wider flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Membres ({commission.members.length})
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {commission.members.map((member, memberIndex) => (
                          <motion.span 
                            key={memberIndex} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: memberIndex * 0.02 }}
                            className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                          >
                            {member}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </Container>
      </main>
      <Footer />
    </div>
  )
}