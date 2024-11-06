'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend
    // For this example, we'll just simulate a successful login
    login({ id: '1', username: 'testuser', email, provider: 'email' })
    router.push('/dashboard')
  }

  const handleDiscordLogin = () => {
    // Implement Discord OAuth flow
    console.log('Discord login not implemented')
  }

  const handleRobloxLogin = () => {
    // Implement Roblox OAuth flow
    console.log('Roblox login not implemented')
  }

  return (
    <div className="min-h-screen bg-[#1C2127] text-[#E5C992] flex items-center justify-center">
      <div className="bg-[#232830] p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login to Crown Security</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-[#1C2127] text-[#E5C992]"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-[#1C2127] text-[#E5C992]"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#E5C992] text-black p-2 rounded hover:bg-[#E5C992]/90">
            Login
          </button>
        </form>
        <div className="mt-4 space-y-2">
          <button onClick={handleDiscordLogin} className="w-full bg-[#7289DA] text-white p-2 rounded hover:bg-[#7289DA]/90">
            Login with Discord
          </button>
          <button onClick={handleRobloxLogin} className="w-full bg-[#00A2FF] text-white p-2 rounded hover:bg-[#00A2FF]/90">
            Login with Roblox
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account? <Link href="/signup" className="text-[#E5C992] hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}