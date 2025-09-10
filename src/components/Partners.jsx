import React, { useState } from 'react';
import { Play } from 'lucide-react';

const recruiters = [
  { name: 'Recruiter • Fintech Co.', company: 'Finverse', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Recruiter • AI Startup', company: 'NeuraStack', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Recruiter • Enterprise', company: 'CloudForge', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Recruiter • Gaming', company: 'PixelPlay', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const companies = [
  'Finverse','NeuraStack','CloudForge','PixelPlay','DataNest','ByteBay','CryptoCore','HealthOS','AeroAI','ShopSmart','Nimbus','StreamDeck','CodeHaven','AstraWorks','Dockly'
];

export default function Partners() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">Hear from Recruiters + Hiring Partners</h2>
          <p className="text-gray-400 max-w-2xl">Real messages from teams that hire. Get noticed where it matters.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recruiters.map((r, idx) => (
            <button key={idx} onClick={() => setActive(idx)} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left">
              <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_60%)] flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 grid place-items-center text-emerald-300">
                  <Play className="h-6 w-6" />
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-emerald-300">{r.company}</div>
                <div className="text-white/90 font-medium mt-1">{r.name}</div>
                <div className="text-gray-400 text-sm mt-1">Watch message</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-gray-400 text-sm">Featuring 15+ companies</div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {companies.map((c, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-3 py-2 text-center text-gray-200">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {active !== null && (
        <Modal onClose={() => setActive(null)}>
          <video src={recruiters[active].video} className="w-full h-auto" controls autoPlay />
        </Modal>
      )}
    </section>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-[92%] max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e12] p-2">
        <button onClick={onClose} className="absolute right-3 top-3 rounded-md bg-white/10 px-2 py-1 text-sm text-white/80 hover:bg-white/20">Close</button>
        {children}
      </div>
    </div>
  );
}
