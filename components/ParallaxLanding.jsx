'use client';

import { useState } from 'react';
import { Menu, X, MessageSquare, Users, Plane, Zap, ArrowRight, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// ---------- DEMO DATA ----------
const demoTravelers = [
  { name: 'Sarah', flag: '🇩🇪', airport: 'Dubai DXB', layover: '5h layover', interest: 'Coffee & museums' },
  { name: 'Kenji', flag: '🇯🇵', airport: 'Dubai DXB', layover: '3h layover', interest: 'Photography' },
  { name: 'Priya', flag: '🇮🇳', airport: 'Dubai DXB', layover: '7h layover', interest: 'Food explorer' },
  { name: 'Lucas', flag: '🇧🇷', airport: 'Dubai DXB', layover: '4h layover', interest: 'Football fan' },
];

const demoFlights = [
  { flight: 'EK 202', route: 'DXB → JFK', status: 'On Time', gate: 'B22', time: '14:30', color: 'text-green-400' },
  { flight: 'QR 101', route: 'DOH → LHR', status: 'Boarding', gate: 'A11', time: '13:05', color: 'text-cyan-400' },
  { flight: 'AI 934', route: 'DXB → COK', status: 'Delayed 20m', gate: 'C04', time: '15:10', color: 'text-yellow-400' },
];

const aiAnswers = {
  default: "I'm your AI travel assistant! Ask me things like 'What can I do during a 5 hour layover in Dubai?' 🤖",
  answers: [
    "Great question! With a 5h layover in Dubai, you can visit Dubai Mall (20 min by metro), see the Burj Khalifa, and be back with time to spare. ✈️",
    "For a quick bite near your gate, Terminal 3 has amazing options — try the shawarma at Gate B! 🌯",
    "Tip: Free WiFi is available airport-wide. Rest zones are near Gates A1 and C18 if you want to nap. 😴",
  ],
};

export default function ParallaxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('browse');

  // Demo chat state
  const [chatMessages, setChatMessages] = useState([
    { from: 'them', name: 'Sarah 🇩🇪', text: 'Hey! I saw we both have long layovers in Dubai. Want to grab coffee?' },
    { from: 'me', text: 'Sounds great! I know a nice spot near Gate B 😄' },
  ]);
  const [chatInput, setChatInput] = useState('');

  // Demo AI state
  const [aiMessages, setAiMessages] = useState([{ from: 'ai', text: aiAnswers.default }]);
  const [aiInput, setAiInput] = useState('');
  const [aiIndex, setAiIndex] = useState(0);

  const handleJoinBeta = () => {
    window.location.href = 'https://forms.gle/1RGWt11TZvV34Uc5A';
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const newMsgs = [...chatMessages, { from: 'me', text: chatInput }];
    setChatMessages(newMsgs);
    setChatInput('');
    setTimeout(() => {
      setChatMessages([...newMsgs, { from: 'them', name: 'Sarah 🇩🇪', text: 'Perfect! Meet you there in 10 minutes! ☕' }]);
    }, 900);
  };

  const sendAi = () => {
    if (!aiInput.trim()) return;
    const newMsgs = [...aiMessages, { from: 'me', text: aiInput }];
    setAiMessages(newMsgs);
    setAiInput('');
    setTimeout(() => {
      setAiMessages([...newMsgs, { from: 'ai', text: aiAnswers.answers[aiIndex % aiAnswers.answers.length] }]);
      setAiIndex(aiIndex + 1);
    }, 900);
  };

  const tabs = [
    { id: 'browse', label: '👥 Browse' },
    { id: 'chat', label: '💬 Chat' },
    { id: 'flights', label: '✈️ Flights' },
    { id: 'ai', label: '🤖 AI' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            ✈️ Layover Friends
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#demo" className="hover:text-cyan-400 transition">Try Demo</a>
            <a href="#privacy" className="hover:text-cyan-400 transition">Privacy</a>
            <button
              onClick={handleJoinBeta}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition font-semibold"
            >
              Join Beta Testing
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-cyan-500/20 p-4 space-y-3">
            <a href="#demo" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400 transition">Try Demo</a>
            <a href="#privacy" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400 transition">Privacy</a>
            <button
              onClick={handleJoinBeta}
              className="w-full bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Join Beta Testing
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}
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
              🧪 BETA — We&apos;re testing openly. Join us!
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold mb-6 pb-4 leading-tight bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Connect During Layovers
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-6 max-w-3xl mx-auto"
          >
            <span className="bg-slate-800/80 border border-cyan-500/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-200">✈️ Meet fellow travelers</span>
            <span className="bg-slate-800/80 border border-cyan-500/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-200">👥 Make friends</span>
            <span className="bg-slate-800/80 border border-cyan-500/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-200">🤝 Help each other</span>
            <span className="bg-slate-800/80 border border-cyan-500/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-200">📚 Exchange books &amp; items</span>
            <span className="bg-slate-800/80 border border-cyan-500/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-200">📤 Share experiences</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Try the <span className="text-cyan-400 font-bold">live demo below</span> — no sign-up, no login needed.
            Like it? Join our beta and get the Android download link by email.
          </motion.p>

          <motion.a
            href="#demo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-4 rounded-lg text-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            🎯 Try the Demo
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section id="demo" className="py-24 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 pb-2 leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Try the App — Live Demo 🎯
          </motion.h2>
          <p className="text-center text-gray-400 mb-10">
            This is a demo with sample data. The real app has live travelers, real chats, and real flights!
          </p>

          {/* Phone-style demo container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-cyan-500/40 rounded-3xl shadow-2xl max-w-md mx-auto overflow-hidden"
          >
            {/* Demo header */}
            <div className="bg-black/60 px-4 py-3 flex items-center justify-between border-b border-cyan-500/20">
              <span className="font-bold text-cyan-400">✈️ Layover Friends</span>
              <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">DEMO</span>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-cyan-500/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 text-xs md:text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-slate-900 to-black">
              {/* BROWSE TAB */}
              {activeTab === 'browse' && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 mb-2">Travelers at Dubai DXB right now:</p>
                  {demoTravelers.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500/60 transition cursor-pointer"
                      onClick={() => setActiveTab('chat')}
                    >
                      <div className="text-3xl">{t.flag}</div>
                      <div className="flex-1">
                        <p className="font-bold">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.airport} • {t.layover}</p>
                        <p className="text-xs text-cyan-400">{t.interest}</p>
                      </div>
                      <MessageSquare size={18} className="text-cyan-400" />
                    </motion.div>
                  ))}
                  <p className="text-xs text-gray-500 text-center pt-2">Tap a traveler to chat! 👆</p>
                </div>
              )}

              {/* CHAT TAB */}
              {activeTab === 'chat' && (
                <div className="flex flex-col h-full">
                  <div className="flex-1 space-y-3 overflow-y-auto pb-3">
                    {chatMessages.map((m, i) => (
                      <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                            m.from === 'me'
                              ? 'bg-cyan-600 text-white rounded-br-sm'
                              : 'bg-slate-700 text-gray-100 rounded-bl-sm'
                          }`}
                        >
                          {m.name && <p className="text-xs text-cyan-300 font-bold mb-1">{m.name}</p>}
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-cyan-500/20">
                    <input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                      placeholder="Type a message..."
                      className="flex-1 bg-slate-800 border border-cyan-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
                    />
                    <button onClick={sendChat} className="bg-cyan-500 hover:bg-cyan-600 rounded-lg px-3">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* FLIGHTS TAB */}
              {activeTab === 'flights' && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 mb-2">Live flight tracking (demo data):</p>
                  {demoFlights.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-slate-800 border border-cyan-500/20 rounded-xl p-4"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-lg">{f.flight}</p>
                        <p className={`text-sm font-semibold ${f.color}`}>{f.status}</p>
                      </div>
                      <p className="text-gray-300 text-sm">{f.route}</p>
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Gate {f.gate}</span>
                        <span>Departs {f.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* AI TAB */}
              {activeTab === 'ai' && (
                <div className="flex flex-col h-full">
                  <div className="flex-1 space-y-3 overflow-y-auto pb-3">
                    {aiMessages.map((m, i) => (
                      <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                            m.from === 'me'
                              ? 'bg-purple-600 text-white rounded-br-sm'
                              : 'bg-slate-700 text-gray-100 rounded-bl-sm'
                          }`}
                        >
                          {m.from === 'ai' && <p className="text-xs text-purple-300 font-bold mb-1">🤖 AI Assistant</p>}
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 pb-2">
                    {['What to do in a 5h layover?', 'Best food near my gate?', 'Where can I rest or nap?'].map((s, i) => (
                      <button
                        key={i}
                        onClick={() => { setAiInput(s); }}
                        className="text-xs bg-purple-600/20 border border-purple-500/40 text-purple-300 rounded-full px-3 py-1 hover:bg-purple-600/40 transition"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-cyan-500/20">
                    <input
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendAi()}
                      placeholder="Ask about your layover..."
                      className="flex-1 bg-slate-800 border border-purple-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
                    />
                    <button onClick={sendAi} className="bg-purple-600 hover:bg-purple-700 rounded-lg px-3">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* After-demo CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg mb-2">Liked the demo? 😍</p>
            <p className="text-gray-400 mb-6">
              The real app is in <span className="text-cyan-400 font-bold">closed beta testing</span> on Google Play.
              Enter your email and we&apos;ll send you the download link!
            </p>
            <button
              onClick={handleJoinBeta}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-10 py-4 rounded-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
            >
              📱 Join Beta &amp; Get Download Link
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* TRANSPARENCY + PRIVACY */}
      <section id="privacy" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
              <ShieldCheck size={30} />
              Honest &amp; Transparent Testing
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                🧪 <span className="font-bold text-white">This app is in BETA.</span> It&apos;s fully functional, but we&apos;re
                still testing and improving it based on real feedback.
              </p>
              <p>
                🔒 <span className="font-bold text-white">Your privacy matters.</span> We only ask for your email — nothing else.
                It&apos;s used ONLY to send you the download link and testing updates. No spam, ever.
              </p>
              <p>
                📱 <span className="font-bold text-white">How it works:</span> Submit your email → We send you the official
                Google Play testing link → You download, explore, and share your feedback.
              </p>
              <p>
                🙏 <span className="font-bold text-white">Why we need you:</span> Google Play requires beta testers before
                public launch. By joining, you directly help this app reach the world!
              </p>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleJoinBeta}
                className="bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-lg font-bold transition inline-flex items-center gap-2"
              >
                🤝 Become a Beta Tester
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 py-8 px-4 text-center text-gray-400 bg-black">
        <p>✈️ Layover Friends © {new Date().getFullYear()} | Beta Testing Phase</p>
        <p className="text-sm mt-2">
          Questions? Email: <span className="text-cyan-400">musthaq258@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}
