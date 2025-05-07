'use client'

import React, { useState } from 'react'
import { Container } from '@/components/Container'

const FAQData = [
  {
    title: "Comment puis-je adhérer à ADJOBI Porto-Novo ?",
    description: "Vous pouvez adhérer en complétant le formulaire en ligne sur notre site, ou en vous rendant à notre siège situé au centre-ville de Porto-Novo. Une cotisation annuelle symbolique est demandée pour soutenir nos actions."
  },
  {
    title: "Quelles sont les activités régulières de l'association ?",
    description: "Nous organisons des journées de sensibilisation, des opérations de nettoyage, des visites culturelles guidées, des expositions et des rencontres avec les autorités locales. Consultez notre calendrier pour les prochains événements."
  },
  {
    title: "Comment puis-je participer aux actions citoyennes ?",
    description: "Toutes nos actions sont ouvertes aux membres et aux citoyens désireux de s'impliquer. Inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux pour être informé des prochaines actions."
  },
  {
    title: "Est-ce que je peux proposer une initiative ?",
    description: "Absolument ! Nous encourageons les membres à proposer des initiatives qui correspondent à nos valeurs et objectifs. Contactez-nous par email ou venez échanger lors de nos réunions mensuelles."
  },
  {
    title: "Comment l'association est-elle financée ?",
    description: "Notre association est financée par les cotisations des membres, des subventions publiques ponctuelles et des dons de partenaires privés qui soutiennent notre vision pour Porto-Novo."
  },
  {
    title: "Puis-je faire un don à l'association ?",
    description: "Oui, vous pouvez faire un don financier ou matériel. Chaque contribution nous aide à mener davantage d'actions pour améliorer notre ville et préserver son patrimoine."
  },
]

function AccordionItem({ faq, index, isOpen, toggleAccordion }) {
  return (
    <div className="border-b border-slate-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-display text-lg text-slate-900 transition-all hover:text-green-600"
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
      >
        {faq.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      
      <div 
        className={`overflow-hidden text-sm text-slate-700 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4 pt-1">{faq.description}</div>
      </div>
    </div>
  )
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 sm:py-32 bg-white"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            id="faq-title"
            className="font-display text-center text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Informations utiles
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Retrouvez ici les réponses aux questions fréquemment posées sur notre association et nos actions.
          </p>
        </div>
        
        <div className="mx-auto text-center max-w-3xl">
          <div className="w-full">
            {FAQData.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}