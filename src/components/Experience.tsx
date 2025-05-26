
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Experience Card */}
            <div className="relative pl-20 pb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">Software Developer</h3>
                      <p className="text-xl text-blue-600 font-semibold">Amdocs</p>
                    </div>
                  </div>
                  <div className="text-right text-slate-500">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      <span className="text-sm">July 27, 2023 – Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span className="text-sm">Pune, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Engaged in software development and integration platform management, 
                    working on enterprise-level solutions and backend optimization.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Responsibilities & Technologies:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Kubernetes orchestration and management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Apache Kafka messaging systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">API development and testing with POSTMAN</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Project management with JIRA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Version control with Bitbucket</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Integration Platform as a Service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
