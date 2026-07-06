'use client';

import { useState } from 'react';
import { Menu, X, MessageSquare, Users, Plane, Zap, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
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
          {/* BETA BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
              <Sparkles size={16} />
              🏆 BETA TESTING - Help Shape the Future!
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
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
          >
            🌍 Meet fellow travelers during airport layovers. Chat in real-time, track flights, get AI travel tips, and make every layover an adventure!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto flex items-center justify-center gap-2"
          >
            <AlertCircle size={20} className="text-yellow-400" />
            You're testing cutting-edge technology. Your feedback shapes the final product!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 px-10 py-4 rounded-lg text-lg font-bold text-black transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            🎯 Join Beta Testing Now
            <ArrowRight size={20} />
          </motion.button>

          {/* WORLD CUP ANIMATED SOCCER BALL */}
          <motion.div
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-40 right-10 text-6xl opacity-50"
          >
            ⚽
          </motion.div>
          <motion.div
            animate={{ rotate: -360, y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-40 left-10 text-6xl opacity-50"
          >
            🏆
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: WHAT IS LAYOVER FRIENDS? */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/30 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center gap-3">
              <Sparkles size={32} />
              What is Layover Friends?
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Layover Friends is an <span className="text-cyan-400 font-bold">AI-powered app</span> that transforms boring airport layovers into exciting opportunities to meet fellow travelers from around the world.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              ✈️ <span className="font-bold">Browse travelers</span> with matching flight times • 💬 <span className="font-bold">Chat in real-time</span> • 🛫 <span className="font-bold">Track flights</span> together • 🤖 <span className="font-bold">Get AI travel tips</span>
            </p>
            <div className="bg-slate-700/50 border border-yellow-500/20 rounded-lg p-4 mt-6">
              <p className="text-yellow-300 font-semibold flex items-center gap-2">
                <AlertCircle size={20} />
                Why Beta Test?
              </p>
              <p className="text-gray-300 mt-2">
                You'll be among the first to experience this innovation. Your feedback directly shapes the features, helps us fix bugs, and makes the final product amazing!
              </p>
            </div>
          </motion.div>
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

      {/* SECTION 3.5: HOW BETA TESTING WORKS */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            How Beta Testing Works 🏆
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1️⃣', title: 'Sign Up', desc: 'Submit your email to join the beta' },
              { num: '2️⃣', title: 'Get Link', desc: 'We auto-send you the Google Play download link' },
              { num: '3️⃣', title: 'Download & Test', desc: 'Install the app and explore all features' },
              { num: '4️⃣', title: 'Share Feedback', desc: 'Tell us what you love and what to improve' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500/60 transition"
              >
                <div className="text-5xl mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">✨ Exclusive Beta Tester Benefits:</h3>
            <ul className="text-gray-300 space-y-2 inline-block text-left">
              <li>✅ Free lifetime premium features</li>
              <li>✅ Direct influence on product development</li>
              <li>✅ Early access before public launch</li>
              <li>✅ Special recognition in app credits</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        {/* WORLD CUP THEME - ANIMATED FLAGS */}
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 left-20 text-5xl opacity-20"
        >
          🏳️
        </motion.div>
        <motion.div
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-10 right-20 text-5xl opacity-20"
        >
          🏳️
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
            🏆 Ready to Join the Beta?
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Limited spots available for exclusive beta testers
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Sign up now, get the app instantly, and help shape the future of airport connections!
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 px-12 py-5 rounded-lg text-lg font-bold text-black transition transform inline-flex items-center gap-3 shadow-lg"
          >
            <Sparkles size={24} />
            Claim Your Beta Access
            <ArrowRight size={24} />
          </motion.button>

          <p className="text-gray-400 mt-8 text-sm">
            ⚡ Instant access • 📧 Auto-sent download link • 🎁 Exclusive beta benefits
          </p>
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