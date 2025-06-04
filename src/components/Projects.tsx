
import React from 'react';
import { Shield, Code, Database, ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: "Honeypot Based Security Approach",
    description: "Aimed at attracting hackers and recording their actions for analyzing device vulnerabilities.",
    icon: Shield,
    technologies: ["Security Analysis", "Vulnerability Assessment", "Threat Detection"],
    color: "from-red-400 to-red-600",
    githubUrl: "https://github.com/Abhilashburgu/Honeypot-based-security-approch",
    features: ["Advanced threat detection mechanisms", "Real-time hacker activity monitoring", "Comprehensive vulnerability analysis", "Automated security reporting"]
  }, {
    title: "OGW (Orion Gateway Application)",
    description: "Gateway application for telecom operations with comprehensive API management and microservices architecture.",
    icon: Code,
    technologies: ["Spring Boot", "Java", "MySQL", "REST APIs", "Microservices"],
    color: "from-blue-400 to-blue-600",
    githubUrl: null,
    features: ["API gateway development and management", "Microservices architecture implementation", "Database integration with MySQL", "RESTful web services development", "Performance optimization and monitoring"]
  }, {
    title: "O2A-Open 2 Activation SKY Application",
    description: "Service activation system for SKY services with robust database management and API integration capabilities.",
    icon: Database,
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Service Integration"],
    color: "from-green-400 to-green-600",
    githubUrl: null,
    features: ["Automated service activation workflows", "Comprehensive database management", "API integration and validation", "Real-time service monitoring", "Error handling and logging systems"]
  }];
  return <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional solutions and innovative projects spanning security, telecommunications, and enterprise applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <project.icon size={32} />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>}
                </div>
              </div>
            </div>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-slate-600 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to contribute to innovative solutions.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;
