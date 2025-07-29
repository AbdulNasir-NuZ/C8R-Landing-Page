import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const FAQSection = (): JSX.Element => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState("item-1");

  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      question: "1. What is nftninja?",
      answer:
        "nftninja is a collection of 5,000 unique, masked ninja NFTs living on the Ethereum blockchain. Each ninja is packed with distinct traits, rarity, and hidden utility within the ecosystem.",
    },
    {
      id: "item-2",
      question: "2. How can I mint a ninja?",
      answer: "You can mint a ninja directly through our website during the public sale, or join our whitelist for early access. Alternatively, you can purchase from secondary markets like OpenSea after the initial mint.",
    },
    {
      id: "item-3",
      question: "3. Will there be a game or metaverse integration?",
      answer: "Yes, we're developing a battle arena game where ninjas can compete, earn rewards, and upgrade their skills. We also have plans for metaverse integration in Phase 4 of our roadmap.",
    },
    {
      id: "item-4",
      question: "4. What is $shadow and how do I earn it?",
      answer: "$SHADOW is our utility token that can be earned through staking your ninja NFTs. Token holders gain access to exclusive features, rewards, and governance rights within the ecosystem.",
    },
    {
      id: "item-5",
      question: "5. What can I do with my nftninja?",
      answer: "Your nftninja grants you access to exclusive community events, staking rewards, battle arena participation, and future airdrops. The rarer your ninja, the more benefits you'll receive.",
    },
  ];

  // Toggle function for accordion items
  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id);
  };

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 w-full bg-[#030e14]">
      <div className="flex flex-col max-w-[1200px] items-center justify-center gap-12 w-full">
        {/* FAQ Header */}
        <div className="text-center mb-8">
          <h2 className="text-center font-codepen-io-semantic-heading-2-upper text-codepeniowhite mb-4">
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </h2>
          <p className="text-codepeniowhite opacity-60 font-codepen-io-archivo-regular max-w-md mx-auto">
            Here are some of the most common queries
            <br />
            to help you get started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-[1000px]">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="mb-6 bg-[#030e14] rounded-3xl overflow-hidden relative border border-[#ffffff20]"
            >
              {/* Gradient overlay effect */}
              <div className="absolute w-full h-full top-0 left-0 rounded-3xl bg-[linear-gradient(141deg,rgba(255,255,255,0.05)_2%,rgba(255,255,255,0.02)_36%,rgba(255,255,255,0.02)_63%,rgba(255,255,255,0.05)_99%)] opacity-50" />

              {/* Background for content */}
              <div className="w-full h-full absolute top-px left-px bg-[#030e14] rounded-3xl" />

              {/* FAQ Header/Trigger */}
              <div 
                className="px-10 py-6 relative flex items-center justify-between cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex flex-col items-start flex-1">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Archivo',Helvetica] font-medium text-codepeniowhite text-xl tracking-[0] leading-[34px] text-left">
                    {item.question}
                  </div>
                </div>

                {/* Custom + and - buttons */}
                <div className="flex w-10 h-10 items-center justify-center bg-codepenioelectric-lime rounded-[32px] relative">
                  <span className="text-[#030e14] text-2xl font-bold">
                    {openItem === item.id ? "-" : "+"}
                  </span>
                </div>
              </div>

              {/* FAQ Content */}
              <div 
                className={`px-10 pb-6 relative transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="opacity-60 pt-2">
                  <div className="font-codepen-io-archivo-regular text-codepeniowhite">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section with Ninja Image */}
        <div className="w-full mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#030e14] to-[#0a2e1e]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-6 sm:p-10 md:p-16 md:w-1/2">
              <div className="text-codepenioelectric-lime font-codepen-io-archivo-semibold-upper mb-4">
                GET STARTED
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                MINT YOUR<br />NINJA TODAY!
              </h2>
              <p className="text-white opacity-80 mb-8 text-sm sm:text-base">
                Join the nftninja clan on Discord and Twitter to connect with
                fellow collectors, get early updates.
              </p>
              <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-codepenioelectric-lime rounded-[10px] relative overflow-hidden [font-family:'Archivo',Helvetica] font-semibold text-[#030e14] text-sm sm:text-base">
                <div className="absolute w-14 h-[127px] top-1.5 left-[-54px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
                <span className="relative">Join The Clan</span>
              </Button>
            </div>
            <div className="md:w-1/2 h-full">
              <img 
                src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/image_2.png" 
                alt="Ninja Characters" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
