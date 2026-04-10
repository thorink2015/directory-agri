export default function HomeSchema() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DroneAgricol.ro',
    url: 'https://droneagricol.ro',
    description: 'Directorul operatorilor de drone agricole din România și Moldova.',
    areaServed: ['RO', 'MD'],
    sameAs: [],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DroneAgricol.ro',
    url: 'https://droneagricol.ro',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://droneagricol.ro/operatori?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
