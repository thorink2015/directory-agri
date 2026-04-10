import { ServiceType } from './types';

export interface ServiceDefinition {
  slug: ServiceType;
  name: string;
  nameRo: string;
  description: string;
  longDescription: string;
  icon: string;
  priceMinRon?: number;
  priceMaxRon?: number;
  priceUnit: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceDefinition[] = [
  {
    slug: 'spraying',
    name: 'Pulverizare',
    nameRo: 'Pulverizare cu dronă',
    description: 'Tratamente fitosanitare cu drona agricolă — fungicide, insecticide, erbicide.',
    longDescription:
      'Pulverizarea cu drona agricolă este cea mai eficientă metodă de aplicare a produselor fitosanitare pe culturi. Dronele agricole moderne pot trata între 10 și 20 de hectare pe oră, cu o precizie de centimetri. Sistemul de pulverizare centrifugal asigură o acoperire uniformă și reduce consumul de substanțe active cu până la 30% față de metodele tradiționale.',
    icon: '💧',
    priceMinRon: 70,
    priceMaxRon: 200,
    priceUnit: 'RON/ha',
    keywords: [
      'pulverizare drona',
      'tratament fitosanitar drona',
      'stropit cu drona',
      'pulverizare aeriana',
      'drona agricola pret',
    ],
    faqs: [
      {
        question: 'Cât costă pulverizarea cu drona agricolă?',
        answer:
          'Prețul variază între 70 și 200 RON/ha în funcție de cultură și regiune. Viticultura și pomicultura sunt mai scumpe (120–200 RON/ha) față de cerealele păioase (70–130 RON/ha).',
      },
      {
        question: 'Ce suprafață poate trata o dronă pe zi?',
        answer:
          'O dronă agricolă modernă (DJI T50, XAG P100) poate trata 80–150 ha/zi în condiții optime, cu o echipă de 2 operatori.',
      },
      {
        question: 'Este necesară o autorizație pentru pulverizarea cu drona?',
        answer:
          'Da, operatorul trebuie să fie autorizat AACR (Autoritatea Aeronautică Civilă Română) pentru operații în clasa Open sau Specific, în funcție de greutatea dronei.',
      },
    ],
  },
  {
    slug: 'spreading',
    name: 'Fertilizare',
    nameRo: 'Fertilizare cu dronă',
    description: 'Aplicare îngrășăminte granulare și foliare cu precizie maximă.',
    longDescription:
      'Fertilizarea cu drona permite aplicarea uniformă a îngrășămintelor granulare sau lichide pe suprafețe mari. Sistemul de împrăștiere centrifugal acoperă uniform 5–10 metri lățime. Ideal pentru aplicări de toamnă (fosfat, potasiu) și primăvară (azot), precum și pentru tratamente foliare.',
    icon: '🌱',
    priceMinRon: 80,
    priceMaxRon: 150,
    priceUnit: 'RON/ha',
    keywords: [
      'fertilizare drona',
      'imprastiere ingrasaminte drona',
      'fertilizare aeriana',
      'imprastiere granule drona',
    ],
    faqs: [
      {
        question: 'Ce tipuri de îngrășăminte se pot aplica cu drona?',
        answer:
          'Dronele agricole pot aplica fertilizanți lichizi (foliare), granule fine (uree, DAP, MAP) și produse biologice. Granulele trebuie să aibă dimensiuni de 1–4 mm pentru compatibilitate cu sistemul centrifugal.',
      },
      {
        question: 'Este mai eficientă fertilizarea cu drona față de cea mecanică?',
        answer:
          'Pe terenuri accidentate, în plantații sau în zone cu acces dificil, drona este net superioară. Pe câmpii mari și plane, utilajele terestre rămân mai economice ca preț/ha.',
      },
    ],
  },
  {
    slug: 'monitoring',
    name: 'Monitorizare',
    nameRo: 'Monitorizare culturi',
    description: 'Supraveghere și inspecție culturi cu camere multispectrale și termale.',
    longDescription:
      'Monitorizarea culturilor cu dronă utilizează camere RGB, multispectrale (NDVI) și termale pentru a detecta stresul hidric, bolile și dăunătorii înainte ca acestea să devină vizibile cu ochiul liber. Rapoartele NDVI identifică zonele cu probleme și permit intervenție țintită, reducând costurile cu tratamentele cu până la 40%.',
    icon: '👁️',
    priceMinRon: 100,
    priceMaxRon: 300,
    priceUnit: 'RON/ha',
    keywords: [
      'monitorizare culturi drona',
      'inspectie culturi drona',
      'ndvi drona',
      'supraveghere camp drona',
      'drona multispectral',
    ],
    faqs: [
      {
        question: 'Ce este analiza NDVI și cum ajută fermierii?',
        answer:
          'NDVI (Normalized Difference Vegetation Index) măsoară sănătatea vegetației folosind spectrul infraroșu. Valorile scăzute indică stres hidric, boli sau lipsă de nutrienți, permițând intervenție precisă înainte de pierderi majore de recoltă.',
      },
      {
        question: 'Cât de des trebuie monitorizate culturile?',
        answer:
          'Recomandarea standard este monitorizarea la 2–3 săptămâni în sezon. Culturile sensibile (viță de vie, legume) pot necesita monitorizare săptămânală în perioadele critice.',
      },
    ],
  },
  {
    slug: 'mapping',
    name: 'Cartografiere',
    nameRo: 'Cartografiere și fotogrammetrie',
    description: 'Hărți de precizie, modele 3D și planuri cadastrale cu drone.',
    longDescription:
      'Cartografierea cu drona produce hărți ortofoto de înaltă rezoluție (2–5 cm/pixel), modele digitale de teren (DTM) și modele 3D ale culturilor sau infrastructurii agricole. Livrabilele includ fișiere GeoTIFF, KML, DXF pentru integrare în platformele de agricultură de precizie.',
    icon: '🗺️',
    priceMinRon: 150,
    priceMaxRon: 500,
    priceUnit: 'RON/ha',
    keywords: [
      'cartografiere drona',
      'fotogrammetrie drona',
      'harta 3d drona',
      'model digital teren drona',
      'ortofoto drona',
    ],
    faqs: [
      {
        question: 'Ce precizie au hărțile realizate cu drona?',
        answer:
          'Hărțile realizate cu drone echipate cu GPS RTK/PPK ating precizie de 1–3 cm orizontal și 2–5 cm vertical, suficientă pentru aplicații cadastrale și de precizie agricolă.',
      },
      {
        question: 'Cât timp durează cartografierea unui teren?',
        answer:
          'O dronă de cartografiere acoperă 50–200 ha/oră în zbor. Procesarea datelor (fotogrammetrie) durează 2–8 ore suplimentar, în funcție de complexitate.',
      },
    ],
  },
  {
    slug: 'training',
    name: 'Formare piloți',
    nameRo: 'Formare piloți drone agricole',
    description: 'Cursuri autorizate pentru piloți de drone agricole — AACR și practic.',
    longDescription:
      'Cursurile de formare pentru piloți de drone agricole acoperă legislația aviației civile, operarea practică a dronelor agricole DJI și XAG, planificarea misiunilor, calibrarea echipamentelor și proceduri de siguranță. La absolvire se obține brevetul AACR pentru operații în clasa Open A1/A3 sau clasa Specific.',
    icon: '🎓',
    priceMinRon: 1500,
    priceMaxRon: 5000,
    priceUnit: 'RON/curs',
    keywords: [
      'curs drona agricola',
      'formare pilot drona',
      'brevet drona aacr',
      'autorizatie pilot drona',
      'training drona agricola',
    ],
    faqs: [
      {
        question: 'Ce autorizații sunt necesare pentru a opera o dronă agricolă?',
        answer:
          'În România, operatorii de drone trebuie înregistrați la AACR. Dronele sub 25 kg (clasa Open A1/A3) necesită certificat de competență. Dronele mai mari sau operațiile comerciale necesită autorizație Specific.',
      },
      {
        question: 'Cât durează un curs de pilot de dronă agricolă?',
        answer:
          'Un curs complet (teorie + practică + examen AACR) durează 3–5 zile. Cursurile specializate pe drone agricole DJI sau XAG pot fi completate în 2–3 zile pentru piloți cu experiență.',
      },
    ],
  },
  {
    slug: 'rental',
    name: 'Închiriere drone',
    nameRo: 'Închiriere drone agricole',
    description: 'Închiriere drone agricole cu sau fără operator — DJI, XAG, ADT.',
    longDescription:
      'Închirierea dronelor agricole este o alternativă viabilă pentru fermierii care doresc să opereze propriile echipamente fără a investi în achiziție. Dronele de închiriat sunt disponibile cu sau fără operator, pe zi sau pe sezon. Tariful include asigurarea echipamentului și suport tehnic.',
    icon: '🚁',
    priceMinRon: 500,
    priceMaxRon: 2000,
    priceUnit: 'RON/zi',
    keywords: [
      'inchiriere drona agricola',
      'rent drona agricola',
      'drona agricola de inchiriat',
      'inchiriere dji t50',
    ],
    faqs: [
      {
        question: 'Cât costă închirierea unei drone agricole pe zi?',
        answer:
          'Tariful de închiriere variază între 500 și 2.000 RON/zi, în funcție de modelul dronei și dacă include sau nu operator. Pachetele pe sezon sunt semnificativ mai avantajoase.',
      },
      {
        question: 'Ce dronă agricolă este disponibilă pentru închiriere?',
        answer:
          'Cele mai comune drone de închiriat sunt DJI T25P (16L, 16ha/h) și DJI T50 (40L, 43ha/h). Unii operatori oferă și XAG P100 sau modele ADT Falcon.',
      },
    ],
  },
];

export const serviceBySlug: Record<string, ServiceDefinition> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return serviceBySlug[slug];
}
