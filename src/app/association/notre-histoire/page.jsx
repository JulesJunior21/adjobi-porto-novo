import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Notre histoire - ADJOBI Porto-Novo',
  description: 'L\'histoire de l\'association ADJOBI et son engagement pour la ville de Porto-Novo',
}

export default function NotreHistoire() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16">
        <Container className="max-w-4xl">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-6">
            Notre histoire
          </h1>
          
          <div className="prose prose-lg prose-slate">
            <h2>Naissance de l'association (2018)</h2>
            <p>
              L'association ADJOBI Porto-Novo est née de la rencontre de plusieurs habitants 
              partageant une préoccupation commune : préserver le riche patrimoine architectural 
              de Porto-Novo, menacé par le développement urbain non maîtrisé. Un groupe initial 
              de 12 habitants s'est réuni pour la première fois en mars 2018.
            </p>
            
            <h2>Les premiers projets (2019-2020)</h2>
            <p>
              Nos premières initiatives se sont concentrées sur la sensibilisation au patrimoine 
              architectural afro-brésilien et colonial de Porto-Novo. Nous avons organisé les premières 
              visites guidées gratuites pour les habitants et lancé une campagne photographique pour 
              documenter les bâtiments historiques en danger.
            </p>
            
            <h2>Élargissement de notre action (2021-présent)</h2>
            <p>
              Face à l'enthousiasme suscité par nos initiatives, nous avons élargi notre champ d'action 
              pour inclure des problématiques d'environnement urbain et de cohésion sociale. Nous sommes 
              devenus un interlocuteur reconnu auprès des autorités municipales et avons établi des 
              partenariats avec diverses organisations culturelles et environnementales.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}