"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Calendar,
  User,
  Phone,
  FileText,
  MoreVertical,
  CheckCircle2,
  XCircle
} from "lucide-react";
import Link from "next/link";

export default function EntriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const entries = [
    {
      id: 1,
      consumerName: "John Smith",
      phoneNumbers: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      status: "active",
      dateAdded: "2024-03-15",
      reason: "Consumer request",
      notes: "Requested via phone call",
      addedBy: "You"
    },
    {
      id: 2,
      consumerName: "Sarah Johnson",
      phoneNumbers: ["+1 (555) 234-5678"],
      status: "active",
      dateAdded: "2024-03-14",
      reason: "Previous complaint",
      notes: "Filed complaint on 2024-02-10",
      addedBy: "You"
    },
    {
      id: 3,
      consumerName: "Michael Chen",
      phoneNumbers: ["+1 (555) 345-6789", "+1 (555) 345-6790"],
      status: "active",
      dateAdded: "2024-03-13",
      reason: "Consumer request",
      notes: "Email request received",
      addedBy: "You"
    },
    {
      id: 4,
      consumerName: "Emily Rodriguez",
      phoneNumbers: ["+1 (555) 456-7890"],
      status: "removed",
      dateAdded: "2024-03-10",
      reason: "Consumer request",
      notes: "Removed on 2024-03-20",
      addedBy: "You"
    },
    {
      id: 5,
      consumerName: "David Kim",
      phoneNumbers: ["+1 (555) 567-8901"],
      status: "active",
      dateAdded: "2024-03-08",
      reason: "Business closure",
      notes: "Business no longer operating",
      addedBy: "You"
    }
  ];

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = 
      entry.consumerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.phoneNumbers.some(num => num.includes(searchQuery));
    const matchesFilter = filterStatus === "all" || entry.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
                <Link href="/agent/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/agent/verify" className="text-dnc-gray-400 hover:text-white transition">
                  Verify
                </Link>
                <Link href="/agent/entries" className="text-white font-medium">
                  My Entries
                </Link>
                <Link href="/agent/bulk" className="text-dnc-gray-400 hover:text-white transition">
                  Bulk Operations
                </Link>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-dnc-orange rounded-full flex items-center justify-center">
              <span className="text-white font-medium">JD</span>
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
            <h1 className="text-3xl font-bold text-white mb-2">My Entries</h1>
            <p className="text-dnc-gray-400">Manage your Internal DNC (IDNC) entries</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Entry</span>
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-dnc-gray-400 text-sm">Total Entries</span>
              <FileText className="w-5 h-5 text-dnc-orange" />
            </div>
            <div className="text-3xl font-bold text-white">342</div>
            <div className="text-sm text-dnc-gray-400 mt-1">All time</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-dnc-gray-400 text-sm">Active</span>
              <CheckCircle2 className="w-5 h-5 text-dnc-success" />
            </div>
            <div className="text-3xl font-bold text-white">318</div>
            <div className="text-sm text-dnc-success mt-1">93% of total</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-dark"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-dnc-gray-400 text-sm">This Week</span>
              <Calendar className="w-5 h-5 text-dnc-info" />
            </div>
            <div className="text-3xl font-bold text-white">24</div>
            <div className="text-sm text-dnc-info mt-1">+8 from last week</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-dark"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-dnc-gray-400 text-sm">Removed</span>
              <XCircle className="w-5 h-5 text-dnc-gray-500" />
            </div>
            <div className="text-3xl font-bold text-white">24</div>
            <div className="text-sm text-dnc-gray-400 mt-1">7% of total</div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card-dark mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
              <input
                type="text"
                placeholder="Search by name or phone number..."
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

        {/* Entries Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-dark"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dnc-dark-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Consumer Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Phone Numbers</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Reason</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Date Added</th>
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
                          <div className="text-dnc-gray-400 text-xs">Added by {entry.addedBy}</div>
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
                      <div className="text-white text-sm">{entry.reason}</div>
                      {entry.notes && (
                        <div className="text-dnc-gray-400 text-xs mt-1">{entry.notes}</div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2 text-dnc-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{entry.dateAdded}</span>
                      </div>
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
              <p className="text-dnc-gray-400 mb-6">
                {searchQuery ? "Try adjusting your search criteria" : "Get started by adding your first entry"}
              </p>
              {!searchQuery && (
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Entry</span>
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Add Entry Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dnc-dark-card border border-dnc-dark-border rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Add to Internal DNC</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition"
              >
                <XCircle className="w-5 h-5 text-dnc-gray-400" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Consumer Name *
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="input-dark w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Phone Numbers *
                </label>
                <div className="space-y-2">
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="input-dark w-full"
                    required
                  />
                  <button type="button" className="text-dnc-orange hover:text-dnc-orange-light text-sm font-medium">
                    + Add another number
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Reason for Addition *
                </label>
                <select className="input-dark w-full" required>
                  <option value="">Select reason</option>
                  <option value="consumer-request">Consumer Request</option>
                  <option value="complaint">Previous Complaint</option>
                  <option value="business-closure">Business Closure</option>
                  <option value="legal-requirement">Legal Requirement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Notes
                </label>
                <textarea
                  placeholder="Additional information..."
                  rows={4}
                  className="input-dark w-full"
                />
              </div>

              <div className="flex items-center space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Add Entry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
