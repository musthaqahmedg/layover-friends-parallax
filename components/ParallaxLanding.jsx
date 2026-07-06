'use client';

import { useState } from 'react';
import { Menu, X, MessageSquare, Users, Plane, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParallaxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    window.location.href = 'https://forms.gle/1RGWt11TZvV34Uc5A';
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            ✈️ Layover Friends
          </motion.div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#app" className="hover:text-cyan-400 transition">App Demo</a>
            <button
              onClick={handleGetStarted}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition font-semibold"
            >
              Get App
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO WITH PARALLAX */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          }}
        />

        {/* Animated Background Blobs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Connect During Layovers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Meet fellow travelers, share experiences, and make every layover memorable with AI-powered matching.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-10 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            Download Now
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: FEATURES WITH SCROLL ANIMATION */}
      <section id="features" className="py-32 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Powerful Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Users,
                title: 'Browse Travelers',
                desc: 'Find fellow travelers with matching layover times and interests',
                color: 'cyan'
              },
              {
                icon: MessageSquare,
                title: 'Real-time Chat',
                desc: 'Connect instantly and plan activities together',
                color: 'purple'
              },
              {
                icon: Plane,
                title: 'Flight Tracker',
                desc: 'Track flights and get boarding updates in real-time',
                color: 'pink'
              },
              {
                icon: Zap,
                title: 'AI Assistant',
                desc: 'Get personalized travel recommendations and tips',
                color: 'yellow'
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              const colorClass = {
                cyan: 'text-cyan-400',
                purple: 'text-purple-400',
                pink: 'text-pink-400',
                yellow: 'text-yellow-400'
              }[feature.color];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition group"
                >
                  <Icon className={`w-16 h-16 mb-6 ${colorClass} group-hover:scale-110 transition`} />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: APP DEMO */}
      <section id="app" className="py-32 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience the App
            </h2>
            <p className="text-xl text-gray-300">
              Try the web version right now before downloading
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl overflow-hidden h-96 md:h-[600px] flex items-center justify-center"
          >
            <div className="text-center px-8">
              <Plane className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-bounce" />
              <h3 className="text-3xl font-bold mb-4">Web Demo Coming Soon</h3>
              <p className="text-gray-300 text-lg mb-6">
                Download the mobile app now to get full access to all features!
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-bold transition inline-flex items-center gap-2"
              >
                Download App
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 px-4 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of travelers discovering new connections during layovers
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105"
          >
            Get Started Now
          </button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 py-8 px-4 text-center text-gray-400">
        <p>✈️ Layover Friends © {new Date().getFullYear()} | Connect During Layovers</p>
        <p className="mt-2 text-sm">
          Questions? Email: <span className="text-cyan-400">musthaq258@gmail.com</span>
        </p>
      </footer>


    </div>
  );
}