import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { siteConfig } from '../config/site';
import { submitContactMessage } from '../services/contactApi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Home Interiors',
    message: '',
    hp_token: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.hp_token) {
      setStatus('success');
      return;
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneClean)) {
      setStatus('error');
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactMessage({
        ...formData,
        phone: phoneClean,
      });
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: 'Home Interiors', message: '', hp_token: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to deliver message. Please call us directly.');
    }
  };

  return (
    <div className="py-16 md:py-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tagline="Direct Inquiries"
          title="Connect with Our Team"
          description="Visit our design studio, request a direct site inspection, or send us a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-border space-y-6">
              <h3 className="font-serif text-xl font-bold text-charcoal">Studio Details</h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">Address</h4>
                  <p className="text-clay text-sm mt-0.5">
                    {typeof siteConfig.address === 'object'
                      ? `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state}`
                      : siteConfig.address}
                  </p>
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
                  <p className="text-clay text-sm mt-0.5">{siteConfig.businessHours || siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-64 bg-beige">
              <iframe
                title="RangoliHomes Location"
                src={siteConfig.googleMapsEmbedUrl || siteConfig.mapEmbedUrl}
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

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-charcoal">Message Sent!</h4>
                <p className="text-sm text-clay max-w-md mx-auto">
                  Thank you for getting in touch. A representative from our team will respond to your inquiry shortly.
                </p>
                <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="hp_token"
                  value={formData.hp_token}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    type="tel"
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-charcoal">Service Requirement</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="Home Interiors">Home Interiors</option>
                    <option value="Office Interiors">Office Interiors</option>
                    <option value="Paint & Textures">Paint & Textures</option>
                    <option value="Complete Overhaul">Complete Overhaul</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-charcoal">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about your space, layout, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}