"use client"
import { Trophy, Clock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const matches = [
    { id: 1, teamA: 'IND', teamB: 'AUS', time: 'Tomorrow, 7:30 PM', prize: '₹5000' },
    { id: 2, teamB: 'ENG', teamA: 'RSA', time: 'April 5, 7:30 PM', prize: '₹2000' },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-3xl shadow-xl">
          <p className="text-blue-100 text-sm">Current Jackpot</p>
          <h2 className="text-3xl font-black">₹10,000</h2>
        </div>
        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
          <p className="text-slate-400 text-sm">Next Prize Drop</p>
          <h2 className="text-3xl font-black text-emerald-400 italic">4 Matches Left</h2>
        </div>
        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
          <p className="text-slate-400 text-sm">Your Global Rank</p>
          <h2 className="text-3xl font-black text-yellow-400">#1,240</h2>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 italic">
        <Zap className="text-yellow-400 fill-yellow-400" size={20}/> UPCOMING FIXTURES
      </h3>

      {/* Match List */}
      <div className="grid gap-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-slate-800/40 border border-slate-700 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center hover:bg-slate-800/60 transition-all group">
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center font-black text-xl mb-1">{match.teamA}</div>
              </div>
              <div className="text-slate-600 font-black italic text-xl">VS</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center font-black text-xl mb-1">{match.teamB}</div>
              </div>
            </div>

            <div className="text-center md:text-left flex flex-col gap-1">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock size={14}/> {match.time}
              </div>
              <div className="text-emerald-400 font-bold text-sm">Sprint Prize: {match.prize}</div>
            </div>

            <Link href={`/predict/${match.id}`} className="mt-4 md:mt-0 px-10 py-3 bg-white text-black font-black rounded-xl hover:bg-blue-400 hover:text-white transition-all transform group-hover:scale-105">
              PREDICT NOW
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}