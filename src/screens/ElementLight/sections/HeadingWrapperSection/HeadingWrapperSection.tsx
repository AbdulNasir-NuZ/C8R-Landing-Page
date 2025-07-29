import React from "react";

export const HeadingWrapperSection = (): JSX.Element => {
  // Create an array of letters to map over instead of repeating code
  const letters = ["W", "A", "R", "R", "I", "O", "R", "S", "."];

  return (
    <header className="flex items-center justify-center w-full mt-[-0.51px] relative">
      {letters.map((letter, index) => (
        <div key={index} className="inline-flex items-center justify-center">
          <h1
            className="
              font-codepen-io-semantic-heading-2-upper 
              text-codepeniowhite-50 
              text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] 
              tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] 
              leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] 
              font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] 
              [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]
              mt-[-1.00px]
              text-center
              whitespace-nowrap
            "
          >
            {letter}
          </h1>
        </div>
      ))}
    </header>
  );
};
