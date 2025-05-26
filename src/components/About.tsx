
import React from 'react';
import { GraduationCap, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-blue-100 p-1">
                <img 
                  src="https://i.postimg.cc/hhWwFGNb/IMG-20250526-WA0000.jpg"
                  alt="Burgu Abhilash"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
                <Code size={24} />
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
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <GraduationCap size={24} className="text-emerald-600" />
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
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Target size={24} className="text-emerald-600" />
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
