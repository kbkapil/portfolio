import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../data';
import { Mail, CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'activation' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const response = await fetch('https://formsubmit.co/ajax/kapilbisen7231@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${fullName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setSubmitStatus('activation');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong while dispatching your message.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitStatus('error');
      setErrorMessage('Network issue: Could not reach the email service. You can send directly using your mail app.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end text-left">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-2xl"
        >
          {/* Header & Direct Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 md:mb-14">
            <div className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-90">
              REACH KAPIL BISEN
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="underline hover:text-black transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="opacity-50">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <span className="opacity-50">•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {submitStatus === 'success' ? (
            <div className="py-14 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white text-[#ff2a2a] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Message Sent to Kapil's Mail!</h3>
              <p className="text-white/95 text-base max-w-md mx-auto leading-relaxed">
                Thank you for getting in touch! Your message has been sent directly to <span className="font-bold underline">kapilbisen7231@gmail.com</span>. I will review it and reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus(null)}
                className="mt-6 px-7 py-2.5 rounded-full bg-white text-[#ff2a2a] font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : submitStatus === 'activation' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white text-amber-500 flex items-center justify-center mx-auto shadow-xl">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">One-Time Activation Email Sent</h3>
              <div className="text-white text-xs sm:text-sm max-w-lg mx-auto bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-left space-y-2">
                <p className="font-bold text-white text-sm sm:text-base">
                  FormSubmit sent a confirmation link to <span className="underline">kapilbisen7231@gmail.com</span>:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-white/90">
                  <li>Open your Gmail (<span className="font-mono text-xs text-amber-300">kapilbisen7231@gmail.com</span>).</li>
                  <li>Check your <strong>Inbox</strong> (or <strong>Spam</strong> folder) for an email from <strong>FormSubmit</strong>.</li>
                  <li>Click <strong>"Activate Form"</strong> once.</li>
                </ol>
                <p className="text-[11px] text-white/70 pt-2 border-t border-white/10">
                  After clicking activate once, every inquiry submitted from this portfolio will reach your Gmail inbox automatically without needing any further approval!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitStatus(null)}
                className="mt-4 px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-md"
              >
                Dismiss &amp; Return to Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12 w-full">
              {submitStatus === 'error' && (
                <div className="bg-black/50 border border-white/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-white">
                    <AlertCircle className="w-5 h-5 text-amber-300 shrink-0" />
                    <span>{errorMessage || 'Unable to send message via automated mail service.'}</span>
                  </div>
                  <a
                    href={`mailto:kapilbisen7231@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.firstName)}&body=${encodeURIComponent(formData.message)}`}
                    className="px-4 py-1.5 rounded-full bg-white text-[#ff2a2a] font-bold shrink-0 hover:bg-black hover:text-white transition-colors"
                  >
                    Open Mail App &rarr;
                  </a>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-6 md:gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      disabled={isSubmitting}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name *" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-base sm:text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none disabled:opacity-60"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      disabled={isSubmitting}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-base sm:text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none disabled:opacity-60"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-base sm:text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea 
                      id="message" 
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, role specifications, or inquiry *" 
                      className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-base sm:text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none disabled:opacity-60"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-8 mt-2">
                {/* Left text */}
                <div className="flex-1 flex items-start gap-3 text-xs md:text-sm font-medium text-white/90">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    defaultChecked
                    className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[300px] leading-snug">
                    I give permission to contact me regarding software engineering opportunities.
                  </label>
                </div>

                {/* Right text & button */}
                <div className="flex-1 flex flex-col gap-6 text-xs text-white/80 font-medium">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <p className="max-w-[280px] leading-relaxed text-white/70">
                      Based in Indore, India. Open to full-time remote software engineering roles and relocation.
                    </p>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending to Mail...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
