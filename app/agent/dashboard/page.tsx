"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle2,
  XCircle,
  Search,
  Upload,
  FileText,
  TrendingUp,
  Users,
  Phone,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Activity
} from "lucide-react";
import Link from "next/link";
import TenantLogo from "../../../components/TenantLogo";

export default function AgentDashboard() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const stats = [
    {
      label: "Verifications Today",
      value: "47",
      change: "+12.5%",
      icon: CheckCircle2,
      color: "success"
    },
    {
      label: "Entries Added",
      value: "23",
      change: "+8.3%",
      icon: FileText,
      color: "info"
    },
    {
      label: "Flagged Numbers",
      value: "5",
      change: "-2.1%",
      icon: XCircle,
      color: "error"
    },
    {
      label: "Compliance Rate",
      value: "100%",
      change: "Perfect",
      icon: Shield,
      color: "success"
    }
  ];

  const quickActions = [
    {
      title: "Verify Number",
      description: "Check against DNC registries",
      icon: Search,
      href: "/agent/verify",
      color: "orange"
    },
    {
      title: "Add to IDNC",
      description: "Add consumer to internal registry",
      icon: FileText,
      href: "/agent/add-entry",
      color: "blue"
    },
    {
      title: "Bulk Upload",
      description: "Upload CSV for bulk operations",
      icon: Upload,
      href: "/agent/bulk-upload",
      color: "green"
    },
    {
      title: "My Entries",
      description: "View and manage your entries",
      icon: Users,
      href: "/agent/entries",
      color: "purple"
    }
  ];

  const recentActivities = [
    {
      type: "verification",
      number: "+1 (555) 123-4567",
      result: "Callable",
      time: "2 minutes ago",
      status: "success"
    },
    {
      type: "added",
      number: "+1 (555) 987-6543",
      result: "Added to IDNC",
      time: "15 minutes ago",
      status: "info"
    },
    {
      type: "verification",
      number: "+1 (555) 456-7890",
      result: "Restricted",
      time: "32 minutes ago",
      status: "error"
    },
    {
      type: "verification",
      number: "+1 (555) 234-5678",
      result: "Callable",
      time: "1 hour ago",
      status: "success"
    },
    {
      type: "bulk",
      number: "50 numbers",
      result: "Bulk verification completed",
      time: "2 hours ago",
      status: "info"
    }
  ];

  const handleQuickVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quick verification
    console.log("Quick verify:", phoneNumber);
  };

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
                <Link href="/agent/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <Link href="/agent/verify" className="text-dnc-gray-400 hover:text-white transition">
                  Verify
                </Link>
                <Link href="/agent/entries" className="text-dnc-gray-400 hover:text-white transition">
                  My Entries
                </Link>
                <Link href="/agent/bulk" className="text-dnc-gray-400 hover:text-white transition">
                  Bulk Operations
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition">
                <Activity className="w-5 h-5 text-dnc-gray-400" />
              </button>
              <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Compliance Banner */}
      <div className="bg-dnc-info/10 border-b border-dnc-info/20">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-dnc-info flex-shrink-0" />
            <p className="text-sm text-dnc-info">
              <strong>Compliance Reminder:</strong> Always verify numbers against DNC registries before making calls. 
              <Link href="/compliance" className="ml-2 underline hover:text-dnc-info/80">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
          <p className="text-dnc-gray-400">Here's your compliance activity overview</p>
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
              <div className="flex items-center justify-between mb-3">
                <span className="text-dnc-gray-400 text-sm">{stat.label}</span>
                <stat.icon className={`w-5 h-5 text-dnc-${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className={`text-sm ${stat.change.startsWith('+') ? 'text-dnc-success' : stat.change.startsWith('-') ? 'text-dnc-error' : 'text-dnc-gray-400'}`}>
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Verify */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Quick Verification</h2>
              <form onSubmit={handleQuickVerify} className="flex gap-3">
                <div className="flex-1 relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="input-dark w-full pl-11"
                  />
                </div>
                <button type="submit" className="btn-primary flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>Verify</span>
                </button>
              </form>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    className="card-dark card-hover group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-dnc-${action.color}/10 rounded-lg flex items-center justify-center`}>
                        <action.icon className={`w-6 h-6 text-dnc-${action.color === 'orange' ? 'orange' : action.color === 'blue' ? 'info' : action.color === 'green' ? 'success' : 'warning'}`} />
                      </div>
                      <ArrowRight className="w-5 h-5 text-dnc-gray-500 group-hover:text-dnc-orange transition" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{action.title}</h3>
                    <p className="text-dnc-gray-400 text-sm">{action.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Activity Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Weekly Activity</h2>
                <button className="text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                  View Details
                </button>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-dnc-dark-border rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-dnc-gray-600 mx-auto mb-3" />
                  <p className="text-dnc-gray-500">Activity chart will be displayed here</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-dnc-dark-border last:border-0 last:pb-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.status === 'success' ? 'bg-dnc-success/10' :
                      activity.status === 'error' ? 'bg-dnc-error/10' :
                      'bg-dnc-info/10'
                    }`}>
                      {activity.status === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                      ) : activity.status === 'error' ? (
                        <XCircle className="w-4 h-4 text-dnc-error" />
                      ) : (
                        <FileText className="w-4 h-4 text-dnc-info" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{activity.number}</p>
                      <p className="text-dnc-gray-400 text-xs">{activity.result}</p>
                      <p className="text-dnc-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/agent/activity" className="block mt-4 text-center text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                View All Activity
              </Link>
            </motion.div>

            {/* Compliance Status */}
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
                  <h3 className="text-white font-semibold mb-1">Compliance Status</h3>
                  <p className="text-dnc-gray-400 text-sm">All checks passed</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">TCPA Compliance</span>
                  <span className="text-dnc-success font-medium">✓ Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">Terms Accepted</span>
                  <span className="text-dnc-success font-medium">✓ Yes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dnc-gray-400">Last Training</span>
                  <span className="text-white">2 days ago</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
