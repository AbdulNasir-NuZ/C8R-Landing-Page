import React from "react";

export const MainHeadingSection = (): JSX.Element => {
  // Define the text content for the two rows
  const topRowLetters = [
    { letter: "N", position: "left-0" },
    { letter: "F", position: "left-[50px]" },
    { letter: "T", position: "left-[97px]" },
    { letter: "N", position: "left-[148px]" },
    { letter: "I", position: "left-[198px]" },
    { letter: "N", position: "left-[233px]" },
    { letter: "J", position: "left-[283px]" },
    { letter: "A", position: "left-[331px]" },
    { letter: "I", position: "left-[392px]" },
    { letter: "S", position: "left-[428px]" },
    { letter: "A", position: "left-[488px]" },
    { letter: "L", position: "left-[549px]" },
    { letter: "I", position: "left-[592px]" },
    { letter: "M", position: "left-[628px]" },
    { letter: "I", position: "left-[688px]" },
    { letter: "T", position: "left-[723px]" },
    { letter: "E", position: "left-[774px]" },
    { letter: "D", position: "left-[821px]" },
  ];

  const bottomRowLetters = [
    { letter: "C", position: "left-[25px]", color: "text-codepeniowhite" },
    { letter: "O", position: "left-[77px]", color: "text-codepeniowhite" },
    { letter: "L", position: "left-[130px]", color: "text-codepeniowhite" },
    { letter: "L", position: "left-[173px]", color: "text-codepeniowhite" },
    { letter: "E", position: "left-[217px]", color: "text-codepeniowhite" },
    { letter: "C", position: "left-[264px]", color: "text-codepeniowhite" },
    { letter: "T", position: "left-[315px]", color: "text-codepeniowhite" },
    { letter: "I", position: "left-[366px]", color: "text-codepeniowhite" },
    { letter: "O", position: "left-[402px]", color: "text-codepeniowhite" },
    { letter: "N", position: "left-[454px]", color: "text-codepeniowhite" },
    { letter: "O", position: "left-[514px]", color: "text-codepeniowhite-50" },
    { letter: "F", position: "left-[567px]", color: "text-codepeniowhite-50" },
    { letter: "5", position: "left-[623px]", color: "text-codepeniowhite-50" },
    { letter: ",", position: "left-[671px]", color: "text-codepeniowhite-50" },
    { letter: "0", position: "left-[685px]", color: "text-codepeniowhite-50" },
    { letter: "0", position: "left-[735px]", color: "text-codepeniowhite-50" },
    { letter: "0", position: "left-[785px]", color: "text-codepeniowhite-50" },
  ];

  // Common letter styling
  const letterStyle =
    "text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] text-center whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]";

  return (
    <header className="relative w-full py-8">
      <div className="relative mx-auto max-w-[871px]">
        {/* Top row - "NFTNINJAISA LIMITED" */}
        {topRowLetters.map((item, index) => (
          <div
            key={`top-${index}`}
            className={`inline-flex items-start justify-center absolute top-0 ${item.position}`}
          >
            <div
              className={`relative w-fit mt-[-1.00px] text-codepeniowhite ${letterStyle}`}
            >
              {item.letter}
            </div>
          </div>
        ))}

        {/* Bottom row - "COLLECTION OF 5,000" */}
        {bottomRowLetters.map((item, index) => (
          <div
            key={`bottom-${index}`}
            className={`inline-flex items-start justify-center absolute top-[67px] ${item.position}`}
          >
            <div
              className={`relative w-fit mt-[-1.00px] ${item.color} ${letterStyle}`}
            >
              {item.letter}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};
