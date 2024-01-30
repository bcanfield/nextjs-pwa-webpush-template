"use client";
import {
  PWAInstallAttributes,
  PWAInstallElement,
} from "@khmyznikov/pwa-install";
import { useEffect, useRef } from "react";
import { InstructionsIcon } from "../_icons/other-icons";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "pwa-install": React.DetailedHTMLProps<
        React.HTMLAttributes<PWAInstallElement>,
        PWAInstallElement
      >;
    }
  }
}

const InstallationPrompt = (props: PWAInstallAttributes) => {
  const pwaInstallRef = useRef<PWAInstallElement>(null);

  useEffect(() => {
    import("@khmyznikov/pwa-install");
  });

  return (
    <>
      <pwa-install ref={pwaInstallRef} {...props}></pwa-install>
      <button
        className={`text-xs items-center bg-[#f79e5d] text-zinc-800 font-semibold rounded flex gap-1 px-2 py-1.5 `}
        onClick={() => pwaInstallRef.current?.showDialog(true)}
      >
        <InstructionsIcon />
        Instructions
      </button>
    </>
  );
};

export default InstallationPrompt;
