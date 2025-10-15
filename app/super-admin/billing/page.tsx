"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  DollarSign,
  Download,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  FileText,
  TrendingUp,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const stats = [
    {
      label: "Total Revenue (MTD)",
      value: "$48,750",
      change: "+18.2%",
      icon: DollarSign,
      color: "success"
    },
    {
      label: "Pending Payments",
      value: "$3,450",
      change: "5 invoices",
      icon: Clock,
      color: "warning"
    },
    {
      label: "Failed Payments",
      value: "$1,200",
      change: "2 invoices",
      icon: XCircle,
      color: "error"
    },
    {
      label: "Collected (MTD)",
      value: "$45,300",
      change: "+15.8%",
      icon: CheckCircle2,
      color: "success"
    }
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      organization: "WestUSA Realty",
      amount: 2499,
      status: "paid",
      dueDate: "2024-03-01",
      paidDate: "2024-02-28",
      plan: "Enterprise",
      period: "March 2024"
    },
    {
      id: "INV-2024-002",
      organization: "RealtyHub Inc",
      amount: 1299,
      status: "paid",
      dueDate: "2024-03-03",
      paidDate: "2024-03-02",
      plan: "Premium",
      period: "March 2024"
    },
    {
      id: "INV-2024-003",
      organization: "Pacific Properties",
      amount: 1299,
      status: "pending",
      dueDate: "2024-03-18",
      paidDate: null,
      plan: "Premium",
      period: "March 2024"
    },
    {
      id: "INV-2024-004",
      organization: "Metro Real Estate",
      amount: 499,
      status: "paid",
      dueDate: "2024-03-05",
      paidDate: "2024-03-04",
      plan: "Basic",
      period: "March 2024"
    },
    {
      id: "INV-2024-005",
      organization: "Summit Realty Group",
      amount: 499,
      status: "failed",
      dueDate: "2024-02-28",
      paidDate: null,
      plan: "Basic",
      period: "February 2024"
    },
    {
      id: "INV-2024-006",
      organization: "Coastal Homes",
      amount: 0,
      status: "pending",
      dueDate: "2024-03-20",
      paidDate: null,
      plan: "Free",
      period: "Trial Period"
    },
    {
      id: "INV-2024-007",
      organization: "Highland Properties",
      amount: 2499,
      status: "overdue",
      dueDate: "2024-02-15",
      paidDate: null,
      plan: "Enterprise",
      period: "February 2024"
    },
    {
      id: "INV-2024-008",
      organization: "Sunrise Realty",
      amount: 1299,
      status: "paid",
      dueDate: "2024-03-10",
      paidDate: "2024-03-09",
      plan: "Premium",
      period: "March 2024"
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || invoice.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <span className="status-callable">Paid</span>;
      case "pending":
        return <span className="status-pending">Pending</span>;
      case "failed":
        return <span className="status-restricted">Failed</span>;
      case "overdue":
        return <span className="status-restricted">Overdue</span>;
      default:
        return <span className="status-pending">{status}</span>;
    }
  };

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
                <Link href="/super-admin/subscriptions" className="text-dnc-gray-400 hover:text-white transition">
                  Subscriptions
                </Link>
                <Link href="/super-admin/billing" className="text-white font-medium">
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
            <h1 className="text-3xl font-bold text-white mb-2">Billing & Invoices</h1>
            <p className="text-dnc-gray-400">Manage payments, invoices, and revenue tracking</p>
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
                <div className={`w-10 h-10 bg-dnc-${
                  stat.color === 'success' ? 'success' : 
                  stat.color === 'warning' ? 'warning' : 
                  stat.color === 'error' ? 'error' : 'info'
                }/10 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-dnc-${
                    stat.color === 'success' ? 'success' : 
                    stat.color === 'warning' ? 'warning' : 
                    stat.color === 'error' ? 'error' : 'info'
                  }`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className={`text-sm ${
                stat.color === 'success' ? 'text-dnc-success' : 
                stat.color === 'warning' ? 'text-dnc-warning' : 
                'text-dnc-error'
              }`}>
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-dark mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">Revenue Trends</h2>
              <p className="text-sm text-dnc-gray-400">Monthly recurring revenue over time</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 bg-dnc-orange/10 text-dnc-orange rounded-lg text-sm font-medium">
                6 Months
              </button>
              <button className="px-3 py-1.5 hover:bg-dnc-dark-lighter text-dnc-gray-400 rounded-lg text-sm font-medium transition">
                1 Year
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

        {/* Filters & Search */}
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
                placeholder="Search invoices or organizations..."
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
                onClick={() => setFilterStatus("paid")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "paid"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Paid
              </button>
              <button
                onClick={() => setFilterStatus("pending")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "pending"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus("failed")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === "failed"
                    ? "bg-dnc-orange text-white"
                    : "bg-dnc-dark-lighter text-dnc-gray-400 hover:text-white"
                }`}
              >
                Failed
              </button>
            </div>
          </div>
        </motion.div>

        {/* Invoices Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card-dark"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Invoices</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dnc-dark-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Organization</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Period</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Due Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-dnc-gray-400">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-dnc-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice, index) => (
                  <tr key={invoice.id} className="border-b border-dnc-dark-border hover:bg-dnc-dark-lighter transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-dnc-gray-400" />
                        <span className="text-white font-medium">{invoice.id}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white">{invoice.organization}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        invoice.plan === "Enterprise" ? "bg-dnc-orange/10 text-dnc-orange border border-dnc-orange/20" :
                        invoice.plan === "Premium" ? "bg-dnc-info/10 text-dnc-info border border-dnc-info/20" :
                        invoice.plan === "Basic" ? "bg-dnc-success/10 text-dnc-success border border-dnc-success/20" :
                        "bg-dnc-gray-800 text-dnc-gray-400 border border-dnc-gray-700"
                      }`}>
                        {invoice.plan}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-dnc-gray-400 text-sm">{invoice.period}</td>
                    <td className="py-4 px-4 text-white font-semibold">
                      ${invoice.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1 text-dnc-gray-400 text-sm">
                        <Calendar className="w-3 h-3" />
                        <span>{invoice.dueDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(invoice.status)}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <Download className="w-4 h-4 text-dnc-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-dnc-dark-border rounded-lg transition">
                          <FileText className="w-4 h-4 text-dnc-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInvoices.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No invoices found</h3>
              <p className="text-dnc-gray-400">
                {searchQuery ? "Try adjusting your search criteria" : "No invoices match the selected filter"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
