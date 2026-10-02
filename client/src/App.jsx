import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const HomeInteriorsPage = lazy(() => import('./pages/HomeInteriorsPage'));
const OfficeInteriorsPage = lazy(() => import('./pages/OfficeInteriorsPage'));
const PaintTexturesPage = lazy(() => import('./pages/PaintTexturesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage'));
const BookingSuccessPage = lazy(() => import('./pages/BookingSuccessPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-interiors" element={<HomeInteriorsPage />} />
          <Route path="/office-interiors" element={<OfficeInteriorsPage />} />
          <Route path="/paint-textures" element={<PaintTexturesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/booking-success" element={<BookingSuccessPage />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}
