"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff, Building2 } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log("Signup:", formData);
  };

  return (
    <div className="min-h-screen bg-dnc-dark flex">
      {/* Left Side - Branding */}
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
              Join thousands of compliant organizations
            </h2>
            <p className="text-xl text-dnc-gray-300">
              Start your free trial today. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="card-dark">
              <div className="text-3xl font-bold text-dnc-orange mb-1">99.9%</div>
              <div className="text-dnc-gray-400 text-sm">Uptime SLA</div>
            </div>
            <div className="card-dark">
              <div className="text-3xl font-bold text-dnc-orange mb-1">10K+</div>
              <div className="text-dnc-gray-400 text-sm">Daily Verifications</div>
            </div>
            <div className="card-dark">
              <div className="text-3xl font-bold text-dnc-orange mb-1">&lt;200ms</div>
              <div className="text-dnc-gray-400 text-sm">Response Time</div>
            </div>
            <div className="card-dark">
              <div className="text-3xl font-bold text-dnc-orange mb-1">100%</div>
              <div className="text-dnc-gray-400 text-sm">Compliant</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DoNotCall</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-dnc-gray-400">
              Get started with your free trial
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-dark w-full pl-11"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Work Email
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-dark w-full pl-11"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-dnc-gray-300 mb-2">
                Organization Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dnc-gray-500" />
                <input
                  id="organization"
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="input-dark w-full pl-11"
                  placeholder="Your Company Inc."
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

            {/* Terms */}
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                className="w-4 h-4 rounded border-dnc-dark-border bg-dnc-dark-lighter text-dnc-orange focus:ring-dnc-orange focus:ring-offset-0 mt-1"
              />
              <span className="text-sm text-dnc-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-dnc-orange hover:text-dnc-orange-light">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-dnc-orange hover:text-dnc-orange-light">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-dnc-gray-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-dnc-orange hover:text-dnc-orange-light font-medium transition">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
