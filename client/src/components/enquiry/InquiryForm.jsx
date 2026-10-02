import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { submitLead } from '../../services/leadsApi';

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
      await submitLead({
        ...formData,
        phone: phoneClean,
      });
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to process your request. Please try again.');
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
            <option value="Paint & Textures">Paint & Textures</option>
            <option value="Waterproofing">Waterproofing</option>
            <option value="Complete Overhaul">Complete Overhaul / Architecture</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <Input
          label="City / Location"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="e.g. Bengaluru"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal">Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="Residential Apartment">Residential Apartment</option>
            <option value="Independent House">Independent House</option>
            <option value="Villa">Villa</option>
            <option value="Office">Office</option>
            <option value="Commercial Space">Commercial Space</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal">Estimated Budget</label>
          <select
            name="budgetBand"
            value={formData.budgetBand}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Select budget range...</option>
            <option value="Under ₹5 Lakh">Under ₹5 Lakh</option>
            <option value="₹5–10 Lakh">₹5–10 Lakh</option>
            <option value="₹10–20 Lakh">₹10–20 Lakh</option>
            <option value="₹20–40 Lakh">₹20–40 Lakh</option>
            <option value="₹40 Lakh+">₹40 Lakh+</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal">Preferred Contact Method</label>
        <div className="flex items-center gap-4 py-1">
          {['Phone', 'WhatsApp', 'Email'].map((method) => (
            <label key={method} className="inline-flex items-center gap-2 text-xs text-charcoal cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={formData.preferredContact === method}
                onChange={handleChange}
                className="text-primary focus:ring-primary"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
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