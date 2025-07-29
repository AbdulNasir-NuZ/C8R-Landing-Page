import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { CardContentSection } from "./sections/CardContentSection";
import { CardListSection } from "./sections/CardListSection";
import { InputSection } from "./sections/InputSection";
import { DesktopViewSection } from "./sections/DesktopViewSection";
import { FAQSection } from "./sections/FAQSection";
import { MainWrapperSection } from "./sections/MainWrapperSection/MainWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainHeadingSection } from "./sections/MainHeadingSection/MainHeadingSection";
import { HeadingWrapperSection } from "./sections/HeadingWrapperSection";
import { HeroBottomSection } from "./sections/HeroBottomSection";
import { MeetTheTeamSection } from "./sections/MeetTheTeamSection";
import { EconomySection } from "./sections/EconomySection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TitleSection } from "./sections/TitleSection";
import { TitleWrapperSection } from "./sections/TitleWrapperSection";
import { TitleAndTaglineSection } from "./sections/TitleAndTaglineSection";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const ElementLight = (): JSX.Element => {
  // Data for the "EACH NINJA IS UNIQUELY CRAFTED WITH RARE TRAITS" section
  const ninjaLetters = [
    { letter: "E", top: "0", left: "61px" },
    { letter: "A", top: "0", left: "108px" },
    { letter: "C", top: "0", left: "159px" },
    { letter: "H", top: "0", left: "210px" },
    { letter: "N", top: "0", left: "270px" },
    { letter: "I", top: "0", left: "320px" },
    { letter: "N", top: "0", left: "355px" },
    { letter: "J", top: "0", left: "405px" },
    { letter: "A", top: "0", left: "453px" },
    { letter: "I", top: "0", left: "514px" },
    { letter: "S", top: "0", left: "550px" },
    { letter: "U", top: "0", left: "610px" },
    { letter: "N", top: "0", left: "660px" },
    { letter: "I", top: "0", left: "710px" },
    { letter: "Q", top: "0", left: "746px" },
    { letter: "U", top: "0", left: "798px" },
    { letter: "E", top: "0", left: "848px" },
    { letter: "L", top: "0", left: "895px" },
    { letter: "Y", top: "0", left: "939px" },
  ];

  const craftedLetters = [
    { letter: "C", top: "67px", left: "0" },
    { letter: "R", top: "67px", left: "51px" },
    { letter: "A", top: "67px", left: "99px" },
    { letter: "F", top: "67px", left: "151px" },
    { letter: "T", top: "67px", left: "197px" },
    { letter: "E", top: "67px", left: "248px" },
    { letter: "D", top: "67px", left: "295px" },
    { letter: "W", top: "67px", left: "354px", isWhite: true },
    { letter: "I", top: "67px", left: "414px", isWhite: true },
    { letter: "T", top: "67px", left: "449px", isWhite: true },
    { letter: "H", top: "67px", left: "500px", isWhite: true },
    { letter: "R", top: "67px", left: "560px", isWhite: true },
    { letter: "A", top: "67px", left: "608px", isWhite: true },
    { letter: "R", top: "67px", left: "659px", isWhite: true },
    { letter: "E", top: "67px", left: "707px", isWhite: true },
    { letter: "T", top: "67px", left: "764px", isWhite: true },
    { letter: "R", top: "67px", left: "815px", isWhite: true },
    { letter: "A", top: "67px", left: "863px", isWhite: true },
    { letter: "I", top: "67px", left: "914px", isWhite: true },
    { letter: "T", top: "67px", left: "950px", isWhite: true },
    { letter: "S", top: "67px", left: "1001px", isWhite: true },
  ];

  const andLetters = [
    { letter: "A", top: "134px", left: "166px", isWhite: true },
    { letter: "N", top: "134px", left: "218px", isWhite: true },
    { letter: "D", top: "134px", left: "268px", isWhite: true },
    { letter: "H", top: "134px", left: "326px", isWhite: true },
    { letter: "I", top: "134px", left: "376px", isWhite: true },
    { letter: "D", top: "134px", left: "411px", isWhite: true },
    { letter: "D", top: "134px", left: "460px", isWhite: true },
    { letter: "E", top: "134px", left: "508px", isWhite: true },
    { letter: "N", top: "134px", left: "555px", isWhite: true },
    { letter: "P", top: "134px", left: "615px", isWhite: true },
    { letter: "O", top: "134px", left: "663px", isWhite: true },
    { letter: "W", top: "134px", left: "716px", isWhite: true },
    { letter: "E", top: "134px", left: "776px", isWhite: true },
    { letter: "R", top: "134px", left: "823px", isWhite: true },
    { letter: ".", top: "134px", left: "871px", isWhite: true },
  ];

  // FAQ section text
  const faqText = [
    { text: "Here", top: "0", left: "7px" },
    { text: "are", top: "0", left: "49px" },
    { text: "some", top: "0", left: "78px" },
    { text: "of", top: "0", left: "127px" },
    { text: "the", top: "0", left: "146px" },
    { text: "most", top: "0", left: "175px" },
    { text: "common", top: "0", left: "219px" },
    { text: "queries", top: "0", left: "294px" },
    { text: "to", top: "31px", left: "90px" },
    { text: "help", top: "31px", left: "109px" },
    { text: "you", top: "31px", left: "147px" },
    { text: "get", top: "31px", left: "180px" },
    { text: "started.", top: "31px", left: "209px" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start justify-center relative bg-codepeniowoodsmoke overflow-x-hidden"
      data-model-id="1:544"
    >
      <div className="flex flex-col w-full items-start relative flex-1 self-stretch">
        <div className="relative w-full flex-1 self-stretch z-[1] overflow-auto">
          <div className="relative w-full bg-codepeniowhite">
            <div className="flex flex-col w-full items-start relative bg-[#030e14] overflow-y-auto">
              <div className="relative w-full bg-[#030e14] overflow-hidden">
                <div className="w-full">
                  <div className="flex flex-col items-center justify-center pt-[146px] pb-[310px] px-[360px] relative overflow-hidden" id="home">
                    <div className="flex flex-col w-full h-[1370px] items-start absolute top-0 left-0">
                      <div className="relative self-stretch w-full h-[1369.67px] bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/linear-color-image.png)] bg-cover bg-[50%_50%]" />
                    </div>
                    <div className="absolute w-full h-[1370px] top-0 left-0 overflow-hidden opacity-15">
                      <div className="relative h-[1380px]">
                        <div className="flex flex-col w-full items-start absolute top-0 left-0">
                          <div className="relative self-stretch w-full h-[1369.67px] bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-image.png)] bg-cover bg-[50%_50%]" />
                        </div>
                        <div className="absolute w-[657px] h-[657px] top-[723px] left-[780px] rounded-[657px] border border-solid border-white" />
                      </div>
                    </div>
                    <div className="absolute w-full h-[1371px] top-0 left-0 blur-[2.5px]" />
                    <img
                      className="absolute w-full h-[1135px] top-0 left-0"
                      alt="Container"
                      src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/container.svg"
                    />
                    <div className="flex w-full items-center justify-center absolute top-[1181px] left-0">
                      <img
                        className="relative flex-1 grow h-[232.97px]"
                        alt="Green shape mask"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/green-shape-mask-group.svg"
                      />
                      <div className="absolute w-full h-[127px] top-[107px] left-0">
                        <div className="flex flex-col w-full items-start relative">
                          <div className="relative self-stretch w-full h-[126.65px] bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/shape-image.png)] bg-cover bg-[50%_50%]" />
                        </div>
                      </div>
                      <img
                        className="absolute w-full h-[73px] top-20 left-0"
                        alt="Blue shape mask"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/blue-shape-mask-group.svg"
                      />
                      <div className="flex flex-col w-full items-start absolute top-[31px] left-0">
                        <div className="flex h-[41px] items-center justify-center relative self-stretch w-full">
                          <div className="flex flex-col items-start relative flex-1 grow">
                            <div className="relative w-full max-h-[41px] h-[41px] overflow-hidden">
                              <div className="flex w-full max-h-[41px] h-[21px] items-center gap-2.5 relative top-2.5">
                                {Array(10).fill(0).map((_, index) => (
                                  <div 
                                    key={`component-${index}`} 
                                    className={`w-[1340px] h-[40.81px] ${index > 0 ? 'mr-[-' + (index * 1350) + '.00px]' : ''} relative mt-[-9.91px] mb-[-9.91px]`}
                                  >
                                    {index === 4 || index === 5 ? (
                                      <div className="flex flex-col w-[1340px] items-start relative">
                                        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                          <div className="flex flex-col w-[1340px] h-[40.81px] items-center justify-center relative overflow-hidden">
                                            <img
                                              className="relative w-[1340px] h-[41.72px] mt-[-0.45px]"
                                              alt="Component"
                                              src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-3.svg"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-[1670px] h-[113px] top-[-31px] left-[165px]">
                        <div className="relative h-[113px]">
                          <img
                            className="absolute w-[50px] h-[38px] top-[42px] left-[1378px]"
                            alt="Shape mask group"
                            src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/shape--mask-group.svg"
                          />
                          <div className="flex flex-col w-[1670px] items-start absolute top-0 left-0">
                            <div className="relative self-stretch w-full h-[113.49px] bg-[url(https://c.animaapp.com/mdlsrg94AVLDXQ/img/block-image.png)] bg-cover bg-[50%_50%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-[1200px] items-center justify-center gap-[100px] relative w-full flex-[0_0_auto]">
                      <TitleSection />
                      <HeroBottomSection />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[146px] pb-20 px-[360px] relative" id="about">
                    <div className="flex flex-col max-w-[1200px] items-center justify-center gap-[100px] relative w-full flex-[0_0_auto]">
                      <div className="gap-4 relative flex-[0_0_auto] flex flex-col items-center">
                        <div className="flex flex-col items-center justify-center relative flex-[0_0_auto]">
                          <div className="flex flex-col items-start relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-fit mt-[-1.00px] font-codepen-io-archivo-semibold-upper font-[number:var(--codepen-io-archivo-semibold-upper-font-weight)] text-codepenioelectric-lime text-[length:var(--codepen-io-archivo-semibold-upper-font-size)] tracking-[var(--codepen-io-archivo-semibold-upper-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-upper-line-height)] whitespace-nowrap [font-style:var(--codepen-io-archivo-semibold-upper-font-style)]">
                                ABOUT NFTNINJA
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="min-w-[1200px] flex flex-col items-start relative flex-[0_0_auto]">
                          <MainHeadingSection />
                          <HeadingWrapperSection />
                        </div>
                      </div>
                      <AboutSection />
                      <div className="flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="h-[201.56px] relative self-stretch w-full">
                          <div className="relative w-[1053px] h-[202px] left-[74px]">
                            {ninjaLetters.map((item, index) => (
                              <div 
                                key={`ninja-${index}`} 
                                className="inline-flex items-start justify-center absolute" 
                                style={{ top: item.top, left: item.left }}
                              >
                                <div className="relative w-fit mt-[-1.00px] text-codepeniowhite-50 text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] text-center whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]">
                                  {item.letter}
                                </div>
                              </div>
                            ))}

                            {craftedLetters.map((item, index) => (
                              <div 
                                key={`crafted-${index}`} 
                                className="inline-flex items-start justify-center absolute" 
                                style={{ top: item.top, left: item.left }}
                              >
                                <div className={`relative w-fit mt-[-1.00px] ${item.isWhite ? 'text-codepeniowhite' : 'text-codepeniowhite-50'} text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]`}>
                                  {item.letter}
                                </div>
                              </div>
                            ))}

                            {andLetters.map((item, index) => (
                              <div 
                                key={`and-${index}`} 
                                className="inline-flex items-start justify-center absolute" 
                                style={{ top: item.top, left: item.left }}
                              >
                                <div className={`relative w-fit mt-[-1.00px] ${item.isWhite ? 'text-codepeniowhite' : 'text-codepeniowhite-50'} text-[length:var(--codepen-io-semantic-heading-2-upper-font-size)] text-center tracking-[var(--codepen-io-semantic-heading-2-upper-letter-spacing)] leading-[var(--codepen-io-semantic-heading-2-upper-line-height)] font-codepen-io-semantic-heading-2-upper font-[number:var(--codepen-io-semantic-heading-2-upper-font-weight)] whitespace-nowrap [font-style:var(--codepen-io-semantic-heading-2-upper-font-style)]`}>
                                  {item.letter}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="collection">
                    <FeaturesSection />
                  </div>
                  <div id="team">
                    <EconomySection />
                  </div>
                  <div className="flex flex-col items-center justify-center px-[360px] py-20 relative" id="faq">
                    <div className="relative max-w-[1200px] w-full">
                      <TitleWrapperSection />
                      <CardListSection />
                      <InputSection />
                    </div>
                  </div>
                  <HeaderSection />
                </div>
                <div className="w-full">
                  <div className="flex flex-col min-w-full items-center justify-center gap-5 px-0 py-20 relative" id="roadmap">
                    <div className="flex flex-col max-w-[1200px] w-[1200px] items-center justify-center gap-[48.01px] px-[30px] py-0 relative flex-[0_0_auto]">
                      <MainWrapperSection />
                      <CardContentSection />
                      <FAQSection />
                      <img
                        className="absolute w-[1056px] h-[135px] top-[515px] left-[-807px]"
                        alt="Background shape"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-shape-mask-group-1.svg"
                      />
                      <img
                        className="absolute w-[1056px] h-[135px] top-[798px] left-[846px]"
                        alt="Background shape"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-shape-mask-group-3.svg"
                      />
                      <img
                        className="absolute w-[600px] h-[180px] top-[930px] left-[-387px]"
                        alt="Background shape"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-shape-mask-group-2.svg"
                      />
                      <img
                        className="absolute w-[672px] h-[71px] top-[1376px] left-[786px]"
                        alt="Background shape"
                        src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/background-shape-mask-group.svg"
                      />
                    </div>
                    <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#030e14]">
                      <div className="flex-1 grow relative self-stretch">
                        <div className="relative w-full h-[839px]">
                          <div className="flex flex-col w-full items-start absolute top-0 left-0">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col w-full h-[838.66px] items-center justify-center relative overflow-hidden">
                                {/* Removed the image */}
                              </div>
                            </div>
                          </div>
                          <div className="flex w-[326px] items-center justify-center absolute top-[74px] left-[797px]">
                            <div className="relative flex-1 grow h-[326.4px] rounded-[326.39px] bg-[linear-gradient(180deg,rgba(211,237,5,1)_0%,rgba(26,91,67,1)_100%)]" />
                            <div className="flex flex-col w-[322px] items-start absolute top-[174px] left-[34px]">
                              <div className="relative w-[322px] h-[86px]">
                                {/* Ninja logo components */}
                                <div className="absolute w-[186px] h-[87px] -top-0.5 -left-px">
                                  <div className="absolute w-[167px] h-[85px] top-0 left-0">
                                    {/* Logo details preserved */}
                                    <div className="absolute w-[67px] h-6 top-[61px] left-14">
                                      <div className="relative h-[26px] -top-px">
                                        <div className="absolute w-[33px] h-[15px] top-2.5 left-[34px] rotate-[2.77deg]">
                                          <div className="flex flex-col w-[33px] items-start relative">
                                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                              <div className="flex flex-col w-[32.99px] h-[15.01px] items-center justify-center pt-0 pb-[0.01px] px-0 relative overflow-hidden">
                                                <img
                                                  className="relative w-[35.18px] h-[16.65px] mt-[-0.82px] mb-[-0.01px] ml-[-1.10px] mr-[-1.10px] rotate-[-2.77deg]"
                                                  alt="Component"
                                                  src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-26.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute w-[34px] h-[18px] top-px left-0 rotate-[-2.78deg]">
                                          <div className="flex flex-col w-[34px] items-start relative">
                                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                              <div className="flex flex-col w-[34px] h-[17.99px] items-center justify-center pl-[0.01px] pr-0 py-0 relative overflow-hidden">
                                                <img
                                                  className="relative w-[34.87px] h-[20.09px] mt-[-1.05px] ml-[-0.44px] mr-[-0.44px] rotate-[2.78deg]"
                                                  alt="Component"
                                                  src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-39.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute w-[21px] h-[9px] top-[15px] left-[23px]">
                                          <div className="flex flex-col w-[21px] items-start relative">
                                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                              <div className="flex flex-col w-[21px] h-[9px] items-center justify-center pr-[2.23e-08px] pl-0 py-0 relative overflow-hidden">
                                                <img
                                                  className="relative w-[21px] h-[9.13px] mt-[-0.07px]"
                                                  alt="Component"
                                                  src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-42.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute w-[167px] h-[67px] top-0 left-0">
                                      <div className="absolute w-[70px] h-5 top-10 left-px rotate-[-11deg]">
                                        <div className="relative w-[69px] h-6 top-px">
                                          <div className="absolute w-[35px] h-[15px] top-px left-[34px] rotate-[2.47deg]">
                                            <div className="flex flex-col w-[35px] items-start relative">
                                              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                                <div className="flex flex-col w-[35.02px] h-[15px] items-center justify-center pl-0 pr-[0.01px] py-0 relative overflow-hidden">
                                                  <img
                                                    className="relative w-[36.93px] h-[20.58px] mt-[-2.79px] ml-[-0.96px] mr-[-0.96px] rotate-[8.53deg]"
                                                    alt="Component"
                                                    src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-44.svg"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute w-[35px] h-3 top-0.5 left-0 rotate-[-2.37deg]">
                                            <div className="flex flex-col w-[35px] items-start relative">
                                              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                                <div className="flex flex-col w-[34.99px] h-3 items-center justify-center pl-[0.01px] pr-0 py-0 relative overflow-hidden">
                                                  <img
                                                    className="relative w-[36.89px] h-[20.06px] mt-[-4.03px] ml-[-0.96px] mr-[-0.96px] rotate-[13.37deg]"
                                                    alt="Component"
                                                    src="https://c.animaapp.com/mdlsrg94AVLDXQ/img/component-1-30.svg"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FooterSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
