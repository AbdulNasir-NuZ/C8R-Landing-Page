import { CopyIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const InputSection = (): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const ninjaLink =
    "3d7f2a9c0e1b5f8a4c6d3e0b9a7f1c2e8d5b3a0f4e7c6b2a1d9f0c8e3b6a5d7f1";

  const handleCopy = () => {
    navigator.clipboard.writeText(ninjaLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full max-w-[1077px] items-center justify-center gap-8">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-center w-full pb-[0.59px]">
          <h2 className="font-codepen-io-archivo-semibold text-codepeniowhite text-center tracking-[var(--codepen-io-archivo-semibold-letter-spacing)] leading-[var(--codepen-io-archivo-semibold-line-height)]">
            Grab Your Personal Ninja Link And Start Your Adventure In The
            Shadows!
          </h2>
        </div>
      </div>

      <Card className="w-full bg-[#030e14] rounded-3xl border-none overflow-hidden">
        <CardContent className="flex items-center justify-between p-0">
          <div className="flex items-center justify-between w-full pl-10 pr-[13px] py-[17px]">
            <div className="inline-flex flex-col items-start blur-[1.75px]">
              <div className="flex flex-col items-start w-full">
                <p className="[font-family:'Archivo',Helvetica] font-medium text-codepeniowhite text-xl tracking-[0] leading-[34px] whitespace-nowrap">
                  {ninjaLink}
                </p>
              </div>
            </div>

            <Button
              onClick={handleCopy}
              className="relative bg-codepenioelectric-lime text-[#030e14] rounded-[10px] overflow-hidden hover:bg-codepenioelectric-lime/90"
            >
              <div className="w-14 h-[127px] absolute top-[9px] left-[-54px] rotate-[-42deg] blur-[1.5px] bg-[linear-gradient(90deg,rgba(211,237,5,1)_0%,rgba(255,255,255,1)_49%,rgba(211,237,5,1)_100%)]" />

              <div className="flex items-center gap-2 pl-[75px] pr-12 py-3 relative">
                <CopyIcon className="w-5 h-5 absolute top-[18px] left-12" />
                <span className="font-codepen-io-semantic-button text-[#030e14] tracking-[var(--codepen-io-semantic-button-letter-spacing)] leading-[var(--codepen-io-semantic-button-line-height)] whitespace-nowrap">
                  Copy Link
                </span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
