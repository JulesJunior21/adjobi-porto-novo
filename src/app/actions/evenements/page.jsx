'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

const evenements = [
  {
    id: 1,
    title: 'Journées du Patrimoine de Porto-Novo 2025',
    href: '#',
    description:
      'Découvrez les trésors architecturaux de Porto-Novo lors de visites guidées par nos experts. Au programme : ouverture exceptionnelle de bâtiments historiques, conférences sur l\'architecture afro-brésilienne et ateliers pour enfants.',
    imageUrl: '/images/evenements/journee-patrimoine.jpg',
    date: '15-16 mai 2025',
    datetime: '2025-05-15',
    category: { title: 'Patrimoine', href: '#' },
    location: 'Centre-ville historique, Porto-Novo',
  },
  {
    id: 2,
    title: 'Forum citoyen : Urbanisme et développement durable',
    href: '#',
    description:
      'Une journée d\'échanges et de débats autour des enjeux d\'aménagement urbain et de préservation environnementale à Porto-Novo. Venez partager vos idées et contribuer aux projets collectifs pour une ville plus verte et plus inclusive.',
    imageUrl: '/images/evenements/forum-urbanisme.jpg',
    date: '28 juin 2025',
    datetime: '2025-06-28',
    category: { title: 'Conférence', href: '#' },
    location: 'Maison de la Culture, Porto-Novo',
  },
  {
    id: 3,
    title: 'Exposition "Porto-Novo d\'hier à aujourd\'hui"',
    href: '#',
    description:
      'Cette exposition photographique retrace l\'évolution de notre ville à travers les décennies, montrant les transformations urbaines et la richesse du patrimoine architectural qui fait l\'identité de Porto-Novo.',
    imageUrl: '/images/evenements/exposition-photo.jpg',
    date: '10-30 juillet 2025',
    datetime: '2025-07-10',
    category: { title: 'Exposition', href: '#' },
    location: 'Galerie municipale, Porto-Novo',
  }
]

export default function Evenements() {
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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-32 lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance text-gray-900 lg:col-span-2 xl:col-auto">
                            Événements
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0">
                            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-500">
                                Découvrez nos prochains rendez-vous culturels, patrimoniaux et associatifs à Porto-Novo. Participez à la vie de notre communauté !
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
            
            {/* Événements section */}
            <div className="bg-white py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-gray-900">
                            Agenda 2025
                        </h2>
                        <p className="mt-2 text-base sm:text-lg text-gray-600">Retrouvez tous nos événements pour l'année 2025 et venez participer à nos activités.</p>
                    </div>
                    <div className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {evenements.map((event) => (
                            <article key={event.id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        alt={event.title}
                                        src={event.imageUrl}
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={event.datetime} className="text-[#58c469] font-medium">
                                            {event.date}
                                        </time>
                                        <span
                                            className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-[#4ab059] hover:bg-green-100"
                                        >
                                            {event.category.title}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                            <a href={event.href}>
                                                <span className="absolute inset-0" />
                                                {event.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm text-gray-600">{event.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <div className="text-sm">
                                            <p className="font-semibold text-gray-900">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                            Vous avez une idée d'événement ?
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                            Notre association encourage les initiatives locales. Proposez votre projet d'événement en lien avec le patrimoine, la culture ou le développement durable de Porto-Novo.
                        </p>
                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                            <a
                                href="#"
                                className="w-full sm:w-auto rounded-md bg-[#58c469] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4ab059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Proposer un événement
                            </a>
                            <a href="#" className="w-full sm:w-auto rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                Voir le calendrier complet <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
)
}