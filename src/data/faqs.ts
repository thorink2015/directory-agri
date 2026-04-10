export interface FAQ {
  question: string;
  answer: string;
}

export const pricingFAQs: FAQ[] = [
  {
    question: 'Cât costă pulverizarea cu drona agricolă?',
    answer:
      'Prețul mediu pentru pulverizarea cu drona este de 100 RON/ha (~€20/ha) în România pentru culturi de câmp (grâu, porumb, rapița, floarea soarelui). Pentru vii și livezi prețul ajunge la 120–200 RON/ha datorită dificultății sporite. În Moldova prețurile sunt 170–240 MDL/ha (~€8.50–12/ha).',
  },
  {
    question: 'Câte hectare acoperă o dronă agricolă pe zi?',
    answer:
      'O dronă DJI Agras T50 acoperă 180–220 ha/zi pe teren plan, sau 8–30 ha/zi în vii și livezi. Media practică pentru un operator solo pe culturi de câmp este de 60–120 ha/zi, incluzând timpii de umplere și deplasare.',
  },
  {
    question: 'Ce factori influențează prețul pulverizării cu drona?',
    answer:
      'Principalii factori sunt: tipul de cultură (câmp vs. vie/livadă), suprafața totală (suprafețele mari beneficiază de tarife mai mici), distanța față de baza operatorului, tipul de substanță aplicată și condițiile de teren (pantă, obstacole). Fermele cu suprafețe de peste 200 ha pot negocia prețuri de 70–80 RON/ha.',
  },
  {
    question: 'Este mai ieftină drona față de avionul agricol?',
    answer:
      'Drona costă ~100 RON/ha față de avionul agricol care costă ~80 RON/ha în medie. Avantajul dronei este precizia ridicată, capacitatea de a trata suprafețe mici și fragmentate, posibilitatea de a lucra dimineața devreme (când vântul este calm) și accesibilitatea în zone cu obstacole. Pentru ferme mari și uniforme, avionul rămâne competitiv.',
  },
  {
    question: 'Se pot trata viile și livezile cu drona agricolă?',
    answer:
      'Da, drona este ideală pentru vii și livezi. DJI Agras T50 are un mod special pentru viticultura (terrain follow mode) care adaptează înălțimea de zbor la relieful terasat. Norma de aplicare este 40–90 L/ha pentru vii față de 8–20 L/ha pentru culturile de câmp.',
  },
];

export const legalFAQs: FAQ[] = [
  {
    question: 'Este legală drona agricolă în România?',
    answer:
      'Da, utilizarea dronelor pentru tratamente fitosanitare este legală în România. Legea L494/2025 a clarificat cadrul legal. Operatorii au nevoie de autorizație AACR (pentru zbor SPECIFIC/STS01-STS02) și aviz ANF (Agenția Națională Fitosanitară) pentru aplicarea pesticidelor. Substanțele aplicate trebuie să fie autorizate pentru administrare aeriană.',
  },
  {
    question: 'Ce autorizații trebuie să aibă un operator de drone agricole?',
    answer:
      'Un operator de drone agricole din România trebuie să dețină: (1) certificat de competență pilot AACR categoria A2 sau SPECIFIC, (2) autorizație de operare AACR pentru categoria SPECIFIC/STS01, (3) aviz ANF pentru aplicarea tratamentelor fitosanitare, (4) asigurare de răspundere civilă pentru drona, (5) drona înregistrată la AACR.',
  },
];

export const generalFAQs: FAQ[] = [
  {
    question: 'Cum găsesc un operator de drone agricole în județul meu?',
    answer:
      'Folosiți filtrul de județ din directorul nostru pentru a găsi toți operatorii care acoperă zona dumneavoastră. Mulți operatori naționali acoperă mai multe județe și se deplasează la fermă. Puteți contacta direct operatorul prin formularul de pe profilul său sau prin telefon.',
  },
  {
    question: 'Cum adaug afacerea mea în director?',
    answer:
      'Listarea în directorul nostru este complet gratuită. Completați formularul de pe pagina „Adaugă Operator" cu datele companiei dumneavoastră: servicii oferite, județele acoperite, tipul dronelor și prețurile. Echipa noastră va verifica informațiile și va publica profilul în maxim 48 de ore.',
  },
];
