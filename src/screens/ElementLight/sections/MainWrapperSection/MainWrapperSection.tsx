import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainWrapperSection = (): JSX.Element => {
  // Data for the main title letters
  const titleLetters = [
    { letter: "T", position: "left-11" },
    { letter: "H", position: "left-[51px]" },
    { letter: "E", position: "left-[101px]" },
    { letter: "P", position: "left-[202px]" },
    { letter: "A", position: "left-12", containerPosition: "left-[202px]" },
    {
      letter: "T",
      position: "left-[100px]",
      containerPosition: "left-[202px]",
    },
    {
      letter: "H",
      position: "left-[151px]",
      containerPosition: "left-[202px]",
    },
    { letter: "O", position: "left-0", containerPosition: "left-[412px]" },
    { letter: "F", position: "left-[53px]", containerPosition: "left-[412px]" },
    { letter: "N", position: "left-0", containerPosition: "left-[521px]" },
    { letter: "I", position: "left-[50px]", containerPosition: "left-[521px]" },
    { letter: "N", position: "left-[86px]", containerPosition: "left-[521px]" },
    {
      letter: "J",
      position: "left-[135px]",
      containerPosition: "left-[521px]",
    },
    {
      letter: "A",
      position: "left-[183px]",
      containerPosition: "left-[521px]",
    },
  ];

  // Data for the description text
  const descriptionWords = [
    { word: "A", position: "left-[21px]" },
    { word: "stealth-crafted", position: "left-[37px]" },
    { word: "ecosystem", position: "left-[156px]" },
    { word: "built", position: "left-[247px]" },
    { word: "for", position: "left-[285px]" },
    { word: "sustainability,", position: "left-[310px]" },
    { word: "utility,", position: "left-[421px]" },
    { word: "and", position: "left-[469px]" },
    { word: "long-term", position: "left-[169px] top-[31px]" },
    { word: "holder", position: "left-[249px] top-[31px]" },
    { word: "value.", position: "left-[304px] top-[31px]" },
  ];

  return (
    <section className="flex flex-col items-center gap-4 px-6 md:px-12 lg:px-[170px] py-0 w-full">
      <header className="flex flex-col items-start">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start w-full">
              <h2 className="w-fit mt-[-1.00px] font-codepen-io-archivo-semibold-upper font-[number:var(--codepen-io-archivo-semibold-upper-font-weight)] text-codepenioelectric-lime text-[length:var(--codepen-io-archivo-semibold-upper-font-size)] tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-semibold-upper-font-style)]">
                ROADMAP
              </h2>
            </div>
          </div>
        </div>
      </header>

      <Card className="border-none bg-transparent w-full">
        <CardContent className="p-0 relative h-[67.19px]">
          {titleLetters.map((item, index) => (
            <div
              key={`title-letter-${index}`}
              className={`absolute h-[68px] ${item.containerPosition ? item.containerPosition : ""}`}
            >
              <div
                className={`inline-flex items-start justify-center absolute top-0 ${item.position}`}
              >
                <div className="relative w-fit mt-[-1.00px] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                  {item.letter}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-none bg-transparent w-[520px] opacity-60">
        <CardContent className="p-0 relative h-[61.19px]">
          {descriptionWords.map((item, index) => (
            <div
              key={`desc-word-${index}`}
              className={`absolute h-[31px] ${item.position}`}
            >
              <div className="absolute w-full h-[31px] -top-0.5 left-0 font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]">
                {item.word}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
