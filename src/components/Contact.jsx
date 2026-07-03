import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, transmitting, received, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('transmitting');

    // --- FILL THESE IN FROM YOUR EMAILJS DASHBOARD ---
    const SERVICE_ID = "service_qmwpffa"; 
    const TEMPLATE_ID = "template_12nrb45";
    const PUBLIC_KEY = "y8SWs5smJtB-ZAt3g";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('received');
        e.target.reset(); // Resets the fields without refreshing page
        setTimeout(() => setStatus('idle'), 4000);
      }, (error) => {
        console.log("FAILED...", error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 overflow-hidden bg-black">
      
      {/* --- DYNAMIC BLACKHOLE BACKGROUND --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* The spinning vortex core */}
        <div className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] event-horizon opacity-60" />
        
        {/* Sucking Stars (Generates 40 stars) */}
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="sucking-star"
            style={{
              '--x': `${(Math.random() - 0.5) * 2000}px`,
              '--y': `${(Math.random() - 0.5) * 2000}px`,
              '--duration': `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* --- CONTACT FORM CARD --- */}
      <div className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <h2 className="text-5xl font-black text-white text-center mb-10 tracking-tighter uppercase">
          Say <span className="text-indigo-400">Hello!</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          
          {/* Name Field - maps to {{name}} */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-indigo-300 uppercase tracking-widest ml-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-indigo-500 outline-none transition-all" 
            />
          </div>

          {/* Email Field - maps to {{email}} */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-indigo-300 uppercase tracking-widest ml-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-indigo-500 outline-none transition-all" 
            />
          </div>

          {/* Message Field - maps to {{message}} */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-indigo-300 uppercase tracking-widest ml-1">Message</label>
            <textarea 
              name="message" 
              required 
              rows="4" 
              className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-indigo-500 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Optional: matches {{time}} if you want to send the date */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="flex flex-col items-center gap-4 pt-4">
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20 uppercase tracking-widest"
            >
              Send Signal
            </button>

            {/* TRANSMISSION STATUS MESSAGE */}
            <p className={`text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 h-5 ${
              status === 'error' ? 'text-red-400' : 'text-indigo-300'
            }`}>
              {status === 'idle' && "Ready to send a signal..."}
              {status === 'transmitting' && <span className="dots">Transmitting</span>}
              {status === 'received' && "✓ Signal Received at Station"}
              {status === 'error' && "Signal Lost in Void. Try again."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}