import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface FooterProps {
  portal: "job-seeker" | "employer";
}

const Footer: React.FC<FooterProps> = ({ portal }) => {
  const base = `/${portal}`;
  const isEmployer = portal === "employer";

  return (
    <footer className="bg-[#0a1f36] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText textColor="text-white" />
            </div>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              {isEmployer
                ? "Your hiring, our responsibility. Helping companies find the right talent."
                : "Your career, our responsibility. Connecting talent with opportunity across India."}
            </p>
            <div className="flex gap-3 mt-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/satyarth-chauhan-founder-nokrify-5a71993b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#2dd4bf]/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 text-[#2dd4bf]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.977 1.977 0 01-1.972-1.98c0-1.093.885-1.98 1.972-1.98s1.972.887 1.972 1.98a1.977 1.977 0 01-1.972 1.98zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nokrify/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#2dd4bf]/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                title="Instagram"
              >
                <svg className="w-4 h-4 text-[#2dd4bf]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 4.25a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5Zm5.4-2.02a1.02 1.02 0 1 1 0 2.04a1.02 1.02 0 0 1 0-2.04Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: base },
                { label: "About Us", path: `${base}/about` },
                { label: "Contact Us", path: `${base}/contact` },
                { label: "Switch Portal", path: "/" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#2dd4bf] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">PORTALS</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Job Seeker Portal", path: "/job-seeker" },
                { label: "Employer Portal", path: "/employer" },
                { label: "Role Selection", path: "/" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#2dd4bf] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nokrify@gmail.com"
                  className="flex items-start gap-2 text-white/50 hover:text-[#2dd4bf] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 text-[#2dd4bf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  nokrify@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917668251814"
                  className="flex items-start gap-2 text-white/50 hover:text-[#2dd4bf] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 text-[#2dd4bf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 76682 51814
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-[#2dd4bf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Founded 2025 · Noida
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Nokrify. All rights reserved.
          </p>
          <p className="text-white/20 text-xs italic">
            {isEmployer ? "Your Hiring, Our Responsibility" : "Your Career, Our Responsibility"}
          </p>
          <div className="flex gap-6 text-white/30 text-sm">
            <span className="hover:text-[#2dd4bf] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#2dd4bf] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
