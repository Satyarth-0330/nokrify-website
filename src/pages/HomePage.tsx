import React, { useRef } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

interface HomePageProps {
  portal: "job-seeker" | "employer";
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HomePage: React.FC<HomePageProps> = ({ portal }) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const isEmployer = portal === "employer";

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: isEmployer
              ? "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')"
              : "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/92 via-[#1e3a5f]/85 to-[#0d3347]/90" />

        {/* Decorative patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 border border-[#2dd4bf]/20 rounded-full" />
          <div className="absolute top-32 right-32 w-40 h-40 border border-[#2dd4bf]/10 rounded-full" />
          <div className="absolute bottom-20 left-10 w-80 h-80 border border-white/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#2dd4bf]/20 border border-[#2dd4bf]/40 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-[#2dd4bf] rounded-full animate-pulse" />
            <span className="text-[#2dd4bf] text-sm font-semibold tracking-wide">
              {isEmployer ? "Employer Portal • Hire Top Talent" : "Job Seeker Portal • Find Your Dream Job"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            {isEmployer ? (
              <>
                Hire the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-teal-300">
                  Right Talent
                </span>
                <br />
                for Your Team
              </>
            ) : (
              <>
                Your Dream{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-teal-300">
                  Career
                </span>
                <br />
                Starts Here
              </>
            )}
          </motion.h1>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/70 text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-light italic"
          >
            {isEmployer ? '"Your hiring, our responsibility"' : '"Your career, our responsibility"'}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
          >
            {isEmployer
              ? "Connect with skilled professionals and build the team that drives your business forward."
              : "Join thousands of professionals who found their perfect career match through Nokrify."}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(45,212,191,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="px-10 py-4 bg-gradient-to-r from-[#2dd4bf] to-teal-400 text-[#1e3a5f] font-black text-lg rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-300"
            >
              Get Started
              <span className="ml-2">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="px-10 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 cursor-pointer"
              onClick={scrollToContact}
            >
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            viewport={{ once: true }}
            whileInView={fadeUp.animate}
            initial={fadeUp.initial}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-black text-[#1e3a5f] mb-4">
              {isEmployer ? "Why Employers Choose Nokrify" : "Why Job Seekers Love Nokrify"}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We make {isEmployer ? "hiring" : "job searching"} seamless, fast, and effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(isEmployer
              ? [
                  {
                    icon: "🎯",
                    title: "Targeted Matching",
                    desc: "AI-powered candidate matching based on skills, experience, and culture fit.",
                  },
                  {
                    icon: "⚡",
                    title: "Fast Hiring",
                    desc: "Reduce time-to-hire by up to 60% with our streamlined recruitment process.",
                  },
                  {
                    icon: "💼",
                    title: "Verified Profiles",
                    desc: "All candidates are pre-screened with verified credentials and backgrounds.",
                  },
                ]
              : [
                  {
                    icon: "🚀",
                    title: "Career Growth",
                    desc: "Access thousands of opportunities that match your skills and aspirations.",
                  },
                  {
                    icon: "🤝",
                    title: "Expert Guidance",
                    desc: "Get personalized career counseling from our dedicated operations team.",
                  },
                  {
                    icon: "✅",
                    title: "Verified Jobs",
                    desc: "All job listings are verified and from reputed companies across India.",
                  },
                ]
            ).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#2dd4bf]/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#0d3347]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {(isEmployer
              ? [
                  { value: "2025", label: "Founded in Noida", icon: "🏢" },
                  { value: "Fast", label: "Hiring Turnaround", icon: "⚡" },
                  { value: "100%", label: "Dedicated Support", icon: "🎯" },
                ]
              : [
                  { value: "2025", label: "Founded in Noida", icon: "🏢" },
                  { value: "Free", label: "For All Job Seekers", icon: "✅" },
                  { value: "100%", label: "Personalised Guidance", icon: "🤝" },
                ]
            ).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-[#2dd4bf] mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-20 bg-gray-50" id="contact-form">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-black text-[#1e3a5f] mb-3">
              {isEmployer ? "Start Hiring Today" : "Start Your Career Journey"}
            </h2>
            <p className="text-gray-500 text-lg">
              Fill in your details and our team will reach out to you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <ContactForm portal={portal} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
