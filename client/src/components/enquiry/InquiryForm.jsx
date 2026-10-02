import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function InquiryForm({ defaultService = '', onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Home Interiors',
    message: '',
    city: '',
    propertyType: 'Residential Apartment',
    budgetBand: '',
    preferredContact: 'Phone',
    hp_token: '', // Honeypot field for spam prevention
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reject honeypot submissions quietly
    if (formData.hp_token) {
      setStatus('success');
      return;
    }

    // Phone format check: standard 10-digit Indian mobile format
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
      // Connects with Phase 7 Express endpoints; simulates network response for Phase 5
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setErrorMessage('Unable to process your request. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-charcoal">Thank You!</h3>
        <p className="text-sm text-clay max-w-sm mx-auto">
          We have received your requirement. A senior designer will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot Field */}
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
        label="Full Name *"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Ananya Sen"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="9876543210"
          required
        />
        <Input
          label="Email Address *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="ananya@example.com"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal">Primary Requirement *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="Home Interiors">Home Interiors</option>
            <option value="Office Interiors">Office Interiors</option>
            <option value="Paint Services">Paint Services</option>
            <option value="Wall Textures">Wall Textures</option>
            <option value="Waterproofing">Waterproofing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <Input
          label="City / Location"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="e.g. Kolkata / Durgapur"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal">Requirement Details</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Scope, layout area, or specific finish requirements..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </div>
    </form>
  );
}
