import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBalanceScale,
  FaFacebookF,
  FaGavel,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaUserTie,
  FaUsers,
  FaYoutube,
} from 'react-icons/fa';
import presidentPortrait from '../assets/president.jpeg';
import afcftaArticle from '../assets/afcfta_article.jpeg';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/solomon-faith/',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/solomon.faith.35?mibextid=ZbWKwL',
    Icon: FaFacebookF,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/solomon.faith.35?stkn=MWtiMHFvaWlwN2Zhag==',
    Icon: FaInstagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@solomonfaith1?_r=1&_d=f2a00ceb7hi80j&sec_uid=MS4wLjABAAAAWgJ4_KhL2SOLrT4FKNCShU-bWauGWQwQSXw2zt9rQeyD-i5_Tx9o4T0N44lh3ew4&share_author_id=7421137840799761413&sharer_language=en&source=h5_m&u_code=egefiki1eijj6b&timestamp=1791044106&user_id=7421137840799761413&sec_user_id=MS4wLjABAAAAWgJ4_KhL2SOLrT4FKNCShU-bWauGWQwQSXw2zt9rQeyD-i5_Tx9o4T0N44lh3ew4&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7689005042721359637&share_link_id=720ae25f-d565-46c7-8da0-f6f3ed68485e&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1',
    Icon: FaTiktok,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@solomonfaith_zerah?si=FTvWMBFXHUWu9fIb',
    Icon: FaYoutube,
  },
];

const experience = [
  {
    title: 'Law & justice',
    description: 'A lawyer and prosecuting counsel serving in Nigerian criminal courts.',
    Icon: FaBalanceScale,
  },
  {
    title: 'Public service',
    description: 'A public servant and police officer with frontline insight into governance and community safety.',
    Icon: FaUserTie,
  },
  {
    title: 'Leadership development',
    description: 'Founder of ATN and convener of the Young Africans Leadership Summit.',
    Icon: FaUsers,
  },
];

