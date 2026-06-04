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

  return (
    <footer className="bg-slate-900 text-slate-350 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Brief & Socials */}
          <div className="space-y-6">
            <Link to="/" className="inline-block text-white" title="Heaven11 Holidays">
              <div className="bg-gradient-premium px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl border border-white/15 shadow-md flex items-center justify-center">
                <Logo className="h-9 sm:h-11 w-auto" />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experience the world with absolute luxury and comfort. Heaven11 Holidays is your trusted travel partner, offering meticulously designed domestic and international tour packages.
            </p>
            <div className="flex items-center gap-3">
              {[
                { 
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.039.99 11.436.99c-5.448 0-9.873 4.373-9.877 9.802-.001 1.768.48 3.49 1.39 5.01l-.997 3.64 3.738-.973c1.517.828 3.197 1.267 4.887 1.267z"/>
                      <path d="M16.924 13.917c-.282-.141-1.666-.822-1.923-.916-.257-.094-.445-.141-.631.141-.186.282-.722.916-.885 1.102-.163.186-.326.21-.608.069-.282-.141-1.194-.44-2.274-1.402-.84-.75-1.408-1.677-1.573-1.959-.165-.282-.018-.434.123-.574.127-.127.282-.329.424-.494.141-.165.188-.282.282-.47.094-.188.047-.353-.024-.494-.071-.141-.631-1.522-.865-2.087-.228-.548-.48-.474-.631-.482-.152-.008-.326-.009-.5-.009s-.456.066-.694.326c-.238.259-.91 8.895-.91 1.09 0 2.215 1.6 4.35 1.823 4.653.223.303 3.167 4.837 7.67 6.782 1.071.463 1.907.739 2.56.947 1.076.341 2.057.293 2.831.177.863-.128 2.66-.822 3.036-1.577s.376-1.403.263-1.577c-.113-.174-.417-.282-.699-.423z"/>
                    </svg>
                  ), 
                  href: 'https://wa.me/919159996556' 
                },
                { 
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ), 
                  href: 'https://facebook.com/' 
                },
                { 
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.74.052 1.408.064 2.164.298 2.673.497.674.262 1.155.576 1.66 1.082.506.505.82.986 1.082 1.66.199.509.433 1.266.497 2.673.044.957.052 1.31.052 3.74 0 2.43-.008 2.784-.052 3.74-.064 1.408-.298 2.164-.497 2.673-.262.674-.576 1.155-1.082 1.66-.505.506-.986.82-1.66 1.082-.509.199-1.266.433-2.673.497-.957.044-1.31.052-3.74.052-2.43 0-2.784-.008-3.74-.052-1.408-.064-2.164-.298-2.673-.497a4.902 4.902 0 01-1.66-1.082 4.902 4.902 0 01-1.082-1.66c-.199-.509-.433-1.266-.497-2.673-.044-.957-.052-1.31-.052-3.74 0-2.43.008-2.784.052-3.74.064-1.408.298-2.164.497-2.673A4.902 4.902 0 013.44 2.637A4.902 4.902 0 015.1 1.555c.509-.199 1.266-.433 2.673-.497.957-.044 1.31-.052 3.74-.052zm-.315 1.8c-2.404 0-2.686.01-3.633.053-.885.04-1.364.188-1.683.312a3.104 3.104 0 00-1.127.733a3.104 3.104 0 00-.733 1.127c-.124.319-.272.798-.312 1.683-.043.947-.053 1.23-.053 3.633s.01 2.686.053 3.633c.04.885.188 1.364.312 1.683.2.518.479.959.86 1.34a3.104 3.104 0 001.34.86c.319.124.798.272 1.683.312.947.043 1.23.053 3.633.053s2.686-.01 3.633-.053c.885-.04 1.364-.188 1.683-.312a3.104 3.104 0 001.127-.733a3.104 3.104 0 00.733-1.127c.124-.319.272-.798.312-1.683.043-.947.053-1.23.053-3.633s-.01-2.686-.053-3.633c-.04-.885-.188-1.364-.312-1.683a3.104 3.104 0 00-.733-1.127a3.104 3.104 0 00-1.127-.733c-.319-.124-.798-.272-1.683-.312-.947-.043-1.23-.053-3.633-.053z" clipRule="evenodd" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ), 
                  href: 'https://www.instagram.com/heaven11_holidays?igsh=MW4xaTRianp6NHVjaA==' 
                },
                { 
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.615 3.184c-3.61-.215-11.62-.215-15.23 0-3.897.233-4.385 2.443-4.385 8.816 0 6.36.485 8.58 4.385 8.816 3.6.215 11.62.215 15.23 0 3.897-.233 4.385-2.443 4.385-8.816 0-6.36-.485-8.58-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" clipRule="evenodd" />
                    </svg>
                  ), 
                  href: 'https://youtube.com/' 
                },
                { 
                  icon: (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  ), 
                  href: 'https://linkedin.com/' 
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-gradient-premium hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-white tracking-wide border-l-3 border-accent pl-3">Contact Agency</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  5th Floor, SBRR Square,<br />
                  Anna Nagar, Trichy – 620017,<br />
                  Tamil Nadu, India.
                </span>
              </li>
              <li className="flex flex-col gap-1.5 pl-8 relative">
                <Phone className="h-5 w-5 text-accent absolute left-0 top-0.5" />
                <a href="tel:+919159996556" className="text-slate-400 hover:text-white transition-all">+91 91599 96556</a>
                <a href="tel:+918148604780" className="text-slate-400 hover:text-white transition-all">+91 81486 04780</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:heaven11holidays@gmail.com" className="text-slate-400 hover:text-white transition-all">heaven11holidays@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Services & Popular links */}
          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2 lg:col-span-2">
            <div>
              <h4 className="font-display text-lg font-bold text-white tracking-wide border-l-3 border-accent pl-3 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white tracking-wide border-l-3 border-accent pl-3 mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm">
                {popularDestinations.map((dest) => (
                  <li key={dest.name}>
                    <Link to={dest.path} className="text-slate-400 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300">
                      {dest.name} Packages
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services detail Box */}
        <div className="py-8 border-t border-slate-800">
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-white tracking-wide border-l-3 border-accent pl-3">Travel Services Offered</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {travelServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:bg-primary-light hover:text-white transition-all duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Pages & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-800 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center gap-4">
            {legalPages.map((page) => (
              <Link key={page.name} to={page.path} className="hover:text-slate-350 transition-all">
                {page.name}
              </Link>
            ))}
          </div>
          <p className="text-center sm:text-right">
            © 2026 Heaven Holidays. All Rights Reserved. Designed with ❤️ for Travelers
          </p>
        </div>
      </div>
    </footer>
  );
};
