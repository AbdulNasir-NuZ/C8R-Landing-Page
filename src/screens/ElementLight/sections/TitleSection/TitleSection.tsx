import React from "react";
import { Button } from "../../../../components/ui/button";

export const TitleSection = (): JSX.Element => {
  // Title data for the main heading
  const titleFirstRow = ["U", "N", "M", "A", "S", "K", "T", "H", "E"];
  const titleSecondRow = [
    "F",
    "U",
    "T",
    "U",
    "R",
    "E",
    "O",
    "F",
    "N",
    "F",
    "T",
    "S",
  ];

  // Subtitle data
  const subtitleFirstRow = [
    "Forged,",
    "trade,",
    "and",
    "stealth",
    "mint",
    "exclusive",
    "masked",
    "ninja",
    "nfts",
    "in",
    "the",
  ];
  const subtitleSecondRow = ["shadows", "of", "the", "blockchain."];

  return (
    <section className="flex flex-col items-center gap-6 w-full px-4">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {/* Main title */}
        <div className="flex flex-col items-center max-w-[982px]">
          <h1 className="text-center text-codepeniowhite text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">UNMASK THE</span>
            <span className="block">FUTURE OF NFTS</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex flex-col items-center max-w-[520px] opacity-80 text-center">
          <p className="font-codepen-io-archivo-regular text-codepeniowhite text-sm sm:text-base">
            Forge, trade, and stealth mint exclusive masked ninja NFTs in the shadows of the blockchain.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <Button className="w-full sm:w-auto px-6 py-3 bg-codepenioelectric-lime hover:bg-codepenioelectric-lime/90 rounded-[10px] relative overflow-hidden">
        <div className="absolute w-14 h-[127px] top-1.5 left-[-54px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
        <span className="relative font-['Archivo',Helvetica] font-semibold text-[#030e14] text-base">
          Explore All NFTs
        </span>
      </Button>
    </section>
  );
};
