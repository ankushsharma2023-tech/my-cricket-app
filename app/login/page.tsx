"use client"
export default function LoginPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-slate-800/50 p-10 rounded-[40px] border border-slate-700 backdrop-blur-lg shadow-2xl">
        <h2 className="text-3xl font-black mb-2 text-center">Welcome Back</h2>
        <p className="text-slate-400 text-center mb-8 text-sm">Sign in to claim your daily prediction points</p>
        
        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-900 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-slate-900 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          <button className="w-full py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all">Sign In</button>
        </form>

        <p className="mt-6 text-center text-slate-500 text-sm">
          Don&apos;t have an account? <span className="text-blue-400 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </main>
  )
}