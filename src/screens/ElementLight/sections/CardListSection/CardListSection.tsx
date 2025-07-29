import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CardListSection = (): JSX.Element => {
  // Data for the step cards
  const stepCards = [
    {
      number: "01",
      title: "CONNECT WALLET",
      description: "Use MetaMask or WalletConnect to\nconnect with NFTNinja.",
    },
    {
      number: "02",
      title: "MINT OR BUY",
      description:
        "Mint directly during launch or buy on\nsecondary like OpenSea.",
    },
    {
      number: "03",
      title: "STAKE, COLLECT",
      description:
        "Start earning rewards, join the clan,\nand participate in ecosystem.",
    },
  ];

  return (
    <section className="flex flex-row items-start justify-center gap-6 w-full">
      {stepCards.map((card, index) => (
        <Card
          key={`step-card-${index}`}
          className="flex flex-col items-start gap-[48.01px] pt-[39px] pb-10 px-10 bg-codepenioblack-pearl rounded-3xl"
        >
          <div className="flex flex-col items-start pt-0 pb-[0.59px] px-0 w-full">
            <div className="w-fit mt-[-1.00px] font-codepen-io-semantic-heading-3-upper font-[number:var(--codepen-io-semantic-heading-3-upper-font-weight)] text-codepenioelectric-lime text-[length:var(--codepen-io-semantic-heading-3-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-3-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-3-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-3-upper-font-style)]">
              {card.number}
            </div>
          </div>

          <CardContent className="flex flex-col items-start gap-[6.8px] w-full p-0">
            <div className="inline-flex flex-col min-w-[304px] items-start">
              <div className="flex flex-col items-start w-full">
                <h3 className="w-fit mt-[-1.00px] font-codepen-io-semantic-heading-6-upper font-[number:var(--codepen-io-semantic-heading-6-upper-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-6-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-6-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-6-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-6-upper-font-style)]">
                  {card.title}
                </h3>
              </div>
            </div>

            <div className="inline-flex flex-col min-w-[304px] items-start opacity-60">
              <div className="flex flex-col items-start w-full">
                <p className="w-fit mt-[-1.00px] font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] [font-style:var(--codepen-io-archivo-regular-font-style)]">
                  {card.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
