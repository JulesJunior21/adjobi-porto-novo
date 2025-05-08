'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Import des images locales
import DSC0429 from '@/images/DSC_0429.JPG'
import DSC1406 from '@/images/DSC_1406.JPG'
import DSC1573 from '@/images/DSC_1573.JPG'
import DSC1581 from '@/images/DSC_1581.JPG'
import DSC1601 from '@/images/DSC_1601.JPG'
import DSC1605 from '@/images/DSC_1605.JPG'

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
                src={DSC1406.src}
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Notre mission */}
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
                src={DSC0429.src}
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

        {/* Histoire */}
        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Notre histoire</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Depuis notre création, nous avons parcouru un chemin significatif, réunissant les habitants
              autour d'une vision commune pour notre ville.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              {
                date: "Mars 2018",
                dateTime: "2018-03",
                name: "Création de l'association",
                description: "ADJOBI Porto-Novo est née de la rencontre de plusieurs habitants partageant une préoccupation commune : préserver le riche patrimoine architectural de Porto-Novo.",
                image: DSC1573.src
              },
              {
                date: "Juin 2019",
                dateTime: "2019-06",
                name: "Premiers projets citoyens",
                description: "Lancement des premières visites guidées gratuites pour les habitants et d'une campagne photographique pour documenter les bâtiments historiques en danger.",
                image: DSC1581.src
              },
              {
                date: "Octobre 2021",
                dateTime: "2021-10",
                name: "Élargissement des activités",
                description: "Nous avons élargi notre champ d’action pour inclure des problématiques d’environnement urbain et de cohésion sociale.",
                image: DSC1601.src
              },
              {
                date: "Aujourd’hui",
                dateTime: "2023-présent",
                name: "ADJOBI aujourd’hui",
                description: "Nous sommes devenus un interlocuteur reconnu auprès des autorités et avons établi des partenariats avec diverses organisations.",
                image: DSC1605.src
              }
            ].map((item) => (
              <div key={item.name} className="relative overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-48 w-full object-cover mb-4" 
                />
                <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-[#58c469]">
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                </time>
                <p className="mt-4 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-2 text-base/7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie d’images */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Notre association en images
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Découvrez quelques moments importants de nos activités et rencontres.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[DSC1406, DSC0429, DSC1573, DSC1581, DSC1601, DSC1605].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Image ${index + 1}`}
                className="h-64 w-full rounded-md object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}