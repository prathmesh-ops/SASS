"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Users,
  Settings,
  Palette,
  CreditCard,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Activity,
  CheckCircle2,
  XCircle,
  Edit,
  Save,
  Upload,
  Trash2,
  Plus,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { useTenant } from "../../../../components/TenantProvider";

export default function OrganizationDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  // Mock organization data
  const organization = {
    id: 1,
    name: "WestUSA Realty",
    subdomain: "westusa",
    fullDomain: "westusa.donotcall.com",
    plan: "Enterprise",
    status: "active",
    created: "2024-01-15",
    industry: "Real Estate",
    location: "California, USA",
    website: "https://westusa.com",
    phone: "+1 (555) 123-4567",
    email: "contact@westusa.com",
    users: 48,
    activeUsers: 45,
    totalEntries: 12847,
    verifications: 45678,
    mrr: "$2,499",
    branding: {
      primaryColor: "#ff5722",
      logo: null,
      customDomain: null
    },
    admins: [
      { name: "John Smith", email: "john@westusa.com", role: "Owner", lastLogin: "2 hours ago" },
      { name: "Sarah Johnson", email: "sarah@westusa.com", role: "Admin", lastLogin: "5 hours ago" }
    ],
    features: {
      dncVerification: true,
      bulkOperations: true,
      mobileApp: true,
      apiAccess: true,
      customBranding: true,
      advancedAnalytics: true,
      whatsappBot: true,
      voiceBot: true,
      browserExtension: true,
      prioritySupport: true
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "users", label: "Users", icon: Users },
    { id: "branding", label: "Branding", icon: Palette },
    { id: "layout", label: "Layout", icon: Settings },
    { id: "features", label: "Features", icon: Settings },
    { id: "billing", label: "Billing", icon: CreditCard }
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
        {/* Back Button */}
        <Link
          href="/super-admin/organizations"
          className="inline-flex items-center space-x-2 text-dnc-gray-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Organizations</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-dark mb-8"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-dnc-orange/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-dnc-orange" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{organization.name}</h1>
                <div className="flex items-center space-x-4 text-sm text-dnc-gray-400">
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{organization.fullDomain}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Created {organization.created}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {organization.status === "active" ? (
                <span className="status-callable">Active</span>
              ) : (
                <span className="status-restricted">Suspended</span>
              )}
              <button className="btn-secondary flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-dark mb-8"
        >
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-dnc-orange text-white"
                    : "text-dnc-gray-400 hover:text-white hover:bg-dnc-dark-lighter"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="card-dark">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-dnc-gray-400 text-sm">Total Users</span>
                    <Users className="w-5 h-5 text-dnc-orange" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{organization.users}</div>
                  <div className="text-sm text-dnc-success">{organization.activeUsers} active</div>
                </div>

                <div className="card-dark">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-dnc-gray-400 text-sm">Total Entries</span>
                    <Activity className="w-5 h-5 text-dnc-info" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{organization.totalEntries.toLocaleString()}</div>
                  <div className="text-sm text-dnc-gray-400">In IDNC</div>
                </div>

                <div className="card-dark">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-dnc-gray-400 text-sm">Verifications</span>
                    <CheckCircle2 className="w-5 h-5 text-dnc-success" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{organization.verifications.toLocaleString()}</div>
                  <div className="text-sm text-dnc-gray-400">All time</div>
                </div>

                <div className="card-dark">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-dnc-gray-400 text-sm">Monthly Revenue</span>
                    <CreditCard className="w-5 h-5 text-dnc-success" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{organization.mrr}</div>
                  <div className="text-sm text-dnc-success">+12.5%</div>
                </div>
              </motion.div>

              {/* Organization Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Organization Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Industry</label>
                    <div className="text-white">{organization.industry}</div>
                  </div>
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Location</label>
                    <div className="flex items-center space-x-2 text-white">
                      <MapPin className="w-4 h-4 text-dnc-gray-400" />
                      <span>{organization.location}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Email</label>
                    <div className="flex items-center space-x-2 text-white">
                      <Mail className="w-4 h-4 text-dnc-gray-400" />
                      <span>{organization.email}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Phone</label>
                    <div className="flex items-center space-x-2 text-white">
                      <Phone className="w-4 h-4 text-dnc-gray-400" />
                      <span>{organization.phone}</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm text-dnc-gray-400 mb-2">Website</label>
                    <div className="flex items-center space-x-2 text-white">
                      <Globe className="w-4 h-4 text-dnc-gray-400" />
                      <a href={organization.website} target="_blank" rel="noopener noreferrer" className="text-dnc-orange hover:text-dnc-orange-light">
                        {organization.website}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Admin Users */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-dark"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Admin Users</h2>
                  <button className="btn-secondary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Admin</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {organization.admins.map((admin, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-dnc-dark-lighter rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dnc-orange/10 rounded-full flex items-center justify-center">
                          <span className="text-dnc-orange font-medium">
                            {admin.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{admin.name}</div>
                          <div className="text-dnc-gray-400 text-sm">{admin.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-dnc-gray-400 text-xs">Last login</div>
                          <div className="text-white text-sm">{admin.lastLogin}</div>
                        </div>
                        <span className="px-3 py-1 bg-dnc-orange/10 text-dnc-orange rounded-full text-xs font-medium">
                          {admin.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Subscription Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Subscription</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Current Plan</label>
                    <span className="inline-flex px-3 py-1.5 bg-dnc-orange/10 text-dnc-orange border border-dnc-orange/20 rounded-lg font-medium">
                      {organization.plan}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Monthly Cost</label>
                    <div className="text-2xl font-bold text-white">{organization.mrr}</div>
                  </div>
                  <div>
                    <label className="block text-sm text-dnc-gray-400 mb-2">Next Billing</label>
                    <div className="text-white">April 1, 2024</div>
                  </div>
                  <button className="btn-secondary w-full">Change Plan</button>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition text-left">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-dnc-info" />
                      <span className="text-white font-medium">Send Email</span>
                    </div>
                  </button>
                  <button className="w-full p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition text-left">
                    <div className="flex items-center space-x-3">
                      <Activity className="w-5 h-5 text-dnc-success" />
                      <span className="text-white font-medium">View Activity</span>
                    </div>
                  </button>
                  <button className="w-full p-3 bg-dnc-dark-lighter hover:bg-dnc-dark-border rounded-lg transition text-left">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-dnc-warning" />
                      <span className="text-white font-medium">Suspend Account</span>
                    </div>
                  </button>
                  <button className="w-full p-3 bg-dnc-error/10 hover:bg-dnc-error/20 border border-dnc-error/20 rounded-lg transition text-left">
                    <div className="flex items-center space-x-3">
                      <Trash2 className="w-5 h-5 text-dnc-error" />
                      <span className="text-dnc-error font-medium">Delete Organization</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Feature Access Control</h2>
              <button className="btn-primary flex items-center space-x-2">
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(organization.features).map(([key, enabled]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-dnc-dark-lighter rounded-lg">
                  <div className="flex items-center space-x-3">
                    {enabled ? (
                      <CheckCircle2 className="w-5 h-5 text-dnc-success" />
                    ) : (
                      <XCircle className="w-5 h-5 text-dnc-gray-600" />
                    )}
                    <span className="text-white font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-dnc-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-dnc-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dnc-orange"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "branding" && <BrandingTab />}

        {activeTab === "layout" && <LayoutTab />}
      </div>
    </div>
  );
}

function BrandingTab() {
  const { branding, setBranding } = useTenant();
  const [local, setLocal] = useState(branding);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLocal({ ...local, logoUrl: url });
    setBranding({ logoUrl: url });
  };

  const applyChanges = () => setBranding(local);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card-dark"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Branding</h2>
        <button onClick={applyChanges} className="btn-primary flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Tenant Name</label>
              <input
                type="text"
                value={local.tenantName}
                onChange={(e) => setLocal({ ...local, tenantName: e.target.value })}
                className="input-dark w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Primary Color</label>
              <input
                type="color"
                value={local.primaryColor}
                onChange={(e) => setLocal({ ...local, primaryColor: e.target.value })}
                className="input-dark w-full h-10 p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Secondary Color</label>
              <input
                type="color"
                value={local.secondaryColor}
                onChange={(e) => setLocal({ ...local, secondaryColor: e.target.value })}
                className="input-dark w-full h-10 p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Accent Color</label>
              <input
                type="color"
                value={local.accentColor}
                onChange={(e) => setLocal({ ...local, accentColor: e.target.value })}
                className="input-dark w-full h-10 p-1"
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Logo</label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-dnc-dark-lighter rounded-lg flex items-center justify-center overflow-hidden">
                {local.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={local.logoUrl} alt="logo" className="object-contain w-full h-full" />
                ) : (
                  <Shield className="w-8 h-8 text-dnc-gray-500" />
                )}
              </div>
              <div>
                <input id="tenant-logo" type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
                <label htmlFor="tenant-logo" className="btn-secondary inline-flex items-center space-x-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Upload Logo</span>
                </label>
              </div>
            </div>
          </div>

          {/* Custom CSS */}
          <div>
            <label className="block text-sm font-medium text-dnc-gray-300 mb-2">Custom CSS</label>
            <textarea
              rows={6}
              value={local.customCSS || ""}
              onChange={(e) => setLocal({ ...local, customCSS: e.target.value })}
              placeholder=":root { /* define extra variables */ }\n.header{ /* styles */ }"
              className="input-dark w-full font-mono text-sm"
            />
            <p className="text-dnc-gray-500 text-xs mt-2">This CSS is injected globally for the tenant.</p>
          </div>

          {/* Email Templates Placeholder */}
          <div className="border-t border-dnc-dark-border pt-6">
            <h3 className="text-white font-semibold mb-3">Email Templates (Preview)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-dnc-dark-lighter rounded-lg">
                <div className="text-dnc-gray-400 text-xs mb-2">Password Reset</div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: local.primaryColor + "20" }}>
                  <div className="text-white font-semibold">{local.tenantName}</div>
                  <div className="text-dnc-gray-300 text-sm mt-2">Click the button below to reset your password.</div>
                </div>
              </div>
              <div className="p-4 bg-dnc-dark-lighter rounded-lg">
                <div className="text-dnc-gray-400 text-xs mb-2">Invite Agent</div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: local.accentColor + "20" }}>
                  <div className="text-white font-semibold">You're invited to {local.tenantName}</div>
                  <div className="text-dnc-gray-300 text-sm mt-2">Accept the invitation to get started.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div>
          <div className="p-4 bg-dnc-dark-lighter rounded-lg border border-dnc-dark-border">
            <div className="text-dnc-gray-400 text-sm mb-3">Live Preview</div>
            <div className="rounded-lg overflow-hidden border border-dnc-dark-border">
              <div className="p-4" style={{ backgroundColor: local.primaryColor }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 rounded-lg" />
                  <span className="text-white font-semibold">{local.tenantName}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="h-2 w-24 rounded" style={{ backgroundColor: local.accentColor }}></div>
                <div className="mt-4 text-dnc-gray-300 text-sm">
                  Accent elements use the accent color. Custom CSS will apply globally.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LayoutTab() {
  const { layout, setLayout } = useTenant();
  const [adminWidgets, setAdminWidgets] = useState(layout.adminDashboardWidgets);
  const [agentWidgets, setAgentWidgets] = useState(layout.agentDashboardWidgets);

  const move = (arr: string[], setArr: (v: string[]) => void, index: number, dir: -1 | 1) => {
    const next = arr.slice();
    const swap = index + dir;
    if (swap < 0 || swap >= next.length) return;
    const tmp = next[index];
    next[index] = next[swap];
    next[swap] = tmp;
    setArr(next);
  };

  const save = () => setLayout({ adminDashboardWidgets: adminWidgets, agentDashboardWidgets: agentWidgets });

  const WidgetList = ({ title, items, setItems }: { title: string; items: string[]; setItems: (v: string[]) => void }) => (
    <div className="p-4 bg-dnc-dark-lighter rounded-lg border border-dnc-dark-border">
      <div className="text-white font-semibold mb-3">{title}</div>
      <div className="space-y-2">
        {items.map((w, i) => (
          <div key={w} className="flex items-center justify-between p-2 bg-dnc-dark rounded-lg">
            <span className="text-dnc-gray-300 text-sm">{w}</span>
            <div className="space-x-2">
              <button onClick={() => move(items, setItems, i, -1)} className="px-2 py-1 bg-dnc-dark-border rounded text-white">↑</button>
              <button onClick={() => move(items, setItems, i, 1)} className="px-2 py-1 bg-dnc-dark-border rounded text-white">↓</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card-dark"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Layout Customization</h2>
        <button onClick={save} className="btn-primary flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WidgetList title="Admin Dashboard Widgets" items={adminWidgets} setItems={setAdminWidgets} />
        <WidgetList title="Agent Dashboard Widgets" items={agentWidgets} setItems={setAgentWidgets} />
      </div>

      <div className="mt-6 text-dnc-gray-500 text-sm">
        Customize the order of widgets. Future enhancement: per-role visibility and custom navigation menus.
      </div>
    </motion.div>
  );
}
