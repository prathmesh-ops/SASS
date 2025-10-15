"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Upload,
  Download,
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function BulkOperationsPage() {
  const [activeTab, setActiveTab] = useState<"verify" | "add">("verify");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleProcess = () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setResults({
        total: 150,
        callable: 112,
        restricted: 35,
        invalid: 3,
        processed: new Date().toISOString()
      });
      setIsProcessing(false);
    }, 3000);
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
                <Link href="/agent/dashboard" className="text-dnc-gray-400 hover:text-white transition">
                  Dashboard
                </Link>
                <Link href="/agent/verify" className="text-dnc-gray-400 hover:text-white transition">
                  Verify
                </Link>
                <Link href="/agent/entries" className="text-dnc-gray-400 hover:text-white transition">
                  My Entries
                </Link>
                <Link href="/agent/bulk" className="text-white font-medium">
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">Bulk Operations</h1>
            <p className="text-dnc-gray-400">Process multiple phone numbers at once via CSV upload</p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark mb-8"
          >
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("verify")}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  activeTab === "verify"
                    ? "bg-dnc-orange text-white"
                    : "text-dnc-gray-400 hover:text-white hover:bg-dnc-dark-lighter"
                }`}
              >
                Bulk Verification
              </button>
              <button
                onClick={() => setActiveTab("add")}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  activeTab === "add"
                    ? "bg-dnc-orange text-white"
                    : "text-dnc-gray-400 hover:text-white hover:bg-dnc-dark-lighter"
                }`}
              >
                Bulk Add to IDNC
              </button>
            </div>
          </motion.div>

          {/* Bulk Verification Tab */}
          {activeTab === "verify" && (
            <div className="space-y-8">
              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-dnc-info/10 border border-dnc-info/20 rounded-lg p-6"
              >
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-dnc-info flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">How to use Bulk Verification</h3>
                    <ol className="text-dnc-gray-300 text-sm space-y-1 list-decimal list-inside">
                      <li>Download the CSV template below</li>
                      <li>Fill in phone numbers (one per row in the "phone_number" column)</li>
                      <li>Upload the completed CSV file</li>
                      <li>Review results and download the report</li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              {/* Template Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Step 1: Download Template</h2>
                <p className="text-dnc-gray-400 mb-4">
                  Use our CSV template to ensure proper formatting
                </p>
                <button className="btn-secondary flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download CSV Template</span>
                </button>
              </motion.div>

              {/* File Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Step 2: Upload CSV File</h2>
                
                <div className="border-2 border-dashed border-dnc-dark-border rounded-lg p-12 text-center hover:border-dnc-orange transition">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="csv-upload"
                  />
                  <label htmlFor="csv-upload" className="cursor-pointer">
                    <Upload className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
                    <p className="text-white font-medium mb-2">
                      {uploadedFile ? uploadedFile.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-dnc-gray-400 text-sm">
                      CSV files only (max 10MB)
                    </p>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="mt-6 flex items-center justify-between p-4 bg-dnc-dark-lighter rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-dnc-success" />
                      <div>
                        <div className="text-white font-medium">{uploadedFile.name}</div>
                        <div className="text-dnc-gray-400 text-sm">
                          {(uploadedFile.size / 1024).toFixed(2)} KB
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="text-dnc-error hover:text-dnc-error-light"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {uploadedFile && !isProcessing && !results && (
                  <button
                    onClick={handleProcess}
                    className="btn-primary w-full mt-6"
                  >
                    Process File
                  </button>
                )}
              </motion.div>

              {/* Processing Status */}
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-dark"
                >
                  <div className="text-center py-8">
                    <div className="w-16 h-16 border-4 border-dnc-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Processing...</h3>
                    <p className="text-dnc-gray-400">
                      Verifying phone numbers against DNC registries
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Results */}
              {results && !isProcessing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="card-dark">
                    <h2 className="text-xl font-semibold text-white mb-6">Verification Results</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-dnc-dark-lighter rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-dnc-gray-400 text-sm">Total</span>
                          <BarChart3 className="w-5 h-5 text-dnc-info" />
                        </div>
                        <div className="text-3xl font-bold text-white">{results.total}</div>
                      </div>

                      <div className="bg-dnc-success/10 border border-dnc-success/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-dnc-gray-400 text-sm">Callable</span>
                          <CheckCircle2 className="w-5 h-5 text-dnc-success" />
                        </div>
                        <div className="text-3xl font-bold text-dnc-success">{results.callable}</div>
                      </div>

                      <div className="bg-dnc-error/10 border border-dnc-error/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-dnc-gray-400 text-sm">Restricted</span>
                          <XCircle className="w-5 h-5 text-dnc-error" />
                        </div>
                        <div className="text-3xl font-bold text-dnc-error">{results.restricted}</div>
                      </div>

                      <div className="bg-dnc-warning/10 border border-dnc-warning/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-dnc-gray-400 text-sm">Invalid</span>
                          <AlertCircle className="w-5 h-5 text-dnc-warning" />
                        </div>
                        <div className="text-3xl font-bold text-dnc-warning">{results.invalid}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-dnc-dark-lighter rounded-lg mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-dnc-gray-400" />
                        <div>
                          <div className="text-white font-medium">Processing Complete</div>
                          <div className="text-dnc-gray-400 text-sm">
                            {new Date(results.processed).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download Results</span>
                      </button>
                      <button
                        onClick={() => {
                          setResults(null);
                          setUploadedFile(null);
                        }}
                        className="btn-secondary flex-1"
                      >
                        Process Another File
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Bulk Add Tab */}
          {activeTab === "add" && (
            <div className="space-y-8">
              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-dnc-info/10 border border-dnc-info/20 rounded-lg p-6"
              >
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-dnc-info flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">How to use Bulk Add to IDNC</h3>
                    <ol className="text-dnc-gray-300 text-sm space-y-1 list-decimal list-inside">
                      <li>Download the CSV template with required columns</li>
                      <li>Fill in consumer details (name, phone, reason, notes)</li>
                      <li>Upload the completed CSV file</li>
                      <li>Review duplicate detection and confirm additions</li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              {/* Template Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Step 1: Download Template</h2>
                <p className="text-dnc-gray-400 mb-4">
                  Template includes columns: consumer_name, phone_number, reason, notes
                </p>
                <button className="btn-secondary flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download IDNC Template</span>
                </button>
              </motion.div>

              {/* File Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Step 2: Upload CSV File</h2>
                
                <div className="border-2 border-dashed border-dnc-dark-border rounded-lg p-12 text-center hover:border-dnc-orange transition">
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    id="csv-upload-add"
                  />
                  <label htmlFor="csv-upload-add" className="cursor-pointer">
                    <Upload className="w-16 h-16 text-dnc-gray-600 mx-auto mb-4" />
                    <p className="text-white font-medium mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-dnc-gray-400 text-sm">
                      CSV files only (max 10MB)
                    </p>
                  </label>
                </div>
              </motion.div>

              {/* Column Mapping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="card-dark"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Step 3: Map Columns</h2>
                <p className="text-dnc-gray-400 mb-6">
                  Map your CSV columns to the required fields
                </p>
                
                <div className="space-y-4">
                  {["Consumer Name", "Phone Number", "Reason", "Notes"].map((field, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 items-center">
                      <div className="text-white font-medium">{field}</div>
                      <select className="input-dark">
                        <option value="">Select column...</option>
                        <option value="col1">Column 1</option>
                        <option value="col2">Column 2</option>
                        <option value="col3">Column 3</option>
                      </select>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
