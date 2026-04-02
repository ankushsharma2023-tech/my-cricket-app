"use client"
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
// 1. Add this import at the top
import Link from 'next/link'

interface Player {
  user: string;
  points: number;
}

export default function Leaderboard() {
  const [topPlayers, setTopPlayers] = useState<Player[]>([])

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const { data } = await supabase
        .from('predictions')
        .select('user, points')
        .order('points', { ascending: false })
      
      if (data) {
        setTopPlayers(data as Player[])
      }
    }
    fetchLeaderboard()
  }, [])

  return (
    <main className="p-12 text-center bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🏆 Global Leaderboard</h1>
      
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700">
        <div className="flex justify-between border-b border-gray-700 pb-2 mb-4 text-gray-400 font-semibold">
          <span>PLAYER</span>
          <span>POINTS</span>
        </div>
        
        {topPlayers.length > 0 ? (
          topPlayers.map((player, i) => (
            <div key={i} className="flex justify-between py-3 border-b border-gray-700 hover:bg-gray-750 transition-colors">
              <span className="flex gap-3">
                <span className="text-gray-500 w-4">{i + 1}.</span> 
                {player.user}
              </span>
              <span className="font-bold text-green-400">{player.points} pts</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 py-4">No predictions yet. Be the first!</p>
        )}
      </div>

      <div className="mt-8">
        {/* 2. Change <a> to <Link> and href="/" */}
        <Link href="/" className="text-blue-400 hover:underline">
          ← Go Back to Predict
        </Link>
      </div>
    </main>
  )
}