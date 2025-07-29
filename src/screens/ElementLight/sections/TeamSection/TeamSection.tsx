import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      name: "SENSEIMINT",
      role: "Founder & Strategist",
      image: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/team-image.png",
    },
    {
      name: "WHISPERMANCER",
      role: "llustrator & Trait Designer",
      image: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/team-image-1.png",
    },
    {
      name: "KODEKAGE",
      role: "Lead Blockchain Developer",
      image: "https://c.animaapp.com/mdlsrg94AVLDXQ/img/team-image-2.png",
    },
  ];

  // Title letters for "MEET THE TEAM"
  const meetLetters = ["M", "E", "E", "T"];
  const theLetters = ["T", "H", "E"];
  const teamLetters = ["T", "E", "A", "M"];

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 w-full">
      <div className="flex flex-col max-w-[1200px] items-center justify-center gap-20 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* TEAM Label */}
          <div className="font-codepen-io-archivo-semibold-upper text-codepenioelectric-lime tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)]">
            TEAM
          </div>

          {/* MEET THE TEAM Title */}
          <div className="h-[67.19px] relative w-full flex justify-center">
            <div className="flex">
              {meetLetters.map((letter, index) => (
                <div
                  key={`meet-${index}`}
                  className="inline-flex items-start justify-center mx-[7px]"
                >
                  <span className="text-center font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)]">
                    {letter}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex ml-8">
              {theLetters.map((letter, index) => (
                <div
                  key={`the-${index}`}
                  className="inline-flex items-start justify-center mx-[7px]"
                >
                  <span className="text-center font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)]">
                    {letter}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex ml-8">
              {teamLetters.map((letter, index) => (
                <div
                  key={`team-${index}`}
                  className="inline-flex items-start justify-center mx-[7px]"
                >
                  <span className="text-center font-codepen-io-semantic-heading-2-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)]">
                    {letter}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center max-w-[520px] opacity-60 mt-4">
            <p className="font-codepen-io-archivo-regular text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)]">
              A stealth-crafted ecosystem built for sustainability, utility, and
              long-term holder value.
            </p>
          </div>
        </div>

        {/* Team Members Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={`member-${index}`}
              className="flex flex-col items-start gap-4 overflow-hidden"
            >
              <Card className="bg-[#030e14] rounded-3xl overflow-hidden border-0">
                <CardContent className="p-4">
                  <div className="w-[348px] rounded-3xl">
                    <div className="flex flex-col items-start rounded-3xl">
                      <div
                        className="w-full h-[409px] rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-[7px] w-full">
                <div className="font-codepen-io-semantic-heading-6-upper text-codepeniowhite text-[length:var(--codepen-io-semantic-heading-6-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-6-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-6-upper-line-height)]">
                  {member.name}
                </div>
                <div className="opacity-60">
                  <div className="font-codepen-io-archivo-regular text-codepeniowhite text-[length:var(--codepen-io-archivo-regular-font-size)] tracking-[var(--codepen-io-archivo-regular-letter-spacing)] leading-[var(--codepen-io-archivo-regular-line-height)]">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
