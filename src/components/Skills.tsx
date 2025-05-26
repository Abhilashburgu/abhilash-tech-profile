
import React from 'react';
import { Code, Database, Settings, Globe, GitBranch, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java"],
      color: "from-orange-100 to-red-100 text-orange-700"
    },
    {
      title: "Container & Orchestration",
      icon: Settings,
      skills: ["Kubernetes"],
      color: "from-blue-100 to-indigo-100 text-blue-700"
    },
    {
      title: "Messaging & Streaming",
      icon: Database,
      skills: ["Apache Kafka"],
      color: "from-green-100 to-emerald-100 text-green-700"
    },
    {
      title: "API Development",
      icon: Globe,
      skills: ["POSTMAN API"],
      color: "from-purple-100 to-violet-100 text-purple-700"
    },
    {
      title: "Project Management",
      icon: MessageSquare,
      skills: ["JIRA"],
      color: "from-indigo-100 to-blue-100 text-indigo-700"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Bitbucket"],
      color: "from-teal-100 to-cyan-100 text-teal-700"
    }
  ];

  const additionalSkills = [
    "Integration Platform as a Service",
    "Enterprise Solutions",
    "Backend Optimization",
    "Software Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for enterprise software development
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 hover:border-emerald-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gradient-to-r from-slate-50 to-emerald-50 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium hover:from-emerald-50 hover:to-blue-50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-violet-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-full border border-emerald-200 text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Proficiency Overview</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { skill: "Java Development", level: 85 },
              { skill: "Kubernetes", level: 75 },
              { skill: "Apache Kafka", level: 70 },
              { skill: "API Development", level: 80 },
              { skill: "Enterprise Integration", level: 78 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">{item.skill}</span>
                  <span className="text-sm text-slate-500">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
