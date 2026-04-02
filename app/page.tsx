import './globals.css'
import Link from 'next/link'
import { Trophy, User, LogOut, LayoutDashboard } from 'lucide-react' // Cleaned imports

export const metadata = {
  title: 'CricketPro Predictor | Global League',
  description: 'Predict IPL and International matches to win prizes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Trophy size={20} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                CRICKET<span className="text-white">PRO</span>
              </span>
            </Link>

            <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-300">
              {/* Using LayoutDashboard instead of Home for a pro look */}
              <Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <LayoutDashboard size={18} /> Matches
              </Link>
              <Link href="/leaderboard" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Trophy size={18} /> Leaderboard
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-full transition-all group"
              >
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                  <User size={14} className="text-slate-300" />
                </div>
                <span className="text-sm font-bold group-hover:text-blue-400">Login</span>
                <LogOut size={14} className="text-slate-500" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="min-h-screen">{children}</div>

        <footer className="border-t border-slate-800 bg-[#0b1222] py-8">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <p className="text-slate-500 text-xs">© 2026 CricketPro League</p>
            <Link href="/admin" className="text-red-900 hover:text-red-500 text-xs font-bold uppercase">Admin</Link>
          </div>
        </footer>
      </body>
    </html>
  )
}