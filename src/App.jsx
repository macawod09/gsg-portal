import React, { useState, useEffect } from 'react';
import { Building2, Cpu, Wrench, Users, Globe2, Shield, TrendingUp, Phone, Mail, MapPin, ChevronRight, Play, Pause } from 'lucide-react';

export default function GlobalSystemsPortal() {
  const [activePanel, setActivePanel] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subsidiaries = [
    { name: 'GCS', location: 'Prague', status: 'Operational' },
    { name: 'BC', location: 'Prague', status: 'Operational' },
    { name: 'GS-Tech', location: 'Prague', status: 'Core Infrastructure' }
  ];

  const expansionPoints = [
    { city: 'Prague', lat: 50.0755, lng: 14.4378, type: 'HQ' },
    { city: 'Dubai', lat: 25.2048, lng: 55.2708, type: 'Expansion' },
    { city: 'Frankfurt', lat: 50.1109, lng: 8.6821, type: 'Expansion' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Rajdhani', -apple-system, sans-serif;
          letter-spacing: 0.02em;
        }
        
        .mono { font-family: 'Space Mono', monospace; }
        
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 150, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 150, 255, 0.6); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        .animate-slideDown {
          animation: slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(100, 100, 100, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 100, 100, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        .platinum-gradient {
          background: linear-gradient(135deg, #B8C6DB 0%, #F5F7FA 50%, #C5D3E0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blue-glow {
          box-shadow: 0 0 30px rgba(0, 122, 204, 0.4);
        }
        
        .panel-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .panel-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 150, 255, 0.3);
        }
        
        .tech-border {
          position: relative;
        }
        
        .tech-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #007ACC, #00D4FF, #007ACC);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.5;
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 animate-slideDown">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-xl">
              GSG
            </div>
            <div>
              <h1 className="text-xl font-bold">GLOBAL SYSTEMS GROUP</h1>
              <p className="text-xs text-gray-400 mono">SVĚŘENSKÝ FOND</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#divisions" className="hover:text-blue-400 transition">DIVISIONS</a>
            <a href="#infrastructure" className="hover:text-blue-400 transition">INFRASTRUCTURE</a>
            <a href="#governance" className="hover:text-blue-400 transition">GOVERNANCE</a>
            <a href="#contact" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Video Background Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        
        {/* Geometric Overlays */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-blue-500/10 rotate-12"></div>
        
        {/* Video Control Mockup */}
        <div className="absolute top-24 right-8 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm animate-fadeInUp delay-500">
          <button 
            onClick={() => setVideoPlaying(!videoPlaying)}
            className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            {videoPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <span className="text-xs mono text-gray-400">HERO_VIDEO.MP4</span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
          <div className="space-y-4 opacity-0 animate-fadeInUp delay-200">
            <h1 className="text-7xl md:text-8xl font-bold platinum-gradient leading-tight">
              ENGINEERING THE<br />FUTURE OF ENVIRONMENTS
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp delay-400">
            A Czech-based holding group managing assets and excellence in<br />
            <span className="text-blue-400 font-semibold">Climate Control</span> and <span className="text-blue-400 font-semibold">Structural Engineering</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 opacity-0 animate-fadeInUp delay-600">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-blue-400" />
              <span className="mono">Prague, Czech Republic</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield size={16} className="text-blue-400" />
              <span className="mono">EST. 2020</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-blue-400" />
              <span className="mono">3 Active Subsidiaries</span>
            </div>
          </div>

          <div className="pt-4 opacity-0 animate-fadeInUp delay-600">
            <a href="#divisions" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg">
              EXPLORE DIVISIONS <ChevronRight size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fadeInUp delay-600">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Dual Engine Section */}
      <section id="divisions" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 mb-6 mono text-sm">
              OPERATIONAL DIVISIONS
            </div>
            <h2 className="text-6xl font-bold mb-6">THE DUAL ENGINE</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Two specialized business units delivering world-class solutions in climate control and construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GCS Panel */}
            <div 
              className="panel-hover relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-12 cursor-pointer overflow-hidden group"
              onMouseEnter={() => setActivePanel('gcs')}
              onMouseLeave={() => setActivePanel(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Cpu size={32} />
                </div>
                
                <h3 className="text-4xl font-bold mb-4">GLOBAL COOLING SYSTEMS</h3>
                <p className="text-blue-400 font-semibold mb-6 text-lg">Advanced Climate Control Solutions</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">Industrial HVAC Systems</p>
                      <p className="text-sm text-gray-400">Commercial & industrial climate solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">24/7 Emergency Service</p>
                      <p className="text-sm text-gray-400">Round-the-clock technical support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">Predictive Maintenance</p>
                      <p className="text-sm text-gray-400">Tech-driven system optimization</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/search?q=gcs-repair.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  VISIT GCS <ChevronRight size={18} />
                </a>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-blue-500/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* BC Panel */}
            <div 
              className="panel-hover relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-12 cursor-pointer overflow-hidden group"
              onMouseEnter={() => setActivePanel('bc')}
              onMouseLeave={() => setActivePanel(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Building2 size={32} />
                </div>
                
                <h3 className="text-4xl font-bold mb-4">BUILD-CORE CONSTRUCTION</h3>
                <p className="text-blue-400 font-semibold mb-6 text-lg">Elite Construction & Finishing</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">Mechanized Painting Systems</p>
                      <p className="text-sm text-gray-400">Precision application technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">Advanced Plastering</p>
                      <p className="text-sm text-gray-400">European craftsmanship standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2"></div>
                    <div>
                      <p className="font-semibold">Architectural Fit-Outs</p>
                      <p className="text-sm text-gray-400">Turnkey interior solutions</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://build-core.cz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  VISIT BUILD-CORE <ChevronRight size={18} />
                </a>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-blue-500/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section - GS-Technology */}
      <section id="infrastructure" className="py-32 px-6 relative bg-gray-900">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 mb-6 mono text-sm">
                INFRASTRUCTURE BACKBONE
              </div>
              <h2 className="text-6xl font-bold mb-8">GS-TECHNOLOGY</h2>
              <p className="text-2xl text-blue-400 mb-8 font-semibold">Asset Management Model</p>
              
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  We don't just manage people—we own the technology. Through <span className="text-blue-400 font-semibold">GS-Technology s.r.o.</span>, we provide our subsidiaries with state-of-the-art machinery and equipment.
                </p>
                <p>
                  This vertical integration ensures:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <Shield size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Unmatched Reliability:</strong> Direct control over critical assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Cost Efficiency:</strong> Centralized procurement and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span><strong>Technological Edge:</strong> Latest equipment across all divisions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="tech-border bg-gray-800 p-8">
                <h4 className="text-2xl font-bold mb-6 text-blue-400">ASSET PORTFOLIO</h4>
                
                <div className="space-y-6">
                  <div className="bg-gray-900 p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-lg">HVAC Equipment Fleet</h5>
                      <span className="mono text-sm text-gray-400">€2.4M</span>
                    </div>
                    <p className="text-sm text-gray-400">Industrial cooling systems, diagnostic tools, service vehicles</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-lg">Construction Machinery</h5>
                      <span className="mono text-sm text-gray-400">€1.8M</span>
                    </div>
                    <p className="text-sm text-gray-400">Mechanized painting systems, plastering equipment, scaffolding</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-lg">Digital Infrastructure</h5>
                      <span className="mono text-sm text-gray-400">€650K</span>
                    </div>
                    <p className="text-sm text-gray-400">Management systems, IoT sensors, predictive analytics platforms</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">TOTAL ASSET VALUE</span>
                    <span className="text-3xl font-bold text-blue-400 mono">€4.85M</span>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 bg-blue-600/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section id="governance" className="py-32 px-6 relative bg-black">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 mb-6 mono text-sm">
              CORPORATE STRUCTURE
            </div>
            <h2 className="text-6xl font-bold mb-6">THE HOLDING MODEL</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A robust governance structure built for stability, transparency, and investor confidence
            </p>
          </div>

          {/* Flowchart */}
          <div className="max-w-4xl mx-auto">
            {/* Level 1: Svěřenský fond */}
            <div className="flex justify-center mb-12">
              <div className="tech-border bg-gradient-to-br from-blue-900 to-blue-800 px-12 py-8 text-center max-w-md">
                <Shield size={40} className="mx-auto mb-4 text-blue-300" />
                <h3 className="text-3xl font-bold mb-2">SVĚŘENSKÝ FOND</h3>
                <p className="text-sm text-blue-200 mono">Trust Structure</p>
                <p className="text-xs text-gray-300 mt-4">Maximum asset protection & succession planning</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-700"></div>
            </div>

            {/* Level 2: Holding Company */}
            <div className="flex justify-center mb-12">
              <div className="tech-border bg-gradient-to-br from-gray-800 to-gray-900 px-12 py-8 text-center max-w-lg">
                <Building2 size={40} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold mb-2">GLOBAL SYSTEMS GROUP</h3>
                <p className="text-sm text-blue-400 mono">Holding Company</p>
                <p className="text-xs text-gray-400 mt-4">Strategic management & resource allocation</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-16">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-700 to-blue-500"></div>
                <div className="w-1 h-16 bg-gradient-to-b from-blue-700 to-blue-500"></div>
                <div className="w-1 h-16 bg-gradient-to-b from-blue-700 to-blue-500"></div>
              </div>
            </div>

            {/* Level 3: Subsidiaries */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 text-center hover:border-blue-500 transition">
                <Cpu size={32} className="mx-auto mb-3 text-blue-400" />
                <h4 className="text-xl font-bold mb-1">GCS</h4>
                <p className="text-xs text-gray-400 mono mb-3">Global Cooling Systems</p>
                <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs mono">OPERATIONAL</div>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 text-center hover:border-blue-500 transition">
                <Building2 size={32} className="mx-auto mb-3 text-blue-400" />
                <h4 className="text-xl font-bold mb-1">BC</h4>
                <p className="text-xs text-gray-400 mono mb-3">Build-Core Construction</p>
                <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs mono">OPERATIONAL</div>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 text-center hover:border-blue-500 transition">
                <Wrench size={32} className="mx-auto mb-3 text-blue-400" />
                <h4 className="text-xl font-bold mb-1">GS-Tech</h4>
                <p className="text-xs text-gray-400 mono mb-3">GS-Technology s.r.o.</p>
                <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs mono">INFRASTRUCTURE</div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 flex items-center justify-center">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Bank Confidence</h4>
              <p className="text-gray-400 text-sm">Structured governance increases creditworthiness and lending capacity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 flex items-center justify-center">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Investor Appeal</h4>
              <p className="text-gray-400 text-sm">Clear structure attracts institutional and private equity investors</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 flex items-center justify-center">
                <TrendingUp size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Scalability</h4>
              <p className="text-gray-400 text-sm">Modular structure enables seamless addition of new subsidiaries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <section className="py-32 px-6 relative bg-gray-900">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 mb-6 mono text-sm">
              GLOBAL PRESENCE
            </div>
            <h2 className="text-6xl font-bold mb-6">EXPANSION NETWORK</h2>
            <p className="text-xl text-gray-400">Headquarters in Prague with strategic expansion to UAE and EU markets</p>
          </div>

          {/* Map Visualization */}
          <div className="relative bg-gray-800 border border-gray-700 p-12 rounded-lg overflow-hidden">
            {/* Stylized Map Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path d="M 100 250 Q 250 100 400 250 T 700 250 Q 850 350 900 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-500" />
                <path d="M 50 200 Q 200 150 350 200 T 650 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-500" />
                <circle cx="400" cy="250" r="80" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-500" />
              </svg>
            </div>

            {/* Location Cards */}
            <div className="relative grid md:grid-cols-3 gap-8">
              {expansionPoints.map((point, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 p-6 hover:border-blue-500 transition group">
                  <div className="flex items-center justify-between mb-4">
                    <Globe2 size={32} className="text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className={`px-3 py-1 text-xs mono ${
                      point.type === 'HQ' 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-green-600/20 text-green-400'
                    }`}>
                      {point.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{point.city}</h4>
                  <p className="text-sm text-gray-400 mono mb-4">
                    {point.lat.toFixed(4)}°N, {point.lng.toFixed(4)}°E
                  </p>
                  {point.type === 'HQ' ? (
                    <p className="text-sm text-gray-300">
                      Central European headquarters with full operational capabilities
                    </p>
                  ) : (
                    <p className="text-sm text-gray-300">
                      Strategic expansion target for {point.city === 'Dubai' ? 'MENA region' : 'Western European'} market entry
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section id="contact" className="py-32 px-6 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-500/30 mb-6 mono text-sm">
              PARTNERSHIP OPPORTUNITIES
            </div>
            <h2 className="text-6xl font-bold mb-6">INVESTOR & PARTNER RELATIONS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore expansion opportunities, franchising models, and international partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-700 p-10">
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-400">FULL NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-400">COMPANY</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-400">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-400">INQUIRY TYPE</label>
                  <select className="w-full bg-gray-800 border border-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none transition">
                    <option>Investment Opportunity</option>
                    <option>Partnership Proposal</option>
                    <option>Franchising Inquiry</option>
                    <option>General Information</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-400">MESSAGE</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none transition resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 transition font-bold text-lg"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700 p-8">
                <h3 className="text-2xl font-bold mb-6">Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-blue-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">GLOBAL SYSTEMS GROUP</p>
                      <p className="text-sm text-blue-200">Prague, Czech Republic</p>
                      <p className="text-sm text-blue-200 mono">Coordinates: 50.0755°N, 14.4378°E</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 p-8">
                <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-gray-400">investors@globalsystemsgroup.cz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-gray-400">+420 XXX XXX XXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 p-8">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-semibold mono">08:00 - 18:00 CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-semibold mono">09:00 - 14:00 CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-semibold mono">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold">
                  GSG
                </div>
                <div>
                  <p className="font-bold text-sm">GLOBAL SYSTEMS</p>
                  <p className="text-xs text-gray-400 mono">GROUP</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Engineering excellence through strategic asset management and operational expertise.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">DIVISIONS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Global Cooling Systems</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Build-Core Construction</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">GS-Technology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">COMPANY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">About GSG</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Governance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Investor Relations</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm">LEGAL</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="mono">© 2026 Global Systems Group. All rights reserved.</p>
            <p className="mono">Built with precision in Czech Republic 🇨🇿</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
