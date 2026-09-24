import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { SERVICES, BRAND } from '../data/siteData';

interface EnquirySectionProps {
  initialService?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    budget: '₹1,000 – ₹5,000',
    description: '',
    deadline: 'Within 1 Week',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const budgetOptions = [
    'Under ₹1,000',
    '₹1,000 – ₹2,500',
    '₹2,500 – ₹5,000',
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000+ / Custom Project',
  ];

  const deadlineOptions = [
    'Urgent (24–48 Hours)',
    'Within 1 Week',
    'Within 2 Weeks',
    'Flexible / Milestone Based',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp / Telegram handle is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your project';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Description should be at least 15 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
    }
  };

  const generateTelegramMessage = () => {
    if (!submittedData) return '';
    const text = `*New 8WHIE Project Request*
• *Name:* ${submittedData.name}
• *Email:* ${submittedData.email}
• *Phone/Contact:* ${submittedData.phone}
• *Service:* ${submittedData.service}
• *Budget:* ${submittedData.budget}
• *Preferred Deadline:* ${submittedData.deadline}
• *Description:* ${submittedData.description}`;
    return encodeURIComponent(text);
  };

  const copyToClipboard = () => {
    if (!submittedData) return;
    const text = `8WHIE Project Request
Name: ${submittedData.name}
Email: ${submittedData.email}
Phone/Contact: ${submittedData.phone}
Service: ${submittedData.service}
Budget: ${submittedData.budget}
Deadline: ${submittedData.deadline}
Description: ${submittedData.description}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="enquiry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Project Initiation</span>
          <span aria-hidden="true">·</span>
          <span>Fast Turnaround</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-4 text-balance">
          Start Your Project with 8WHIE
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-balance">
          Fill out your requirements below for a rapid review. You can also send the prepared brief directly to our Telegram channel or handle.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!submittedData ? (
          /* Form Card */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#0d0f16] border border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/80 space-y-6"
          >
            {/* Top row: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. aryan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Second row: Phone/Telegram & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Phone / Telegram Handle <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. +91 9876543210 or @username"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Selected Service <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.startingPrice})
                    </option>
                  ))}
                  <option value="Custom Project / Multiple Services">
                    Custom Project / Multiple Services (Let's Discuss)
                  </option>
                </select>
              </div>
            </div>

            {/* Third row: Budget & Deadline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Preferred Deadline
                </label>
                <select
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                >
                  {deadlineOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project description */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                Project Description & Scope <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you want to build or create: key features, design style, reference links, or deliverables..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors resize-y ${
                  errors.description ? 'border-red-500' : 'border-zinc-800 hover:border-zinc-700'
                }`}
              />
              {errors.description && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.description}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl transition-all shadow-lg shadow-red-950/60 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Request</span>
              </button>
            </div>

            {/* Fallback Notice */}
            <p className="text-[11px] text-zinc-400 text-center font-mono">
              Ready for client backend integration · Quick dispatch to Telegram available
            </p>
          </form>
        ) : (
          /* Submission Prepared Receipt & Direct Telegram Dispatch */
          <div className="bg-[#0d0f16] border border-zinc-800/80 rounded-2xl p-6 sm:p-10 text-left shadow-2xl shadow-black/80 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-900/60 text-red-500 shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
                  Project Request Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Your project brief has been formatted. For immediate review and rapid response, send this directly to 8WHIE on Telegram or copy to your clipboard.
                </p>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Client Name:</span>
                <span className="font-semibold text-white">{submittedData.name}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Contact:</span>
                <span className="font-semibold text-white">{submittedData.phone} ({submittedData.email})</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Requested Service:</span>
                <span className="font-semibold text-red-400">{submittedData.service}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Budget Range:</span>
                <span className="font-semibold text-white">{submittedData.budget}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Preferred Deadline:</span>
                <span className="font-semibold text-white">{submittedData.deadline}</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-400 block mb-1">Brief Description:</span>
                <p className="text-zinc-200 whitespace-pre-wrap font-sans text-xs bg-zinc-950 p-2.5 rounded border border-zinc-800">
                  {submittedData.description}
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://t.me/Arnxkt?text=${generateTelegramMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950/40"
              >
                <Send className="w-4 h-4" />
                <span>Send to Telegram (@Arnxkt)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={copyToClipboard}
                className="py-3.5 px-5 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Request Text</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setSubmittedData(null)}
                className="text-xs text-zinc-400 hover:text-zinc-200 underline cursor-pointer"
              >
                Edit request details
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
