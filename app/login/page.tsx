"use client"
import Link from 'next/link'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0f172a] to-[#0f172a]">
      <div className="max-w-md w-full">
        {/* Glass Card */}
        <div className="bg-slate-800/40 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black tracking-tight mb-2">Get Started</h2>
            <p className="text-slate-400 text-sm">Save your predictions and win prizes</p>
          </div>

          <div className="space-y-4">
            {/* Input Fields */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-500" size={18} />
              <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:border-blue-500 outline-none transition-all" />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-500" size={18} />
              <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:border-blue-500 outline-none transition-all" />
            </div>

            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
              Create Account <ArrowRight size={18}/>
            </button>

            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-slate-700"></div>
              <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-slate-700"></div>
            </div>

            {/* Guest Option */}
            <Link href="/" className="w-full py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-slate-200">
              <User size={18}/> Continue as Guest
            </Link>
          </div>

          <p className="mt-8 text-center text-slate-500 text-sm">
            Already have an account? <span className="text-blue-400 font-semibold cursor-pointer hover:underline">Log In</span>
          </p>
        </div>
      </div>
    </main>
  )
}