import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  portal: "job-seeker" | "employer";
  formRef?: React.RefObject<HTMLDivElement | null>;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  jobRoles: string;
  experience: string;
  employmentType?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  jobRoles?: string;
  experience?: string;
  employmentType?: string;
}

// ─── Gmail mailto builder ────────────────────────────────────────────────────
const buildMailtoLink = (portal: "job-seeker" | "employer", data: FormData): string => {
  const isEmployer = portal === "employer";
  const toEmail = "nokrify@gmail.com";

  const experienceLabel: Record<string, string> = {
    fresher: "Fresher",
    "1-3": "1–3 Years",
    "3-5": "3–5 Years",
    "5+": "5+ Years",
  };

  const employmentLabel: Record<string, string> = {
    remote: "Remote",
    "in-person": "In Person",
    hybrid: "Hybrid",
    contract: "Contract Based",
  };

  const subject = isEmployer
    ? `[Employer Enquiry] Hiring Request from ${data.name}`
    : `[Job Seeker Enquiry] Career Inquiry from ${data.name}`;

  const body = isEmployer
    ? `Hello Nokrify Team,

I am reaching out with a hiring requirement. Please find my details below:

──────────────────────────────
  EMPLOYER DETAILS
──────────────────────────────
  Name              : ${data.name}
  Gmail             : ${data.email}
  Mobile            : +91 ${data.mobile}
  Job Roles to Hire : ${data.jobRoles}
  Experience Needed : ${experienceLabel[data.experience] ?? data.experience}
  Employment Type   : ${employmentLabel[data.employmentType ?? ""] ?? data.employmentType}
──────────────────────────────

Kindly connect with me at your earliest convenience to discuss the requirements further.

Best regards,
${data.name}`
    : `Hello Nokrify Team,

I am interested in exploring career opportunities through Nokrify. Please find my details below:

──────────────────────────────
  JOB SEEKER DETAILS
──────────────────────────────
  Name               : ${data.name}
  Gmail              : ${data.email}
  Mobile             : +91 ${data.mobile}
  Job Roles Looking  : ${data.jobRoles}
  Experience Level   : ${experienceLabel[data.experience] ?? data.experience}
──────────────────────────────

Kindly connect with me at your earliest convenience.

Best regards,
${data.name}`;

  return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
// ─────────────────────────────────────────────────────────────────────────────

const ContactForm: React.FC<ContactFormProps> = ({ portal, formRef }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    jobRoles: "",
    experience: "",
    employmentType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isEmployer = portal === "employer";

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Only @gmail.com emails are accepted.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number (starts with 6–9).";
    }
    if (!formData.jobRoles.trim())
      newErrors.jobRoles = isEmployer
        ? "Please specify job roles to hire."
        : "Please specify job roles you're looking for.";
    if (!formData.experience) newErrors.experience = "Please select experience.";
    if (isEmployer && !formData.employmentType)
      newErrors.employmentType = "Please select employment type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Log to console for backend integration
    console.log("Nokrify Contact Form Submission:", { portal, ...formData });

    // Open Gmail compose with pre-filled email
    const mailtoLink = buildMailtoLink(portal, formData);
    window.open(mailtoLink, "_blank");

    // Show success state
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-[#2dd4bf]"
    }`;

  return (
    <div ref={formRef} className="w-full">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-center py-16 px-8"
          >
            {/* Big animated tick */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-28 h-28 bg-gradient-to-br from-[#2dd4bf] to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-200"
            >
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-black text-[#1e3a5f] mb-3"
            >
              Request Sent! 🎉
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-base max-w-sm mx-auto mb-3"
            >
              Your Gmail was opened with a pre-filled message to{" "}
              <span className="font-bold text-[#1e3a5f]">nokrify@gmail.com</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-sm max-w-xs mx-auto mb-8"
            >
              Our{" "}
              <span className="font-semibold text-[#2dd4bf]">Operations team</span>{" "}
              will shortly connect with you once we receive your message.
            </motion.p>

            {/* Gmail info badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#1e3a5f]/8 border border-[#1e3a5f]/15 rounded-full px-5 py-2.5"
            >
              <svg className="w-4 h-4 text-[#2dd4bf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[#1e3a5f] text-sm font-semibold">nokrify@gmail.com</span>
            </motion.div>

            {/* Submit another */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", mobile: "", jobRoles: "", experience: "", employmentType: "" });
                }}
                className="text-sm text-gray-400 hover:text-[#2dd4bf] underline underline-offset-2 transition-colors"
              >
                Submit another request
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Gmail Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@gmail.com"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="flex items-center px-3 py-3 bg-gray-100 border-2 border-r-0 border-gray-200 rounded-l-xl text-gray-600 font-medium text-sm select-none">
                  +91
                </span>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`flex-1 px-4 py-3 rounded-r-xl border-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    errors.mobile
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-[#2dd4bf]"
                  }`}
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.mobile}
                </p>
              )}
            </div>

            {/* Job Roles */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {isEmployer ? "Job Roles to Hire" : "Job Roles Looking For"}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobRoles"
                value={formData.jobRoles}
                onChange={handleChange}
                placeholder={
                  isEmployer
                    ? "e.g., React Developer, Product Manager"
                    : "e.g., Software Engineer, Designer"
                }
                className={inputClass("jobRoles")}
              />
              {errors.jobRoles && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.jobRoles}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {isEmployer ? "Experience Required" : "Experience"}{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`${inputClass("experience")} cursor-pointer`}
              >
                <option value="">Select experience level</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1–3 Years</option>
                <option value="3-5">3–5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠</span> {errors.experience}
                </p>
              )}
            </div>

            {/* Employment Type — Employer only */}
            {isEmployer && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Employment Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className={`${inputClass("employmentType")} cursor-pointer`}
                >
                  <option value="">Select employment type</option>
                  <option value="remote">Remote</option>
                  <option value="in-person">In Person</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="contract">Contract Based</option>
                </select>
                {errors.employmentType && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <span>⚠</span> {errors.employmentType}
                  </p>
                )}
              </div>
            )}

            {/* Gmail hint */}
            <div className="flex items-start gap-2.5 bg-teal-50 border border-teal-200 rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-teal-700 text-xs leading-relaxed">
                Clicking <strong>"Submit & Connect"</strong> will open your Gmail with a pre-filled message to{" "}
                <strong>nokrify@gmail.com</strong>. Just hit <strong>Send</strong> in Gmail to reach us!
              </p>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(45,212,191,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#1e3a5f] to-[#2dd4bf] text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-2 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Submit &amp; Connect via Gmail
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
