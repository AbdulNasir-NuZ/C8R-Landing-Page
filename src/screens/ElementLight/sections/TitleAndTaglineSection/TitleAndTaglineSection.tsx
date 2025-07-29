import React from "react";

export const TitleAndTaglineSection = (): JSX.Element => {
  // Data for the heading letters to enable mapping
  const headingLine1 = [
    { letter: "M", left: "left-0" },
    { letter: "I", left: "left-[60px]" },
    { letter: "N", left: "left-[95px]" },
    { letter: "T", left: "left-[145px]" },
  ];

  const headingLine2 = [
    { letter: "Y", left: "left-0" },
    { letter: "O", left: "left-[51px]" },
    { letter: "U", left: "left-[104px]" },
    { letter: "R", left: "left-[154px]" },
  ];

  const headingLine3 = [
    { letter: "N", left: "left-0" },
    { letter: "I", left: "left-[50px]" },
    { letter: "N", left: "left-[86px]" },
    { letter: "J", left: "left-[135px]" },
    { letter: "A", left: "left-[183px]" },
  ];

  const headingLine4 = [
    { letter: "T", left: "left-0" },
    { letter: "O", left: "left-[51px]" },
    { letter: "D", left: "left-[104px]" },
    { letter: "A", left: "left-[152px]" },
    { letter: "Y", left: "left-[204px]" },
    { letter: "!", left: "left-[255px]" },
  ];

  // Data for the tagline text to enable mapping
  const taglineRow1 = [
    { text: "Join", width: "w-[35px]", left: "left-0" },
    { text: "the", width: "w-[25px]", left: "left-[38px]" },
    { text: "nftninja", width: "w-[59px]", left: "left-[67px]" },
    { text: "clan", width: "w-[33px]", left: "left-[130px]" },
    { text: "on", width: "w-5", left: "left-[167px]" },
    { text: "Discord", width: "w-[62px]", left: "left-[191px]" },
    { text: "and", width: "w-[30px]", left: "left-[257px]" },
    { text: "Twitter", width: "w-[54px]", left: "left-[291px]" },
    { text: "to", width: "w-4", left: "left-[348px]" },
    { text: "connect", width: "w-16", left: "left-[368px]" },
    { text: "with", width: "w-[33px]", left: "left-[436px]" },
  ];

  const taglineRow2 = [
    { text: "fellow", width: "w-[46px]", left: "left-0" },
    { text: "collectors,", width: "w-[83px]", left: "left-[50px]" },
    { text: "get", width: "w-[25px]", left: "left-[136px]" },
    { text: "early", width: "w-[39px]", left: "left-[165px]" },
    { text: "updates.", width: "w-[70px]", left: "left-52" },
  ];

  return (
    <section className="flex flex-col items-start gap-2 relative w-full">
      <div className="inline-flex flex-col items-center justify-center relative">
        <div className="inline-flex flex-col items-start relative">
          <div className="flex flex-col items-start relative w-full">
            <span className="relative w-fit mt-[-1.00px] font-codepen-io-archivo-semibold-upper text-codepenioelectric-lime text-[length:var(--codepen-io-archivo-semibold-upper-font-size)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] whitespace-nowrap [font-style:var(--codepen-io-archivo-semibold-upper-font-style)]">
              GET STARTED
            </span>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start gap-[11.99px] relative">
        <div className="flex flex-col items-start relative w-full">
          {/* First line of heading */}
          <div className="h-[67.19px] relative w-full">
            <div className="absolute w-[198px] h-[68px] top-0 left-0">
              {headingLine1.map((item, index) => (
                <div
                  key={`line1-${index}`}
                  className={`inline-flex items-start absolute top-0 ${item.left}`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute w-[204px] h-[68px] top-0 left-[206px]">
              {headingLine2.map((item, index) => (
                <div
                  key={`line2-${index}`}
                  className={`inline-flex items-start absolute top-0 ${item.left}`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second line of heading */}
          <div className="h-[67.19px] mt-[-0.01px] relative w-full">
            <div className="absolute w-[236px] h-[68px] top-0 left-0">
              {headingLine3.map((item, index) => (
                <div
                  key={`line3-${index}`}
                  className={`inline-flex items-start absolute top-0 ${item.left}`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute w-[273px] h-[68px] top-0 left-[244px]">
              {headingLine4.map((item, index) => (
                <div
                  key={`line4-${index}`}
                  className={`inline-flex items-start absolute top-0 ${item.left}`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline text */}
        <div className="relative w-full h-[61.19px]">
          {/* First row of tagline */}
          {taglineRow1.map((item, index) => (
            <div
              key={`tagline1-${index}`}
              className={`absolute ${item.width} h-[31px] top-0 ${item.left}`}
            >
              <span
                className={`absolute ${item.width} h-[31px] -top-0.5 left-0 font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]`}
              >
                {item.text}
              </span>
            </div>
          ))}

          {/* Second row of tagline */}
          {taglineRow2.map((item, index) => (
            <div
              key={`tagline2-${index}`}
              className={`absolute ${item.width} h-[31px] top-[31px] ${item.left}`}
            >
              <span
                className={`absolute ${item.width} h-[31px] -top-0.5 left-0 font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
