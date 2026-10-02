import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { features } from '../config/features';

const MODAL_SESSION_KEY = 'rangoli_modal_session_dismissed';
const MODAL_DISMISS_KEY = 'rangoli_modal_dismissed_until';
const MODAL_SUBMIT_KEY = 'rangoli_modal_submitted_until';

export default function useInquiryModal(delayOverridden = false) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const location = useLocation();

  const openModal = (service = '') => {
    setPreselectedService(service);
    setIsOpen(true);
  };

  const closeModal = (reason = 'dismissed') => {
    setIsOpen(false);
    const now = Date.now();

    sessionStorage.setItem(MODAL_SESSION_KEY, 'true');

    if (reason === 'submitted') {
      // Suppress for 30 days after successful submission
      localStorage.setItem(MODAL_SUBMIT_KEY, String(now + 30 * 24 * 60 * 60 * 1000));
    } else {
      // Suppress for 7 days if simply dismissed
      localStorage.setItem(MODAL_DISMISS_KEY, String(now + 7 * 24 * 60 * 60 * 1000));
    }
  };

  useEffect(() => {
    // Never auto-trigger on dedicated contact or booking routes
    const excludedRoutes = ['/contact', '/book-consultation', '/booking-success'];
    if (excludedRoutes.includes(location.pathname)) return;

    // Check suppression limits
    const now = Date.now();
    const sessionSeen = sessionStorage.getItem(MODAL_SESSION_KEY);
    const dismissedUntil = localStorage.getItem(MODAL_DISMISS_KEY);
    const submittedUntil = localStorage.getItem(MODAL_SUBMIT_KEY);

    if (sessionSeen) return;
    if (dismissedUntil && now < Number(dismissedUntil)) return;
    if (submittedUntil && now < Number(submittedUntil)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, features.enquiryDelayMs || 2500);

    return () => clearTimeout(timer);
  }, [location.pathname, delayOverridden]);

  return { isOpen, preselectedService, openModal, closeModal };
}