import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CardContentSection = (): JSX.Element => {
  // Data for roadmap phases
  const phases = [
    {
      number: 1,
      phase: "Phase 1",
      title: "LAUNCH & MINT",
      items: [
        "Release of 5,000 unique nftninja collectibles",
        "Website, smart contracts, and minting live",
        "Community channels activated",
      ],
      position: "left",
    },
    {
      number: 2,
      phase: "Phase 2",
      title: "SHADOW TOKEN",
      items: [
        "Staking system goes live for ninja holders",
        "Launch of $shadow utility token",
        "Begin reward distributions and utility integration",
      ],
      position: "right",
    },
    {
      number: 3,
      phase: "Phase 3",
      title: "GAME MECHANICS",
      items: [
        "Alpha release of the ninja battle arena",
        "Skill upgrades and rarity-based abilities",
        "Leaderboards, loot, and seasonal events",
      ],
      position: "left",
    },
    {
      number: 4,
      phase: "Phase 4",
      title: "METAVERSE ENTRY",
      items: [
        "Community voting on future developments",
        "Release of lore chapters and ninja clan history",
        "3D avatar upgrade + metaverse integration",
      ],
      position: "right",
    },
    {
      number: 5,
      phase: "Phase 5",
      title: "LORE EXPANSION",
      items: [
        "Staking system goes live for ninja holders",
        "Launch of $shadow utility token",
        "Begin reward distributions and utility integration",
      ],
      position: "left",
    },
  ];

  return (
    <section className="flex justify-center relative w-full">
      <div className="relative max-w-[1098px] w-full">
        {/* Center line */}
        <div className="absolute w-5 h-full top-0 left-1/2 -translate-x-1/2 bg-codepeniotiber rounded-[36px]" />

        {/* Phases container */}
        <div className="flex flex-col gap-12 w-full">
          {phases.map((phase, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardContent
                className={`flex items-center ${phase.position === "right" ? "justify-end" : ""} p-0 w-full`}
              >
                <div className="flex flex-col w-[590px]">
                  <div className="flex items-center justify-between w-full">
                    {phase.position === "right" && (
                      <div className="relative w-20 h-20 z-[1]">
                        <div className="w-20 h-20 flex items-center justify-center">
                          <img
                            className="w-[81px] h-20"
                            alt="Phase number background"
                            src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-10.svg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-codepen-io-semantic-heading-6-upper text-codepeniowhite text-center">
                              {phase.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex-1 h-[195.77px]">
                      <div className="flex flex-col gap-4">
                        <span className="[font-family:'Archivo',Helvetica] font-semibold text-codepenioelectric-lime text-base leading-[27.2px]">
                          {phase.phase}
                        </span>

                        <h3 className="font-codepen-io-semantic-heading-5-upper text-codepeniowhite">
                          {phase.title}
                        </h3>

                        <ul className="flex flex-col gap-0 mt-4">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-center gap-2.5 opacity-60"
                            >
                              <div className="w-1.5 h-1.5 bg-codepeniowhite rounded-md" />
                              <p className="font-codepen-io-archivo-regular text-codepeniowhite">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {phase.position === "left" && (
                      <div className="relative w-20 h-20">
                        <div className="w-20 h-20 flex items-center justify-center">
                          <img
                            className="w-[81px] h-20"
                            alt="Phase number background"
                            src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-10.svg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-codepen-io-semantic-heading-6-upper text-codepeniowhite text-center">
                              {phase.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
