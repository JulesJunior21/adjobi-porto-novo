import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import Image from 'next/image'

export const metadata = {
  title: 'Notre équipe - ADJOBI Porto-Novo',
  description: 'Les membres du bureau et bénévoles de l\'association ADJOBI Porto-Novo',
}

export default function Equipe() {
  const membres = [
    {
      nom: 'Adrien Houngbédji',
      role: 'Président',
      bio: 'Architecte de formation, passionné par le patrimoine architectural de Porto-Novo',
      photo: '/placeholder-person.jpg'
    },
    {
      nom: 'Marie Dossou',
      role: 'Secrétaire générale',
      bio: 'Enseignante d\'histoire et géographie, engagée pour la valorisation de notre culture',
      photo: '/placeholder-person.jpg'
    },
    {
      nom: 'Emmanuel Tonato',
      role: 'Responsable communication',
      bio: 'Jeune professionnel du digital, en charge de la visibilité de nos actions',
      photo: '/placeholder-person.jpg'
    },
    {
      nom: 'Paul Adjovi',
      role: 'Coordinateur des actions citoyennes',
      bio: 'Ancien fonctionnaire à la retraite, mobilise les habitants pour nos journées d\'action',
      photo: '/placeholder-person.jpg'
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-20 pb-16">
        <Container>
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-6 text-center">
            Notre équipe
          </h1>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate-700">
            Notre force réside dans l'engagement et la diversité de nos membres. Découvrez les personnes 
            qui animent au quotidien l'association ADJOBI Porto-Novo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membres.map((membre) => (
              <div key={membre.nom} className="flex flex-col items-center">
                <div className="h-48 w-48 rounded-full overflow-hidden mb-4 bg-slate-200">
                  {/* Remplacer par de vraies images */}
                  <div className="w-full h-full bg-[#58c469] flex items-center justify-center text-white text-2xl">
                    {membre.nom.charAt(0)}
                  </div>
                </div>
                <h3 className="font-display text-xl font-medium text-slate-900">{membre.nom}</h3>
                <p className="text-[#58c469] font-medium mb-2">{membre.role}</p>
                <p className="text-center text-slate-600">{membre.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}