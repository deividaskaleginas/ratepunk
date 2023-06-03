"use client";

import { Header } from "@/components/header/Header";
import { FeaturesSection } from "@/components/sections/featuresSection/FeaturesSection";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { HowItWorksSection } from "@/components/sections/howItWorksSection/HowItWorksSection";
import { MediaSection } from "@/components/sections/mediaSection/MediaSection";
import { ProvidersSection } from "@/components/sections/providersSection/ProviderSection";
import { useState } from "react";

export default function Home() {
  const [browser, setBrowser] = useState(String);
  return (
    <>
      <Header browser={browser} setBrowser={setBrowser} />
      <main>
        <HeroSection browser={browser} />
        <MediaSection />
        <FeaturesSection browser={browser} />
        <ProvidersSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
