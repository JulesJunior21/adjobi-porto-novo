import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

export const metadata = {
  title: 'Qui sommes-nous - ADJOBI Porto-Novo',
  description: 'Découvrez l\'histoire et les valeurs de l\'association ADJOBI Porto-Novo',
}

export default function QuiSommesNous() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-16">
        <Container className="max-w-4xl">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-6">
            Qui sommes-nous
          </h1>
          
          <div className="prose prose-lg prose-slate">
            <p>
              ADJOBI Porto-Novo est une association citoyenne fondée par des habitants passionnés 
              par leur ville et désireux de contribuer à son développement harmonieux et durable.
            </p>
            
            <h2>Notre mission</h2>
            <p>
              Nous avons pour mission de valoriser le patrimoine architectural et culturel unique de 
              Porto-Novo, tout en œuvrant pour améliorer le cadre de vie des habitants, favoriser la 
              cohésion sociale et encourager une citoyenneté active.
            </p>
            
            <h2>Nos valeurs</h2>
            <ul>
              <li><strong>Engagement citoyen</strong> - Nous croyons au pouvoir de l'action collective</li>
              <li><strong>Respect du patrimoine</strong> - Notre héritage culturel est précieux</li>
              <li><strong>Inclusivité</strong> - Chaque habitant a un rôle à jouer dans notre communauté</li>
              <li><strong>Durabilité</strong> - Nos actions s'inscrivent dans une vision à long terme</li>
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}