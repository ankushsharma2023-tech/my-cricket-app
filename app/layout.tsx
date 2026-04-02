import './globals.css'
import Link from 'next/link'
import { Trophy, Home, User, LogOut, LayoutDashboard } from 'lucide-react'

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
      <body className="bg-[#0f172a] text-white selection:bg-blue-500/30">
        {/* TOP NAVIGATION BAR */}
        <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Trophy size={20} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                CRICKET<span className="text-white">PRO</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-300">
              <Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <LayoutDashboard size={18} /> Matches
              </Link>
              <Link href="/leaderboard" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Trophy size={18} /> Leaderboard
              </Link>
            </div>

            {/* User Profile / Status */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end mr-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Status</span>
                <span className="text-xs font-bold text-emerald-400">Guest Mode</span>
              </div>
              
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

        {/* PAGE CONTENT */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* SIMPLE PROFESSIONAL FOOTER */}
        <footer className="border-t border-slate-800 bg-[#0b1222] py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-medium">
              © 2026 CricketPro Predictor League. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-400 text-xs">
              <Link href="#" className="hover:text-white">Terms</Link>
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="/admin" className="text-red-900 hover:text-red-500 transition-colors font-bold">Admin Access</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}