'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Calendrier() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Fonction pour créer un fichier ICS qui peut être téléchargé
  const createICSFile = (event) => {
    // Formatage des dates pour le format iCalendar
    const formatDate = (dateStr, timeStr) => {
      const [day, month, year] = dateStr.split(' ')[0].split('/');
      const [hours, minutes] = timeStr.split(':');
      
      // Format: YYYYMMDDTHHmmss
      return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}T${hours.padStart(2, '0')}${minutes.padStart(2, '0')}00`;
    };
    
    // Extraction de la date et de l'heure
    const dateParts = event.date.split(' ');
    const day = dateParts[0];
    const month = getMonthNumber(dateParts[1]);
    const year = dateParts[2];
    const formattedDate = `${day}/${month}/${year}`;
    
    // Création du contenu du fichier ICS
    const start = formatDate(formattedDate, event.time);
    
    // On suppose que l'événement dure 2 heures
    const hourEnd = parseInt(event.time.split(':')[0]) + 2;
    const minutesEnd = event.time.split(':')[1];
    const endTime = `${hourEnd.toString().padStart(2, '0')}:${minutesEnd}`;
    const end = formatDate(formattedDate, endTime);
    
    // Génération du contenu du fichier ICS
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    return icsContent;
  };

  // Fonction pour télécharger l'événement
  const downloadEvent = (event) => {
    const icsContent = createICSFile(event);
    
    // Création d'un élément <a> pour déclencher le téléchargement
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent));
    element.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Fonction pour convertir le nom du mois en numéro
  const getMonthNumber = (monthName) => {
    const months = {
      'janvier': '01',
      'février': '02',
      'mars': '03',
      'avril': '04',
      'mai': '05',
      'juin': '06',
      'juillet': '07',
      'août': '08',
      'septembre': '09',
      'octobre': '10',
      'novembre': '11',
      'décembre': '12'
    };
    return months[monthName.toLowerCase()] || '01';
  };

  // Événements avec formatage de date corrigé pour faciliter le traitement
  const events = [
    {
      date: "15 juin 2025",
      time: "18:30",
      location: "Salle Communale de Porto-Novo",
      title: "Assemblée Générale Annuelle",
      description: "Présentation du bilan annuel, élection du nouveau bureau et discussion des projets futurs."
    },
    {
      date: "28 juillet 2025",
      time: "17:00",
      location: "Maison du Patrimoine",
      title: "Réunion Commission Patrimoine",
      description: "Point sur les actions de préservation en cours et planification de la journée du patrimoine."
    },
    {
      date: "10 septembre 2025",
      time: "19:00",
      location: "Jardin public central",
      title: "Conseil d'Administration",
      description: "Réunion trimestrielle pour le suivi des projets et la préparation des activités de fin d'année."
    }
  ];

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
                Calendrier des assemblées
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Retrouvez les dates importantes de nos prochaines assemblées générales, réunions de bureau et événements associatifs.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
        
        {/* Calendrier section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-16">
            Événements à venir
          </h2>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-200/60 hover:shadow-gray-300/60 transition-shadow border border-gray-100"
              >
                <div className="absolute inset-0 h-2 bg-gradient-to-r from-[#3ad160] to-[#58c469]"></div>
                <div className="px-8 pt-10 pb-8">
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      À venir
                    </span>
                  </div>
                  
                  <time dateTime={event.date} className="block text-xl font-semibold leading-7 text-[#58c469]">
                    {event.date} <span className="ml-2 text-lg text-gray-500">à {event.time}</span>
                  </time>
                  
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">{event.title}</h3>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="mt-4 leading-6 text-gray-600">
                    {event.description}
                  </p>
                  
                  <motion.div 
                    className="mt-8"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <button 
                      onClick={() => downloadEvent(event)}
                      className="inline-flex items-center justify-center gap-x-2 rounded-md bg-[#58c469] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#4ab059] transition-colors"
                    >
                      <span>Ajouter à mon agenda</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Historique des réunions */}
          <div className="mt-32 mb-12 border-t border-gray-200 pt-16">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-16">
            Historiques des dernières réunions
          </h2>
            
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {[
                {
                  date: "12 Février 2025",
                  dateTime: "2025-02-12",
                  name: "Réunion du bureau directeur",
                  description: "Planification du premier semestre et attribution des budgets aux différentes commissions."
                },
                {
                  date: "25 Novembre 2024",
                  dateTime: "2024-11-25",
                  name: "Assemblée générale extraordinaire",
                  description: "Vote des modifications statutaires et présentation des nouveaux projets prioritaires pour 2025."
                },
                {
                  date: "14 Septembre 2024",
                  dateTime: "2024-09-14",
                  name: "Commission Urbanisme",
                  description: "Préparation du dossier de consultation citoyenne sur l'avenir du quartier historique de Porto-Novo."
                },
                {
                  date: "7 Juillet 2024",
                  dateTime: "2024-07-07",
                  name: "Réunion plénière",
                  description: "Bilan semestriel des actions menées et ajustement des objectifs pour le second semestre 2024."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
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
                  
                  <div className="mt-4">
                    <a href="#" className="text-sm font-medium text-[#58c469] hover:text-[#4ab059] flex items-center gap-x-1">
                      Voir le compte-rendu
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}