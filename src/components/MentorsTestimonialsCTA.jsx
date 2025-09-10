import React, { useEffect, useState } from 'react';
import { Users, Play, Ticket, Clock } from 'lucide-react';

const mentors = [
  { name: 'MKV (Legendary Instructor)', title: 'AlgoUniversity', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=MKV' },
  { name: 'Aarav Kapoor', title: 'Senior Engineer • Finverse', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Aarav%20Kapoor' },
  { name: 'Sahana Iyer', title: 'Data Scientist • NeuraStack', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sahana%20Iyer' },
  { name: 'Rahul Shah', title: 'SWE • CloudForge', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Rahul%20Shah' },
];

const testimonialVideos = [
  { name: 'Ananya', role: 'Placed @ DataNest', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Rohit', role: 'Placed @ Nimbus', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'Maya', role: 'Placed @ ShopSmart', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const textTestimonials = [
  { name: 'Vikram', quote: 'The live class + contest combo is genius. Instant application — instant results.' },
  { name: 'Shreya', quote: 'Got interview calls within days. The pairing felt tailored to my strengths.' },
  { name: 'Irfan', quote: 'MKV’s session was electric. The contest pushed me just right.' },
];

export default function MentorsTestimonialsCTA() {
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 48 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { h, m, s } = toHMS(timeLeft);

  return (
    <section className="py-20" id="tickets">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-emerald-400" />
          <h2 className="text-3xl sm:text-4xl font-semibold">Mentors</h2>
        </div>
        <p className="text-gray-400 mt-2">Learn from leaders who ship in the real world.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src={m.avatar} alt={m.name} className="h-16 w-16 rounded-full" />
              <div className="mt-3 font-medium text-white/90">{m.name}</div>
              <div className="text-sm text-gray-400">{m.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Video Testimonials</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {testimonialVideos.map((v, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  <div className="aspect-video bg-black grid place-items-center">
                    <video src={v.src} controls className="w-full h-full" />
                  </div>
                  <div className="p-3">
                    <div className="text-white/90 font-medium">{v.name}</div>
                    <div className="text-sm text-gray-400">{v.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Text Testimonials</h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {textTestimonials.map((t, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-gray-200">“{t.quote}”</p>
                  <div className="mt-2 text-sm text-emerald-300">— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-emerald-400/20 bg-[linear-gradient(160deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05))] p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-emerald-300 text-sm">AU Hiring Tournament • Hyderabad • In-person</div>
              <h3 className="mt-1 text-2xl md:text-3xl font-semibold">Grab your Early-bird Ticket</h3>
              <p className="mt-2 text-gray-300 max-w-2xl">Limited seats at JNTUH on 21 Sept, 12:00 PM. Secure your spot and fast-track your hiring journey with AlgoUniversity.</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-200">
                <PriceBadge label="Early-bird" value="₹299" highlight />
                <PriceBadge label="Regular" value="₹499" />
                <span className="inline-flex items-center gap-2 text-sm text-emerald-200">
                  <Clock className="h-4 w-4" /> Ends in {h}h {m}m {s}s
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <a href="#" className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-400 hover:to-emerald-600 transition">
                <Ticket className="h-5 w-5" /> Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceBadge({ label, value, highlight }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 ${highlight ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200' : 'border-white/10 bg-white/5 text-gray-200'}`}>
      <span className="text-xs uppercase tracking-wide">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function toHMS(totalSeconds) {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return { h, m, s };
}
