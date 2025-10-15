"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Activity,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  UserPlus
} from "lucide-react";
import Link from "next/link";

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@westusa.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2 hours ago",
      totalEntries: 342,
      thisWeek: 24,
      thisMonth: 98,
      verifications: 1247,
      complianceStatus: "compliant"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@westusa.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      joinDate: "2024-01-20",
      lastLogin: "5 hours ago",
      totalEntries: 298,
      thisWeek: 18,
      thisMonth: 82,
      verifications: 1089,
      complianceStatus: "compliant"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@westusa.com",
      phone: "+1 (555) 345-6789",
      status: "active",
      joinDate: "2024-02-01",
      lastLogin: "1 day ago",
      totalEntries: 276,
      thisWeek: 15,
      thisMonth: 71,
      verifications: 956,
      complianceStatus: "compliant"
    },
    {
      id: 4,
      name: "David Kim",
      email: "d.kim@westusa.com",
      phone: "+1 (555) 456-7890",
      status: "active",
      joinDate: "2024-02-10",
      lastLogin: "3 days ago",
      totalEntries: 251,
      thisWeek: 12,
      thisMonth: 65,
      verifications: 892,
      complianceStatus: "compliant"
    },
    {
      id: 5,
      name: "Jessica Taylor",
      email: "j.taylor@westusa.com",
      phone: "+1 (555) 567-8901",
      status: "inactive",
      joinDate: "2024-01-25",
      lastLogin: "2 weeks ago",
      totalEntries: 234,
      thisWeek: 0,
      thisMonth: 5,
      verifications: 834,
      complianceStatus: "pending"
    }
  ];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || agent.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    {
      label: "Total Agents",
      value: "48",
      change: "+4 this month",
      icon: Users,
      color: "orange"
    },
    {
      label: "Active Agents",
      value: "45",
      change: "93.8% of total",
      icon: CheckCircle2,
      color: "success"
    },
    {
      label: "Avg Entries/Agent",
      value: "267",
      change: "+12% this month",
      icon: Activity,
      color: "info"
    },
    {
      label: "New This Month",
      value: "4",
      change: "All onboarded",
      icon: UserPlus,
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
                <Link href="/admin/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/admin/agents" className="text-white font-medium">
                  Agents
                </Link>
                <Link href="/admin/registry" className="text-dnc-gray-400 hover:text-white transition">
                  Registry
                </Link>
                <Link href="/admin/activity" className="text-dnc-gray-400 hover:text-white transition">
                  Activity Logs
                </Link>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-medium">AD</span>
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
            <h1 className="text-3xl font-bold text-white mb-2">Agent Management</h1>
            <p className="text-dnc-gray-400">Manage and monitor all agents in your organization</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Invite Agent</span>
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
              <div className="text-sm text-dnc-gray-400">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-dark mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
              <input
                type="text"
                placeholder="Search agents by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-dark w-full pl-11"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "all"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                All ({agents.length})
              </button>
              <button
                onClick={() => setFilterStatus("active")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "active"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Active ({agents.filter(a => a.status === "active").length})
              </button>
              <button
                onClick={() => setFilterStatus("inactive")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "inactive"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Inactive ({agents.filter(a => a.status === "inactive").length})
              </button>
            </div>

            <div className="flex gap-2">
              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Agents Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card-dark"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dnc-dark-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Agent</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Contact</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Entries</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Verifications</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Last Login</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-dnc-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAgents.map((agent, index) => (
                  <tr key={agent.id} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dnc-orange/10 rounded-full flex items-center justify-center">
                          <span className="text-dnc-orange font-medium text-sm">
                            {agent.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{agent.name}</div>
                          <div className="text-dnc-gray-400 text-xs flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Joined {agent.joinDate}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-white text-sm">
                          <Mail className="w-3 h-3 text-dnc-gray-400" />
                          <span>{agent.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-dnc-gray-400 text-sm">
                          <Phone className="w-3 h-3" />
                          <span>{agent.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-white font-semibold text-lg">{agent.totalEntries}</div>
                        <div className="text-dnc-gray-400 text-xs">
                          {agent.thisWeek} this week
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-white font-medium">{agent.verifications}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2 text-dnc-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{agent.lastLogin}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {agent.status === "active" ? (
                        <span className="status-callable">Active</span>
                      ) : (
                        <span className="status-restricted">Inactive</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/admin/agents/${agent.id}`}
                          className="p-2 hover:bg-dnc-dark-border rounded-lg transition"
                        >
                          <Activity className="w-4 h-4 text-dnc-gray-400" />
                        </Link>
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <Edit className="w-4 h-4 text-dnc-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <MoreVertical className="w-4 h-4 text-dnc-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No agents found</h3>
              <p className="text-dnc-gray-400">
                {searchQuery ? "Try adjusting your search criteria" : "Get started by inviting your first agent"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
