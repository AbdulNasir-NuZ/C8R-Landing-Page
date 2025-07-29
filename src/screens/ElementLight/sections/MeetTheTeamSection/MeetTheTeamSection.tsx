import React from "react";

export const MeetTheTeamSection = (): JSX.Element => {
  // Define the title text as two arrays for better maintainability
  const topRowLetters = [
    "F",
    "R",
    "E",
    "Q",
    "U",
    "E",
    "N",
    "T",
    "L",
    "Y",
    "A",
    "S",
    "K",
    "E",
    "D",
  ];
  const bottomRowLetters = ["Q", "U", "E", "S", "T", "I", "O", "N", "S"];

  return (
    <section className="w-full py-8 relative">
      <div className="flex flex-col items-center justify-center">
        {/* Top row of letters */}
        <div className="flex justify-center">
          {topRowLetters.map((letter, index) => (
            <h2
              key={`top-${index}`}
              className="text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] text-center whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)] mx-1"
            >
              {letter}
            </h2>
          ))}
        </div>

        {/* Bottom row of letters */}
        <div className="flex justify-center mt-4">
          {bottomRowLetters.map((letter, index) => (
            <h2
              key={`bottom-${index}`}
              className="text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] text-center whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)] mx-1"
            >
              {letter}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};
