import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import buildAfrica from '../assets/build_africa.jpg';
import capacity from '../assets/capacity.jpg';
import leadership from '../assets/leadership.jpg';
import excos from '../assets/atn_excos_updated.jpg';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, once: true });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 text-slate-100">
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/40">
        <div data-aos="fade-up" className="space-y-6">
          <div>
            <p className="inline-flex rounded-full border border-[#d97f38]/30 bg-[#d97f38]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#d97f38]">
              Mission & Vision
            </p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white">Our mission is to equip African youth with clarity, confidence, and systems for long-term impact.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              African Transformation Network brings thought leadership, mentorship, and transformative programming together so every participant can turn ambition into measurable change.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6">
              <h3 className="text-xl font-semibold text-white">Organizing programs that propel growth</h3>
              <p className="mt-4 text-slate-300 leading-7">
                We deliver immersive webinars, mentorship cohorts, masterclasses, and conferences designed to strengthen skills, broaden mindsets, and accelerate career trajectories.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6">
              <h3 className="text-xl font-semibold text-white">Creating compelling content for change</h3>
              <p className="mt-4 text-slate-300 leading-7">
                From video series to hands-on trainings, we curate resources that help young Africans navigate modern careers while sustaining community-centered development.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#d97f38]/10 bg-[#03101e]/80 p-6">
            <h3 className="text-2xl font-semibold text-[#d97f38]">Join us in redefining possibilities</h3>
            <p className="mt-4 text-slate-300 leading-7">
              We are building a generation that leads with intentionality, innovation, and a shared commitment to Africa’s future.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="space-y-6 rounded-[2rem] border border-white/10 bg-[#041020]/80 p-6 shadow-xl shadow-black/20">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
              <img src={buildAfrica} alt="Building Africa Together" className="h-72 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                <p className="text-2xl font-semibold text-white">Building Africa Together</p>
              </div>
            </div>
            <p className="text-slate-300 leading-7">
              Our vision is to motivate and guide young Africans toward self-development and mental transformation, creating the foundation for sustainable personal and communal progress.
            </p>
          </div>

          <div className="space-y-6">
            <div data-aos="fade-left" className="rounded-[1.75rem] border border-white/10 bg-[#041020]/80 overflow-hidden">
              <img src={capacity} alt="Capacity building" className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">Capacity Building</p>
                <p className="mt-4 text-slate-300 leading-7">
                  We equip young leaders with the skills, networks, and confidence to shape outcomes in careers, organizations, and governments.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="rounded-[1.75rem] border border-white/10 bg-[#041020]/80 overflow-hidden">
              <img src={leadership} alt="Leadership" className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-2xl font-semibold text-white">Empowering leaders across every sphere</p>
                <p className="mt-4 text-slate-300 leading-7">
                  We nurture emerging leaders to become catalysts for progress in Africa’s most dynamic communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-16 rounded-[2rem] border border-white/10 bg-[#03101e]/80 p-6 text-slate-300">
          <h3 className="text-3xl font-semibold text-white">The Executive Board</h3>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10">
            <img src={excos} alt="Executive board" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
