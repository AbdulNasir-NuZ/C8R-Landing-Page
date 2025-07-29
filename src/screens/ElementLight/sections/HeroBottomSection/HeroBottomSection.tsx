import { PlusIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroBottomSection = (): JSX.Element => {
  // NFT stats data
  const nftStats = [
    {
      icon: <PlusIcon className="h-8 w-8" />,
      title: "Unique masked ninja NFTs",
    },
    {
      title: "HOURS",
      description: "Sold Out during presale launch",
    },
    {
      icon: "%",
      title: "Royalty Fee Breakdown",
    },
  ];

  return (
    <section className="flex items-center justify-between relative max-w-[1180px] w-full">
      {/* Left NFT Card */}
      <Card className="flex flex-col max-w-[310px] items-start gap-6 bg-transparent border-none">
        <div className="relative p-3 rounded-[48px]">
          <div className="h-[335.73px] relative w-full rounded-[40px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Shadowfang NFT"
              src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-6.svg"
            />
          </div>

          <div className="absolute w-[310px] h-[360px] top-0 left-0 rounded-[48px] border border-solid border-[#ffffff33]" />

          {/* Rarity Score Card */}
          <Card className="flex w-[262px] items-center justify-between px-4 py-3 absolute top-[238px] left-6 bg-codepenioblack-pearl-60 rounded-3xl backdrop-blur-[5px] backdrop-brightness-[100%] border border-solid border-[#c9ec0680]">
            <CardContent className="p-0 flex justify-between items-center w-full">
              <div className="flex flex-col max-w-[126px] items-start gap-1 flex-1">
                <div className="font-['Archivo',Helvetica] font-normal text-codepeniowhite text-base leading-[27.2px]">
                  Rarity Score:
                </div>
                <div className="font-['Dela_Gothic_One',Helvetica] font-normal text-codepeniowhite text-xl leading-[34px]">
                  8.7/10
                </div>
              </div>

              <div className="inline-flex flex-col items-start">
                <div className="inline-flex items-center justify-center p-4 bg-codepenioelectric-lime rounded-[32px] overflow-hidden relative">
                  <div className="w-11 top-1.5 -left-11 absolute h-[127px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
                  <img
                    className="relative w-6 h-6"
                    alt="Star icon"
                    src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-7.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NFT Description */}
        <div className="flex flex-col items-start gap-[6.8px] w-full">
          <h2 className="font-codepen-io-semantic-heading-6-upper text-codepeniowhite tracking-[var(--codepen-io-semantic-heading-6-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-6-upper-line-height)]">
            🧩 SHADOWFANG #1729
          </h2>
          <p className="font-codepen-io-archivo-regular text-codepeniowhite tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)]">
            Never reflects light—and his presence <br />
            is felt only after it&apos;s too late.
          </p>
        </div>
      </Card>

      {/* Center Ninja Character */}
      <div className="absolute w-[380px] h-[735px] top-[-405px] left-[400px]">
        <img
          className="w-full h-full object-contain"
          alt="Ninja character"
          src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-40.svg"
        />
      </div>

      {/* Right Stats Section */}
      <Card className="max-w-sm flex flex-col items-start gap-10 px-[61px] py-[53px] bg-[linear-gradient(90deg,rgba(3,14,20,0.2)_0%,rgba(3,14,20,0)_100%)] rounded-3xl border-none">
        <CardContent className="p-0 space-y-10">
          {nftStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start gap-[7px]">
              <div className="flex items-center h-14">
                {stat.icon && (
                  <span className="font-codepen-io-semantic-heading-4-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-4-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-4-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-4-upper-line-height)]">
                    {stat.icon}
                  </span>
                )}
                {!stat.icon && stat.title === "HOURS" && (
                  <h3 className="font-codepen-io-semantic-heading-4-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-4-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-4-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-4-upper-line-height)]">
                    {stat.title}
                  </h3>
                )}
              </div>
              <p className="font-codepen-io-archivo-regular text-codepeniowhite tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap">
                {stat.description || stat.title}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
