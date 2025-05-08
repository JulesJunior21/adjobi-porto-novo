'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

export default function QuiSommesNous() {
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
                Qui sommes-nous
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  ADJOBI Porto-Novo est une association citoyenne fondée par des habitants passionnés 
                  par leur ville et désireux de contribuer à son développement harmonieux et durable.
                  Notre mission est de valoriser le patrimoine architectural et culturel unique de Porto-Novo,
                  tout en œuvrant pour améliorer le cadre de vie des habitants.
                </p>
              </div>
              <img
                alt="Association ADJOBI en action"
                src="/images/qui-sommes-nous-hero.jpg"
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Notre mission section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Notre mission
              </h2>
              <p className="mt-6 text-xl/8 text-gray-600">
                Nous avons pour mission de valoriser le patrimoine architectural et culturel unique de 
                Porto-Novo, tout en œuvrant pour améliorer le cadre de vie des habitants, favoriser la 
                cohésion sociale et encourager une citoyenneté active.
              </p>
              <img
                alt="Réunion des membres d'ADJOBI"
                src="/images/mission.jpg"
                className="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Nos valeurs</h3>
              <ul className="mt-8 divide-y divide-gray-100">
                {[
                  {
                    valeur: "Engagement citoyen",
                    description: "Nous croyons au pouvoir de l'action collective pour transformer positivement notre environnement urbain et social."
                  },
                  {
                    valeur: "Respect du patrimoine",
                    description: "Notre héritage culturel et architectural est précieux et mérite d'être préservé pour les générations futures."
                  },
                  {
                    valeur: "Inclusivité",
                    description: "Chaque habitant a un rôle à jouer dans notre communauté, indépendamment de son origine ou de sa condition sociale."
                  },
                  {
                    valeur: "Durabilité",
                    description: "Nos actions s'inscrivent dans une vision à long terme, respectueuse de l'environnement et des équilibres sociaux."
                  }
                ].map((item) => (
                  <li key={item.valeur} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Valeur</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        {item.valeur}
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{item.description}</dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Notre impact en chiffres
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Depuis sa création, l'association ADJOBI Porto-Novo s'est investie dans de nombreux projets 
              pour améliorer le cadre de vie des habitants et valoriser le patrimoine unique de notre ville.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">Membres actifs</p>
                <p className="mt-2 text-base/7 text-gray-600">Habitants engagés qui participent régulièrement à nos actions.</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">30+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Projets réalisés depuis notre création
                </p>
                <p className="mt-2 text-base/7 text-gray-400">
                  Initiatives citoyennes pour améliorer notre cadre de vie commun.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#58c469] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">5000+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Habitants touchés</p>
                <p className="mt-2 text-base/7 text-white/90">
                  Personnes ayant bénéficié de nos actions ou participé à nos événements communautaires.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Histoire */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              {
                date: "Mars 2018",
                dateTime: "2018-03",
                name: "Création de l'association",
                description: "ADJOBI Porto-Novo est née de la rencontre de plusieurs habitants partageant une préoccupation commune : préserver le riche patrimoine architectural de Porto-Novo."
              },
              {
                date: "Juin 2019",
                dateTime: "2019-06",
                name: "Premiers projets citoyens",
                description: "Lancement des premières visites guidées gratuites pour les habitants et d'une campagne photographique pour documenter les bâtiments historiques en danger."
              },
              {
                date: "Octobre 2021",
                dateTime: "2021-10",
                name: "Élargissement des activités",
                description: "Face à l'enthousiasme suscité par nos initiatives, nous avons élargi notre champ d'action pour inclure des problématiques d'environnement urbain et de cohésion sociale."
              },
              {
                date: "Aujourd'hui",
                dateTime: "2023-présent",
                name: "ADJOBI aujourd'hui",
                description: "Nous sommes devenus un interlocuteur reconnu auprès des autorités municipales et avons établi des partenariats avec diverses organisations culturelles et environnementales."
              }
            ].map((item) => (
              <div key={item.name}>
                <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-[#58c469]">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base/7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}