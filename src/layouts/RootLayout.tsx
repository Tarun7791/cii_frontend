import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User, Building, ShieldCheck, PhoneCall, Mail, Globe, MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { CiiLogo } from '../components/CiiLogo';
import { Toast } from '../components/Toast';

export const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, logout, showToast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    showToast('Signed out successfully.', 'info');
    navigate('/');
    setMobileMenuOpen(false);
  };

  const handleScrollToSection = (elementId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a moment for the page to transition, then scroll
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(elementId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-500/20 selection:text-[#002147]">
      {/* Dynamic Session Bar */}
      {currentUser && (
        <div className="bg-[#002147] text-white py-1.5 px-4 text-xs font-medium border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Logged in as: <strong className="font-semibold text-slate-100">{currentUser.name}</strong></span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                {currentUser.role === 'admin' ? (
                  <>
                    <ShieldCheck className="h-3 w-3 text-blue-400" />
                    <span className="text-blue-400 font-semibold">CII Admin</span>
                  </>
                ) : (
                  <>
                    <Building className="h-3 w-3 text-slate-300" />
                    <span>{currentUser.companyName}</span>
                  </>
                )}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10 hover:bg-white/10"
            >
              <LogOut className="h-3 w-3" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Sticky Premium Navbar */}
      <nav id="platform-navbar" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="shrink-0 flex items-center">
                <CiiLogo size="md" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-[#002147] bg-slate-50' : 'text-slate-600 hover:text-[#002147] hover:bg-slate-50/50'
                }`}
              >
                Home
              </Link>
              <button
                onClick={() => handleScrollToSection('about-cii')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#002147] hover:bg-slate-50/50 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection('what-we-do')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#002147] hover:bg-slate-50/50 transition-colors"
              >
                What We Do
              </button>
              <button
                onClick={() => handleScrollToSection('key-initiatives')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#002147] hover:bg-slate-50/50 transition-colors"
              >
                Initiatives
              </button>
              <button
                onClick={() => handleScrollToSection('impact-records')}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#002147] hover:bg-slate-50/50 transition-colors"
              >
                Impact Stats
              </button>

              <div className="h-5 w-px bg-slate-200 mx-2"></div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-[#0b2545] hover:bg-slate-100 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#002147]"
              >
                Home
              </Link>
              <button
                onClick={() => handleScrollToSection('about-cii')}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#002147]"
              >
                About CII
              </button>
              <button
                onClick={() => handleScrollToSection('what-we-do')}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#002147]"
              >
                What We Do
              </button>
              <button
                onClick={() => handleScrollToSection('key-initiatives')}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#002147]"
              >
                Key Initiatives
              </button>
              <button
                onClick={() => handleScrollToSection('impact-records')}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#002147]"
              >
                Impact Records
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Enterprise Footer - STRICTLY FROM SECTION 11 */}
      <footer id="platform-footer" className="bg-[#002147] text-white/90 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Links Section */}
          <div className="border-b border-white/10 pb-8 mb-8">
            <h3 className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300 font-medium">
              <button onClick={() => handleScrollToSection('about-cii')} className="hover:text-white transition-colors">About</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('membership-section')} className="hover:text-white transition-colors">Membership</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('events-section')} className="hover:text-white transition-colors">Events</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('news-publications')} className="hover:text-white transition-colors">Publications</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('policy-advocacy')} className="hover:text-white transition-colors">Policy & Advocacy</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('platform-footer')} className="hover:text-white transition-colors">Contact Us</button>
              <span className="text-white/20">•</span>
              <button onClick={() => handleScrollToSection('get-involved-section')} className="hover:text-white transition-colors">Sign-up</button>
              <span className="text-white/20">•</span>
              <span className="text-slate-400">Social Media Links</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Logo and About Snapshot */}
            <div className="md:col-span-5 space-y-4">
              <div className="inline-block bg-white p-2 rounded-md">
                <CiiLogo size="sm" />
              </div>
              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                The Confederation of Indian Industry (CII) works to create and sustain an environment conducive to the development of India, partnering industry, Government, and civil society, through advisory and consultative processes.
              </p>
            </div>

            {/* physical details & Address */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Headquarters
                </h4>
                <div className="text-slate-300 leading-relaxed text-xs space-y-1">
                  <p className="font-semibold text-slate-200">Confederation of Indian Industry</p>
                  <p>The Mantosh Sondhi Centre</p>
                  <p>23, Institutional Area, Lodi Road</p>
                  <p>New Delhi - 110 003 (India)</p>
                </div>
              </div>

              <div>
                <h4 className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
                  <PhoneCall className="h-3.5 w-3.5" /> Direct Contact
                </h4>
                <div className="text-slate-300 leading-relaxed text-xs space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400 font-semibold">T:</span>
                    <a href="tel:+911145771000" className="hover:text-white transition-colors">91 11 45771000</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400 font-semibold">E:</span>
                    <a href="mailto:info@cii.in" className="hover:text-white hover:underline transition-colors">info@cii.in</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400 font-semibold">W:</span>
                    <a href="https://www.cii.in" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">www.cii.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels with customized styling */}
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1 items-center sm:items-start">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Follow us on</span>
              <div className="flex flex-wrap gap-4 text-xs">
                <a href="https://cii.in/facebook" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  cii.in/facebook
                </a>
                <a href="https://cii.in/twitter" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  cii.in/twitter
                </a>
                <a href="https://cii.in/linkedin" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  cii.in/linkedin
                </a>
                <a href="https://cii.in/youtube" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  cii.in/youtube
                </a>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Confederation of Indian Industry. All Rights Reserved.
              </p>
              <p className="text-[10px] text-slate-500 mt-1">
                CIISIC Platform • Sprint 1 Sleek Interface Edition
              </p>
            </div>
          </div>
        </div>

        {/* Helpline Banner */}
        <div className="bg-[#001730] text-white py-4 px-4 text-center font-bold text-xs sm:text-sm tracking-wide border-t border-white/10 shadow-inner flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-blue-600 text-white font-black uppercase text-[10px] px-2 py-0.5 rounded shadow-sm">Membership Support</span>
          <span>Reach us via CII Membership Helpline Number:</span>
          <a href="tel:18001031244" className="text-blue-400 hover:text-blue-300 underline transition-colors font-extrabold">1800-103-1244</a>
        </div>
      </footer>

      {/* Global Toast component */}
      <Toast />
    </div>
  );
};
