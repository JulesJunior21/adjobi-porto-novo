import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

// Importation des images
import DSC1406 from '@/images/DSC_1406.JPG'
import DSC1573 from '@/images/DSC_1573.JPG'
import DSC1581 from '@/images/DSC_1581.JPG'

export const metadata = {
  title: 'Notre histoire - ADJOBI Porto-Novo',
  description: 'L\'histoire de l\'association ADJOBI et son engagement pour la ville de Porto-Novo',
}

export default function NotreHistoire() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-visible bg-white py-20 sm:py-24">
        <Container className="max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-base font-semibold text-[#58c469]">Notre parcours</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
              Préserver l'héritage de Porto-Novo
            </h1>
            <p className="mt-6 text-xl text-balance text-slate-700">
              Depuis 2018, l'association ADJOBI s'engage pour la préservation du patrimoine architectural 
              et la promotion du développement durable à Porto-Novo, capitale du Bénin.
            </p>
          </div>
          
          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-semibold tracking-tight text-pretty text-slate-900">Notre mission</h2>
              <p className="mt-6 text-base text-slate-600">
                L'association ADJOBI Porto-Novo est née de la rencontre de plusieurs habitants 
                partageant une préoccupation commune : préserver le riche patrimoine architectural 
                de Porto-Novo, menacé par le développement urbain non maîtrisé. Un groupe initial 
                de 12 habitants s'est réuni pour la première fois en mars 2018.
              </p>
              <p className="mt-8 text-base text-slate-600">
                Nos premières initiatives se sont concentrées sur la sensibilisation au patrimoine 
                architectural afro-brésilien et colonial de Porto-Novo. Nous avons organisé les premières 
                visites guidées gratuites pour les habitants et lancé une campagne photographique pour 
                documenter les bâtiments historiques en danger.
              </p>
            </div>
            
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="grid grid-cols-3 gap-2 lg:gap-2 xl:gap-3 h-[520px]">
                {/* Première image - bande verticale verte (gauche) */}
                <div className="col-span-1 row-span-2 h-full overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    src={DSC1406.src}
                    alt="Bâtiment historique à Porto-Novo"
                    className="block w-full h-full object-cover"
                  />
                </div>
                
                {/* Deuxième image - bande horizontale jaune (haut droite) */}
                <div className="col-span-2 h-[255px] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    src={DSC1573.src}
                    alt="Activité de l'association"
                    className="block w-full h-full object-cover"
                  />
                </div>
                
                {/* Troisième image - bande horizontale rouge (bas droite) */}
                <div className="col-span-2 h-[255px] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    src={DSC1581.src}
                    alt="Patrimoine de Porto-Novo"
                    className="block w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="max-lg:mt-16 lg:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight text-pretty text-slate-900">Évolution et impact</h2>
              <p className="mt-6 text-base text-slate-600">
                Face à l'enthousiasme suscité par nos initiatives, nous avons élargi notre champ d'action 
                pour inclure des problématiques d'environnement urbain et de cohésion sociale. Nous sommes 
                devenus un interlocuteur reconnu auprès des autorités municipales et avons établi des 
                partenariats avec diverses organisations culturelles et environnementales.
              </p>
            </div>
          </section>
          
          {/* Espace modéré avant le footer */}
          <div className="h-16 mt-16"></div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}