"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  FileText,
  TrendingUp,
  Activity,
  Download,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  BarChart3,
  PieChart,
  AlertCircle,
  Upload
} from "lucide-react";
import Link from "next/link";
import TenantLogo from "../../../components/TenantLogo";

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      label: "Total Agents",
      value: "48",
      change: "+4 this week",
      icon: Users,
      color: "orange",
      active: 45,
      inactive: 3
    },
    {
      label: "Total Entries",
      value: "12,847",
      change: "+1,234 this week",
      icon: FileText,
      color: "info",
      active: 12500,
      removed: 347
    },
    {
      label: "Verifications Today",
      value: "1,247",
      change: "+12.5% from yesterday",
      icon: CheckCircle2,
      color: "success",
      callable: 1100,
      restricted: 147
    },
    {
      label: "Compliance Rate",
      value: "100%",
      change: "All agents compliant",
      icon: Shield,
      color: "success",
      compliant: 48,
      pending: 0
    }
  ];

  const topAgents = [
    { name: "Sarah Johnson", email: "sarah.j@westusa.com", entries: 342, verifications: 1247, status: "active" },
    { name: "Michael Chen", email: "m.chen@westusa.com", entries: 298, verifications: 1089, status: "active" },
    { name: "Emily Rodriguez", email: "emily.r@westusa.com", entries: 276, verifications: 956, status: "active" },
    { name: "David Kim", email: "d.kim@westusa.com", entries: 251, verifications: 892, status: "active" },
    { name: "Jessica Taylor", email: "j.taylor@westusa.com", entries: 234, verifications: 834, status: "active" }
  ];

  const recentActivity = [
    {
      agent: "Sarah Johnson",
      action: "Added 15 entries to IDNC",
      time: "2 minutes ago",
      type: "add"
    },
    {
      agent: "Michael Chen",
      action: "Verified 45 numbers",
      time: "8 minutes ago",
      type: "verify"
    },
    {
      agent: "Emily Rodriguez",
      action: "Bulk upload completed (120 records)",
      time: "15 minutes ago",
      type: "bulk"
    },
    {
      agent: "David Kim",
      action: "Removed 3 entries from IDNC",
      time: "23 minutes ago",
      type: "remove"
    },
    {
      agent: "Jessica Taylor",
      action: "Verified 28 numbers",
      time: "35 minutes ago",
      type: "verify"
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
                <TenantLogo size={40} />
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/admin/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <Link href="/admin/agents" className="text-dnc-gray-400 hover:text-white transition">
                  Agents
                </Link>
                <Link href="/admin/registry" className="text-dnc-gray-400 hover:text-white transition">
                  Registry
                </Link>
                <Link href="/admin/activity" className="text-dnc-gray-400 hover:text-white transition">
                  Activity Logs
                </Link>
                <Link href="/admin/reports" className="text-dnc-gray-400 hover:text-white transition">
                  Reports
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition">
                <Activity className="w-5 h-5 text-dnc-gray-400" />
              </button>
              <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">AD</span>
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
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-dnc-gray-400">Monitor and manage your organization's DNC compliance</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="btn-secondary flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
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
              <div className="text-sm text-dnc-gray-400 mb-3">{stat.change}</div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-dnc-gray-500">
                  Active: <span className="text-dnc-success font-medium">{stat.active}</span>
                </span>
                {stat.inactive !== undefined && (
                  <span className="text-dnc-gray-500">
                    Inactive: <span className="text-dnc-gray-400 font-medium">{stat.inactive}</span>
                  </span>
                )}
                {stat.removed !== undefined && (
                  <span className="text-dnc-gray-500">
                    Removed: <span className="text-dnc-gray-400 font-medium">{stat.removed}</span>
                  </span>
                )}
                {stat.restricted !== undefined && (
                  <span className="text-dnc-gray-500">
                    Restricted: <span className="text-dnc-error font-medium">{stat.restricted}</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weekly Activity Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">Weekly Activity</h2>
                  <p className="text-sm text-dnc-gray-400">Verifications and entries over the last 7 days</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 bg-dnc-orange/10 text-dnc-orange rounded-lg text-sm font-medium">
                    7 Days
                  </button>
                  <button className="px-3 py-1.5 hover:bg-dnc-dark-lighter text-dnc-gray-400 rounded-lg text-sm font-medium transition">
                    30 Days
                  </button>
                </div>
              </div>
              <div className="h-80 flex items-center justify-center border-2 border-dashed border-dnc-dark-border rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
                  <p className="text-dnc-gray-500">Activity chart will be displayed here</p>
                  <p className="text-dnc-gray-600 text-sm mt-2">Integrate with Recharts for visualization</p>
                </div>
              </div>
            </motion.div>

            {/* Top Performing Agents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Top Performing Agents</h2>
                <Link href="/admin/agents" className="text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dnc-dark-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Agent</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Entries</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Verifications</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-dnc-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topAgents.map((agent, index) => (
                      <tr key={index} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-dnc-orange/10 rounded-full flex items-center justify-center">
                              <span className="text-dnc-orange font-medium text-sm">
                                {agent.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-medium">{agent.name}</div>
                              <div className="text-dnc-gray-400 text-sm">{agent.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white font-medium">{agent.entries}</td>
                        <td className="py-4 px-4 text-white font-medium">{agent.verifications}</td>
                        <td className="py-4 px-4">
                          <span className="status-callable">Active</span>
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
          </div>

          {/* Right Column - Activity Feed */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-dnc-dark-border last:border-0 last:pb-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'verify' ? 'bg-dnc-success/10' :
                      activity.type === 'add' ? 'bg-dnc-info/10' :
                      activity.type === 'bulk' ? 'bg-dnc-warning/10' :
                      'bg-dnc-error/10'
                    }`}>
                      {activity.type === 'verify' ? (
                        <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                      ) : activity.type === 'add' ? (
                        <FileText className="w-4 h-4 text-dnc-info" />
                      ) : activity.type === 'bulk' ? (
                        <Upload className="w-4 h-4 text-dnc-warning" />
                      ) : (
                        <XCircle className="w-4 h-4 text-dnc-error" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">{activity.agent}</p>
                      <p className="text-dnc-gray-400 text-sm">{activity.action}</p>
                      <p className="text-dnc-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/admin/activity" className="block mt-6 text-center text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                View All Activity
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400 text-sm">Avg. Verifications/Agent</span>
                  <span className="text-white font-semibold">26</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400 text-sm">Peak Activity Time</span>
                  <span className="text-white font-semibold">2-4 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400 text-sm">Success Rate</span>
                  <span className="text-dnc-success font-semibold">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400 text-sm">Response Time</span>
                  <span className="text-white font-semibold">142ms</span>
                </div>
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="card-dark bg-dnc-success/5 border-dnc-success/20"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-dnc-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-dnc-success" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">System Status</h3>
                  <p className="text-dnc-gray-400 text-sm">All systems operational</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">API Status</span>
                  <span className="text-dnc-success font-medium">✓ Online</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">NDNC Sync</span>
                  <span className="text-dnc-success font-medium">✓ Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">Database</span>
                  <span className="text-dnc-success font-medium">✓ Healthy</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">Last Backup</span>
                  <span className="text-white">2 hours ago</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
