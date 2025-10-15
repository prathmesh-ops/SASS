"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Users,
  Globe,
  Settings,
  CheckCircle2,
  Clock,
  XCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const organizations = [
    {
      id: 1,
      name: "WestUSA Realty",
      subdomain: "westusa",
      fullDomain: "westusa.donotcall.com",
      plan: "Enterprise",
      status: "active",
      users: 48,
      admins: ["john@westusa.com", "sarah@westusa.com"],
      industry: "Real Estate",
      location: "California, USA",
      created: "2024-01-15",
      lastActive: "2 hours ago",
      mrr: "$2,499",
      logo: null
    },
    {
      id: 2,
      name: "RealtyHub Inc",
      subdomain: "realtyhub",
      fullDomain: "realtyhub.donotcall.com",
      plan: "Premium",
      status: "active",
      users: 32,
      admins: ["admin@realtyhub.com"],
      industry: "Real Estate",
      location: "Texas, USA",
      created: "2024-02-03",
      lastActive: "5 hours ago",
      mrr: "$1,299",
      logo: null
    },
    {
      id: 3,
      name: "Pacific Properties",
      subdomain: "pacific",
      fullDomain: "pacific.donotcall.com",
      plan: "Premium",
      status: "active",
      users: 28,
      admins: ["contact@pacific.com"],
      industry: "Real Estate",
      location: "Oregon, USA",
      created: "2024-02-18",
      lastActive: "1 day ago",
      mrr: "$1,299",
      logo: null
    },
    {
      id: 4,
      name: "Metro Real Estate",
      subdomain: "metro",
      fullDomain: "metro.donotcall.com",
      plan: "Basic",
      status: "active",
      users: 15,
      admins: ["info@metro.com"],
      industry: "Real Estate",
      location: "New York, USA",
      created: "2024-03-05",
      lastActive: "3 days ago",
      mrr: "$499",
      logo: null
    },
    {
      id: 5,
      name: "Coastal Homes",
      subdomain: "coastal",
      fullDomain: "coastal.donotcall.com",
      plan: "Free",
      status: "trial",
      users: 5,
      admins: ["admin@coastal.com"],
      industry: "Real Estate",
      location: "Florida, USA",
      created: "2024-03-20",
      lastActive: "12 hours ago",
      mrr: "$0",
      logo: null
    },
    {
      id: 6,
      name: "Summit Realty Group",
      subdomain: "summit",
      fullDomain: "summit.donotcall.com",
      plan: "Basic",
      status: "suspended",
      users: 12,
      admins: ["contact@summit.com"],
      industry: "Real Estate",
      location: "Colorado, USA",
      created: "2024-01-28",
      lastActive: "2 weeks ago",
      mrr: "$0",
      logo: null
    }
  ];

  const filteredOrgs = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         org.subdomain.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || org.status === filterStatus;
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
                <Link href="/super-admin/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/super-admin/organizations" className="text-white font-medium">
                  Organizations
                </Link>
                <Link href="/super-admin/subscriptions" className="text-dnc-gray-400 hover:text-white transition">
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
            <h1 className="text-3xl font-bold text-white mb-2">Organizations</h1>
            <p className="text-dnc-gray-400">Manage all tenant organizations and their configurations</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Organization</span>
          </button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-dark mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
              <input
                type="text"
                placeholder="Search organizations..."
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
                All ({organizations.length})
              </button>
              <button
                onClick={() => setFilterStatus("active")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "active"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Active ({organizations.filter(o => o.status === "active").length})
              </button>
              <button
                onClick={() => setFilterStatus("trial")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "trial"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Trial ({organizations.filter(o => o.status === "trial").length})
              </button>
              <button
                onClick={() => setFilterStatus("suspended")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "suspended"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Suspended ({organizations.filter(o => o.status === "suspended").length})
              </button>
            </div>
          </div>
        </motion.div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOrgs.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-dark card-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-dnc-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-dnc-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{org.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-dnc-gray-400">
                      <Globe className="w-3 h-3" />
                      <span>{org.fullDomain}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {org.status === "active" ? (
                    <span className="status-callable">Active</span>
                  ) : org.status === "trial" ? (
                    <span className="status-pending">Trial</span>
                  ) : (
                    <span className="status-restricted">Suspended</span>
                  )}
                  <button className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition">
                    <MoreVertical className="w-4 h-4 text-dnc-gray-400" />
                  </button>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-dnc-gray-500 mb-1">Plan</div>
                  <div className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                    org.plan === "Enterprise" ? "bg-dnc-orange/10 text-dnc-orange border border-dnc-orange/20" :
                    org.plan === "Premium" ? "bg-dnc-info/10 text-dnc-info border border-dnc-info/20" :
                    org.plan === "Basic" ? "bg-dnc-success/10 text-dnc-success border border-dnc-success/20" :
                    "bg-dnc-gray-800 text-dnc-gray-400 border border-dnc-gray-700"
                  }`}>
                    {org.plan}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-dnc-gray-500 mb-1">MRR</div>
                  <div className="text-white font-semibold">{org.mrr}</div>
                </div>
                <div>
                  <div className="text-xs text-dnc-gray-500 mb-1">Users</div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-dnc-gray-400" />
                    <span className="text-white font-medium">{org.users}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-dnc-gray-500 mb-1">Last Active</div>
                  <div className="text-white text-sm">{org.lastActive}</div>
                </div>
              </div>

              {/* Admins */}
              <div className="mb-4">
                <div className="text-xs text-dnc-gray-500 mb-2">Admin Users</div>
                <div className="space-y-1">
                  {org.admins.map((admin, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-dnc-gray-400">
                      <Mail className="w-3 h-3" />
                      <span>{admin}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Industry */}
              <div className="flex items-center justify-between text-xs text-dnc-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{org.location}</span>
                </div>
                <span>{org.industry}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2 pt-4 border-t border-dnc-dark-border">
                <Link
                  href={`/super-admin/organizations/${org.id}`}
                  className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Configure</span>
                </Link>
                <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrgs.length === 0 && (
          <div className="card-dark text-center py-12">
            <Building2 className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No organizations found</h3>
            <p className="text-dnc-gray-400 mb-6">
              {searchQuery ? "Try adjusting your search criteria" : "Get started by creating your first organization"}
            </p>
            {!searchQuery && (
              <button 
                onClick={() => setShowCreateModal(true)}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create Organization</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Create Organization Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dnc-dark-card border border-dnc-dark-border rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Organization</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-dnc-dark-lighter rounded-lg transition"
              >
                <XCircle className="w-5 h-5 text-dnc-gray-400" />
              </button>
            </div>

            <form className="space-y-6">
              {/* Organization Name */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., WestUSA Realty"
                  className="input-dark w-full"
                  required
                />
              </div>

              {/* Subdomain */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Subdomain *
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="westusa"
                    className="input-dark flex-1"
                    required
                  />
                  <span className="text-dnc-gray-400">.donotcall.com</span>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Industry
                </label>
                <select className="input-dark w-full">
                  <option value="">Select industry</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="insurance">Insurance</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="finance">Financial Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., California, USA"
                  className="input-dark w-full"
                />
              </div>

              {/* Admin Email */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Primary Admin Email *
                </label>
                <input
                  type="email"
                  placeholder="admin@organization.com"
                  className="input-dark w-full"
                  required
                />
              </div>

              {/* Subscription Plan */}
              <div>
                <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                  Subscription Plan *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Free", "Basic", "Premium", "Enterprise"].map((plan) => (
                    <label key={plan} className="card-dark cursor-pointer hover:border-dnc-orange transition">
                      <input type="radio" name="plan" value={plan.toLowerCase()} className="sr-only" />
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{plan}</span>
                        <CheckCircle2 className="w-5 h-5 text-dnc-gray-600" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Create Organization
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
