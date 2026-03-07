"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface NodoLogoProps {
  size?: number;
  className?: string;
}

export default function NodoLogo({ size = 32, className = "" }: NodoLogoProps) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.classList.contains("light"));
    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isLight ? "/icon-light.svg" : "/icon-dark.svg"}
      alt="Nodo"
      width={size}
      height={size}
      className={`transition-opacity duration-300 ${className}`}
      priority
    />
  );
}
