import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState("home");

  // Navigation menu items data
  const navItems = [
    { name: "home", id: "home" },
    { name: "story", id: "about" },
    { name: "roadmap", id: "roadmap" },
    { name: "team", id: "team" },
    { name: "contact", id: "faq" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Vertical text for the side of the page
  const verticalText = "NFTNINJAISA LIMITED COLLECTION OF 5,000";

  return (
    <>
      {/* Vertical Text */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center">
          {verticalText.split('').map((letter, index) => (
            <div 
              key={`vertical-${index}`} 
              className="text-codepenioelectric-lime font-codepen-io-semantic-heading-6-upper mb-1"
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Ash Creations Style Navigation Bar */}
      <nav className="nav fixed top-5 left-1/2 transform -translate-x-1/2 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] py-5 px-[80px] pr-[60px] rounded-[50px] shadow-lg z-50 flex justify-center items-center transition-all duration-500">
        <div className="icon">
          <span className="bg-codepeniowhite/70"></span>
          <span className="bg-codepeniowhite/70"></span>
        </div>
        
        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`uppercase font-semibold ${
                  activeSection === item.id ? 'text-codepenioelectric-lime' : 'text-codepeniowhite/70'
                } hover:text-codepenioelectric-lime`}
              >
                {item.name}
              </a>
            </li>
          ))}
          
          <li className="ml-4">
            <Button className="px-4 py-2 bg-codepenioelectric-lime rounded-[10px] relative overflow-hidden [font-family:'Archivo',Helvetica] font-semibold text-[#030e14] text-sm">
              <div className="absolute w-10 h-[100px] top-1 left-[-40px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
              <span className="relative">Connect</span>
            </Button>
          </li>
        </ul>
      </nav>

      {/* Custom CSS for the navigation */}
      <style jsx>{`
        .nav {
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .icon {
          position: absolute;
          left: 30px;
          width: 30px;
          height: 20px;
          cursor: pointer;
        }
        
        .icon span {
          position: absolute;
          width: 30px;
          height: 4px;
          border-radius: 50px;
          transition: 0.5s;
        }
        
        .icon span:nth-child(1) {
          top: 0;
        }
        
        .icon span:nth-child(2) {
          bottom: 0;
        }
        
        .nav:hover .icon span:nth-child(1) {
          transform: translateY(8px) rotate(-45deg);
          background-color: var(--codepenioelectric-lime);
        }
        
        .nav:hover .icon span:nth-child(2) {
          transform: translateY(-8px) rotate(45deg);
          background-color: var(--codepenioelectric-lime);
        }
        
        .menu {
          margin: 0;
          padding: 0;
          width: 0;
          overflow: hidden;
          transition: 0.5s;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }
        
        .nav:hover .menu {
          width: 450px;
        }
        
        .menu li {
          list-style: none;
          margin: 0 10px;
        }
        
        @media (max-width: 768px) {
          .nav {
            padding: 15px 50px 15px 60px;
          }
          
          .nav:hover .menu {
            width: 300px;
          }
          
          .menu li {
            margin: 0 5px;
          }
        }
      `}</style>
    </>
  );
};
