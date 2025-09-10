import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, Clock, MapPin, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e12]/40 via-[#0b0e12]/70 to-[#0b0e12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          In-person • Hyderabad
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
          AU Hiring Tournament
        </h1>
        <p className="mt-4 max-w-2xl text-gray-300 text-lg">
          A new-age hiring module by AlgoUniversity. Learn live, compete in a contest, and get paired with the right jobs — all in one electrifying event.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <InfoPill icon={Calendar} label="Date & Time" value="21 Sept • 12:00 PM" />
          <InfoPill icon={MapPin} label="Venue" value="JNTUH, Hyderabad" />
          <InfoPill icon={Clock} label="Format" value="Single-day • In-person" />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#tickets" className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-400 hover:to-emerald-600 transition">
            <Ticket className="h-5 w-5" /> Buy Tickets
          </a>
          <span className="text-gray-400">Early-bird pricing ends in 48 hours</span>
        </div>
      </div>
    </section>
  );
}

function InfoPill({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="mt-1 text-white/90 font-medium">{value}</div>
    </div>
  );
}
