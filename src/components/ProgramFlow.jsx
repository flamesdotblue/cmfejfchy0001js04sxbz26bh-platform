import React from 'react';
import { Play, Target, Trophy } from 'lucide-react';

export default function ProgramFlow() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0b0e12] via-[#0d1117] to-[#0b0e12]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">New-age Hiring Module: 3 Steps</h2>
          <p className="text-gray-400 max-w-2xl">
            Experience the fastest path to offers. Learn a secret topic live with legendary teacher MKV, ace a contest on it, and get paired with roles that fit your performance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            step="01"
            icon={Play}
            title="Live Class"
            desc="A high-voltage live class on a secret topic hosted by MKV. Sharpen your skills with laser-focused insights."
            badge="Hosted by MKV"
          />
          <StepCard
            step="02"
            icon={Target}
            title="The Contest"
            desc="Compete immediately on the same topic. Real-time leaderboard, time-boxed questions, and proctoring."
            badge="Same topic"
          />
          <StepCard
            step="03"
            icon={Trophy}
            title="Job Pairing"
            desc="Based on your performance, get matched to the right companies and roles. Interview fast-tracks included."
            badge="Performance-based"
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, icon: Icon, title, desc, badge }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 overflow-hidden">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-60" />
      <div className="text-sm text-gray-400">Step {step}</div>
      <div className="mt-2 flex items-center gap-3">
        <div className="rounded-lg bg-emerald-500/10 text-emerald-400 p-2 border border-emerald-400/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-gray-300">{desc}</p>
      <span className="mt-4 inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">{badge}</span>
    </div>
  );
}
