import React from "react";
import { motion } from "framer-motion";

interface AboutPageProps {
  portal: "job-seeker" | "employer";
}

const AboutPage: React.FC<AboutPageProps> = ({ portal }) => {
  const isEmployer = portal === "employer";

  const values = [
    {
      title: "Integrity",
      desc: "We operate with complete transparency and honesty in every interaction with job seekers, employers, and partners.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      desc: "We constantly evolve our processes to make career matching and hiring smarter, faster, and more effective.",
      icon: "💡",
    },
    {
      title: "Empathy",
      desc: "We understand the emotional journey of a career transition and provide compassionate, personalized support.",
      icon: "❤️",
    },
    {
      title: "Excellence",
      desc: "We set the highest standards in everything we do, from candidate experience to employer partnerships.",
      icon: "🏆",
    },
  ];

  const team = [
    {
      name: "Satyarth Chauhan",
      role: "Founder",
      initial: "S",
      linkedin: "https://www.linkedin.com/in/satyarth-chauhan-founder-nokrify-5a71993b1/",
    },
    {
      name: "Kavyansh Sharma",
      role: "CEO & Co-Founder",
      initial: "K",
      linkedin: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1a3356] to-[#0d3347] py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#2dd4bf]/20 border border-[#2dd4bf]/40 rounded-full px-5 py-2 mb-6"
          >
            <span className="text-[#2dd4bf] text-sm font-semibold">About Nokrify</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            {isEmployer ? (
              <>
                Connecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-teal-300">
                  Companies
                </span>{" "}
                with Top Talent
              </>
            ) : (
              <>
                Connecting Talent with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] to-teal-300">
                  Opportunity
                </span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto italic"
          >
            {isEmployer
              ? '"Your hiring, our responsibility" — the promise we make to every organisation we partner with.'
              : '"Your career, our responsibility" — the promise we make to every professional we work with.'}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#2dd4bf] font-bold text-sm tracking-widest uppercase">Our Mission</span>
              <h2 className="text-4xl font-black text-[#1e3a5f] mt-3 mb-6 leading-tight">
                {isEmployer ? (
                  <>We Don't Just Fill Roles.<br />We Build Dream Teams.</>
                ) : (
                  <>We Don't Just Find Jobs.<br />We Build Careers.</>
                )}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {isEmployer
                  ? "Nokrify was founded in 2025 in Noida on the belief that hiring the right talent shouldn't be an exhausting, uncertain process. We bring together smart processes and a dedicated human touch to help companies find professionals who truly fit — in skills, culture, and ambition."
                  : "Nokrify was founded in 2025 in Noida on the belief that finding the right job shouldn't be a painful, uncertain process. We leverage human expertise to create meaningful connections that last."}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {isEmployer
                  ? "Our operations team works closely with hiring managers and HR teams to understand exactly what a role demands — then we source, screen, and shortlist candidates so you can focus on building, not recruiting."
                  : "Every day, our dedicated operations team works tirelessly to match candidates with employers who value their skills, experience, and potential. We take personal responsibility for every career journey we're part of."}
              </p>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#1e3a5f]/5 to-[#2dd4bf]/10 rounded-xl border-l-4 border-[#2dd4bf]">
                <span className="text-3xl">💬</span>
                <p className="text-[#1e3a5f] font-semibold italic">
                  {isEmployer
                    ? '"Your hiring, our responsibility" — Our founding motto that drives everything we do.'
                    : '"Your career, our responsibility" — Our founding motto that drives everything we do.'}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {(isEmployer
                  ? [
                      { year: "2025", milestone: "Nokrify Founded in Noida" },
                      { year: "2025", milestone: "Launched Employer Portal" },
                      { year: "2025", milestone: "First hiring partnerships signed" },
                      { year: "2025", milestone: "Growing across industries" },
                    ]
                  : [
                      { year: "2025", milestone: "Nokrify Founded in Noida" },
                      { year: "2025", milestone: "Launched Job Seeker Portal" },
                      { year: "2025", milestone: "First candidates placed" },
                      { year: "2025", milestone: "Growing across India" },
                    ]
                ).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-[#1e3a5f] to-[#0d3347] rounded-2xl p-6 text-white"
                  >
                    <div className="text-[#2dd4bf] font-black text-2xl mb-2">{item.year}</div>
                    <div className="text-white/80 text-sm leading-relaxed">{item.milestone}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2dd4bf] font-bold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-4xl font-black text-[#1e3a5f] mt-3 mb-6">
              {isEmployer ? "Born to Simplify Hiring" : "Born Out of Purpose, Built with Passion"}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-gray-600 text-lg leading-relaxed text-left bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            {isEmployer ? (
              <>
                <p>
                  Nokrify was founded in <strong className="text-[#1e3a5f]">2025 in Noida</strong> with a single, clear purpose — to make hiring easier, faster, and more reliable for businesses of all sizes. Our founders saw how companies struggled to find the right people, wasting time on irrelevant applications and lengthy hiring cycles.
                </p>
                <p>
                  We stepped in as a dedicated hiring partner. At Nokrify, we don't just share CVs — we understand your business, your team culture, and what you truly need in a candidate. Our team takes care of sourcing, screening, and shortlisting so that you meet only the most relevant profiles.
                </p>
                <p>
                  Whether you're a startup scaling fast or an established company building a specialised team, Nokrify is here to make every hire count. <strong className="text-[#1e3a5f]">Your hiring, our responsibility.</strong>
                </p>
              </>
            ) : (
              <>
                <p>
                  Nokrify was founded in <strong className="text-[#1e3a5f]">2025 in Noida</strong> with one goal — to make the job search experience in India genuinely human, personalised, and effective. Our founders saw how job seekers were lost in a sea of applications with no response, no guidance, and no clarity.
                </p>
                <p>
                  We set out to build something different: a platform where every job seeker is treated as an individual with unique aspirations, and every employer is seen as a partner building something meaningful.
                </p>
                <p>
                  Today, Nokrify's dedicated operations team works hands-on to match candidates with opportunities that align with their skills and goals. We take personal responsibility for every career journey we're part of — <strong className="text-[#1e3a5f]">making careers happen, responsibly.</strong>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#2dd4bf] font-bold text-sm tracking-widest uppercase">Our Values</span>
            <h2 className="text-4xl font-black text-[#1e3a5f] mt-3">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#2dd4bf]/30 rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#2dd4bf] font-bold text-sm tracking-widest uppercase">Leadership</span>
            <h2 className="text-4xl font-black text-[#1e3a5f] mt-3">Meet the Founders</h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:border-[#2dd4bf]/40 hover:shadow-xl transition-all duration-300 w-full sm:w-64"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a5f] to-[#2dd4bf] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-3xl font-black shadow-lg">
                  {member.initial}
                </div>
                <h3 className="font-bold text-[#1e3a5f] text-lg">{member.name}</h3>
                <p className="text-[#2dd4bf] font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs mt-1">Noida, India</p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#1e3a5f]/8 hover:bg-[#2dd4bf]/15 border border-[#1e3a5f]/15 hover:border-[#2dd4bf]/40 rounded-lg text-[#1e3a5f] text-xs font-semibold transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.977 1.977 0 01-1.972-1.98c0-1.093.885-1.98 1.972-1.98s1.972.887 1.972 1.98a1.977 1.977 0 01-1.972 1.98zm1.957 13.019H3.379V9h3.915v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#0d3347] rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-2">Follow Nokrify</h3>
            <p className="text-white/60 text-sm mb-6">
              Stay updated on opportunities and hiring insights.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <span className="text-sm font-medium">LinkedIn</span>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
