import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { CopyIcon, CheckIcon } from "lucide-react";

export const StepsSection = (): JSX.Element => {
  const [copied, setCopied] = useState(false);
  
  // Steps data
  const steps = [
    {
      number: "01",
      title: "CREATE A WALLET",
      description: "Download Metamask or any wallet that supports ETH"
    },
    {
      number: "02",
      title: "FUND YOUR WALLET",
      description: "Transfer ETH or Ethereum-based tokens to your wallet"
    },
    {
      number: "03",
      title: "MINT YOUR NINJA",
      description: "Use your ETH to mint a unique NFTNinja and join the clan"
    }
  ];

  // Contract address
  const contractAddress = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-20 overflow-hidden" id="how-to-mint">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e1e] to-[#030e14] z-0">
        <div className="absolute inset-0 opacity-10 bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-image.png)] bg-cover bg-center" />
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-codepen-io-archivo-semibold-upper text-codepenioelectric-lime mb-4">
            HOW TO GET STARTED
          </h2>
          <h3 className="font-codepen-io-semantic-heading-2-upper text-codepeniowhite">
            THREE SIMPLE STEPS
          </h3>
        </div>
        
        {/* Steps cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-transparent border-none overflow-hidden"
            >
              {/* Number circle */}
              <div className="absolute -top-4 left-8 w-20 h-20 rounded-full bg-codepenioelectric-lime/20 flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-codepenioelectric-lime flex items-center justify-center">
                  <span className="text-[#030e14] text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              
              {/* Card content */}
              <CardContent className="pt-12 pb-8 px-8 bg-[#030e14]/60 backdrop-blur-sm rounded-3xl border border-codepenioelectric-lime/20 h-full">
                <h4 className="text-codepeniowhite text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-codepeniowhite/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Contract address section */}
        <div className="bg-[#0a2e1e] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-codepeniowhite font-mono text-sm md:text-base overflow-hidden overflow-ellipsis px-4 py-2">
            {contractAddress}
          </div>
          <Button 
            onClick={handleCopy} 
            className="bg-codepenioelectric-lime hover:bg-codepenioelectric-lime/90 text-[#030e14] font-bold px-8 py-2 rounded-xl flex items-center gap-2"
          >
            {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
            {copied ? "COPIED" : "COPY"}
          </Button>
        </div>
      </div>
    </section>
  );
};
