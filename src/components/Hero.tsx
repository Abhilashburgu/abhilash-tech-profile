import React from 'react';
import { Mail, Phone, Linkedin, Download, Github, ArrowRight, Star, Code, Zap } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-lg rotate-45 opacity-70 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-violet-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-cyan-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-60 right-1/4 w-6 h-6 bg-rose-400 rounded-full opacity-40 animate-pulse"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-32 right-32 w-20 h-0.5 bg-white/30 rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-16 h-0.5 bg-white/20 -rotate-45"></div>
        
        {/* Dots Pattern */}
        <div className="absolute top-10 left-1/2 flex gap-2">
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>
            
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-6">
                BURGU ABHILASH
              </h2>
            </div>
            
            {/* Job Title with Icon */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Code className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-2xl lg:text-3xl text-white/90 font-semibold">
                Software Developer at 
                <span className="text-emerald-400 ml-2">Amdocs</span>
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              Passionate software developer specializing in enterprise solutions and integration platforms, 
              building scalable systems with modern technologies.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-bold hover:scale-105 shadow-2xl hover:shadow-emerald-500/25">
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold hover:scale-105 backdrop-blur-sm">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="mailto:abhilashburgu27@gmail.com" className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 p-3 rounded-xl border border-white/20 hover:border-white/40">
                <Mail size={20} />
                <span className="hidden sm:inline font-medium">Email</span>
              </a>
              
              <a href="tel:+918790033916" className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 p-3 rounded-xl border border-white/20 hover:border-white/40">
                <Phone size={20} />
                <span className="hidden sm:inline font-medium">Call</span>
              </a>
              
              <a href="https://linkedin.com/in/abhilash-burgu-4453ba232" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 p-3 rounded-xl border border-white/20 hover:border-white/40">
                <Linkedin size={20} />
                <span className="hidden sm:inline font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Profile Image Container */}
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500 rounded-full p-1 animate-spin" style={{
                animationDuration: '8s'
              }}>
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <img src="https://i.postimg.cc/hhWwFGNb/IMG-20250526-WA0000.jpg" alt="Burgu Abhilash" className="w-full h-full object-cover rounded-full shadow-2xl" />
                  </div>
                </div>
                
                {/* Floating Stats/Info Cards */}
                <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-bounce">
                  <div className="flex items-center gap-2">
                    <Star className="text-emerald-500" size={20} />
                    <div>
                      <div className="text-lg font-bold text-slate-800">2+</div>
                      <div className="text-xs text-slate-600">Years Experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-pulse">
                  <div className="flex items-center gap-2">
                    <Zap className="text-blue-500" size={20} />
                    <div>
                      <div className="text-lg font-bold text-slate-800">5+</div>
                      <div className="text-xs text-slate-600">Projects Done</div>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div style={{
                animationDuration: '20s'
              }} className="absolute inset-0 ">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Background Glow Effects */}
              <div className="absolute -z-10 top-10 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-48 h-48 bg-violet-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center gap-3 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;