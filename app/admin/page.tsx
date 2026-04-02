"use client"
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function AdminPage() {
  
  // This function finds everyone who picked the winner and gives them 100 points
  const settleMatch = async (winnerName: string) => {
    const { data, error } = await supabase
      .from('predictions')
      .update({ points: 100 })
      .eq('team', winnerName) // Only people who picked this team get points
      .select()

    if (error) {
      alert("Error updating points: " + error.message)
    } else {
      alert(`Success! Points given to everyone who picked ${winnerName}. Rows updated: ${data?.length}`)
    }
  }

  return (
    <main className="p-12 text-center bg-red-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-red-700 mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Danger Zone: Use this only when a match ends!</p>

      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border border-red-200">
        <h2 className="text-xl font-semibold mb-6">Select Tonight&apos;s Winner</h2>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => settleMatch('KKR')}
            className="w-full py-4 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-900 transition-all shadow-md active:scale-95"
          >
            Declare KKR Winner
          </button>

          <button 
            onClick={() => settleMatch('SRH')}
            className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-md active:scale-95"
          >
            Declare SRH Winner
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <Link href="/leaderboard" className="text-blue-600 font-medium hover:underline">
          View Updated Leaderboard →
        </Link>
        <Link href="/" className="text-gray-500 hover:underline">
          Return to Home
        </Link>
      </div>
    </main>
  )
}