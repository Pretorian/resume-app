import React, { useState } from 'react';
import { User, Briefcase, Award, GraduationCap, Target, Star, Phone, Calendar, MapPin, Mail, ChevronDown, ChevronRight, Trophy } from 'lucide-react';

// Experience data - structured for analytics and easy maintenance
const experienceData = {
  "guardian-life": {
    company: "Guardian Life Insurance",
    location: "Holmdel, New Jersey",
    duration: "Nov 2019 – Jul 2025",
    position: "Senior Technical Product Owner / Senior Lead Software Developer",
    type: "Full-time",
    achievements: [
      {
        id: "api-marketplace",
        category: "leadership",
        impact: "high",
        metrics: "millions of transactions",
        ranking: 9.2,
        description: "Defined and executed Epics, Features and Objectives for Guardian connect API marketplace program"
      },
      {
        id: "infrastructure-scaling",
        category: "technical",
        impact: "high", 
        metrics: "millions of secure transactions",
        ranking: 9.8,
        description: "Scaled API infrastructure to millions of secure transactions with executive KPI visibility"
      },
      {
        id: "modernization-lead",
        category: "leadership",
        impact: "high",
        metrics: "3x reduction in development time",
        ranking: 9.5,
        description: "Led cloud-native modernization achieving 3x reduction in development time"
      },
      {
        id: "github-migration",
        category: "technical",
        impact: "medium",
        metrics: "productivity gains",
        ranking: 6.8,
        description: "Migrated core systems to GitHub and enabled GitHub Copilot for productivity gains"
      },
      {
        id: "aws-architecture",
        category: "technical", 
        impact: "high",
        metrics: "scalable backend services",
        ranking: 8.7,
        description: "Architected scalable backend services using SNS/SQS, ECS, EKS, and Lambda"
      },
      {
        id: "security-implementation",
        category: "security",
        impact: "high",
        metrics: "reduced vulnerabilities",
        ranking: 8.1,
        description: "Implemented OWASP/ZAP DAST and Prisma Cloud security scans in CI/CD pipelines"
      },
      {
        id: "metrics-dashboards",
        category: "operations",
        impact: "medium",
        metrics: "reduced MTTR, improved velocity",
        ranking: 7.3,
        description: "Established metrics dashboards reducing MTTR and improving developer velocity"
      },
      {
        id: "team-mentoring",
        category: "leadership",
        impact: "medium", 
        metrics: "cross-team leadership",
        ranking: 7.9,
        description: "Mentored developers and empowered senior ICs for cross-team leadership"
      },
      {
        id: "global-collaboration",
        category: "collaboration",
        impact: "high",
        metrics: "3 regions (US, India, Latin America)",
        ranking: 8.4,
        description: "Collaborated across distributed teams in US, India, and Latin America using Agile/SAFe"
      }
    ]
  },
  "american-kennel-club": {
    company: "American Kennel Club",
    location: "Raleigh, North Carolina",
    duration: "May 2013 - Nov 2019", 
    position: "Senior Lead Software Engineer",
    type: "Full-time",
    achievements: [
      {
        id: "system-modernization",
        category: "technical",
        impact: "high",
        metrics: "improved reliability and scalability",
        ranking: 8.9,
        description: "Modernized systems from ColdFusion to Node.js/Angular improving reliability"
      },
      {
        id: "elasticsearch-implementation",
        category: "technical",
        impact: "high",
        metrics: "3M+ record queries",
        ranking: 8.6,
        description: "Implemented Elasticsearch + Spring caching for 3M+ record queries"
      },
      {
        id: "distributed-teams",
        category: "leadership",
        impact: "medium",
        metrics: "US & Costa Rica teams",
        ranking: 7.5,
        description: "Directed distributed engineering teams across US & Costa Rica"
      },
      {
        id: "aws-architecture-design",
        category: "technical",
        impact: "high",
        metrics: "new platforms secured",
        ranking: 8.3,
        description: "Defined AWS architecture and security configurations for new platforms"
      },
      {
        id: "governance-automation",
        category: "operations", 
        impact: "medium",
        metrics: "automated SDLC processes",
        ranking: 7.1,
        description: "Automated governance, compliance, and secure SDLC processes"
      },
      {
        id: "cicd-pipelines",
        category: "operations",
        impact: "high",
        metrics: "reduced downtime, high availability",
        ranking: 8.0,
        description: "Built CI/CD pipelines for self-healing, highly available AWS services"
      }
    ]
  },
  "research-square": {
    company: "Research Square",
    location: "Durham, North Carolina",
    duration: "Jun 2015 – Mar 2016",
    position: "Senior Software Engineer", 
    type: "Full-time",
    achievements: [
      {
        id: "ecommerce-infrastructure",
        category: "technical",
        impact: "high",
        metrics: "multilingual platforms",
        ranking: 7.8,
        description: "Designed media and commerce infrastructure for multilingual e-commerce platforms"
      },
      {
        id: "payment-integration",
        category: "technical",
        impact: "medium",
        metrics: "global payment systems",
        ranking: 6.9,
        description: "Integrated secure payment APIs (AliPay, PayPal, AllPago) into global systems"
      },
      {
        id: "backend-apis",
        category: "technical",
        impact: "medium",
        metrics: "core business functions",
        ranking: 6.4,
        description: "Developed backend APIs for content delivery and core business functions"
      }
    ]
  },
  "racersites-aje": {
    company: "RACERSITES -AJE",
    location: "Davidson, North Carolina", 
    duration: "Jan 2012 – May 2013",
    position: "Software Engineer",
    type: "Full-time",
    achievements: [
      {
        id: "cms-applications",
        category: "technical",
        impact: "medium",
        metrics: "multiple technologies",
        ranking: 5.7,
        description: "Built custom CMS/web applications using ColdFusion, PHP, and JavaScript"
      },
      {
        id: "redmine-customization",
        category: "technical",
        impact: "low",
        metrics: "operational efficiency",
        ranking: 4.2,
        description: "Customized Redmine-based scheduling/ticketing with Ruby for operational efficiency"
      }
    ]
  }
};

