"use client"
import { supabase } from '@/lib/supabase'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

interface Prediction {
  id: string;
  created_at: string;
  team: string;
  user: string;
  points: number;
}

export default function Home() {
  const [history, setHistory] = useState<Prediction[]>([])

  // We keep this function to use it inside handlePredict
  const fetchPredictions = useCallback(async () => {
    const { data } = await supabase
      .from('predictions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)
    
    if (data) {
      setHistory(data as Prediction[])
    }
  }, [])

  // FIX: We use an async function inside useEffect to avoid the "synchronous" error
  useEffect(() => {
    const loadInitialData = async () => {
      await fetchPredictions()
    }
    loadInitialData()
  }, [fetchPredictions]) 

  const handlePredict = async (teamName: string) => {
    const { error } = await supabase
      .from('predictions') 
      .insert([{ team: teamName, user: "Guest Player" }])

    if (error) {
      alert(error.message)
    } else {
      alert("Prediction Locked In! 🏏")
      fetchPredictions() // Refresh the list after predicting
    }
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans p-4 md:p-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold mb-4 border border-blue-500/30">
          GLOBAL CRICKET LEAGUE
        </div>
        <h1 className="text-5xl font-black tracking-tighter mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">
          Predictor Pro
        </h1>
        <p className="text-gray-400 text-lg">Pick the winner and climb the ranks.</p>
      </div>

      {/* Match Card */}
      <div className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-xl shadow-2xl mb-12">
        <div className="flex justify-between items-center mb-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center text-2xl font-bold mb-2 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">A</div>
            <p className="font-bold">Team A</p>
          </div>
          <div className="text-2xl font-black text-slate-600 italic uppercase">vs</div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mb-2 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">B</div>
            <p className="font-bold">Team B</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handlePredict('Team A')}
            className="py-4 bg-purple-700 hover:bg-purple-600 rounded-xl font-bold transition-all active:scale-95 shadow-lg"
          >
            Predict Team A
          </button>
          <button 
            onClick={() => handlePredict('Team B')}
            className="py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-bold transition-all active:scale-95 shadow-lg"
          >
            Predict Team B
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
          <h3 className="font-bold mb-4 text-emerald-400 underline decoration-2 underline-offset-4 uppercase tracking-wider">Recent Activity</h3>
          <div className="space-y-3">
            {history.length > 0 ? (
              history.map((item) => (
                <div key={item.id} className="flex justify-between text-sm border-b border-slate-700/50 pb-2">
                  <span className="text-gray-400">{item.user}</span>
                  <span className="font-mono text-blue-400">{item.team}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Waiting for predictions...</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/leaderboard" className="p-6 bg-blue-600 hover:bg-blue-500 rounded-2xl text-center font-bold transition-colors shadow-lg shadow-blue-900/20">
            🏆 Global Leaderboard
          </Link>
          <div className="p-6 bg-slate-800/80 rounded-2xl text-center border border-slate-700">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Prize Cycle</p>
            <p className="text-xl font-bold text-yellow-500">Every 10 Matches</p>
          </div>
        </div>
      </div>
    </main>
  )
}