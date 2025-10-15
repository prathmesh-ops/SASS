"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Phone,
  FileText,
  Clock,
  User,
  Calendar,
  Download,
  Upload
} from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [declaration, setDeclaration] = useState(false);

  const handleVerify = async () => {
    if (!phoneNumber || !declaration) return;
    
    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const isRestricted = Math.random() > 0.7;
      setVerificationResult({
        number: phoneNumber,
        status: isRestricted ? "restricted" : "callable",
        source: isRestricted ? "Internal DNC" : null,
        dateAdded: isRestricted ? "2024-02-15" : null,
        reason: isRestricted ? "Consumer request" : null,
        verifiedAt: new Date().toISOString(),
        verifiedBy: "John Doe"
      });
      setIsVerifying(false);
    }, 1500);
  };

  const recentVerifications = [
    {
      number: "+1 (555) 123-4567",
      status: "callable",
      time: "2 minutes ago",
      agent: "You"
    },
    {
      number: "+1 (555) 234-5678",
      status: "restricted",
      time: "15 minutes ago",
      agent: "You"
    },
    {
      number: "+1 (555) 345-6789",
      status: "callable",
      time: "1 hour ago",
      agent: "You"
    },
    {
      number: "+1 (555) 456-7890",
      status: "callable",
      time: "2 hours ago",
      agent: "You"
    },
    {
      number: "+1 (555) 567-8901",
      status: "restricted",
      time: "3 hours ago",
      agent: "You"
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
                <Link href="/agent/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/agent/verify" className="text-white font-medium">
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
            
            <div className="w-10 h-10 bg-dnc-orange rounded-full flex items-center justify-center">
              <span className="text-white font-medium">JD</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Verification Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-white mb-2">Number Verification</h1>
              <p className="text-dnc-gray-400">Verify phone numbers against Internal and National DNC registries</p>
            </motion.div>

            {/* Compliance Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dnc-info/10 border border-dnc-info/20 rounded-lg p-4"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-dnc-info flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Compliance Reminder</h3>
                  <p className="text-dnc-gray-300 text-sm">
                    Always verify numbers before making calls. Calling numbers on the DNC registry may result in penalties.
                    <Link href="/compliance" className="text-dnc-info hover:text-dnc-info-light ml-1">
                      Learn more →
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Verification Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Single Number Verification</h2>
              
              <div className="space-y-6">
                {/* Phone Number Input */}
                <div>
                  <label className="block text-sm font-medium text-dnc-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="input-dark w-full pl-11"
                    />
                  </div>
                  <p className="text-dnc-gray-500 text-xs mt-1">
                    Enter phone number with country code
                  </p>
                </div>

                {/* Declaration Checkbox */}
                <div className="bg-dnc-dark-lighter rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={declaration}
                      onChange={(e) => setDeclaration(e.target.checked)}
                      className="mt-1 w-4 h-4 text-dnc-orange bg-dnc-dark border-dnc-gray-600 rounded focus:ring-dnc-orange focus:ring-2"
                    />
                    <div>
                      <span className="text-white font-medium">
                        I confirm I am responsible for this verification
                      </span>
                      <p className="text-dnc-gray-400 text-sm mt-1">
                        This verification will be logged in the audit trail with your name and timestamp.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleVerify}
                  disabled={!phoneNumber || !declaration || isVerifying}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Verify Number</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`card-dark border-2 ${
                  verificationResult.status === "callable"
                    ? "border-dnc-success bg-dnc-success/5"
                    : "border-dnc-error bg-dnc-error/5"
                }`}
              >
                <div className="flex items-start space-x-4">
                  {verificationResult.status === "callable" ? (
                    <div className="w-16 h-16 bg-dnc-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-dnc-success" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-dnc-error/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-8 h-8 text-dnc-error" />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      verificationResult.status === "callable" ? "text-dnc-success" : "text-dnc-error"
                    }`}>
                      {verificationResult.status === "callable" ? "Callable" : "Do Not Call"}
                    </h3>
                    <p className="text-white text-lg mb-4">{verificationResult.number}</p>
                    
                    {verificationResult.status === "restricted" && (
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-dnc-gray-400">Source:</span>
                          <span className="text-white font-medium">{verificationResult.source}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-dnc-gray-400">Date Added:</span>
                          <span className="text-white">{verificationResult.dateAdded}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-dnc-gray-400">Reason:</span>
                          <span className="text-white">{verificationResult.reason}</span>
                        </div>
                      </div>
                    )}
                    
                    {verificationResult.status === "callable" && (
                      <p className="text-dnc-gray-300 text-sm">
                        This number is not found in Internal or National DNC registries. Safe to call.
                      </p>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-dnc-dark-border">
                      <div className="flex items-center justify-between text-xs text-dnc-gray-500">
                        <span>Verified by: {verificationResult.verifiedBy}</span>
                        <span>{new Date(verificationResult.verifiedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-3">
                  <button className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </button>
                  <button
                    onClick={() => {
                      setVerificationResult(null);
                      setPhoneNumber("");
                      setDeclaration(false);
                    }}
                    className="btn-primary flex-1"
                  >
                    Verify Another
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Recent Verifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Recent Verifications</h2>
              <div className="space-y-3">
                {recentVerifications.map((verification, idx) => (
                  <div key={idx} className="p-3 bg-dnc-dark-lighter rounded-lg hover:bg-dnc-dark-border transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{verification.number}</span>
                      {verification.status === "callable" ? (
                        <span className="status-callable">Callable</span>
                      ) : (
                        <span className="status-restricted">Restricted</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-dnc-gray-500">
                      <span>{verification.time}</span>
                      <span>{verification.agent}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/agent/history"
                className="block mt-4 text-center text-dnc-orange hover:text-dnc-orange-light text-sm font-medium"
              >
                View All History
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-dark"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Today's Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400">Verifications</span>
                  <span className="text-white font-semibold text-lg">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400">Callable</span>
                  <span className="text-dnc-success font-semibold text-lg">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dnc-gray-400">Restricted</span>
                  <span className="text-dnc-error font-semibold text-lg">6</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-dnc-dark-border">
                  <span className="text-dnc-gray-400">Success Rate</span>
                  <span className="text-white font-semibold text-lg">75%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
