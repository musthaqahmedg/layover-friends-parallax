'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParallaxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleJoinBeta = () => {
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

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#app" className="hover:text-cyan-400 transition">Try App</a>
            <button
              onClick={handleJoinBeta}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition font-semibold"
            >
              Get Link
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-t border-cyan-500/20 p-4 space-y-3"
          >
            <a href="#app" className="block py-2 hover:text-cyan-400 transition">Try App</a>
            <button
              onClick={handleJoinBeta}
              className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg font-semibold"
            >
              Get Link
            </button>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          }}
        />

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
              <Sparkles size={16} />
              🚀 BETA TESTING OPEN NOW!
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Connect During Layovers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Meet fellow travelers. Chat in real-time. Share experiences. Make every layover an adventure!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={handleJoinBeta}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            📱 Get Download Link
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* APP SECTION */}
      <section id="app" className="py-20 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Try the App Now! 🎯
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="/app/index.html"
              className="w-full h-screen border-none"
              title="Layover Friends App"
              allow="geolocation"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg mb-6">
              ☝️ Login to the app above and explore! Then get the download link for your phone.
            </p>
            <button
              onClick={handleJoinBeta}
              className="bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-lg font-bold transition inline-flex items-center gap-2"
            >
              📱 Get Download Link
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 py-8 px-4 text-center text-gray-400 bg-black">
        <p>✈️ Layover Friends © {new Date().getFullYear()}</p>
        <p className="text-sm mt-2">Email: <span className="text-cyan-400">musthaq258@gmail.com</span></p>
      </footer>
    </div>
  );
}