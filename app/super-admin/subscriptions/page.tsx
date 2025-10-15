"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  DollarSign,
  TrendingUp,
  Edit,
  Plus,
  Check,
  X,
  Zap,
  Users,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  Lock,
  Headphones
} from "lucide-react";
import Link from "next/link";

export default function SubscriptionsPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out the platform",
      price: { monthly: 0, yearly: 0 },
      color: "gray",
      features: [
        { name: "Up to 5 users", included: true },
        { name: "100 verifications/month", included: true },
        { name: "Basic DNC verification", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: false },
        { name: "API access", included: false },
        { name: "Custom branding", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "WhatsApp bot", included: false }
      ],
      limits: {
        users: 5,
        verifications: 100,
        storage: "500 MB",
        apiCalls: "N/A"
      },
      activeOrgs: 3
    },
    {
      name: "Basic",
      description: "For small teams getting started",
      price: { monthly: 499, yearly: 4990 },
      color: "success",
      popular: false,
      features: [
        { name: "Up to 20 users", included: true },
        { name: "5,000 verifications/month", included: true },
        { name: "Basic DNC verification", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Custom branding", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "WhatsApp bot", included: false }
      ],
      limits: {
        users: 20,
        verifications: 5000,
        storage: "5 GB",
        apiCalls: "10,000/month"
      },
      activeOrgs: 9
    },
    {
      name: "Premium",
      description: "For growing organizations",
      price: { monthly: 1299, yearly: 12990 },
      color: "info",
      popular: true,
      features: [
        { name: "Up to 50 users", included: true },
        { name: "25,000 verifications/month", included: true },
        { name: "Advanced DNC verification", included: true },
        { name: "Priority email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Custom branding", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: false },
        { name: "WhatsApp bot", included: true }
      ],
      limits: {
        users: 50,
        verifications: 25000,
        storage: "25 GB",
        apiCalls: "50,000/month"
      },
      activeOrgs: 8
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: { monthly: 2499, yearly: 24990 },
      color: "orange",
      popular: false,
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited verifications", included: true },
        { name: "Advanced DNC verification", included: true },
        { name: "24/7 phone & email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Custom branding", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
        { name: "WhatsApp bot", included: true }
      ],
      limits: {
        users: "Unlimited",
        verifications: "Unlimited",
        storage: "Unlimited",
        apiCalls: "Unlimited"
      },
      activeOrgs: 4
    }
  ];

  const stats = [
    {
      label: "Total MRR",
      value: "$48,750",
      change: "+18.2%",
      icon: DollarSign,
      color: "success"
    },
    {
      label: "Active Subscriptions",
      value: "21",
      change: "+3 this month",
      icon: CreditCard,
      color: "info"
    },
    {
      label: "Avg. Revenue Per Org",
      value: "$2,321",
      change: "+5.4%",
      icon: TrendingUp,
      color: "orange"
    },
    {
      label: "Churn Rate",
      value: "2.1%",
      change: "-0.5%",
      icon: BarChart3,
      color: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-dnc-dark">
      {/* Navigation */}
      <nav className="border-b border-dnc-dark-border bg-dnc-dark-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DoNotCall</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/super-admin/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/super-admin/organizations" className="text-dnc-gray-400 hover:text-white transition">
                  Organizations
                </Link>
                <Link href="/super-admin/subscriptions" className="text-white font-medium">
                  Subscriptions
                </Link>
                <Link href="/super-admin/billing" className="text-dnc-gray-400 hover:text-white transition">
                  Billing
                </Link>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-gradient-to-br from-dnc-orange to-dnc-orange-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-medium">SA</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Subscription Plans</h1>
            <p className="text-dnc-gray-400">Manage pricing tiers and feature configurations</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create Custom Plan</span>
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-dnc-gray-400 text-sm">{stat.label}</span>
                <div className={`w-10 h-10 bg-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : 'success'}/10 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : 'success'}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-dnc-success">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center space-x-3 bg-dnc-dark-card border border-dnc-dark-border rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-dnc-orange text-white"
                  : "text-dnc-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === "yearly"
                  ? "bg-dnc-orange text-white"
                  : "text-dnc-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-dnc-success/20 text-dnc-success px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`card-dark relative ${
                plan.popular ? "ring-2 ring-dnc-orange" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-dnc-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-dnc-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === "monthly" ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                  </span>
                  <span className="text-dnc-gray-400 ml-2">/month</span>
                </div>
                {billingCycle === "yearly" && plan.price.yearly > 0 && (
                  <p className="text-dnc-gray-500 text-xs mt-1">
                    Billed ${plan.price.yearly} annually
                  </p>
                )}
              </div>

              {/* Active Organizations */}
              <div className="bg-dnc-dark-lighter rounded-lg p-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400 text-sm">Active Organizations</span>
                  <span className="text-white font-semibold">{plan.activeOrgs}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-dnc-success flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-dnc-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-white" : "text-dnc-gray-500"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Limits */}
              <div className="border-t border-dnc-dark-border pt-4 mb-6">
                <h4 className="text-white font-semibold text-sm mb-3">Usage Limits</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dnc-gray-400">Users</span>
                    <span className="text-white">{plan.limits.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dnc-gray-400">Verifications</span>
                    <span className="text-white">{plan.limits.verifications}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dnc-gray-400">Storage</span>
                    <span className="text-white">{plan.limits.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dnc-gray-400">API Calls</span>
                    <span className="text-white">{plan.limits.apiCalls}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit Plan</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="card-dark"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Feature Comparison Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dnc-dark-border">
                  <th className="text-left py-4 px-4 text-sm font-medium text-dnc-gray-400">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-dnc-gray-400">Free</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-dnc-gray-400">Basic</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-dnc-gray-400">Premium</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-dnc-gray-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "DNC Verification", icon: Shield, free: true, basic: true, premium: true, enterprise: true },
                  { name: "Mobile App", icon: Smartphone, free: false, basic: true, premium: true, enterprise: true },
                  { name: "API Access", icon: Globe, free: false, basic: true, premium: true, enterprise: true },
                  { name: "Custom Branding", icon: Zap, free: false, basic: false, premium: true, enterprise: true },
                  { name: "Advanced Analytics", icon: BarChart3, free: false, basic: false, premium: true, enterprise: true },
                  { name: "WhatsApp Bot", icon: Users, free: false, basic: false, premium: true, enterprise: true },
                  { name: "Priority Support", icon: Headphones, free: false, basic: false, premium: false, enterprise: true },
                  { name: "SSO / SAML", icon: Lock, free: false, basic: false, premium: false, enterprise: true },
                  { name: "Dedicated Account Manager", icon: Users, free: false, basic: false, premium: false, enterprise: true }
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <feature.icon className="w-5 h-5 text-dnc-gray-400" />
                        <span className="text-white">{feature.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.free ? (
                        <Check className="w-5 h-5 text-dnc-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-dnc-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.basic ? (
                        <Check className="w-5 h-5 text-dnc-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-dnc-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-dnc-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-dnc-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.enterprise ? (
                        <Check className="w-5 h-5 text-dnc-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-dnc-gray-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
