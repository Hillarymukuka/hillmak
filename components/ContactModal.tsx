'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'tech' | 'creative';
}

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Software Development',
  'Creative Services',
  'AI & Automation',
  'Partnership / Collaboration',
  'Other',
];

export default function ContactModal({ isOpen, onClose, theme = 'tech' }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiryType: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const reset = () => {
    setForm({ name: '', email: '', phone: '', enquiryType: '', message: '' });
    setStatus('idle');
    setErrorMsg('');
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.enquiryType,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  // Theme tokens
  const isTech = theme === 'tech';
  const accent      = isTech ? '#F47B20' : '#ED145B';
  const accentClass = isTech ? 'text-tech-accent'     : 'text-creative-primary';
  const bgModal     = isTech ? 'bg-[#0A1628]'         : 'bg-creative-bg';
  const bgInput     = isTech ? 'bg-white/5'           : 'bg-white/8';
  const borderFocus = isTech ? 'focus:border-tech-accent' : 'focus:border-creative-primary';
  const btnBg       = isTech
    ? 'bg-tech-accent hover:bg-tech-accent-dark'
    : 'bg-creative-primary hover:bg-creative-primary-dark';
  const pillBorder  = isTech ? 'border-tech-accent/30 hover:border-tech-accent' : 'border-creative-primary/30 hover:border-creative-primary';
  const pillActive  = isTech ? 'bg-tech-accent border-tech-accent text-white'   : 'bg-creative-primary border-creative-primary text-white';

  const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
        {label}{required && <span className="ml-1" style={{ color: accent }}>*</span>}
      </label>
      {children}
    </div>
  );

  const inputClass = `w-full ${bgInput} border border-white/10 ${borderFocus} focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 text-sm transition-colors`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal panel */}
          <motion.div
            className={`relative w-full sm:max-w-lg ${bgModal} rounded-t-3xl sm:rounded-2xl shadow-2xl border border-white/10 overflow-hidden`}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            {/* Accent bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }} />

            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Get in Touch</h2>
                <p className="text-sm text-white/50 mt-1">We'll get back to you within 24 hours.</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/8 hover:bg-white/15 text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 max-h-[75vh] overflow-y-auto">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${accent}22` }}
                  >
                    <svg className="w-8 h-8" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Thanks for reaching out. Our team will be in touch with you shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className={`${btnBg} text-white font-semibold px-8 py-3 rounded-xl text-sm transition-colors`}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <input
                        className={inputClass}
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </Field>
                  </div>

                  {/* Phone */}
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="+260 ..."
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </Field>

                  {/* Enquiry type */}
                  <Field label="Enquiry Type">
                    <div className="flex flex-wrap gap-2">
                      {ENQUIRY_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, enquiryType: p.enquiryType === t ? '' : t }))}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            form.enquiryType === t ? pillActive : `border-white/20 text-white/60 hover:text-white ${pillBorder}`
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="Message" required>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      required
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full ${btnBg} text-white font-semibold py-4 rounded-xl text-sm tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
