import Modal from '../ui/Modal';
import InquiryForm from './InquiryForm';

export default function InquiryModal({ isOpen, onClose, defaultService = '' }) {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose('dismissed')}>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Complimentary Estimate</span>
        <h2 className="text-2xl font-serif font-bold text-charcoal mt-1">Get an Expert Project Assessment</h2>
        <p className="text-xs text-clay mt-1">
          Share your dimensions or service brief, and our architects will prepare custom elevations and cost brackets.
        </p>
      </div>

      <InquiryForm
        defaultService={defaultService}
        onSuccess={() => onClose('submitted')}
      />
    </Modal>
  );
}
