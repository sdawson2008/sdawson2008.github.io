'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Server, Shield, Users } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const DashboardCard = ({ title, value, icon: Icon }) => (
  <div className="bg-[#232830] p-6 rounded-lg flex items-center">
    <Icon className="w-12 h-12 mr-4 text-[#E5C992]" />
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </div>
)

export default function DashboardPage() {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    // Simulating real-time data
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = [...prevData, { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 100) }]
        return newData.slice(-20) // Keep only the last 20 data points
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#1C2127] text-[#E5C992]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#E5C992] hover:text-white mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Active Servers" value="5" icon={Server} />
          <DashboardCard title="Protected Users" value="10,234" icon={Users} />
          <DashboardCard title="Threats Blocked" value="1,337" icon={Shield} />
        </div>

        <div className="bg-[#232830] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Real-time Security Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#E5C992" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#232830] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscription Status</h2>
          <p className="text-xl">Current Plan: <span className="font-bold">Pro</span></p>
          <p className="text-xl">Next Billing Date: <span className="font-bold">June 15, 2023</span></p>
        </div>

        <div className="bg-[#232830] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Moderation Panel</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Server</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Gaming Community</td>
                <td className="py-2 text-green-500">Active</td>
                <td className="py-2"><button className="text-[#E5C992] hover:text-white">Manage</button></td>
              </tr>
              <tr>
                <td className="py-2">Developer Hub</td>
                <td className="py-2 text-yellow-500">Warning</td>
                <td className="py-2"><button className="text-[#E5C992] hover:text-white">Investigate</button></td>
              </tr>
              <tr>
                <td className="py-2">Art Showcase</td>
                <td className="py-2 text-green-500">Active</td>
                <td className="py-2"><button className="text-[#E5C992] hover:text-white">Manage</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}