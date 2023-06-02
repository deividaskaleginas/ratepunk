"use client";

import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { MediaSection } from "@/components/sections/mediaSection/MediaSection";
import { useState } from "react";

export default function Home() {
  const [browser, setBrowser] = useState(String);
  return (
    <>
      <Header browser={browser} setBrowser={setBrowser} />
      <main>
        <HeroSection browser={browser} />
        <MediaSection />
      </main>
    </>
  );
}
