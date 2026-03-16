import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

interface ContactPageProps {
  portal: "job-seeker" | "employer";
}

const ContactPage: React.FC<ContactPageProps> = ({ portal }) => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email Us",
      value: "nokrify@gmail.com",
      sub: "We reply within 24 hours",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Call Us",
      value: "+91 76682 51814",
      sub: "Mon–Sat, 9AM – 7PM IST",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Business Hours",
      value: "Monday – Saturday",
      sub: "9:00 AM – 7:00 PM IST",
    },
  ];

  const faqs = portal === "employer"
    ? [
        {
          q: "How does Nokrify help with hiring?",
          a: "We source, screen, and shortlist candidates based on your exact requirements so you meet only the most relevant profiles.",
        },
        {
          q: "How quickly can you fill a role?",
          a: "Depending on the role and requirements, our team typically presents shortlisted candidates within a few working days.",
        },
        {
          q: "Is there a cost for employers?",
          a: "Reach out to us and our team will walk you through our engagement model tailored to your hiring needs.",
        },
      ]
    : [
        {
          q: "How long does it take to get placed?",
          a: "Our operations team works promptly. Once we understand your profile, we begin matching you with relevant opportunities right away.",
        },
        {
          q: "Is Nokrify free for job seekers?",
          a: "Yes! Job seekers can use all our services completely free of charge.",
        },
        {
          q: "What kinds of jobs does Nokrify help with?",
          a: "We assist across multiple domains — tech, sales, HR, operations, and more, for freshers as well as experienced professionals.",
        },
      ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0d3347] py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-0 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#2dd4bf]/20 border border-[#2dd4bf]/40 rounded-full px-5 py-2 mb-6"
          >
            <span className="text-[#2dd4bf] text-sm font-semibold">Contact Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-black text-white mb-4"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-teal-300">
              Connect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl max-w-xl mx-auto"
          >
            {portal === "employer"
              ? "Tell us your hiring needs and our team will reach out promptly."
              : "Our team is ready to help you with your career. Reach out and we'll respond quickly."}
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#2dd4bf]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2dd4bf] rounded-xl flex items-center justify-center text-white mb-4">
                {info.icon}
              </div>
              <h3 className="font-bold text-[#1e3a5f] mb-1">{info.label}</h3>
              <p className="text-gray-700 text-sm font-medium">{info.value}</p>
              <p className="text-gray-400 text-xs mt-1">{info.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Form + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-black text-[#1e3a5f] mb-2">
                {portal === "employer" ? "Post a Hiring Requirement" : "Start Your Job Search"}
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in the form and our operations team will reach out within 24 hours.
              </p>
              <ContactForm portal={portal} />
            </div>
          </motion.div>

          {/* FAQ & Social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* FAQ */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">
                Frequently Asked
              </h3>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-[#1e3a5f] text-sm mb-2">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d3347] rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Follow Nokrify</h3>
              <p className="text-white/60 text-sm mb-6">
                Stay updated on opportunities and hiring insights.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/satyarth-chauhan-founder-nokrify-5a71993b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-[#2dd4bf]/20 border border-white/10 hover:border-[#2dd4bf]/40 rounded-xl px-4 py-3 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#2dd4bf]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.977 1.977 0 01-1.972-1.98c0-1.093.885-1.98 1.972-1.98s1.972.887 1.972 1.98a1.977 1.977 0 01-1.972 1.98zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn — Satyarth Chauhan</span>
                  </div>
                  <svg className="w-4 h-4 text-[#2dd4bf] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/nokrify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-[#2dd4bf]/20 border border-white/10 hover:border-[#2dd4bf]/40 rounded-xl px-4 py-3 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#2dd4bf]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 4.25a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5Zm5.4-2.02a1.02 1.02 0 1 1 0 2.04a1.02 1.02 0 0 1 0-2.04Z" />
                    </svg>
                    <span className="text-sm font-medium">Instagram — @nokrify</span>
                  </div>
                  <svg className="w-4 h-4 text-[#2dd4bf] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Founded Badge */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2dd4bf] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                🏢
              </div>
              <div>
                <p className="font-bold text-[#1e3a5f] text-sm">Founded in 2025</p>
                <p className="text-gray-500 text-xs mt-0.5">Noida, Uttar Pradesh</p>
                <p className="text-[#2dd4bf] text-xs font-semibold mt-1">
                  {portal === "employer" ? "Your Hiring, Our Responsibility" : "Your Career, Our Responsibility"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
