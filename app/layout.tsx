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
            <div className="hidden md:flex gap-8 items-center font-medium text-slate-300">
              <Link href="/" className="hover:text-blue-400 flex items-center gap-2"><Home size={18}/> Matches</Link>
              <Link href="/leaderboard" className="hover:text-blue-400 flex items-center gap-2"><Trophy size={18}/> Ranks</Link>
              <Link href="/login" className="px-5 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-all">Login</Link>
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