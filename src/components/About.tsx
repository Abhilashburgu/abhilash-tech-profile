
import React from 'react';
import { GraduationCap, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-slate-600 text-center">
                  <div className="w-16 h-16 bg-slate-400 rounded-full mx-auto mb-3"></div>
                  <p className="text-sm">Profile Picture</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Code size={32} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Personal Bio</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm Burgu Abhilash, currently working as a Software Developer at Amdocs. 
                Passionate about software development and enterprise integration, I thrive on 
                exploring new technologies and optimizing backend services. I completed my 
                B.Tech from Vellore Institute of Technology, Vellore in 2023.
              </p>
            </div>

            {/* Education */}
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap size={24} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800">Education</h4>
              </div>
              <div className="ml-11">
                <h5 className="font-semibold text-slate-800">Bachelor of Technology (B.Tech)</h5>
                <p className="text-slate-600">Vellore Institute of Technology, Vellore</p>
                <p className="text-slate-500">Graduated: 2023</p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target size={24} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800">Mission</h4>
              </div>
              <p className="text-slate-700 ml-11">
                To leverage cutting-edge technologies in creating robust enterprise solutions 
                that drive business transformation and technological innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
