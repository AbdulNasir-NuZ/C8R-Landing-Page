import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const EconomySection = (): JSX.Element => {
  // Data for the heading letters
  const headingData = {
    first: ["T", "H", "E"],
    second: ["S", "H", "A", "D", "O", "W"],
    third: ["E", "C", "O", "N", "O", "M", "Y"],
  };

  // Data for the description text
  const descriptionWords = [
    { text: "A", className: "w-3 h-[31px]" },
    { text: "stealth-crafted", className: "w-[115px] h-[31px]" },
    { text: "ecosystem", className: "w-[88px] h-[31px]" },
    { text: "built", className: "w-[34px] h-[31px]" },
    { text: "for", className: "w-[21px] h-[31px]" },
    { text: "sustainability,", className: "w-[107px] h-[31px]" },
    { text: "utility,", className: "w-[45px] h-[31px]" },
    { text: "and", className: "w-[30px] h-[31px]" },
  ];

  const descriptionWordsSecondLine = [
    { text: "long-term", className: "w-[77px] h-[31px]" },
    { text: "holder", className: "w-[50px] h-[31px]" },
    { text: "value.", className: "w-12 h-[31px]" },
  ];

  // Data for the economy cards
  const economyCards = [
    {
      title: "Public Mint",
      symbol: "%",
      position: "top-[206px] left-6",
    },
    {
      title: "Whitelist Sale",
      symbol: "%",
      position: "top-[206px] left-[446px]",
    },
    {
      title: "Mint Price",
      symbol: "ETH",
      position: "top-[628px] left-6",
    },
    {
      title: "Max Per Wallet",
      symbol: "NFTS",
      position: "top-[628px] left-[446px]",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 w-full">
      <div className="flex flex-col items-center justify-center gap-20 w-full max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* NFT ECONOMY Label */}
          <div className="self-start">
            <div className="font-codepen-io-archivo-semibold-upper text-codepenioelectric-lime text-[length:var(--codepen-io-archivo-semibold-upper-font-size)] tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] [font-style:var(--codepen-io-archivo-semibold-upper-font-style)]">
              NFT ECONOMY
            </div>
          </div>

          {/* THE SHADOW ECONOMY Heading */}
          <div className="w-full text-center">
            <div className="flex justify-center space-x-2">
              {/* THE */}
              <div className="flex">
                {headingData.first.map((letter, index) => (
                  <div
                    key={`first-${index}`}
                    className="inline-flex items-start justify-center mx-[25px]"
                  >
                    <div className="text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                      {letter}
                    </div>
                  </div>
                ))}
              </div>

              {/* SHADOW */}
              <div className="flex">
                {headingData.second.map((letter, index) => (
                  <div
                    key={`second-${index}`}
                    className="inline-flex items-start justify-center mx-[25px]"
                  >
                    <div className="text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                      {letter}
                    </div>
                  </div>
                ))}
              </div>

              {/* ECONOMY */}
              <div className="flex">
                {headingData.third.map((letter, index) => (
                  <div
                    key={`third-${index}`}
                    className="inline-flex items-start justify-center mx-[25px]"
                  >
                    <div className="text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                      {letter}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="w-full max-w-[520px] opacity-60 text-center">
            <div className="flex flex-wrap justify-center">
              {descriptionWords.map((word, index) => (
                <div key={`word-${index}`} className={`${word.className} mx-1`}>
                  <div className="font-codepen-io-archivo-regular text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] font-[number:var(--codepen-io-archivo-regular-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]">
                    {word.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center mt-2">
              {descriptionWordsSecondLine.map((word, index) => (
                <div
                  key={`word2-${index}`}
                  className={`${word.className} mx-1`}
                >
                  <div className="font-codepen-io-archivo-regular text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] font-[number:var(--codepen-io-archivo-regular-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]">
                    {word.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Economy Cards Section */}
        <div className="relative w-full max-w-[673px] h-[673px]">
          {/* Background Pattern */}
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="w-[720px] h-[720px] rotate-180 opacity-50">
              <div className="w-full h-full bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-image-1.png)] bg-cover bg-center" />
            </div>
            <img
              className="absolute w-[640px] h-[852px]"
              alt="Hexagonal pattern"
              src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-47.svg"
            />
          </div>

          {/* Economy Cards */}
          <div className="relative w-full h-full">
            {economyCards.map((card, index) => (
              <Card
                key={`card-${index}`}
                className={`absolute w-[251px] h-[251px] ${card.position} bg-transparent border-0`}
              >
                <CardContent className="p-0 h-full">
                  <div className="flex flex-col items-center justify-center h-full relative">
                    {/* Card Background */}
                    <img
                      className="absolute w-full h-full"
                      alt="Card background"
                      src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-18.svg"
                    />

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                      <div className="text-codepeniowhite text-center">
                        {card.symbol === "ETH" || card.symbol === "NFTS" ? (
                          <div className="font-codepen-io-semantic-heading-6-upper font-[number:var(--codepen-io-semantic-heading-6-upper-font-weight)] text-[length:var(--codepen-io-semantic-heading-6-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-6-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-6-upper-line-height)] [font-style:var(--codepen-io-semantic-heading-6-upper-font-style)]">
                            {card.symbol}
                          </div>
                        ) : (
                          <div className="font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                            {card.symbol}
                          </div>
                        )}
                      </div>
                      <div className="font-codepen-io-archivo-semibold font-[number:var(--codepen-io-archivo-semibold-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-semibold-font-size)] tracking-[var(--codepen-io-archivo-semibold-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-line-height)] [font-style:var(--codepen-io-archivo-semibold-font-style)]">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
