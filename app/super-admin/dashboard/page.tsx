"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  CreditCard,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Settings,
  Plus,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function SuperAdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      label: "Total Organizations",
      value: "24",
      change: "+3 this month",
      icon: Building2,
      color: "orange",
      trend: "up"
    },
    {
      label: "Active Subscriptions",
      value: "21",
      change: "87.5% conversion",
      icon: CheckCircle2,
      color: "success",
      trend: "up"
    },
    {
      label: "Monthly Revenue",
      value: "$48,750",
      change: "+18.2% from last month",
      icon: DollarSign,
      color: "success",
      trend: "up"
    },
    {
      label: "Total Users",
      value: "1,247",
      change: "+156 this month",
      icon: Users,
      color: "info",
      trend: "up"
    }
  ];

  const organizations = [
    {
      name: "WestUSA Realty",
      subdomain: "westusa.donotcall.ai",
      plan: "Enterprise",
      users: 48,
      status: "active",
      mrr: "$2,499",
      created: "2024-01-15"
    },
    {
      name: "RealtyHub Inc",
      subdomain: "realtyhub.donotcall.ai",
      plan: "Premium",
      users: 32,
      status: "active",
      mrr: "$1,299",
      created: "2024-02-03"
    },
    {
      name: "Pacific Properties",
      subdomain: "pacific.donotcall.ai",
      plan: "Premium",
      users: 28,
      status: "active",
      mrr: "$1,299",
      created: "2024-02-18"
    },
    {
      name: "Metro Real Estate",
      subdomain: "metro.donotcall.ai",
      plan: "Basic",
      users: 15,
      status: "active",
      mrr: "$499",
      created: "2024-03-05"
    },
    {
      name: "Coastal Homes",
      subdomain: "coastal.donotcall.ai",
      plan: "Free",
      users: 5,
      status: "trial",
      mrr: "$0",
      created: "2024-03-20"
    }
  ];

  const recentActivity = [
    {
      org: "WestUSA Realty",
      action: "Upgraded to Enterprise plan",
      time: "2 hours ago",
      type: "upgrade"
    },
    {
      org: "Coastal Homes",
      action: "New organization created",
      time: "5 hours ago",
      type: "new"
    },
    {
      org: "RealtyHub Inc",
      action: "Added 5 new users",
      time: "1 day ago",
      type: "users"
    },
    {
      org: "Pacific Properties",
      action: "Payment received ($1,299)",
      time: "1 day ago",
      type: "payment"
    },
    {
      org: "Metro Real Estate",
      action: "Customized branding updated",
      time: "2 days ago",
      type: "settings"
    }
  ];

  const subscriptionBreakdown = [
    { plan: "Enterprise", count: 4, revenue: "$9,996", color: "orange" },
    { plan: "Premium", count: 8, revenue: "$10,392", color: "info" },
    { plan: "Basic", count: 9, revenue: "$4,491", color: "success" },
    { plan: "Free Trial", count: 3, revenue: "$0", color: "gray" }
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
                <Link href="/super-admin/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <Link href="/super-admin/organizations" className="text-dnc-gray-400 hover:text-white transition">
                  Organizations
                </Link>
                <Link href="/super-admin/subscriptions" className="text-dnc-gray-400 hover:text-white transition">
                  Subscriptions
                </Link>
                <Link href="/super-admin/billing" className="text-dnc-gray-400 hover:text-white transition">
                  Billing
                </Link>
                <Link href="/super-admin/settings" className="text-dnc-gray-400 hover:text-white transition">
                  Settings
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition">
                <Activity className="w-5 h-5 text-dnc-gray-400" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-dnc-orange to-dnc-orange-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">SA</span>
              </div>
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
            <h1 className="text-3xl font-bold text-white mb-2">Super Admin Dashboard</h1>
            <p className="text-dnc-gray-400">Manage all organizations and subscriptions</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Organization</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-dnc-gray-400 text-sm font-medium">{stat.label}</span>
                <div className={`w-10 h-10 bg-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : 'success'}/10 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : 'success'}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-dnc-success" />
                <span className="text-sm text-dnc-success">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Organizations */}
          <div className="lg:col-span-2 space-y-8">
            {/* Organizations Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Organizations</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dnc-gray-500" />
                    <input
                      type="text"
                      placeholder="Search organizations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-dark pl-10 pr-4 py-2 w-64"
                    />
                  </div>
                  <Link href="/super-admin/organizations" className="text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dnc-dark-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Organization</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Plan</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Users</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">MRR</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-dnc-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizations.map((org, index) => (
                      <tr key={index} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-dnc-orange/10 rounded-lg flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-dnc-orange" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{org.name}</div>
                              <div className="text-dnc-gray-400 text-xs flex items-center space-x-1">
                                <Globe className="w-3 h-3" />
                                <span>{org.subdomain}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            org.plan === 'Enterprise' ? 'bg-dnc-orange/10 text-dnc-orange border border-dnc-orange/20' :
                            org.plan === 'Premium' ? 'bg-dnc-info/10 text-dnc-info border border-dnc-info/20' :
                            org.plan === 'Basic' ? 'bg-dnc-success/10 text-dnc-success border border-dnc-success/20' :
                            'bg-dnc-gray-800 text-dnc-gray-400 border border-dnc-gray-700'
                          }`}>
                            {org.plan}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white font-medium">{org.users}</td>
                        <td className="py-4 px-4 text-white font-medium">{org.mrr}</td>
                        <td className="py-4 px-4">
                          {org.status === 'active' ? (
                            <span className="status-callable">Active</span>
                          ) : (
                            <span className="status-pending">Trial</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                            <MoreVertical className="w-4 h-4 text-dnc-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">Revenue Overview</h2>
                  <p className="text-sm text-dnc-gray-400">Monthly recurring revenue trends</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 bg-dnc-orange/10 text-dnc-orange rounded-lg text-sm font-medium">
                    Monthly
                  </button>
                  <button className="px-3 py-1.5 hover:bg-dnc-dark-lighter text-dnc-gray-400 rounded-lg text-sm font-medium transition">
                    Yearly
                  </button>
                </div>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-dnc-dark-border rounded-lg">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
                  <p className="text-dnc-gray-500">Revenue chart will be displayed here</p>
                  <p className="text-dnc-gray-600 text-sm mt-2">Integrate with Recharts for visualization</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Subscription Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Subscription Breakdown</h2>
              <div className="space-y-4">
                {subscriptionBreakdown.map((sub, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{sub.plan}</span>
                      <span className="text-dnc-gray-400 text-sm">{sub.count} orgs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-2 bg-dnc-dark-lighter rounded-full overflow-hidden mr-3">
                        <div 
                          className={`h-full bg-dnc-${sub.color === 'orange' ? 'orange' : sub.color === 'info' ? 'info' : sub.color === 'success' ? 'success' : 'gray-600'}`}
                          style={{ width: `${(sub.count / 24) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold text-sm">{sub.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-dnc-dark-border last:border-0 last:pb-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'upgrade' ? 'bg-dnc-success/10' :
                      activity.type === 'new' ? 'bg-dnc-info/10' :
                      activity.type === 'payment' ? 'bg-dnc-orange/10' :
                      'bg-dnc-gray-800'
                    }`}>
                      {activity.type === 'upgrade' ? (
                        <TrendingUp className="w-4 h-4 text-dnc-success" />
                      ) : activity.type === 'new' ? (
                        <Plus className="w-4 h-4 text-dnc-info" />
                      ) : activity.type === 'payment' ? (
                        <CreditCard className="w-4 h-4 text-dnc-orange" />
                      ) : activity.type === 'users' ? (
                        <Users className="w-4 h-4 text-dnc-gray-400" />
                      ) : (
                        <Settings className="w-4 h-4 text-dnc-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">{activity.org}</p>
                      <p className="text-dnc-gray-400 text-sm">{activity.action}</p>
                      <p className="text-dnc-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/super-admin/organizations/new" className="block p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition">
                  <div className="flex items-center space-x-3">
                    <Plus className="w-5 h-5 text-dnc-orange" />
                    <span className="text-white font-medium">Create Organization</span>
                  </div>
                </Link>
                <Link href="/super-admin/subscriptions" className="block p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-dnc-info" />
                    <span className="text-white font-medium">Manage Plans</span>
                  </div>
                </Link>
                <Link href="/super-admin/billing" className="block p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-dnc-success" />
                    <span className="text-white font-medium">View Billing</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
