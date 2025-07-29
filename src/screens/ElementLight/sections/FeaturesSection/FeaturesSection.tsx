import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Title letters data for "UNLOCK THE PERKS"
  const unlockTitle = [
    { letter: "U", left: "left-[46px]" },
    { letter: "N", left: "left-[50px]" },
    { letter: "L", left: "left-[100px]" },
    { letter: "O", left: "left-36" },
    { letter: "C", left: "left-[196px]" },
    { letter: "K", left: "left-[248px]" },
  ];

  const theTitle = [
    { letter: "T", left: "left-0" },
    { letter: "H", left: "left-[51px]" },
    { letter: "E", left: "left-[101px]" },
  ];

  const subtitleWords = [
    { text: "A", top: "top-0", left: "left-[21px]" },
    { text: "stealth-crafted", top: "top-0", left: "left-[37px]" },
    { text: "ecosystem", top: "top-0", left: "left-[156px]" },
    { text: "built", top: "top-0", left: "left-[247px]" },
    { text: "for", top: "top-0", left: "left-[285px]" },
    { text: "sustainability,", top: "top-0", left: "left-[310px]" },
    { text: "utility,", top: "top-0", left: "left-[421px]" },
    { text: "and", top: "top-0", left: "left-[469px]" },
    { text: "long-term", top: "top-[31px]", left: "left-[169px]" },
    { text: "holder", top: "top-[31px]", left: "left-[249px]" },
    { text: "value.", top: "top-[31px]", left: "left-[304px]" },
  ];

  // Feature cards data
  const featureCards = [
    {
      title: "COLLECTIBLE AND\nUNIQUE NINJAS",
      description:
        "Every ninja is one of a kind — crafted with\nhundreds of traits, clans, weapons, and skills.",
      imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/feature-image.png",
    },
    {
      title: "COMMUNITY\nPOWERED DAO",
      description:
        "The rarer your ninja, the more rewards and\nspecial access you unlock.",
      imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/feature-image-1.png",
    },
    {
      title: "STAKING AND\n$SHADOW REWARDS",
      description:
        "Every ninja is one of a kind — crafted with hundreds\nof traits, clans, weapons, and skills.",
      imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/feature-image-2.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 w-full">
      <div className="flex flex-col max-w-[1200px] items-center justify-center gap-12 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[800px]">
          {/* Features Label */}
          <div className="text-codepenioelectric-lime font-codepen-io-archivo-semibold-upper font-[number:var(--codepen-io-archivo-semibold-upper-font-weight)] text-[length:var(--codepen-io-archivo-semibold-upper-font-size)] tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] [font-style:var(--codepen-io-archivo-semibold-upper-font-style)]">
            FEATURES
          </div>

          {/* UNLOCK THE PERKS Title */}
          <div className="relative w-full h-[67.19px]">
            <div className="absolute w-[300px] h-[68px] top-0 left-[46px]">
              {unlockTitle.map((item, index) => (
                <div
                  key={`unlock-${index}`}
                  className={`inline-flex items-start justify-center absolute top-0 ${item.left}`}
                >
                  <div className="relative w-fit mt-[-1.00px] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute w-[150px] h-[68px] top-0 left-[353px]">
              {theTitle.map((item, index) => (
                <div
                  key={`the-${index}`}
                  className={`inline-flex items-start justify-center absolute top-0 ${item.left}`}
                >
                  <div className="relative w-fit mt-[-1.00px] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                    {item.letter}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute w-[245px] h-[68px] top-0 left-[511px]">
              {["P", "E", "R", "K", "S"].map((letter, index) => {
                const positions = [
                  "left-0",
                  "left-12",
                  "left-[95px]",
                  "left-[143px]",
                  "left-[193px]",
                ];
                return (
                  <div
                    key={`perks-${index}`}
                    className={`inline-flex items-start justify-center absolute top-0 ${positions[index]}`}
                  >
                    <div className="relative w-fit mt-[-1.00px] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                      {letter}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subtitle */}
          <div className="relative w-[520px] h-[61.19px] opacity-60">
            {subtitleWords.map((word, index) => (
              <div
                key={`word-${index}`}
                className={`absolute ${word.top} ${word.left}`}
              >
                <div className="absolute -top-0.5 left-0 font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] text-center tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-regular-font-style)]">
                  {word.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {featureCards.slice(0, 2).map((card, index) => (
              <Card
                key={`feature-${index}`}
                className="h-[600px] bg-codepenioblack-pearl rounded-3xl overflow-hidden"
              >
                <CardContent className="p-0 h-full relative">
                  <div className="flex flex-col max-w-[388px] w-[388px] items-start gap-[14.8px] absolute top-[39px] left-10">
                    <div className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-5-upper font-[number:var(--codepen-io-semantic-heading-5-upper-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-5-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-5-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-5-upper-line-height)] [font-style:var(--codepen-io-semantic-heading-5-upper-font-style)] whitespace-pre-line">
                      {card.title}
                    </div>
                    <div className="opacity-60 relative w-fit mt-[-1.00px] font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] [font-style:var(--codepen-io-archivo-regular-font-style)] whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                  <div className="absolute w-[490px] h-[512px] top-[219px] left-10">
                    <div
                      className="h-[512.08px] w-full bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${card.imageSrc})` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Staking Card */}
            <Card className="bg-codepenioblack-pearl rounded-3xl overflow-hidden">
              <CardContent className="p-10 pt-[39.4px] pb-10">
                <div className="max-w-[406px] w-[406px] gap-[14.8px] flex flex-col items-start">
                  <div className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-5-upper font-[number:var(--codepen-io-semantic-heading-5-upper-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-5-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-5-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-5-upper-line-height)] [font-style:var(--codepen-io-semantic-heading-5-upper-font-style)] whitespace-pre-line">
                    {featureCards[2].title}
                  </div>
                  <div className="opacity-60 relative w-fit mt-[-1.00px] font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] [font-style:var(--codepen-io-archivo-regular-font-style)] whitespace-pre-line">
                    {featureCards[2].description}
                  </div>
                </div>
                <div className="relative w-[490px] h-[572.33px] mt-4">
                  <div
                    className="h-[572.33px] w-full bg-cover bg-[50%_50%]"
                    style={{
                      backgroundImage: `url(${featureCards[2].imageSrc})`,
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-codepeniotiber rounded-3xl">
              <CardContent className="flex flex-col items-start gap-[60px] pt-[49.4px] pb-[50px] px-10">
                <div className="flex flex-col items-start gap-[14.8px] w-full">
                  <div className="relative w-fit mt-[-1.00px] font-codepen-io-semantic-heading-5-upper font-[number:var(--codepen-io-semantic-heading-5-upper-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-5-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-5-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-5-upper-line-height)] [font-style:var(--codepen-io-semantic-heading-5-upper-font-style)] whitespace-pre-line">
                    READY TO JOIN THE CLAN?
                  </div>
                  <div className="opacity-50 relative w-fit mt-[-1.00px] font-codepen-io-archivo-regular font-[number:var(--codepen-io-archivo-regular-font-weight)] text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)] [font-style:var(--codepen-io-archivo-regular-font-style)]">
                    Start your journey with nftninja and unlock access to
                    rareninjas <br />
                    and a powerful Web3 community.
                  </div>
                </div>

                <Button className="relative bg-codepenioelectric-lime rounded-[10px] overflow-hidden">
                  <div className="absolute w-14 h-[127px] top-1.5 left-[-54px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
                  <span className="[font-family:'Archivo',Helvetica] font-semibold text-[#030e14] text-base tracking-[0] leading-[27.2px]">
                    Mint Your Ninja
                  </span>
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
