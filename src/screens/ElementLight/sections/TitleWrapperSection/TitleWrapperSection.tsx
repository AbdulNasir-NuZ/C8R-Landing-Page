import React from "react";

export const TitleWrapperSection = (): JSX.Element => {
  // Data for the main title letters to enable mapping
  const titleFirstRow = [
    "M",
    "I",
    "N",
    "T",
    "Y",
    "O",
    "U",
    "R",
    "N",
    "I",
    "N",
    "J",
    "A",
  ];
  const titleSecondRow = ["I", "N", "3", "S", "T", "E", "P", "S"];

  // Data for the description text to enable mapping
  const descriptionFirstRow = [
    { text: "A", width: "w-[13px]" },
    { text: "stealth-crafted", width: "w-[116px]" },
    { text: "ecosystem", width: "w-[88px]" },
    { text: "built", width: "w-[34px]" },
    { text: "for", width: "w-[22px]" },
    { text: "sustainability,", width: "w-[108px]" },
    { text: "utility,", width: "w-[45px]" },
    { text: "and", width: "w-[31px]" },
  ];

  const descriptionSecondRow = [
    { text: "long-term", width: "w-[77px]" },
    { text: "holder", width: "w-[51px]" },
    { text: "value.", width: "w-12" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-4 py-0 px-4 md:px-8 lg:px-16">
      <header className="flex flex-col items-start">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <h3 className="w-fit mt-[-1px] font-codepen-io-archivo-semibold-upper text-codepenioelectric-lime tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] whitespace-nowrap">
              HOW TO BUY
            </h3>
          </div>
        </div>
      </header>

      <div className="relative w-full h-[134px] flex justify-center">
        <div className="relative w-full max-w-[654px]">
          {/* First row of title */}
          <div className="flex justify-center">
            {titleFirstRow.map((letter, index) => (
              <div
                key={`first-row-${index}`}
                className="inline-flex items-start justify-center"
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${index * 50}px`,
                }}
              >
                <span className="text-center w-fit mt-[-1px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap">
                  {letter}
                </span>
              </div>
            ))}
          </div>

          {/* Second row of title */}
          <div className="flex justify-center">
            {titleSecondRow.map((letter, index) => (
              <div
                key={`second-row-${index}`}
                className="inline-flex items-start justify-center"
                style={{
                  position: "absolute",
                  top: "67px",
                  left: `${126 + index * 50}px`,
                }}
              >
                <span className="text-center w-fit mt-[-1px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap">
                  {letter}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[520px] opacity-60">
        {/* First row of description */}
        <div className="flex justify-center">
          {descriptionFirstRow.map((item, index) => (
            <div
              key={`desc-first-row-${index}`}
              className="relative h-[31px]"
              style={{
                position: "absolute",
                top: 0,
                left: `${index === 0 ? 21 : 37 + index * 40}px`,
                width: item.width,
              }}
            >
              <span className="absolute h-[31px] -top-0.5 left-0 font-codepen-io-archivo-regular text-codepeniowhite text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Second row of description */}
        <div className="flex justify-center">
          {descriptionSecondRow.map((item, index) => (
            <div
              key={`desc-second-row-${index}`}
              className="relative h-[31px]"
              style={{
                position: "absolute",
                top: "31px",
                left: `${169 + index * 55}px`,
                width: item.width,
              }}
            >
              <span className="absolute h-[31px] -top-0.5 left-0 font-codepen-io-archivo-regular text-codepeniowhite text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
