"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import ProjectCard, {
  ProjectCardProps,
} from "./components/project_card/project_card";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  Globe,
} from "lucide-react";

const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 pointer-events-none opacity-[0.15]">
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "contrast(120%) brightness(1%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

type BlobPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const GradientBlob = ({
  position = "top-right",
}: {
  position?: BlobPosition;
}) => {
  const positionClasses: Record<BlobPosition, string> = {
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none`}
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)",
      }}
    />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((position / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Array<ProjectCardProps> = [
    {
      id: "01",
      title: "SOAR-EDR Playbook",
      subtitle: "SOAR-EDR Security Automated Threat Detection & Response",
      description:
        `An automated security orchestration, automation, and response (SOAR) solution integrated with LimaCharlie, Tines, Slack, and Email. 
         This playbook automates threat detection, alerts, and machine isolation 
         reducing manual intervention and accelerating incident response.`,
      tags: [
        "LimaCharlie","Tines","Slack"
      ],
      imageSrc: "/diagram.png",
      links: {
        github: "https://github.com/rihadroshan/SOAR-EDR-Playbook",
      },
      metrics: {
        "Threat Detection Accuracy": "98.7%",
        "Incident Response Time": "< 5s",
      },
    },
    {
      id: "02",
      title: "ADSec Lab",
      subtitle: "Active Directory security, monitoring, and attack simulation",
      description:
        `A comprehensive security lab designed for Active Directory security testing, monitoring, and attack simulations. 
         The lab utilizes Splunk for log analysis and Atomic Red Team for adversary emulation, 
         enabling comprehensive testing of security defenses against real-world attack techniques.`,
      tags: [
        "Splunk","Sysmon","Atomic Red Team","Ubuntu Server","Active Directory"
      ],
      imageSrc: "/splunk.png",
      links: {
        github: "https://github.com/rihadroshan/AdSec-Lab",
      },
      metrics: {
        "Attack Simulation Coverage": "50+ MITRE ATT&CK techniques",
        "Response Time": "< 5s",
      },
    },
    {
      id: "03",
      title: "SSH Honeypot",
      subtitle: "Simulated SSH environment for attack detection, logging, and analysis",
      description:
        `A simulated SSH environment for detecting and logging unauthorized access attempts and malicious command executions. 
         Fully customizable to test various attack scenarios, providing actionable insights for threat analysis. `,
      tags: [

        "Python"
      ],
      imageSrc: "/ssh.png",
      links: {
        github: "https://github.com/rihadroshan/ssh-honeypot",
      },
      metrics: {
        "Authentication Logging Response Time": "< 100ms",
        "Customizable Parameters": "Username, password, port",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-gray-100 overflow-hidden">
      {/* Base texture */}
      <div
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Moving grain overlay */}
      <GrainOverlay />

      <Navbar />

      {/* Content wrapper with additional contrast */}
      <div className="relative z-10 min-h-screen backdrop-contrast-110 backdrop-brightness-95">
        {/* Previous navigation code */}

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 py-32 z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mono text-sm text-gray-500 mb-4 tracking-widest"
            >
              Securing the Digital World
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight leading-tight"
            >
              Hey, I'm Rihad Roshan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-8 font-light"
            >
              I explore innovative cybersecurity strategies, 
              focusing on detecting emerging threats and enhancing digital resilience.
            </motion.p>
          </motion.div>
        </section>

        <section id="projects" className="relative min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pb-4"
            >
              <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
                FEATURED PROJECTS
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
                What I've Built
              </h2>
            </motion.div>

            <div className="space-y-32 md:ml-24">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative min-h-screen py-32">
          <GradientBlob position="bottom-right" />
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mb-12">
              I'm always interested in hearing about new projects and
              opportunities. If you have a question or simply want to connect,
              feel free to reach out
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-violet-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href="mailto:rihadroshan@gmail.com"
                        className="text-lg hover:text-slate-400 transition-colors"
                      >
                        rihadroshan@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-violet-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="text-lg">Bengaluru, IND</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/rihadroshan"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/rihadroshan"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Skills Section */}
        <section id="about" className="relative min-h-screen py-32">
          <GradientBlob position="top-right" />
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
              A BIT ABOUT ME
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
              WHO AM I
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-gray-400 text-lg">
                I'm a cybersecurity researcher focused on defensive security, building secure solutions, developing threat detection systems,
                and simulating attacks. Always learning and exploring new technologies to stay ahead of emerging threats.
                </p>

                <div className="flex space-x-6 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-violet-400 hover:bg-violet-600 rounded-lg transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Rihad Rosahn. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
