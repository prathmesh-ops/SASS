"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  Globe,
  MessageSquare,
  Phone,
  FileCheck
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const features = [
    {
      icon: Shield,
      title: "TCPA Compliance",
      description: "Stay compliant with automated DNC verification and comprehensive audit trails."
    },
    {
      icon: Users,
      title: "Multi-Tenant Architecture",
      description: "Secure, isolated environments for each organization with custom branding."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Predictive analytics and performance tracking for your entire team."
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Access",
      description: "Verify numbers anywhere with our mobile apps and browser extensions."
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Real-time verification against Internal and National DNC registries."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption and role-based access control."
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "< 200ms", label: "API Response" },
    { value: "10K+", label: "Verifications/Day" },
    { value: "100%", label: "Compliant" }
  ];

  const integrations = [
    { icon: Phone, name: "Voice Bot" },
    { icon: MessageSquare, name: "WhatsApp" },
    { icon: Globe, name: "Browser Extension" },
    { icon: FileCheck, name: "National DNC" }
  ];

  return (
    <div className="min-h-screen bg-dnc-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-dnc-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DoNotCall</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-dnc-gray-300 hover:text-white transition">
                Features
              </Link>
              <Link href="#pricing" className="text-dnc-gray-300 hover:text-white transition">
                Pricing
              </Link>
              <Link href="#integrations" className="text-dnc-gray-300 hover:text-white transition">
                Integrations
              </Link>
              <Link href="/auth/login" className="text-dnc-gray-300 hover:text-white transition">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-dnc-orange/10 border border-dnc-orange/20 rounded-full">
              <span className="text-dnc-orange text-sm font-medium">
                Enterprise-Ready DNC Solution
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Universal DNC
              <br />
              <span className="gradient-orange bg-clip-text text-white">
                Management Platform
              </span>
            </h1>
            
            <p className="text-xl text-dnc-gray-300 mb-8 max-w-2xl mx-auto">
              Verify anywhere — web portal, mobile app, or voice bot. DoNotCall's 
              Universal Platform puts compliance in every workflow, eliminating 
              friction from verification to protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup" className="btn-primary flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#demo" className="btn-secondary">
                Watch Demo
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-dnc-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                <span>MULTI-TENANT PLATFORM</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                <span>MULTI-REPO INDEXING</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                <span>ANALYTICS DASHBOARD</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-dnc-success" />
                <span>ON-PREMISE DEPLOYMENT</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-5xl mx-auto">
              <div className="bg-dnc-dark-lighter rounded-xl p-6 border border-dnc-dark-border">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-dnc-error"></div>
                  <div className="w-3 h-3 rounded-full bg-dnc-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-dnc-success"></div>
                  <span className="ml-4 text-dnc-gray-400 text-sm">Dashboard Overview</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card-dark">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-dnc-gray-400 text-sm">Verifications Today</span>
                      <CheckCircle2 className="w-5 h-5 text-dnc-success" />
                    </div>
                    <div className="text-3xl font-bold text-white">1,247</div>
                    <div className="text-dnc-success text-sm mt-1">+12.5% from yesterday</div>
                  </div>
                  
                  <div className="card-dark">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-dnc-gray-400 text-sm">Active Agents</span>
                      <Users className="w-5 h-5 text-dnc-orange" />
                    </div>
                    <div className="text-3xl font-bold text-white">48</div>
                    <div className="text-dnc-gray-400 text-sm mt-1">Across 3 teams</div>
                  </div>
                  
                  <div className="card-dark">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-dnc-gray-400 text-sm">Compliance Rate</span>
                      <Shield className="w-5 h-5 text-dnc-info" />
                    </div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-dnc-success text-sm mt-1">All checks passed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-dnc-dark-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-orange bg-clip-text text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-dnc-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need for
              <span className="gradient-orange bg-clip-text text-white"> compliance</span>
            </h2>
            <p className="text-xl text-dnc-gray-300 max-w-2xl mx-auto">
              Comprehensive tools to manage, verify, and track DNC compliance across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark card-hover"
              >
                <div className="w-12 h-12 bg-dnc-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dnc-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-dnc-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 px-6 bg-dnc-dark-lighter">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Verify from anywhere
            </h2>
            <p className="text-xl text-dnc-gray-300 max-w-2xl mx-auto">
              Multiple channels to access DNC verification - choose what works best for your workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark card-hover text-center"
              >
                <div className="w-16 h-16 bg-dnc-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-dnc-orange" />
                </div>
                <h3 className="text-white font-medium">{integration.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gradient-orange rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations using DoNotCall to stay compliant and protect consumers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup" 
                className="bg-white text-dnc-orange hover:bg-dnc-gray-100 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dnc-dark-border py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Features</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Security</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">About</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Documentation</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">API Reference</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Support</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Privacy</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Terms</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">Compliance</Link></li>
                <li><Link href="#" className="text-dnc-gray-400 hover:text-white transition">TCPA</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dnc-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-dnc-orange rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">DoNotCall</span>
            </div>
            <p className="text-dnc-gray-400 text-sm">
              © 2025 DoNotCall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
