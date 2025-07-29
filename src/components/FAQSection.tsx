import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const FAQSection = (): JSX.Element => {
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
      answer: "You can mint a ninja directly through our website during the public sale, or join our whitelist for early access. Alternatively, you can purchase from secondary markets like OpenSea after the initial mint.",
      defaultOpen: false,
    },
    {
      id: "item-3",
      question: "3. Will there be a game or metaverse integration?",
      answer: "Yes, we're developing a battle arena game where ninjas can compete, earn rewards, and upgrade their skills. We also have plans for metaverse integration in Phase 4 of our roadmap.",
      defaultOpen: false,
    },
    {
      id: "item-4",
      question: "4. What is $shadow and how do I earn it?",
      answer: "$SHADOW is our utility token that can be earned through staking your ninja NFTs. Token holders gain access to exclusive features, rewards, and governance rights within the ecosystem.",
      defaultOpen: false,
    },
    {
      id: "item-5",
      question: "5. What can I do with my nftninja?",
      answer: "Your nftninja grants you access to exclusive community events, staking rewards, battle arena participation, and future airdrops. The rarer your ninja, the more benefits you'll receive.",
      defaultOpen: false,
    },
  ];

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
                className="mb-6 bg-[#030e14] rounded-3xl overflow-hidden relative border border-[#ffffff20]"
              >
                {/* Gradient overlay effect */}
                <div className="absolute w-full h-full top-0 left-0 rounded-3xl bg-[linear-gradient(141deg,rgba(255,255,255,0.05)_2%,rgba(255,255,255,0.02)_36%,rgba(255,255,255,0.02)_63%,rgba(255,255,255,0.05)_99%)] opacity-50" />

                {/* Background for content */}
                <div className="w-full h-full absolute top-px left-px bg-[#030e14] rounded-3xl" />

                <AccordionTrigger className="px-10 py-6 relative hover:no-underline">
                  <div className="flex flex-col items-start flex-1">
                    <div className="relative self-stretch mt-[-1.00px]">
                      <h3 className="text-codepeniowhite font-codepen-io-archivo-bold text-lg leading-tight">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-10 pb-6 pt-0">
                  <div className="text-codepeniowhite opacity-80 font-codepen-io-archivo-regular">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
