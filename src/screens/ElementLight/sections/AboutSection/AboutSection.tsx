import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Define card data for mapping
const cardData = [
  {
    imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-6.svg",
    rarityScore: "8.7/10",
    iconSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-7.svg",
  },
  {
    imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-17.svg",
    rarityScore: "8.7/10",
    iconSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-7.svg",
  },
  {
    imageSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-16.svg",
    rarityScore: "8.7/10",
    iconSrc: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-7.svg",
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex items-start justify-center gap-3.5 relative">
      {cardData.map((card, index) => (
        <div key={`card-${index}`} className="relative">
          <Card className="flex flex-col items-center justify-center pt-[11.38px] pb-[11.36px] px-3 rounded-[48px] border border-solid border-[#ffffff33]">
            <CardContent className="p-0 relative w-[367px] h-[430.42px] rounded-[40px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt={`NFT Artwork ${index + 1}`}
                src={card.imageSrc}
              />

              <div className="flex items-center justify-between px-4 py-3 absolute bottom-[11.36px] left-6 w-[343px] bg-codepenioblack-pearl-60 rounded-3xl backdrop-blur-[5px] backdrop-brightness-[100%] border border-solid border-[#c9ec0680]">
                <div className="flex flex-col items-start gap-1">
                  <div className="font-['Archivo',Helvetica] font-normal text-codepeniowhite text-base leading-[27.2px]">
                    Rarity Score:
                  </div>
                  <div className="font-['Archivo',Helvetica] font-normal text-codepeniowhite text-xl leading-[34px]">
                    {card.rarityScore}
                  </div>
                </div>

                <div className="relative">
                  <Badge className="flex items-center justify-center p-4 bg-codepenioelectric-lime rounded-[32px] overflow-hidden">
                    <div className="w-11 top-1.5 -left-11 absolute h-[127px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />
                    <div className="relative w-6 h-6">
                      <img
                        className="w-full h-full"
                        alt="Action icon"
                        src={card.iconSrc}
                      />
                    </div>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}

      <img
        className="absolute w-[184px] h-[90px] top-[-59px] left-[51px]"
        alt="Tag mask group"
        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/tag-01-mask-group.svg"
      />

      <img
        className="absolute w-[187px] h-[76px] top-[-85px] left-[922px]"
        alt="Tag mask group"
        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/tag-02-mask-group.svg"
      />
    </section>
  );
};
