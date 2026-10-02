import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import DatePicker from './DatePicker';
import TimeSlotPicker from './TimeSlotPicker';
import BookingSummary from './BookingSummary';
import { fetchAvailability, submitBooking } from '../../services/bookingApi';
import { AlertCircle } from 'lucide-react';

export default function ConsultationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Home Interiors',
    notes: '',
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotError, setSlotError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState('');

  // Fetch slots whenever selectedDate changes
  useEffect(() => {
    if (!selectedDate) return;

    let isMounted = true;
    setLoadingSlots(true);
    setSlotError('');
    setSelectedTime('');

    fetchAvailability(selectedDate)
      .then((data) => {
        if (!isMounted) return;
        if (data.available) {
          setSlots(data.slots || []);
        } else {
          setSlots([]);
          setSlotError(data.reason || 'No availability');
        }
      })
      .catch((err) => {
        if (isMounted) setSlotError(err.message || 'Unable to check availability');
      })
      .finally(() => {
        if (isMounted) setLoadingSlots(false);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookingError('');

    if (!selectedDate || !selectedTime) {
      setBookingError('Please choose both an appointment date and an available time slot.');
      return;
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneClean)) {
      setBookingError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await submitBooking({
        ...formData,
        phone: phoneClean,
        date: selectedDate,
        startTime: selectedTime,
      });

      const bookingRef = response.data.bookingRef;
      navigate(`/booking-success?ref=${bookingRef}`);
    } catch (err) {
      if (err.code === 'SLOT_TAKEN') {
        // Refresh availability on slot collision
        setBookingError(err.message);
        fetchAvailability(selectedDate).then((d) => setSlots(d.slots || []));
      } else {
        setBookingError(err.message || 'Booking failed. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {bookingError && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{bookingError}</span>
        </div>
      )}

      {/* Client Information */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-border pb-2">
          Your Contact Information
        </h4>
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Ramesh Chandra"
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="9876543210"
            required
          />
          <Input
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="ramesh@example.com"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-charcoal">Design Vertical</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-[#814882]/30"
          >
            <option value="Home Interiors">Home Interiors</option>
            <option value="Office Interiors">Office Interiors</option>
            <option value="Paint & Textures">Paint & Textures</option>
            <option value="Waterproofing">Waterproofing</option>
            <option value="Complete Overhaul">Complete Overhaul / Architecture</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Date Picker */}
      <DatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} />

      {/* Time Slot Picker */}
      {selectedDate && (
        <TimeSlotPicker
          slots={slots}
          selectedTime={selectedTime}
          onSelectTime={setSelectedTime}
          isLoading={loadingSlots}
          error={slotError}
        />
      )}

      {/* Notes / Comments */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-charcoal">Project Notes (Optional)</label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Property location, carpet area, expected move-in date..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-cream/30 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-[#814882]/30 resize-none"
        />
      </div>

      {/* Live Booking Summary */}
      <BookingSummary date={selectedDate} time={selectedTime} service={formData.service} />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitting || !selectedDate || !selectedTime}
      >
        {submitting ? 'Confirming Appointment...' : 'Confirm Consultation Booking'}
      </Button>
    </form>
  );
}