import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2240] via-[#1e3a5f] to-[#0d3347] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/2 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4"
        >
          <img
            src="https://drive.google.com/uc?export=view&id=1oIs0flpsJfceLk7JXXqghRVaPZX0K2jV"
            alt="Nokrify Logo"
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div style={{ display: "none" }} className="w-28 h-28 md:w-36 md:h-36 items-center justify-center">
            <Logo size="lg" showText={false} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-center mb-3"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.25em] mb-2">
            NOKRIFY
          </h1>
          <p className="text-[#2dd4bf] text-lg md:text-xl font-medium tracking-widest italic">
            "Your career, our responsibility"
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent mb-10"
        />

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/80 text-xl md:text-2xl font-light mb-10 text-center"
        >
          Who are you today?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* Job Seeker Card */}
          <motion.button
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/job-seeker")}
            className="group relative bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#2dd4bf]/50 rounded-2xl p-8 text-center transition-all duration-300 overflow-hidden backdrop-blur-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2dd4bf]/0 to-[#2dd4bf]/10 group-hover:from-[#2dd4bf]/5 group-hover:to-[#2dd4bf]/20 transition-all duration-300" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2dd4bf] to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-teal-500/30 group-hover:shadow-teal-400/50 transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">I am a Job Seeker</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Find your dream job and kickstart your career journey with thousands of opportunities
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-[#2dd4bf] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Explore Jobs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </motion.button>

          {/* Employer Card */}
          <motion.button
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/employer")}
            className="group relative bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#2dd4bf]/50 rounded-2xl p-8 text-center transition-all duration-300 overflow-hidden backdrop-blur-sm cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/0 to-[#2dd4bf]/10 group-hover:from-[#1e3a5f]/5 group-hover:to-[#2dd4bf]/20 transition-all duration-300" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] border-2 border-[#2dd4bf]/40 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-navy-500/30 group-hover:border-[#2dd4bf] transition-all duration-300">
                <svg className="w-10 h-10 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">I am an Employer</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Find the perfect talent for your team and build the workforce of your dreams
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-[#2dd4bf] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Hire Talent
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </motion.button>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