const MinimalistResume = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedExperience, setExpandedExperience] = useState(null);

  // Convert experienceData to array format for rendering
  const experienceArray = Object.keys(experienceData).map(key => ({
    id: key,
    company: experienceData[key].company,
    location: experienceData[key].location,
    duration: experienceData[key].duration,
    position: experienceData[key].position,
    type: experienceData[key].type,
    achievements: experienceData[key].achievements.map(achievement => achievement.description)
  }));

  const resumeData = {
    profile: {
      name: "Andres Macias",
      title: "Engineering Leader & Technologist",
      phone: "+1 (919) 308-2320",
      email: "joseandresmacias@gmail.com",
      summary: "12+ years building software, 5+ years managing engineering teams",
      location: "North Carolina, USA"
    },
    
    overview: {
      stats: [
        { label: "Years Experience", value: "12+", icon: Calendar },
        { label: "Years Leadership", value: "5+", icon: User },
        { label: "Companies", value: "4", icon: Briefcase },
        { label: "Certifications", value: "3", icon: Award }
      ],
      highlights: [
        "Led API marketplace scaling to millions of secure transactions",
        "Reduced development time by 3x through cloud-native modernization",
        "Managed distributed teams across US, India, and Latin America",
        "Architected scalable backend services using AWS (ECS, SNS/SQS, Lambda)",
        "Implemented security frameworks (OWASP, Prisma Cloud, SSO)"
      ]
    },

    expertise: {
      categories: [
        {
          title: "Leadership & Mentorship",
          level: 95,
          skills: ["Team Leadership", "Cross-functional Collaboration", "Mentoring", "Strategic Planning"],
          description: "10+ years leading and growing cross-functional teams; enabling senior Engineers to drive initiatives across platforms."
        },
        {
          title: "Backend & Infrastructure", 
          level: 90,
          skills: ["AWS (ECS, SNS/SQS, Lambda, Aurora)", "Node.js", "Python", "Java (Spring)", "Apigee"],
          description: "Expertise in cloud platforms, API development, and large-scale system architecture."
        },
        {
          title: "Operational Excellence",
          level: 88,
          skills: ["CI/CD", "Terraform", "Jenkins", "GitHub Actions", "Monitoring", "SLO/SLI"],
          description: "Automation, monitoring, and reliability engineering for enterprise-scale applications."
        },
        {
          title: "Security & Compliance",
          level: 85,
          skills: ["SSO (Okta, Entra)", "OWASP/ZAP/DAST", "Prisma Cloud", "Secure SDLC"],
          description: "Enterprise security frameworks and compliance management."
        },
        {
          title: "Collaboration & Communication",
          level: 92,
          skills: ["SAFe", "Agile", "Stakeholder Management", "Vision Setting"],
          description: "Strong cross-functional alignment with Product, Design, and Infrastructure teams."
        }
      ]
    },

    experience: experienceArray,

    education: {
      degree: "Bachelor of Engineering",
      field: "Information Technology / Information Systems",
      university: "Universidad de Guayaquil",
      location: "Ecuador",
      year: "2008"
    },

    certifications: [
      {
        name: "IASA CITA-Foundation Architect",
        issuer: "IASA",
        date: "Feb 2025",
        type: "Architecture",
        status: "Active"
      },
      {
        name: "Six Sigma Yellow Belt",
        issuer: "Six Sigma",
        date: "Apr 2023",
        type: "Process Improvement",
        status: "Active"
      },
      {
        name: "ITIL Certified Engineer",
        issuer: "ITIL",
        date: "Nov 2016",
        type: "IT Service Management",
        status: "Active"
      }
    ]
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'expertise', label: 'Expertise', icon: Target },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  // Helper functions for experience data analytics
  const getTopRankedAchievements = (limit = 4) => {
    const allAchievements = [];
    Object.keys(experienceData).forEach(key => {
      experienceData[key].achievements.forEach(achievement => {
        allAchievements.push({
          ...achievement,
          company: experienceData[key].company
        });
      });
    });
    
    return allAchievements
      .sort((a, b) => b.ranking - a.ranking)
      .slice(0, limit);
  };

  const getAchievementsByCategory = (category) => {
    const achievements = [];
    Object.keys(experienceData).forEach(key => {
      experienceData[key].achievements.forEach(achievement => {
        if (achievement.category === category) {
          achievements.push({
            ...achievement,
            company: experienceData[key].company
          });
        }
      });
    });
    return achievements;
  };

  const getHighImpactAchievements = () => {
    const achievements = [];
    Object.keys(experienceData).forEach(key => {
      experienceData[key].achievements.forEach(achievement => {
        if (achievement.impact === 'high') {
          achievements.push({
            ...achievement,
            company: experienceData[key].company
          });
        }
      });
    });
    return achievements;
  };

  // Section Components
  const OverviewSection = () => (
    <div id="overview-section" className="space-y-6 sm:space-y-8">
      <div id="profile-header" className="text-center border-b-2 border-black pb-6 sm:pb-8">
        <h1 id="profile-name" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">{resumeData.profile.name}</h1>
        <p id="profile-title" className="text-lg sm:text-xl text-gray-800 mb-4 sm:mb-6">{resumeData.profile.title}</p>
        <p id="profile-summary" className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-2">{resumeData.profile.summary}</p>
        
        <div id="contact-info" className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-gray-800 text-sm sm:text-base">
          <div id="contact-phone" className="flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">{resumeData.profile.phone}</span>
          </div>
          <div id="contact-email" className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">{resumeData.profile.email}</span>
          </div>
          <div id="contact-location" className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{resumeData.profile.location}</span>
          </div>
        </div>
      </div>

      <div id="stats-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {resumeData.overview.stats.map((stat, index) => (
          <div key={index} id={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`} className="text-center border-2 border-black p-3 sm:p-6">
            <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-black mx-auto mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-xs sm:text-sm text-gray-800 font-medium leading-tight">{stat.label}</div>
          </div>
        ))}
      </div>

      <div id="top-achievements">
        <h2 id="achievements-header" className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 border-b border-black pb-2 flex items-center space-x-2">
          <Trophy className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
          <span>Top Ranked Achievements</span>
        </h2>
        <div id="achievements-list" className="space-y-3">
          {getTopRankedAchievements().map((achievement, index) => (
            <div key={achievement.id} id={`achievement-${achievement.id}`} className="flex items-start space-x-3 p-3 sm:p-4 border border-gray-300">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="w-6 sm:w-8 h-6 sm:h-8 bg-black text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </span>
                <Star className="w-4 sm:w-5 h-4 sm:h-5 text-black flex-shrink-0" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{achievement.description}</span>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                  <span className="text-xs px-2 py-1 border border-gray-400 bg-gray-100 text-gray-800">
                    {achievement.company}
                  </span>
                  <span className={`text-xs px-2 py-1 border ${
                    achievement.impact === 'high' ? 'border-black bg-white text-black' :
                    achievement.impact === 'medium' ? 'border-gray-400 bg-white text-gray-600' :
                    'border-gray-300 bg-gray-50 text-gray-500'
                  }`}>
                    {achievement.impact} impact
                  </span>
                  {achievement.metrics && (
                    <span className="text-xs px-2 py-1 border border-gray-300 bg-gray-50 text-gray-600">
                      📊 {achievement.metrics}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExpertiseSection = () => (
    <div id="expertise-section" className="space-y-6 sm:space-y-8">
      <div id="expertise-header" className="text-center border-b-2 border-black pb-4 sm:pb-6">
        <h1 id="expertise-title" className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Areas of Expertise</h1>
        <p id="expertise-description" className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-2">Technical and leadership capabilities across multiple domains</p>
      </div>

      <div id="expertise-categories" className="space-y-6 sm:space-y-8">
        {resumeData.expertise.categories.map((category, index) => (
          <div key={index} id={`expertise-${category.title.toLowerCase().replace(/[&\s]+/g, '-')}`} className="border-2 border-black p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
              <h3 className="text-lg sm:text-xl font-bold text-black pr-2">{category.title}</h3>
              <div className="text-left sm:text-right flex-shrink-0">
                <div className="text-xl sm:text-2xl font-bold text-black">{category.level}%</div>
                <div className="text-xs sm:text-sm text-gray-700">Proficiency</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 border border-gray-400 h-3 sm:h-4 mb-4 sm:mb-6">
              <div 
                className="bg-black h-full transition-all duration-1000"
                style={{ width: `${category.level}%` }}
              ></div>
            </div>

            <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{category.description}</p>

            <div id={`skills-${category.title.toLowerCase().replace(/[&\s]+/g, '-')}`} className="flex flex-wrap gap-1 sm:gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="border border-black bg-white text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ExperienceSection = () => {
    const toggleExperience = (roleId) => {
      setExpandedExperience(expandedExperience === roleId ? null : roleId);
    };

    return (
      <div id="experience-section" className="space-y-6 sm:space-y-8">
        <div id="experience-header" className="text-center border-b-2 border-black pb-4 sm:pb-6">
          <h1 id="experience-title" className="text-3xl sm:text-4xl font-bold text-black mb-2 sm:mb-3">Professional Experience</h1>
          <p id="experience-description" className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-2">Career progression through leading technology companies with detailed role context</p>
          <p id="experience-metadata" className="text-xs text-gray-500 mt-2 px-2">
            📄 Enhanced experience data loaded from structured JSON source ({Object.keys(experienceData).length} companies, {
              Object.values(experienceData).reduce((total, company) => total + company.achievements.length, 0)
            } achievements with rankings)
          </p>
        </div>

        <div id="experience-list" className="space-y-3 sm:space-y-4">
          {resumeData.experience.map((role, index) => {
            const originalRole = role.id ? experienceData[role.id] : null;
            const isExpanded = expandedExperience === role.id;
            
            return (
              <div key={role.id || index} id={`experience-${role.id || index}`} className="border-2 border-black">
                {/* Header - Always Visible */}
                <div 
                  id={`experience-header-${role.id || index}`}
                  className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors min-h-[44px]"
                  onClick={() => toggleExperience(role.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-2">
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          {isExpanded ? 
                            <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-black" /> : 
                            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
                          }
                        </div>
                        <h3 id={`position-${role.id || index}`} className="text-lg sm:text-xl font-bold text-black leading-tight">{role.position}</h3>
                      </div>
                      <div className="ml-6 sm:ml-7">
                        <div id={`company-${role.id || index}`} className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{role.company}</div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
                          <span id={`location-${role.id || index}`} className="flex items-center space-x-1">
                            <MapPin className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                            <span>{role.location}</span>
                          </span>
                          <span id={`duration-${role.id || index}`} className="flex items-center space-x-1">
                            <Calendar className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                            <span>{role.duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2 flex-shrink-0 ml-2">
                      {originalRole && (
                        <div id={`stats-${role.id || index}`} className="text-right text-xs sm:text-sm text-gray-600">
                          <div className="font-bold">{originalRole.achievements.length} achievements</div>
                        </div>
                      )}
                      <span id={`type-${role.id || index}`} className="border border-black bg-white text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                        {role.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div id={`experience-details-${role.id || index}`} className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-300 bg-gray-50">
                    {/* Key Achievements */}
                    <div className="mt-4 sm:mt-6">
                      <h4 id={`achievements-header-${role.id || index}`} className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg border-b border-gray-400 pb-2">Key Achievements</h4>
                      <div id={`achievements-${role.id || index}`} className="space-y-3">
                        {role.achievements.map((achievement, achIndex) => {
                          const originalAchievement = role.id ? experienceData[role.id]?.achievements[achIndex] : null;
                          
                          return (
                            <div key={achIndex} id={`achievement-${role.id || index}-${achIndex}`} className="flex items-start space-x-3 p-3 bg-white border border-gray-300 rounded">
                              <Star className="w-4 h-4 text-black flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <span className="text-gray-800 text-sm sm:text-base leading-relaxed block">{achievement}</span>
                                {originalAchievement && (
                                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                                    <span className={`text-xs px-2 py-1 border ${
                                      originalAchievement.category === 'leadership' ? 'border-black bg-black text-white' :
                                      originalAchievement.category === 'technical' ? 'border-gray-400 bg-gray-100 text-gray-800' :
                                      originalAchievement.category === 'security' ? 'border-gray-600 bg-gray-200 text-gray-800' :
                                      originalAchievement.category === 'operations' ? 'border-gray-500 bg-gray-150 text-gray-800' :
                                      'border-gray-300 bg-gray-50 text-gray-700'
                                    }`}>
                                      {originalAchievement.category}
                                    </span>
                                    <span className={`text-xs px-2 py-1 border ${
                                      originalAchievement.impact === 'high' ? 'border-black bg-white text-black' :
                                      originalAchievement.impact === 'medium' ? 'border-gray-400 bg-white text-gray-600' :
                                      'border-gray-300 bg-gray-50 text-gray-500'
                                    }`}>
                                      {originalAchievement.impact} impact
                                    </span>
                                    {originalAchievement.metrics && (
                                      <span className="text-xs px-2 py-1 border border-gray-300 bg-gray-50 text-gray-600 break-words">
                                        📊 {originalAchievement.metrics}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Data insights section */}
        <div id="experience-analytics" className="border border-gray-400 p-3 sm:p-4 bg-gray-50 text-center">
          <p className="text-xs text-gray-700 mb-2">
            <strong>Enhanced Structured Data:</strong> This experience data now includes rankings and sliding drawer interface
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-gray-600">
            <span>🎯 {getHighImpactAchievements().length} High-Impact Items</span>
            <span>👥 {getAchievementsByCategory('leadership').length} Leadership</span>
            <span>🔧 {getAchievementsByCategory('technical').length} Technical</span>
            <span>🔒 {getAchievementsByCategory('security').length} Security</span>
            <span>📈 {getAchievementsByCategory('operations').length} Operations</span>
            <span>🤝 {getAchievementsByCategory('collaboration').length} Collaboration</span>
          </div>
        </div>
      </div>
    );
  };

  const EducationSection = () => (
    <div id="education-section" className="space-y-6 sm:space-y-8">
      <div id="education-header" className="text-center border-b-2 border-black pb-4 sm:pb-6">
        <h1 id="education-title" className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Education</h1>
        <p id="education-description" className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-2">Academic foundation in engineering and technology</p>
      </div>

      <div id="education-content" className="max-w-2xl mx-auto px-2">
        <div id="education-card" className="border-2 border-black p-6 sm:p-8 text-center">
          <div id="education-icon" className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-black bg-white mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <GraduationCap className="w-8 sm:w-10 h-8 sm:h-10 text-black" />
          </div>
          
          <h3 id="degree-title" className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 leading-tight">{resumeData.education.degree}</h3>
          <p id="degree-field" className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 leading-tight">{resumeData.education.field}</p>
          
          <div id="education-details" className="space-y-2 text-gray-700 text-sm sm:text-base">
            <div id="university-info" className="flex justify-center items-center space-x-2">
              <MapPin className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
              <span className="text-center">{resumeData.education.university}, {resumeData.education.location}</span>
            </div>
            <div id="graduation-info" className="flex justify-center items-center space-x-2">
              <Calendar className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
              <span>Graduated {resumeData.education.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CertificationsSection = () => (
    <div id="certifications-section" className="space-y-6 sm:space-y-8">
      <div id="certifications-header" className="text-center border-b-2 border-black pb-4 sm:pb-6">
        <h1 id="certifications-title" className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Certifications</h1>
        <p id="certifications-description" className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-2">Professional credentials demonstrating expertise and continuous learning</p>
      </div>

      <div id="certifications-list" className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {resumeData.certifications.map((cert, index) => (
          <div key={index} id={`certification-${cert.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="border-2 border-black p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 border-2 border-black bg-white flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-black leading-tight">{cert.name}</h3>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm text-gray-700">{cert.type}</p>
                </div>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <div className="text-sm font-bold text-black mb-1">{cert.date}</div>
                <span className={`inline-block px-2 sm:px-3 py-1 text-xs font-bold border ${
                  cert.status === 'Active' 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-400 bg-gray-200 text-gray-800'
                }`}>
                  {cert.status}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div id="certification-links" className="border border-gray-400 p-4 sm:p-6 text-center bg-gray-50">
          <p className="text-gray-800 text-sm sm:text-base">
            <span className="font-bold">View Digital Badges:</span>
            <a href="https://www.linkedin.com/in/xxx" 
               className="text-black underline font-bold ml-2" 
               target="_blank" 
               rel="noopener noreferrer">
              Credly Profile →
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'overview': return <OverviewSection />;
      case 'expertise': return <ExpertiseSection />;
      case 'experience': return <ExperienceSection />;
      case 'education': return <EducationSection />;
      case 'certifications': return <CertificationsSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div id="resume-app" className="min-h-screen bg-white">      
      <nav id="main-navigation" className="border-b-2 border-black bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2 border-2 text-xs sm:text-sm font-bold transition-colors min-h-[44px] ${
                  activeSection === item.id
                    ? 'border-black bg-black text-white'
                    : 'border-gray-400 bg-white text-black hover:border-black'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden xs:inline sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main id="main-content" className="py-6 sm:py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div id="content-container" className="w-full sm:w-[85%] lg:w-[70%] mx-auto">
            {renderActiveSection()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinimalistResume;