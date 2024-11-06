'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'

const PricingOption = ({ name, price, features, recommended = false }) => (
  <div className={`bg-[#232830] p-8 rounded-lg ${recommended ? 'border-2 border-[#E5C992]' : ''}`}>
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal">/month</span></p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 mr-2 text-[#E5C992]" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-[#E5C992] text-black px-6 py-2 rounded hover:bg-[#E5C992]/90 transition-colors">
      Select Plan
    </button>
  </div>
)

export default function PurchasePage() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: 'Basic',
      price: 9.99,
      features: ['1 Server Protection', 'Basic Threat Detection', 'Email Support']
    },
    {
      name: 'Pro',
      price: 24.99,
      features: ['3 Server Protection', 'Advanced Threat Detection', 'Priority Support', 'Custom Bot'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: ['Unlimited Server Protection', 'AI-Powered Threat Prevention', '24/7 Dedicated Support', 'Multiple Custom Bots']
    }
  ]

  return (
    <div className="min-h-screen bg-[#1C2127] text-[#E5C992]">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#E5C992] hover:text-white mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingOption key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}