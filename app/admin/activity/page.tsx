"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Filter,
  Download,
  Calendar,
  User,
  Phone,
  FileText,
  CheckCircle2,
  XCircle,
  LogIn,
  LogOut,
  Edit,
  Trash2,
  Activity,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function ActivityLogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState("today");

  const activityLogs = [
    {
      id: 1,
      type: "verification",
      agent: "Sarah Johnson",
      action: "Verified phone number",
      details: "+1 (555) 123-4567",
      result: "callable",
      timestamp: "2024-03-20 14:35:22",
      ipAddress: "192.168.1.100"
    },
    {
      id: 2,
      type: "add_entry",
      agent: "Michael Chen",
      action: "Added entry to IDNC",
      details: "John Smith - +1 (555) 234-5678",
      result: "success",
      timestamp: "2024-03-20 14:28:15",
      ipAddress: "192.168.1.101"
    },
    {
      id: 3,
      type: "verification",
      agent: "Emily Rodriguez",
      action: "Verified phone number",
      details: "+1 (555) 345-6789",
      result: "restricted",
      timestamp: "2024-03-20 14:15:43",
      ipAddress: "192.168.1.102"
    },
    {
      id: 4,
      type: "login",
      agent: "David Kim",
      action: "User logged in",
      details: "Successful authentication",
      result: "success",
      timestamp: "2024-03-20 14:00:00",
      ipAddress: "192.168.1.103"
    },
    {
      id: 5,
      type: "bulk_upload",
      agent: "Jessica Taylor",
      action: "Bulk verification completed",
      details: "150 numbers processed",
      result: "success",
      timestamp: "2024-03-20 13:45:30",
      ipAddress: "192.168.1.104"
    },
    {
      id: 6,
      type: "remove_entry",
      agent: "Sarah Johnson",
      action: "Removed entry from IDNC",
      details: "Consumer request - +1 (555) 456-7890",
      result: "success",
      timestamp: "2024-03-20 13:30:12",
      ipAddress: "192.168.1.100"
    },
    {
      id: 7,
      type: "edit_entry",
      agent: "Michael Chen",
      action: "Updated entry details",
      details: "Modified notes for +1 (555) 567-8901",
      result: "success",
      timestamp: "2024-03-20 13:15:45",
      ipAddress: "192.168.1.101"
    },
    {
      id: 8,
      type: "logout",
      agent: "Emily Rodriguez",
      action: "User logged out",
      details: "Session ended",
      result: "success",
      timestamp: "2024-03-20 13:00:00",
      ipAddress: "192.168.1.102"
    }
  ];

  const filteredLogs = activityLogs.filter(log => {
    const matchesSearch = 
      log.agent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || log.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "verification":
        return <CheckCircle2 className="w-5 h-5 text-dnc-info" />;
      case "add_entry":
        return <FileText className="w-5 h-5 text-dnc-success" />;
      case "remove_entry":
        return <Trash2 className="w-5 h-5 text-dnc-error" />;
      case "edit_entry":
        return <Edit className="w-5 h-5 text-dnc-warning" />;
      case "login":
        return <LogIn className="w-5 h-5 text-dnc-success" />;
      case "logout":
        return <LogOut className="w-5 h-5 text-dnc-gray-400" />;
      case "bulk_upload":
        return <Activity className="w-5 h-5 text-dnc-orange" />;
      default:
        return <Activity className="w-5 h-5 text-dnc-gray-400" />;
    }
  };

  const stats = [
    {
      label: "Total Activities Today",
      value: "1,247",
      change: "+12.5% from yesterday",
      icon: Activity,
      color: "orange"
    },
    {
      label: "Verifications",
      value: "892",
      change: "71.5% of activities",
      icon: CheckCircle2,
      color: "info"
    },
    {
      label: "IDNC Additions",
      value: "234",
      change: "18.8% of activities",
      icon: FileText,
      color: "success"
    },
    {
      label: "Active Sessions",
      value: "45",
      change: "93.8% of agents",
      icon: User,
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
                <Link href="/admin/agents" className="text-dnc-gray-400 hover:text-white transition">
                  Agents
                </Link>
                <Link href="/admin/registry" className="text-dnc-gray-400 hover:text-white transition">
                  Registry
                </Link>
                <Link href="/admin/activity" className="text-white font-medium">
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
            <h1 className="text-3xl font-bold text-white mb-2">Activity Logs</h1>
            <p className="text-dnc-gray-400">Comprehensive audit trail of all system activities</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Logs</span>
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
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
              <input
                type="text"
                placeholder="Search by agent, action, or details..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-dark w-full pl-11"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="input-dark"
              >
                <option value="all">All Activities</option>
                <option value="verification">Verifications</option>
                <option value="add_entry">Add Entry</option>
                <option value="remove_entry">Remove Entry</option>
                <option value="edit_entry">Edit Entry</option>
                <option value="login">Login</option>
                <option value="logout">Logout</option>
                <option value="bulk_upload">Bulk Upload</option>
              </select>

              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="input-dark"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>

              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Activity Logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card-dark"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Activity Timeline</h2>
          
          <div className="space-y-4">
            {filteredLogs.map((log, index) => (
              <div
                key={log.id}
                className="flex items-start space-x-4 p-4 bg-dnc-dark-lighter rounded-lg hover:bg-dnc-dark-border transition"
              >
                <div className="w-10 h-10 bg-dnc-dark-card rounded-full flex items-center justify-center flex-shrink-0">
                  {getActivityIcon(log.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white font-medium">{log.action}</h3>
                      <p className="text-dnc-gray-400 text-sm">{log.details}</p>
                    </div>
                    {log.result === "success" || log.result === "callable" ? (
                      <span className="status-callable ml-4">
                        {log.result === "callable" ? "Callable" : "Success"}
                      </span>
                    ) : log.result === "restricted" ? (
                      <span className="status-restricted ml-4">Restricted</span>
                    ) : null}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-dnc-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{log.agent}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{log.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Activity className="w-3 h-3" />
                      <span>{log.ipAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <Activity className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No activity logs found</h3>
              <p className="text-dnc-gray-400">
                {searchQuery ? "Try adjusting your search criteria" : "No activities recorded for the selected period"}
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredLogs.length > 0 && (
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-dnc-dark-border">
              <div className="text-dnc-gray-400 text-sm">
                Showing 1-{filteredLogs.length} of {activityLogs.length} logs
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
                  Next
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-dark mt-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Export Audit Logs</h2>
          <p className="text-dnc-gray-400 mb-6">
            Export activity logs for compliance reporting and audit purposes
          </p>
          
          <div className="flex items-center space-x-3">
            <button className="btn-secondary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export as CSV</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export as PDF</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Export</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
