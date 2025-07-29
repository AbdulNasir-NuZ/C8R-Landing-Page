import React from "react";
import { Button } from "../../../../components/ui/button";

// Define footer data for better organization and maintainability
const footerData = {
  mainLinks: [
    { name: "Rollups", href: "#" },
    { name: "Metalayer", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Brand kit", href: "#" },
    { name: "Careers", href: "#" },
  ],
  socialLinks: [
    {
      name: "Discord",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/discord.svg",
    },
    {
      name: "Twitter",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/twitter.svg",
    },
    {
      name: "Telegram",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/telegram.svg",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/linkedin.svg",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/youtube.svg",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/instagram.svg",
    },
    {
      name: "TikTok",
      href: "#",
      icon: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/tiktok.svg",
    },
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#030e14] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Logo and Tagline */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                alt="Logo"
                src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1.svg"
              />
            </div>
            
            <div className="max-w-md">
              <h2 className="text-codepeniowhite text-3xl md:text-4xl font-bold mb-4">
                Fastest-Growing Rollup
                <br />
                Ecosystems On Ethereum
              </h2>
              
              <Button className="mt-4 px-6 py-3 bg-codepenioelectric-lime rounded-[10px] relative overflow-hidden [font-family:'Archivo',Helvetica] font-semibold text-[#030e14] text-base leading-[27.2px]">
                <div className="absolute w-14 h-[127px] top-1.5 left-[-54px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
                <span className="relative">Book A Call</span>
              </Button>
            </div>
          </div>
          
          {/* Right Column - Social Links and Navigation */}
          <div className="flex flex-col space-y-8">
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-codepenioelectric-lime flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <img
                    className="w-6 h-6"
                    alt={social.name}
                    src={social.icon}
                  />
                </a>
              ))}
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-700 pt-8">
              {footerData.mainLinks.map((link, index) => (
                <a
                  key={`main-${index}`}
                  href={link.href}
                  className="text-codepeniowhite hover:text-codepenioelectric-lime transition-colors"
                >
                  <span className="[font-family:'Archivo',Helvetica] font-medium text-base">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 pt-6">
              <p className="[font-family:'Archivo',Helvetica] font-normal text-codepeniowhite text-sm opacity-60">
                NFTNinja 2025 © All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
