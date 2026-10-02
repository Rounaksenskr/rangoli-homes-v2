import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { siteConfig } from '../config/site';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form submission will connect to the backend in Phase 7.');
  };

  return (
    <div className="py-16 md:py-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Inquiries"
          title="Connect with Our Team"
          subtitle="Visit our design studio, request a direct site inspection, or send us a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-border space-y-6">
              <h3 className="font-serif text-xl font-bold text-charcoal">Studio Details</h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Address</h4>
                  <p className="text-clay text-sm mt-0.5">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Phone</h4>
                  <a href={`tel:${siteConfig.phone}`} className="text-clay text-sm mt-0.5 hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Email</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-clay text-sm mt-0.5 hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Operating Hours</h4>
                  <p className="text-clay text-sm mt-0.5">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border h-64 bg-beige">
              <iframe
                title="RangoliHomes Location"
                src={siteConfig.mapEmbedUrl || "https://maps.google.com/maps?q=Durgapur%20West%20Bengal&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-surface p-6 sm:p-10 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="John Doe"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                  type="tel"
                  required
                />
                <Input
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-charcoal">Service Requirement *</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="Home Interiors">Home Interiors</option>
                  <option value="Office Interiors">Office Interiors</option>
                  <option value="Paint & Textures">Paint & Textures</option>
                  <option value="Complete Overhaul">Complete Overhaul</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-charcoal">Message</label>
                <textarea
                  rows={4}
                  placeholder="Share details about your space, layout, or timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
