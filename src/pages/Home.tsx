import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Calendar, Newspaper, Scale, Landmark, Award, 
  ArrowRight, Compass, Shield, BookOpen, GraduationCap, Leaf, 
  Wrench, Heart, UserCheck, Globe2, Sparkles, Network, Briefcase, FileText
} from 'lucide-react';

export const Home: React.FC = () => {
  const [activeInitiative, setActiveInitiative] = useState<number>(0);

  const keyInitiatives = [
    {
      icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
      title: "Education",
      tagline: "Empowering Future-Ready Learning",
      description: "CII partners with educational institutions to bridge the gap between academia and industry through skill development, innovation, research, and experiential learning opportunities.",
      bg: "bg-emerald-50/50 hover:bg-emerald-50",
      accent: "border-emerald-200"
    },
    {
      icon: <Leaf className="h-6 w-6 text-teal-600" />,
      title: "Environment",
      tagline: "Advancing Sustainable Growth",
      description: "Driving environmental stewardship by promoting sustainable business practices, resource efficiency, climate action, and responsible industrial development.",
      bg: "bg-teal-50/50 hover:bg-teal-50",
      accent: "border-teal-200"
    },
    {
      icon: <Wrench className="h-6 w-6 text-indigo-600" />,
      title: "Skills Development",
      tagline: "Building India's Skilled Workforce",
      description: "Strengthening employability through industry-aligned training, workforce development, certification programs, and lifelong learning initiatives.",
      bg: "bg-indigo-50/50 hover:bg-indigo-50",
      accent: "border-indigo-200"
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: "CSR & Community Development",
      tagline: "Creating Meaningful Social Impact",
      description: "Supporting inclusive growth by encouraging responsible business practices and community-driven initiatives in education, healthcare, livelihoods, and rural development.",
      bg: "bg-rose-50/50 hover:bg-rose-50",
      accent: "border-rose-200"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-amber-600" />,
      title: "Indian Women Network",
      tagline: "Empowering Women to Lead",
      description: "Promoting leadership, entrepreneurship, diversity, and equal opportunities by creating platforms that support the professional growth and advancement of women.",
      bg: "bg-amber-50/50 hover:bg-amber-50",
      accent: "border-amber-200"
    },
    {
      icon: <Globe2 className="h-6 w-6 text-blue-600" />,
      title: "Alliance for Global Good",
      tagline: "Collaborating for a Better Tomorrow",
      description: "Bringing together businesses, institutions, and global partners to drive sustainable development, innovation, and solutions that create long-term social and economic impact.",
      bg: "bg-blue-50/50 hover:bg-blue-50",
      accent: "border-blue-200"
    }
  ];

  const impactMetrics = [
    { value: "70+", label: "Offices Across India", description: "Widespread geographic presence to support regional industries." },
    { value: "12", label: "Centres of Excellence", description: "Specialized hubs focusing on quality, energy, water, green building, and more." },
    { value: "9", label: "International Offices", description: "Bridges connecting Indian business to key global commerce hubs." },
    { value: "250+", label: "Global Partner Organisations", description: "Institutional ties with international trade organizations." },
    { value: "100+", label: "Countries Connected Through Partnerships", description: "Global network facilitating trade and foreign investments." }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 — HERO / PLATFORM INTRODUCTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-slate-50 to-white py-20 lg:py-28">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-200/20 to-transparent pointer-events-none rounded-l-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0056b3] border border-blue-100 uppercase tracking-widest animate-pulse">
                <Sparkles className="h-3 w-3" /> CII Platform Introduction
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#002147] tracking-tight font-display leading-none">
                A Century of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002147] to-[#0056b3] block mt-1">
                  Industry Leadership
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#0056b3] font-semibold italic tracking-wide">
                Powering progress. Shaping India's growth story.
              </p>
              <div className="space-y-4 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                <p>
                  CII stands at the heart of India's industrial journey — connecting businesses, policymakers, and innovators to build a stronger, more competitive nation.
                </p>
                <p className="text-sm md:text-base opacity-90 font-medium">
                  Explore CII's initiatives, connect with industry leaders, discover events, access research, and become part of India's leading industry network.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/industry/login"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#002147] hover:bg-[#0056b3] shadow-md transition-all hover:-translate-y-0.5"
                >
                  Enter Industry Portal <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
                >
                  CII Administrative Portal
                </Link>
              </div>
            </div>

            {/* Right Column Visual (AI Summit Snapshot from docx page 1) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xl premium-shadow overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-tr from-slate-900 to-[#002147] rounded-xl flex flex-col justify-between p-6 relative overflow-hidden text-white">
                  
                  {/* Subtle vector lines simulating an AI summit banner */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#0056b3]/10 rounded-full blur-3xl"></div>

                  <div className="flex justify-between items-start z-10">
                    <span className="bg-[#0056b3] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">CII Event</span>
                    <span className="text-xs text-slate-300 font-mono">07 October 2025</span>
                  </div>

                  <div className="space-y-3 z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[11px] font-bold tracking-wide">2nd Edition</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight leading-tight">
                      Ai Powered Summit
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      Transforming the Industry Value Chain: From R&D Labs to Shop Floors
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-400 z-10">
                    <span>Aiyappan Ramamurthi</span>
                    <span>Subbaraju Gundurao</span>
                  </div>
                </div>

                {/* Summit Caption */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0056b3]"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">CII AI Summit, Mumbai</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT CII (SNAPSHOT) */}
      <section id="about-cii" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side layout panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-1 w-20 bg-[#0056b3] rounded"></div>
              <span className="text-xs font-bold text-[#0056b3] tracking-wider uppercase block">About CII (Snapshot)</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight leading-tight">
                India's Voice for Industry — For Over a Century
              </h2>
              <div className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 mt-6 shadow-sm">
                <Landmark className="absolute right-4 bottom-4 h-24 w-24 text-slate-200/50 -rotate-12 pointer-events-none" />
                <p className="text-sm font-semibold text-[#002147]">Founded in 1895</p>
                <p className="text-xs text-slate-500 mt-1">CII is a non-government, not-for-profit, industry-led and industry-managed organization, playing a proactive role in India's development process.</p>
              </div>
            </div>

            {/* Right side exact content */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p className="font-medium text-slate-800">
                CII is more than an industry body — it's a movement that has stood beside Indian business for over a hundred years.
              </p>
              <p>
                We bring companies, policymakers, and institutions to the same table, turning conversation into consensus and consensus into action. From boardroom strategy to national policy, CII has helped generations of Indian enterprises grow, adapt, and lead.
              </p>
              <p className="bg-[#f1f5f9] p-5 rounded-xl border-l-4 border-[#002147] font-medium text-[#002147] text-sm md:text-base">
                Today, that legacy powers a network spanning every state and sector — one built to carry India's industrial ambitions into the decades ahead.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section id="what-we-do" className="py-20 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#0056b3] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">Section 3 — Overview</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight">
              Four Ways to Move With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1: Policy & Advocacy */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 premium-shadow-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Scale className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-[#002147]">Policy & Advocacy</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Turning industry voice into national policy.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('policy-advocacy')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:text-[#002147] transition-colors"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Box 2: Membership */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 premium-shadow-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-[#002147]">Membership</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your gateway to India's business ecosystem.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('membership-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:text-[#002147] transition-colors"
              >
                Explore membership <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Box 3: Events & Forums */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 premium-shadow-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-[#002147]">Events & Forums</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Where India's boldest business conversations happen.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:text-[#002147] transition-colors"
              >
                View events calendar <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Box 4: Publications & Insights */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 premium-shadow-hover flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <Newspaper className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-[#002147]">Publications & Insights</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Research and foresight that keeps you ahead.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('news-publications')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:text-[#002147] transition-colors"
              >
                Read publications <ArrowRight className="h-3 w-3" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY PARTNER WITH CII (VISION & MISSION) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 bg-slate-50">
            
            {/* Mission Panel (L-side) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 rounded-full border border-sky-100 text-xs font-bold text-sky-800 tracking-wide">
                  <Compass className="h-3.5 w-3.5 text-blue-700" /> Vision Statement
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002147] font-display">Where We're Headed</h3>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  "A globally respected industry body driving inclusive, sustainable, and competitive economic growth in India, through innovation, collaboration, and policy leadership."
                </p>
              </div>
            </div>

            {/* Vision Panel (R-side) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-slate-100/50">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100 text-xs font-bold text-[#0056b3] tracking-wide">
                  <Shield className="h-3.5 w-3.5 text-[#0056b3]" /> Mission Mandate
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002147] font-display">What Drives Us</h3>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  "To be industry's most trusted partner — advancing business excellence, powering policy advocacy, fuelling innovation, and championing sustainable growth for Indian industry."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — MEMBERSHIP (PRIMARY CONVERSION DRIVER) */}
      <section id="membership-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,86,179,0.12),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text and Primary Conversion Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                Section 5 — Membership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white">
                Your Network.<br />
                Your Voice.<br />
                Your Growth.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                Join a network that shapes industries, influences policy, and unlocks opportunities for growth.
              </p>
              <div className="pt-4">
                <Link
                  to="/industry/login"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-all duration-200"
                >
                  Apply for Membership <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Bullets Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Bullet 1 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-bold text-blue-400 font-mono">01 / Connection</span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  Connect with industry leaders across India and the globe through CII's business forums and networking platforms.
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-bold text-blue-400 font-mono">02 / Policy Seat</span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  Have a seat at the table — engage directly with government and shape economic and industrial policy.
                </p>
              </div>

              {/* Bullet 3 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-bold text-blue-400 font-mono">03 / Knowledge Portal</span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  Tap into reports, research, events, and digital services through MyCII, whenever you need them.
                </p>
              </div>

              {/* Bullet 4 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-bold text-blue-400 font-mono">04 / Competency Edge</span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  Sharpen your edge with training, advisory support, and access to CII's Centres of Excellence.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED EVENTS (ONGOING INITIATIVES) */}
      <section id="events-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16">
            
            {/* L-Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#0056b3] tracking-widest uppercase block">Section 6 — Featured Events</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight leading-tight">
                Conversations That Shape Industries
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From high-stakes summits to sector-deep seminars, CII's events are where decisions get made and partnerships get built.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
                <button 
                  onClick={() => alert("Redirecting to CII Events Calendar Hub...")}
                  className="px-4 py-2.5 bg-[#002147] text-white hover:bg-[#0056b3] rounded-lg transition-colors"
                >
                  View All Events
                </button>
                <button 
                  onClick={() => alert("Redirecting to Programme Registration Form...")}
                  className="px-4 py-2.5 text-[#002147] hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
                >
                  Register for Upcoming Programmes
                </button>
              </div>
            </div>

            {/* R-Column Bullets */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="h-8 w-8 shrink-0 rounded bg-blue-50 text-[#002147] flex items-center justify-center font-bold text-xs font-mono">01</div>
                <div>
                  <p className="text-slate-700 text-sm md:text-base font-semibold">
                    Step into conferences and seminars spanning every sector and region.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="h-8 w-8 shrink-0 rounded bg-blue-50 text-[#002147] flex items-center justify-center font-bold text-xs font-mono">02</div>
                <div>
                  <p className="text-slate-700 text-sm md:text-base font-semibold">
                    Learn directly from experts shaping business, policy, sustainability, finance, and manufacturing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="h-8 w-8 shrink-0 rounded bg-blue-50 text-[#002147] flex items-center justify-center font-bold text-xs font-mono">03</div>
                <div>
                  <p className="text-slate-700 text-sm md:text-base font-semibold">
                    Build the relationships that matter, with the people who matter.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Key Initiatives Interactive Segment */}
          <div id="key-initiatives" className="pt-20 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[#0056b3] text-xs font-bold uppercase tracking-wider">CII Core Focus Areas</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#002147] tracking-tight font-display">
                Helping Industry Create Meaningful Impact Across Diverse Sectors
              </h3>
            </div>

            {/* Desktop Bento Grid / Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyInitiatives.map((init, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${init.bg} ${init.accent} hover:shadow-md hover:scale-[1.01]`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">{init.icon}</div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Initiative {index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#002147]">{init.title}</h4>
                      <p className="text-xs font-semibold text-[#0056b3] mt-0.5">{init.tagline}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {init.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-100/50 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">CIISIC Partner Pillar</span>
                    <span className="text-xs font-bold text-[#002147] flex items-center gap-1 cursor-pointer hover:underline">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — LATEST NEWS & PUBLICATIONS */}
      <section id="news-publications" className="py-20 bg-slate-50 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* L-Side: Bullets list */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg mt-0.5"><FileText className="h-5 w-5 text-[#002147]" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002147] mb-1">Knowledge Synthesis</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Explore in-depth reports and publications across sectors, priorities, and emerging trends.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg mt-0.5"><BookOpen className="h-5 w-5 text-[#002147]" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002147] mb-1">Empirical Research</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Get the pulse of industry through original surveys and research.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg mt-0.5"><Network className="h-5 w-5 text-[#002147]" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-[#002147] mb-1">Analytical Execution</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Use CII's knowledge engine to plan smarter and act faster.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* R-Side: Heading details */}
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#0056b3] tracking-widest uppercase block">Section 7 — Latest News</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight leading-tight">
                Stay Ahead. Stay Informed.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Cut through the noise with research, reports, and insights built for business leaders who move first.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
                <button 
                  onClick={() => alert("Accessing CII Digital Publications Library...")}
                  className="px-5 py-3 bg-[#002147] text-white hover:bg-[#0056b3] rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                >
                  Explore Publications <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button 
                  onClick={() => alert("Opening Insights newsletter registration...")}
                  className="px-5 py-3 text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                >
                  Read Latest Insights
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — POLICY & ADVOCACY */}
      <section id="policy-advocacy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* L-Column details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#0056b3] tracking-widest uppercase block">Section 8 — Policy & Advocacy</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight leading-tight">
                Your Business. Your Voice. At the Policy Table.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                CII works hand-in-hand with government to shape policies that fuel competitiveness, growth, and a stronger business climate.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
                <button 
                  onClick={() => alert("Redirecting to CII Policy Portals...")}
                  className="px-5 py-3 bg-[#002147] text-white hover:bg-[#0056b3] rounded-lg transition-colors"
                >
                  Explore Policy Work
                </button>
                <button 
                  onClick={() => alert("Opening Advocacy Updates Feed...")}
                  className="px-5 py-3 text-[#002147] hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
                >
                  Read Advocacy Updates
                </button>
              </div>
            </div>

            {/* R-Column Bullets list */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-blue-100 flex gap-4">
                <span className="text-lg font-black text-[#0056b3] font-mono mt-0.5">A</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Direct Government Liaison</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engage with the ideas and positions shaping India's biggest business decisions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-blue-100 flex gap-4">
                <span className="text-lg font-black text-[#0056b3] font-mono mt-0.5">B</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Consultation Archives</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Access real-time advocacy updates, recommendations, and consultation inputs.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-blue-100 flex gap-4">
                <span className="text-lg font-black text-[#0056b3] font-mono mt-0.5">C5</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Progressive Nation Building</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    See how CII helps build a more competitive, future-ready India, one policy at a time.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — IMPACT */}
      <section id="impact-records" className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#0056b3] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">Section 9 — Impact Proof Points</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002147] font-display tracking-tight">
              Building a Stronger, More Competitive India
            </h2>
            <p className="text-slate-600 text-sm sm:text-base italic">
              Through collaboration, innovation, and industry leadership.
            </p>
          </div>

          {/* Stats Display Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactMetrics.map((metric, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="space-y-2">
                  <div className="inline-block bg-blue-50 text-[#002147] p-3 rounded-xl mb-2">
                    <Award className="h-5 w-5 text-[#0056b3]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#002147] tracking-tight font-display">{metric.value}</div>
                  <div className="text-xs font-bold text-slate-700 leading-tight">{metric.label}</div>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Nationwide presence summary */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 text-center">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Through its nationwide presence, Centres of Excellence, and global partnerships, CII continues to strengthen India's industrial ecosystem by promoting innovation, policy leadership, sustainability, and business excellence.
            </p>
            
            {/* Visual Panel for the Agriculture Minister meeting (page 5 of PDF) */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60 max-w-2xl mx-auto space-y-4 text-left">
              <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center relative overflow-hidden border border-slate-200">
                {/* Simulated meeting artwork */}
                <div className="absolute inset-0 bg-slate-950/5 flex flex-col items-center justify-center p-6 text-center text-slate-700">
                  <Building2 className="h-12 w-12 text-[#002147] opacity-50 mb-2" />
                  <span className="text-xs font-extrabold tracking-widest uppercase text-[#002147]/80">Official Ministerial Delegation</span>
                  <span className="text-[10px] text-slate-400 mt-1">9 June 2026 • New Delhi</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#0056b3] uppercase tracking-wider mb-1">CII Archive • Meeting with Minister for Agriculture</p>
                <p className="text-xs text-slate-600 leading-normal">
                  <strong className="font-semibold text-slate-800">L-R:</strong> Mr. R Mukundan, President, CII; Shri Shivraj Singh Chouhan, Hon&apos;ble Minister for Agriculture and Farmers Welfare and Mr. Chandrajit Banerjee, Director General, CII on 9 June 2026 in New Delhi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10 — GET INVOLVED */}
      <section id="get-involved-section" className="py-20 bg-[#002147] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,86,179,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <span className="text-blue-400 text-xs font-black uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4.5 py-1.5 rounded-full">
            Section 10 — Get Involved
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white">
            Ready to Be Part of India&apos;s Growth Story?
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a business, an institution, or an industry leader, there&apos;s a place for you at CII.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-bold">
            <Link
              to="/industry/login"
              className="px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md"
            >
              Join as a Member
            </Link>
            <button
              onClick={() => document.getElementById('policy-advocacy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
            >
              Explore Policy Work
            </button>
            <button
              onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
            >
              View Events
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
