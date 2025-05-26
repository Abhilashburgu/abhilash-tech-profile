
import React from 'react';
import { Mail, Phone, Linkedin, Download, Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                Hello, I'm
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                  BURGU ABHILASH
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 font-medium">
                Software Developer at 
                <span className="text-blue-600 font-semibold"> Amdocs</span>
              </h2>
              
              <p className="text-lg text-slate-700 mb-8 max-w-lg leading-relaxed">
                Passionate software developer specializing in enterprise solutions and integration platforms, 
                building scalable systems with modern technologies.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 font-medium hover:scale-105">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a 
                href="mailto:abhilashburgu27@gmail.com"
                className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
              >
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="hidden sm:inline font-medium">abhilashburgu27@gmail.com</span>
              </a>
              
              <a 
                href="tel:+918790033916"
                className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
              >
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="hidden sm:inline font-medium">+91-8790033916</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/abhilash-burgu-4453ba232"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50"
              >
                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="hidden sm:inline font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-white rounded-full p-3">
                    <img 
                      src="https://i.postimg.cc/hhWwFGNb/IMG-20250526-WA0000.jpg"
                      alt="Burgu Abhilash"
                      className="w-full h-full object-cover rounded-full shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-xl">⚡</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-lg">🚀</span>
                </div>
                
                <div className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-ping"></div>
                
                {/* Orbit Ring */}
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Background Blur Elements */}
              <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
