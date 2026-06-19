import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Domestic Tours', path: '/domestic-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const popularDestinations = [
    { name: 'Maldives', path: '/international-tours' },
    { name: 'Bali', path: '/international-tours' },
    { name: 'Kashmir', path: '/domestic-tours' },
    { name: 'Dubai', path: '/international-tours' },
    { name: 'Kerala', path: '/domestic-tours' },
    { name: 'Europe', path: '/international-tours' },
    { name: 'Ooty', path: '/domestic-tours' },
    { name: 'Singapore', path: '/international-tours' }
  ];

  const travelServices = [
    { name: 'Domestic Tours', path: '/domestic-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'Customized Holiday Packages', path: '/' },
    { name: 'Corporate & Family Group Tours', path: '/about' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund & Cancellation', path: '/refund-policy' }
  ];

  const socialLinks = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919159996556',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.039.99 11.436.99c-5.448 0-9.873 4.373-9.877 9.802-.001 1.768.48 3.49 1.39 5.01l-.997 3.64 3.738-.973c1.517.828 3.197 1.267 4.887 1.267z"/>
          <path d="M16.924 13.917c-.282-.141-1.666-.822-1.923-.916-.257-.094-.445-.141-.631.141-.186.282-.722.916-.885 1.102-.163.186-.326.21-.608.069-.282-.141-1.194-.44-2.274-1.402-.84-.75-1.408-1.677-1.573-1.959-.165-.282-.018-.434.123-.574.127-.127.282-.329.424-.494.141-.165.188-.282.282-.47.094-.188.047-.353-.024-.494-.071-.141-.631-1.522-.865-2.087-.228-.548-.48-.474-.631-.482-.152-.008-.326-.009-.5-.009s-.456.066-.694.326c-.238.259-.91 8.895-.91 1.09 0 2.215 1.6 4.35 1.823 4.653.223.303 3.167 4.837 7.67 6.782 1.071.463 1.907.739 2.56.947 1.076.341 2.057.293 2.831.177.863-.128 2.66-.822 3.036-1.577s.376-1.403.263-1.577c-.113-.174-.417-.282-.699-.423z"/>
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/heaven11_holidays?igsh=MW4xaTRianp6NHVjaA==',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.74.052 1.408.064 2.164.298 2.673.497.674.262 1.155.576 1.66 1.082.506.505.82.986 1.082 1.66.199.509.433 1.266.497 2.673.044.957.052 1.31.052 3.74 0 2.43-.008 2.784-.052 3.74-.064 1.408-.298 2.164-.497 2.673-.262.674-.576 1.155-1.082 1.66-.505.506-.986.82-1.66 1.082-.509.199-1.266.433-2.673.497-.957.044-1.31.052-3.74.052-2.43 0-2.784-.008-3.74-.052-1.408-.064-2.164-.298-2.673-.497a4.902 4.902 0 01-1.66-1.082 4.902 4.902 0 01-1.082-1.66c-.199-.509-.433-1.266-.497-2.673-.044-.957-.052-1.31-.052-3.74 0-2.43.008-2.784.052-3.74.064-1.408.298-2.164.497-2.673A4.902 4.902 0 013.44 2.637 4.902 4.902 0 015.1 1.555c.509-.199 1.266-.433 2.673-.497.957-.044 1.31-.052 3.74-.052zm-.315 1.8c-2.404 0-2.686.01-3.633.053-.885.04-1.364.188-1.683.312a3.104 3.104 0 00-1.127.733 3.104 3.104 0 00-.733 1.127c-.124.319-.272.798-.312 1.683-.043.947-.053 1.23-.053 3.633s.01 2.686.053 3.633c.04.885.188 1.364.312 1.683.2.518.479.959.86 1.34a3.104 3.104 0 001.34.86c.319.124.798.272 1.683.312.947.043 1.23.053 3.633.053s2.686-.01 3.633-.053c.885-.04 1.364-.188 1.683-.312a3.104 3.104 0 001.127-.733 3.104 3.104 0 00.733-1.127c.124-.319.272-.798.312-1.683.043-.947.053-1.23.053-3.633s-.01-2.686-.053-3.633c-.04-.885-.188-1.364-.312-1.683a3.104 3.104 0 00-.733-1.127 3.104 3.104 0 00-1.127-.733c-.319-.124-.798-.272-1.683-.312-.947-.043-1.23-.053-3.633-.053z" clipRule="evenodd" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    }
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #071d52 0%, #0d2b7a 20%, #1a4fa0 45%, #1E8DC5 72%, #0ea5e9 100%)' }}
    >
      {/* ── Shared 3D background decorations ── */}
      {/* Grid overlay removed */}
      {/* Top-left radial glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }} />
      {/* Bottom-right dark pool */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(7,29,82,0.7) 0%, transparent 70%)' }} />
      {/* Centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-30" style={{ background: 'radial-gradient(ellipse, rgba(30,141,197,0.4) 0%, transparent 70%)' }} />
      {/* Big airplane watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none rotate-20 translate-x-16 translate-y-16">
        <svg viewBox="0 0 24 24" className="w-[500px] h-[500px] fill-white">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l8 2.5z"/>
        </svg>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — MAIN FOOTER CONTENT
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand + Socials */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <Link to="/" className="inline-block" title="Heaven11 Holidays">
              <Logo className="h-9 sm:h-11 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Experience the world with absolute luxury and comfort. Heaven11 Holidays is your trusted travel partner for domestic &amp; international tours.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,229,255,0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,255,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 16px rgba(0,229,255,0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="inline-block w-0.5 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#00E5FF,#1E8DC5)' }} />
              Contact Agency
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5" style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <MapPin className="h-4 w-4" style={{ color: '#00E5FF' }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>
                  5th Floor, SBRR Square,<br />Anna Nagar, Trichy – 620017,<br />Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5" style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <Phone className="h-4 w-4" style={{ color: '#00E5FF' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919159996556" className="transition-all duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}>
                    +91 91599 96556
                  </a>
                  <a href="tel:+918148604780" className="transition-all duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}>
                    +91 81486 04780
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5" style={{ background: 'rgba(0,229,255,0.12)', border: '1px solid rgba(0,229,255,0.2)' }}>
                  <Mail className="h-4 w-4" style={{ color: '#00E5FF' }} />
                </div>
                <a href="mailto:heaven11holidays@gmail.com" className="break-all transition-all duration-200" style={{ color: 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}>
                  heaven11holidays@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="col-span-1 space-y-4">
            <h4 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="inline-block w-0.5 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#00E5FF,#1E8DC5)' }} />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}
                    className="flex items-center gap-2 transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Destinations */}
          <div className="col-span-1 space-y-4">
            <h4 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="inline-block w-0.5 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#00E5FF,#1E8DC5)' }} />
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              {popularDestinations.map((dest) => (
                <li key={dest.name}>
                  <Link to={dest.path}
                    className="flex items-center gap-2 transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">›</span>
                    {dest.name} Packages
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Travel Services row ── */}
        <div className="py-6" style={{ borderTop: '1px solid rgba(0,229,255,0.12)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h4 className="font-display text-sm font-bold text-white whitespace-nowrap flex items-center gap-2">
              <span className="inline-block w-0.5 h-4 rounded-full" style={{ background: 'linear-gradient(180deg,#00E5FF,#1E8DC5)' }} />
              Services Offered
            </h4>
            <div className="flex flex-wrap gap-2">
              {travelServices.map((service, index) => (
                <Link key={index} to={service.path}
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,229,255,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,255,0.35)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid rgba(0,229,255,0.12)' }}>
          <div className="flex flex-wrap justify-center gap-5 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {legalPages.map((page) => (
              <Link key={page.name} to={page.path}
                className="transition-all duration-200"
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'}
              >
                {page.name}
              </Link>
            ))}
          </div>
          <p className="text-center sm:text-right text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Heaven Holidays. All Rights Reserved. Designed with ❤️ for Travelers
          </p>
        </div>
      </div>
    </footer>
  );
};
