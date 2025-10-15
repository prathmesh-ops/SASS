"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Filter,
  Download,
  Upload,
  Edit,
  Trash2,
  User,
  Phone,
  Calendar,
  FileText,
  MoreVertical,
  CheckCircle2,
  XCircle,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function RegistryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const registryEntries = [
    {
      id: 1,
      consumerName: "John Smith",
      phoneNumbers: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      agent: "Sarah Johnson",
      dateAdded: "2024-03-15",
      status: "active",
      reason: "Consumer request",
      notes: "Requested via phone call",
      source: "manual"
    },
    {
      id: 2,
      consumerName: "Sarah Johnson",
      phoneNumbers: ["+1 (555) 234-5678"],
      agent: "Michael Chen",
      dateAdded: "2024-03-14",
      status: "active",
      reason: "Previous complaint",
      notes: "Filed complaint on 2024-02-10",
      source: "manual"
    },
    {
      id: 3,
      consumerName: "Michael Chen",
      phoneNumbers: ["+1 (555) 345-6789", "+1 (555) 345-6790"],
      agent: "Emily Rodriguez",
      dateAdded: "2024-03-13",
      status: "active",
      reason: "Consumer request",
      notes: "Email request received",
      source: "bulk"
    },
    {
      id: 4,
      consumerName: "Emily Rodriguez",
      phoneNumbers: ["+1 (555) 456-7890"],
      agent: "David Kim",
      dateAdded: "2024-03-10",
      status: "removed",
      reason: "Consumer request",
      notes: "Removed on 2024-03-20",
      source: "manual"
    },
    {
      id: 5,
      consumerName: "David Kim",
      phoneNumbers: ["+1 (555) 567-8901"],
      agent: "Jessica Taylor",
      dateAdded: "2024-03-08",
      status: "active",
      reason: "Business closure",
      notes: "Business no longer operating",
      source: "bulk"
    },
    {
      id: 6,
      consumerName: "Jessica Taylor",
      phoneNumbers: ["+1 (555) 678-9012"],
      agent: "Sarah Johnson",
      dateAdded: "2024-03-05",
      status: "active",
      reason: "Consumer request",
      notes: "Multiple complaints received",
      source: "manual"
    }
  ];

  const filteredEntries = registryEntries.filter(entry => {
    const matchesSearch = 
      entry.consumerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.phoneNumbers.some(num => num.includes(searchQuery)) ||
      entry.agent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || entry.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    {
      label: "Total Entries",
      value: "12,847",
      change: "+234 this week",
      icon: FileText,
      color: "orange"
    },
    {
      label: "Active Entries",
      value: "12,500",
      change: "97.3% of total",
      icon: CheckCircle2,
      color: "success"
    },
    {
      label: "Added This Week",
      value: "234",
      change: "+18% from last week",
      icon: BarChart3,
      color: "info"
    },
    {
      label: "Removed",
      value: "347",
      change: "2.7% of total",
      icon: XCircle,
      color: "gray"
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
                <Link href="/admin/agents" className="text-dnc-gray-400 hover:text-white transition">
                  Agents
                </Link>
                <Link href="/admin/registry" className="text-white font-medium">
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
            <h1 className="text-3xl font-bold text-white mb-2">Internal DNC Registry</h1>
            <p className="text-dnc-gray-400">Manage and monitor all IDNC entries across your organization</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="btn-secondary flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Registry</span>
            </button>
          </div>
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
                <div className={`w-10 h-10 bg-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : stat.color === 'success' ? 'success' : 'gray-700'}/10 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-dnc-${stat.color === 'orange' ? 'orange' : stat.color === 'info' ? 'info' : stat.color === 'success' ? 'success' : 'gray-400'}`} />
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
                placeholder="Search by consumer name, phone, or agent..."
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
                All
              </button>
              <button
                onClick={() => setFilterStatus("active")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "active"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterStatus("removed")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "removed"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Removed
              </button>
            </div>

            <button className="btn-secondary flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Registry Table */}
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Consumer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Phone Numbers</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Agent</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Reason</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Date Added</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Source</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-dnc-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dnc-orange/10 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-dnc-orange" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{entry.consumerName}</div>
                          {entry.notes && (
                            <div className="text-dnc-gray-400 text-xs truncate max-w-[200px]">
                              {entry.notes}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        {entry.phoneNumbers.map((num, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-white text-sm">
                            <Phone className="w-3 h-3 text-dnc-gray-400" />
                            <span>{num}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-white text-sm">{entry.agent}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-white text-sm">{entry.reason}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2 text-dnc-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{entry.dateAdded}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        entry.source === "manual"
                          ? "bg-dnc-info/10 text-dnc-info border border-dnc-info/20"
                          : "bg-dnc-warning/10 text-dnc-warning border border-dnc-warning/20"
                      }`}>
                        {entry.source === "manual" ? "Manual" : "Bulk"}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {entry.status === "active" ? (
                        <span className="status-callable">Active</span>
                      ) : (
                        <span className="status-restricted">Removed</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <Edit className="w-4 h-4 text-dnc-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <Trash2 className="w-4 h-4 text-dnc-error" />
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

          {filteredEntries.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No entries found</h3>
              <p className="text-dnc-gray-400">
                {searchQuery ? "Try adjusting your search criteria" : "No registry entries available"}
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredEntries.length > 0 && (
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-dnc-dark-border">
              <div className="text-dnc-gray-400 text-sm">
                Showing 1-{filteredEntries.length} of {registryEntries.length} entries
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg text-white transition">
                  Previous
                </button>
                <button className="px-4 py-2 bg-dnc-orange text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg text-white transition">
                  2
                </button>
                <button className="px-4 py-2 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg text-white transition">
                  3
                </button>
                <button className="px-4 py-2 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg text-white transition">
                  Next
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
