import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const DesktopViewSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      question: "1. What is nftninja?",
      answer:
        "nftninja is a collection of 5,000 unique, masked ninja NFTs living on the Ethereum blockchain. Each ninja is packed with distinct traits, rarity, and hidden utility within the ecosystem.",
      defaultOpen: true,
    },
    {
      id: "item-2",
      question: "2. How can I mint a ninja?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-3",
      question: "3. Will there be a game or metaverse integration?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-4",
      question: "4. What is $shadow and how do I earn it?",
      answer: "",
      defaultOpen: false,
    },
    {
      id: "item-5",
      question: "5. What can I do with my nftninja?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <div className="flex flex-col max-w-[1177px] gap-6">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="mb-6 bg-[#030e14] rounded-3xl overflow-hidden relative"
          >
            {/* Gradient overlay effect */}
            <div className="absolute w-[1402px] h-[1290px] top-[-623px] left-[-75px] rounded-3xl rotate-[138deg] bg-[linear-gradient(141deg,rgba(255,255,255,1)_2%,rgba(255,255,255,0.2)_36%,rgba(255,255,255,0.2)_63%,rgba(255,255,255,1)_99%)] opacity-50" />

            {/* Background for content */}
            <div className="w-full h-full absolute top-px left-px bg-[#030e14] rounded-3xl" />

            <AccordionTrigger className="px-10 py-6 relative hover:no-underline">
              <div className="flex flex-col items-start flex-1">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Archivo',Helvetica] font-medium text-codepeniowhite text-xl tracking-[0] leading-[34px] text-left">
                  {item.question}
                </div>
              </div>

              {/* Custom trigger button that replaces the default chevron */}
              <div className="flex w-10 h-10 items-center justify-center p-2 bg-codepenioelectric-lime rounded-[32px] relative">
                <div className="w-6 h-6">
                  <img
                    className="w-full h-full"
                    alt="Expand/collapse icon"
                    src={
                      item.id === "item-1"
                        ? "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-41.svg"
                        : "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-33.svg"
                    }
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-10 pb-6 relative">
              <div className="min-w-[764px] max-w-[764px] opacity-60">
                <div className="font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] [font-style:var(--codepen-io-archivo-regular-font-style)]">
                  {item.answer}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
