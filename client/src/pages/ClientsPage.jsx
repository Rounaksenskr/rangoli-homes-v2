import SectionHeader from '../components/ui/SectionHeader';
import SafeImage from '../components/ui/SafeImage';
import { clients } from '../data/clients';
import { pageBackdrops } from '../data/images';
import useSEO from '../hooks/useSEO';

export default function ClientsPage() {
  useSEO(
    'Our Clients & Partners',
    'Explore corporate enterprises, developers, and homeowners who trust RangoliHomes for turnkey architectural and interior transformations.'
  );

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      {/* Clients Hero Banner */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border/60 bg-cream">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-75"
          style={{ backgroundImage: `url(${pageBackdrops?.clients || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/45 to-cream pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Partners"
            title="Client Roster & Commercial Partners"
            subtitle="A selection of businesses, property developers, and residential societies that trust our execution quality."
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-surface p-8 rounded-xl border border-border flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors"
            >
              <div className="h-12 w-auto flex items-center justify-center mb-4">
                <SafeImage
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <h3 className="font-serif font-bold text-charcoal text-sm">{client.name}</h3>
              <p className="text-clay text-xs mt-1">{client.industry || 'Client Space'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
