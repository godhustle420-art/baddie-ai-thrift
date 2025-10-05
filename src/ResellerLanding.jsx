import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ResellerLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-purple-700">Reseller Bot</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-purple-700">Features</a>
          <a href="#pricing" className="hover:text-purple-700">Pricing</a>
          <a href="#how" className="hover:text-purple-700">How it Works</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
          Automate & Scale Your Reselling Business
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Cross-post, auto-price, clean up photos, and manage sales across all marketplaces. Everything your competitors offer — and more — for less. Start for just $1.
        </p>
        <a
          href="#pricing"
          className="bg-purple-700 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-800"
        >
          Start 7-Day Trial for $1
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-purple-50">
        <h3 className="text-3xl font-bold text-center mb-12">All-in-One Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Cross-post to multiple marketplaces",
            "Bulk upload & bulk edit",
            "AI-generated titles & descriptions",
            "Smart pricing & comps",
            "Image cleanup & background remover",
            "Auto-delist / auto-relist",
            "Inventory & order tracking",
            "Analytics dashboard",
            "Custom templates & reusable prompts",
            "Team / multi-user accounts",
            "Shipping & order integrations",
          ].map((feature) => (
            <div key={feature} className="flex items-start space-x-3">
              <CheckCircle2 className="text-purple-600 mt-1" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Simple Pricing</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-6 text-center shadow">
            <h4 className="text-xl font-semibold mb-4">Starter</h4>
            <p className="text-3xl font-bold mb-4">$19/mo</p>
            <ul className="mb-6 space-y-2">
              <li>Up to 500 listings</li>
              <li>Cross-post + AI descriptions</li>
              <li>Basic photo cleanup</li>
            </ul>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
              Choose Starter
            </button>
          </div>
          <div className="border-2 border-purple-600 rounded-2xl p-6 text-center shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Pro</h4>
            <p className="text-3xl font-bold mb-4">$39/mo</p>
            <ul className="mb-6 space-y-2">
              <li>Up to 2,000 listings</li>
              <li>Bulk edit + smart pricing</li>
              <li>Auto-delist/relist</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-xl hover:bg-purple-800">
              Choose Pro
            </button>
          </div>
          <div className="border rounded-2xl p-6 text-center shadow">
            <h4 className="text-xl font-semibold mb-4">Scale</h4>
            <p className="text-3xl font-bold mb-4">$59/mo</p>
            <ul className="mb-6 space-y-2">
              <li>Unlimited listings</li>
              <li>Multi-user accounts</li>
              <li>Shipping integrations</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700">
              Choose Scale
            </button>
          </div>
        </div>
        <p className="text-center mt-8 text-lg font-medium text-purple-700">
          Try any plan for just $1 for 7 days!
        </p>
      </section>

      {/* How it Works */}
      <section id="how" className="py-16 px-6 bg-purple-50">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-purple-700 text-4xl font-extrabold mb-4">1</div>
            <p>Upload your product details & photos</p>
          </div>
          <div>
            <div className="text-purple-700 text-4xl font-extrabold mb-4">2</div>
            <p>AI cleans, prices, and enhances automatically</p>
          </div>
          <div>
            <div className="text-purple-700 text-4xl font-extrabold mb-4">3</div>
            <p>Cross-post everywhere with one click</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600">
        <p>© {new Date().getFullYear()} Reseller Bot. All rights reserved.</p>
      </footer>
    </div>
  );
}
