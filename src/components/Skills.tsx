
import React from 'react';
import { Code, Database, Settings, Globe, GitBranch, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Container & Orchestration",
      icon: Settings,
      skills: ["Kubernetes"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Messaging & Streaming",
      icon: Database,
      skills: ["Apache Kafka"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "API Development",
      icon: Globe,
      skills: ["POSTMAN API"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Project Management",
      icon: MessageSquare,
      skills: ["JIRA"],
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Bitbucket"],
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const additionalSkills = [
    "Integration Platform as a Service",
    "Enterprise Solutions",
    "Backend Optimization",
    "Software Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for enterprise software development
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-3 rounded-full border border-blue-200 text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
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
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
