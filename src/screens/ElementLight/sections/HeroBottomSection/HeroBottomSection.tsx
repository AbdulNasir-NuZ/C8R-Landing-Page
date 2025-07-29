import { PlusIcon, PercentIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroBottomSection = (): JSX.Element => {
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
      icon: <PercentIcon className="h-8 w-8" />,
      title: "Royalty Fee Breakdown",
    },
  ];

  return (
    <section className="relative w-full px-4 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-[1440px] mx-auto">
      {/* Left NFT Card */}
      <Card className="flex flex-col items-start gap-4 bg-transparent border-none w-full max-w-sm">
    <div className="relative w-full rounded-[48px]">
      <div className="w-full aspect-[1/1.1] rounded-[40px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="Shadowfang NFT"
          src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-6.svg"
        />
      </div>

          <div className="absolute w-full h-[360px] top-0 left-0 rounded-[48px] border border-solid border-[#ffffff33]" />

          {/* Rarity Score */}
          <Card className="absolute bottom-4 left-4 w-[90%] max-w-[260px] px-4 py-3 bg-codepenioblack-pearl-60 rounded-3xl backdrop-blur-sm border border-[#c9ec0680]">
        <CardContent className="p-0 flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-medium">Rarity Score:</p>
            <p className="text-white text-xl font-bold">8.7/10</p>
          </div>
          <div className="p-3 bg-codepenioelectric-lime rounded-full relative">
            <div className="absolute w-11 h-[127px] -left-11 top-1.5 rotate-[-42deg] blur-sm bg-gradient-to-r from-[#d3ed05] via-white to-[#d3ed05]" />
            <img
              className="relative w-6 h-6"
              alt="Star icon"
              src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-7.svg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
        {/* Description */}
        <div className="text-white space-y-2 mt-4">
      <h2 className="text-xl font-bold">🧩 SHADOWFANG #1729</h2>
      <p className="text-sm leading-snug">
        Never reflects light—and his presence <br />
        is felt only after it&apos;s too late.
      </p>
    </div>
  </Card>

      {/* Center Character Image */}
      <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px] z-10">
    <img
      className="w-full h-full object-contain"
      alt="Ninja Character"
      src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-40.svg"
    />
  </div>
      {/* Right Stats Section */}
       <Card className="flex flex-col items-start gap-8 px-8 py-10 bg-[linear-gradient(90deg,rgba(3,14,20,0.2)_0%,rgba(3,14,20,0)_100%)] border border-dashed border-white/50 rounded-3xl w-full max-w-sm">
    <CardContent className="p-0 space-y-8">
      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">+</div>
        <p className="text-white text-sm">Unique masked ninja NFTs</p>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">HOURS</div>
        <p className="text-white text-sm">Sold Out during presale launch</p>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">%</div>
        <p className="text-white text-sm">Royalty Fee Breakdown</p>
      </div>
    </CardContent>
  </Card>
</section>
  );
};
