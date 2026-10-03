import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import atn_logo from '../assets/ATN_logo.jpeg';
import Modal from './Modal';
import { subscribeToNewsletter } from '../services/firebase';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterNote, setNewsletterNote] = useState('');
  const [newsletterSaving, setNewsletterSaving] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || newsletterSaving) return;

    setNewsletterSaving(true);
    setNewsletterNote('');
    try {
      const result = await subscribeToNewsletter(newsletterEmail);
      setNewsletterNote(
        result.alreadySubscribed
          ? 'This email is already subscribed.'
          : 'Thank you — you are on the ATN continental briefing list.'
      );
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterNote(error.message || 'Could not subscribe right now. Please try again.');
    } finally {
      setNewsletterSaving(false);
    }
  };

  return (
    <footer className="border-t border-brand-border bg-brand-dark text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={atn_logo}
                className="h-14 w-14 rounded-full border border-white/10 object-cover"
                alt="ATN Logo"
              />
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-brand-gold">ATN</p>
                <p className="text-sm text-slate-400">African Transformation Network</p>
                <p className="text-xs text-slate-500">Affiliated with TYLIAFRICA Global Consult</p>
              </div>
            </Link>
            <p className="max-w-sm text-slate-400 leading-7">
              Forming Africa-transforming leaders for governance, technology, enterprise, and community
              impact — with servant-steward leadership at the center.
            </p>
            <p className="max-w-sm text-xs leading-6 text-slate-500">
              ATN is strictly non-partisan in political and governance development. Programs focus on
              ethics, capacity, and public responsibility — not party alignment.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Explore</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li><Link to="/" className="transition hover:text-white">Home</Link></li>
              <li><Link to="/president" className="transition hover:text-white">The President & Works</Link></li>
              <li><Link to="/yals" className="transition hover:text-white">Young African Leadership Summit</Link></li>
              <li><Link to="/events" className="transition hover:text-white">Events Hub</Link></li>
              <li><Link to="/store" className="transition hover:text-white">Digital Store</Link></li>
              <li><Link to="/blog" className="transition hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="transition hover:text-white">About ATN</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Connect</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                <a href="mailto:africantransformationnetwork1@gmail.com" className="transition hover:text-white">
                  africantransformationnetwork1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/african-transformation-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <button type="button" onClick={() => setIsModalOpen(true)} className="transition hover:text-white">
                  Support & Donate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">Newsletter</h3>
            <p className="mt-4 text-sm text-slate-400 leading-6">
              Continental briefings on YALS, summits, and leadership resources.
            </p>
            <form onSubmit={handleNewsletter} className="mt-4 space-y-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-sm text-white outline-none focus:border-brand-gold/40"
              />
              <button
                type="submit"
                disabled={newsletterSaving}
                className="w-full rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"
              >
                {newsletterSaving ? 'Subscribing…' : 'Subscribe'}
              </button>
              {newsletterNote && (
                <p role="status" className="text-xs text-brand-gold">
                  {newsletterNote}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-border pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} African Transformation Network. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Growth is intentional. People matter before positions.</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-white">Support African Transformation Network</h3>
            <p className="text-slate-300 leading-7">
              6453642874
              <br />
              African Transformation Network owned by FAITH SOLOMON
              <br />
              Moniepoint MFB
            </p>
          </div>
          <div className="rounded-3xl border border-brand-border bg-brand-card/80 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Alternative support</p>
            <a
              href="https://selar.co/showlove/african-transformation-network"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-goldLight"
            >
              Support us on Selar
            </a>
          </div>
          <p className="text-slate-300 leading-7">
            Your support sustains YALS formation, Volunteer Afrik projects, and continental learning
            experiences.
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
