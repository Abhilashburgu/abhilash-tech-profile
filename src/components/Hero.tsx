
import React from 'react';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-block">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4 animate-fade-in">
                Hello, I'm
                <span className="block text-blue-600 mt-2">BURGU ABHILASH</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 animate-fade-in">
                Software Developer at Amdocs
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-lg animate-fade-in">
                Passionate software developer specializing in enterprise solutions and integration platforms.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105"
                >
                  Get In Touch
                </button>
                <button className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-all duration-300 font-medium hover:scale-105">
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              {/* Quick Contact Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="mailto:abhilashburgu27@gmail.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span className="hidden sm:inline">abhilashburgu27@gmail.com</span>
                </a>
                <a 
                  href="tel:+918790033916"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Phone size={20} />
                  <span className="hidden sm:inline">+91-8790033916</span>
                </a>
                <a 
                  href="https://linkedin.com/in/abhilash-burgu-4453ba232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
                <div className="w-72 h-72 bg-slate-200 rounded-full flex items-center justify-center">
                  <div className="text-slate-600 text-center">
                    <div className="w-20 h-20 bg-slate-400 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">Profile Picture</p>
                    <p className="text-xs text-slate-500">Upload your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
