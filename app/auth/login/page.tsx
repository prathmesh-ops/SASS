"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import TenantLogo from "../../../components/TenantLogo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", formData);
  };

  return (
    <div className="min-h-screen bg-dnc-dark flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <TenantLogo size={40} />
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-dnc-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-dark w-full pl-11"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-dark w-full pl-11 pr-11"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dnc-gray-500 hover:text-dnc-gray-300 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  className="w-4 h-4 rounded border-dnc-dark-border bg-dnc-dark-lighter text-dnc-orange focus:ring-dnc-orange focus:ring-offset-0"
                />
                <span className="text-sm text-dnc-gray-400">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-dnc-orange hover:text-dnc-orange-light transition">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-dnc-dark-border"></div>
            <span className="px-4 text-sm text-dnc-gray-500">or</span>
            <div className="flex-1 border-t border-dnc-dark-border"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-dnc-gray-400">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-dnc-orange hover:text-dnc-orange-light font-medium transition">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-dnc-dark-lighter items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-orange opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg"
        >
          <div className="mb-8">
            <div className="w-16 h-16 bg-dnc-orange rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance made simple
            </h2>
            <p className="text-xl text-dnc-gray-300">
              Verify phone numbers instantly against Internal and National DNC registries. 
              Stay compliant with TCPA regulations effortlessly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-dnc-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-dnc-success rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Real-time Verification</h3>
                <p className="text-dnc-gray-400 text-sm">
                  Instant results against multiple DNC registries
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-dnc-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-dnc-success rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Complete Audit Trail</h3>
                <p className="text-dnc-gray-400 text-sm">
                  Track every verification for compliance reporting
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-dnc-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-dnc-success rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Multi-Channel Access</h3>
                <p className="text-dnc-gray-400 text-sm">
                  Web, mobile, voice bot, and browser extension
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
