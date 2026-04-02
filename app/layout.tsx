import './globals.css'
import Link from 'next/link'
import { Trophy, Home, User, Settings } from 'lucide-react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        {/* HEADER */}
       <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
      CRICKET<span className="text-white">PRO</span>
    </Link>
    
    <div className="flex gap-6 items-center">
      {/* Mobile might only show icons, Desktop shows text */}
      <div className="hidden md:flex gap-6 text-slate-300 font-medium">
        <Link href="/" className="hover:text-white">Matches</Link>
        <Link href="/leaderboard" className="hover:text-white">Leaderboard</Link>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-slate-200">Guest User</span>
        <Link href="/login" className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md transition-colors">
          Login
        </Link>
      </div>
    </div>
  </div>
</nav>

        {/* MAIN CONTENT */}
        <div className="min-h-screen">{children}</div>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 py-12 bg-[#0b1222]">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
            <p>© 2026 CricketPro Predictor. Play responsibly.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}