const President = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="mx-auto max-w-7xl px-6 py-12 sm:py-16"
  >
    <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="order-2 lg:order-1">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
          <span className="h-px w-8 bg-brand-gold" />
          Meet the President
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
          Solomon
          <span className="mt-1 block text-brand-gold">Faith.</span>
        </h1>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 sm:text-base">
          President & Founder, African Transformation Network
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Lawyer. Public servant. Leadership builder. Solomon Faith is committed to raising ethical,
          purpose-driven leaders who will help shape a stronger Africa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#his-story"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"
          >
            Discover his story <FaArrowRight aria-hidden="true" className="text-xs" />
          </a>
          <a
            href="#connect"
            className="inline-flex items-center rounded-full border border-brand-border px-6 py-3 text-sm font-semibold text-white hover:border-brand-gold/60 hover:text-brand-gold"
          >
            Connect with Solomon
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-brand-border pt-6 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <FaGavel aria-hidden="true" className="text-brand-gold" /> Justice & service
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-brand-gold sm:block" />
          <span className="inline-flex items-center gap-2">
            <FaUsers aria-hidden="true" className="text-brand-gold" /> Africa’s next leaders
          </span>
        </div>
      </div>

      <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2">
        <div
          aria-hidden="true"
          className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-brand-gold/30 sm:-right-8 sm:-top-8 sm:h-44 sm:w-44"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-brand-gold/10 blur-2xl sm:-bottom-8 sm:-left-8 sm:h-40 sm:w-40"
        />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-card shadow-2xl shadow-black/40">
          <img
            src={presidentPortrait}
            alt="Solomon Faith, President and Founder of the African Transformation Network"
            className="aspect-[4/5] w-full object-cover object-top brightness-75 sm:brightness-90"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold drop-shadow-md">Lead with purpose</p>
            <p className="mt-2 text-xl font-semibold text-white drop-shadow-md sm:text-2xl">Serve with integrity.</p>
          </div>
        </div>
        <div className="relative z-10 mx-3 -mt-2 rounded-2xl border border-brand-gold/30 bg-brand-dark px-4 py-3 shadow-xl sm:absolute sm:-bottom-5 sm:right-8 sm:mx-0 sm:px-5">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Convener</p>
          <p className="mt-1 text-sm font-semibold text-white">Young Africans Leadership Summit</p>
        </div>
      </div>
    </section>

    <motion.section
      id="his-story"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="mt-28 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">The person behind the purpose</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          A life shaped by law, service & leadership.
        </h2>
        <p className="mt-5 leading-7 text-slate-400">
          At the heart of Solomon’s work is a conviction: Africa’s transformation begins with principled
          leaders who are willing to serve.
        </p>
      </div>
      <div className="space-y-5 text-base leading-8 text-slate-300">
        <p>
          Solomon Faith is the Founder of the African Transformation Network (ATN), a platform dedicated to
          raising ethical, purpose-driven leaders across Africa. He is also the convener of the Young
          Africans Leadership Summit (YALS), connecting industry leaders with young Africans at the start
          of their careers and creating opportunities for them to interact.
        </p>
        <p>
          A lawyer and prosecuting counsel, his current career focuses on Nigerian criminal courts, pursuing
          justice and upholding the rule of law. His experience as a public servant and police officer
          brings a frontline perspective on governance, accountability, and community safety.
        </p>
        <p>
          Blending law, service, and leadership coaching, Solomon inspires audiences to lead with integrity,
          act with courage, and build institutions that work.
        </p>
      </div>
    </motion.section>

    <section className="mt-16 grid gap-4 md:grid-cols-3">
      {experience.map(({ title, description, Icon }) => (
        <article key={title} className="rounded-3xl border border-brand-border bg-brand-card/60 p-6 sm:p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-goldMuted text-lg text-brand-gold">
            <Icon aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
        </article>
      ))}
    </section>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="mt-24"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">Ideas & conversations</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Explore his work</h2>
        <p className="mt-3 leading-7 text-slate-400">
          Perspectives on the opportunities, ideas, and leadership shaping Africa’s future.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-card/60">
          <a
            href="https://www.linkedin.com/pulse/afcfta-ai-handshake-opportunities-african-transformation-network-hu8of/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read AfCFTA and AI: A Handshake of Opportunities on LinkedIn"
            className="block"
          >
            <div className="overflow-hidden">
              <img
                src={afcftaArticle}
                alt="AfCFTA and AI: A Handshake of Opportunities, by Solomon Faith"
                className="aspect-[16/8] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Featured article</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                AfCFTA and AI: A Handshake of Opportunities
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold group-hover:text-brand-goldLight">
                Read on LinkedIn <FaArrowRight aria-hidden="true" className="text-xs" />
              </span>
            </div>
          </a>
        </article>

        <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-border bg-[radial-gradient(ellipse_at_top_right,_rgba(217,127,56,0.16),_transparent_48%),linear-gradient(145deg,_#111827,_#0b1020)] p-7 sm:p-9">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-goldMuted text-2xl text-brand-gold">
              <FaYoutube aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">Podcast</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Leaders In Training</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">LIT</p>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Conversations for emerging leaders ready to grow, serve, and make a meaningful difference.
            </p>
          </div>
          <a
            href="https://youtube.com/@leadersintraininglit?si="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-brand-gold/40 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-goldMuted hover:text-brand-gold"
          >
            Watch on YouTube <FaArrowRight aria-hidden="true" className="text-xs text-brand-gold" />
          </a>
        </article>
      </div>
    </motion.section>

    <section
      id="connect"
      className="mt-24 rounded-[2rem] border border-brand-gold/25 bg-brand-goldMuted px-6 py-10 text-center sm:px-10 sm:py-12"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">Stay connected</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Follow Solomon’s work</h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
        Follow along for perspectives on leadership, public service, and building a better future for Africa.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Solomon Faith on ${name} (opens in a new tab)`}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-brand-dark/70 px-4 py-3 text-sm font-medium text-slate-200 hover:border-brand-gold/50 hover:text-brand-gold"
          >
            <Icon aria-hidden="true" className="text-base" />
            {name}
          </a>
        ))}
      </div>
    </section>
  </motion.div>
);

export default President;
